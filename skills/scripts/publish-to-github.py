#!/usr/bin/env python3
"""Upload local qieman-skills/ to GitHub via REST API (no git clone)."""

import base64
import json
import os
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Dict, List, Optional, Tuple

OWNER = "yanzichloe"
REPO = "skills"
BRANCH = "main"
PREFIX = "qieman-skills"
BINARY_SUFFIXES = {".png", ".jpg", ".jpeg", ".gif", ".pdf", ".ico", ".webp", ".zip"}
CACHE_FILE = ".publish-blob-cache.json"
BLOB_DELAY_SEC = 0.35
MAX_RETRIES = 5


def api(
    method: str,
    path: str,
    token: str,
    data: Optional[Dict] = None,
    retries: int = MAX_RETRIES,
) -> Dict:
    url = f"https://api.github.com{path}"
    headers = {
        "Authorization": f"Bearer {token}",
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "qieman-skills-publish",
    }
    body = None
    if data is not None:
        headers["Content-Type"] = "application/json"
        body = json.dumps(data).encode("utf-8")

    last_error = ""
    for attempt in range(1, retries + 1):
        req = urllib.request.Request(url, data=body, headers=headers, method=method)
        try:
            with urllib.request.urlopen(req, timeout=180) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as exc:
            detail = exc.read().decode("utf-8", errors="replace")
            last_error = f"GitHub API {method} {path} failed ({exc.code}): {detail[:500]}"
            retryable = exc.code in (403, 408, 409, 429, 500, 502, 503) or (
                exc.code == 400 and detail.lstrip().startswith("<")
            )
            if retryable and attempt < retries:
                wait = min(2 ** attempt, 30)
                print(f"  重试 {attempt}/{retries - 1}，等待 {wait}s ...")
                time.sleep(wait)
                continue
            raise SystemExit(last_error) from exc
        except urllib.error.URLError as exc:
            last_error = str(exc)
            if attempt < retries:
                wait = min(2 ** attempt, 30)
                print(f"  网络错误，重试 {attempt}/{retries - 1}，等待 {wait}s ...")
                time.sleep(wait)
                continue
            raise SystemExit(last_error) from exc

    raise SystemExit(last_error)


def blob_payload(path: Path) -> Dict:
    data = path.read_bytes()
    if path.suffix.lower() in BINARY_SUFFIXES:
        return {
            "content": base64.b64encode(data).decode("ascii"),
            "encoding": "base64",
        }
    try:
        return {"content": data.decode("utf-8"), "encoding": "utf-8"}
    except UnicodeDecodeError:
        return {
            "content": base64.b64encode(data).decode("ascii"),
            "encoding": "base64",
        }


def collect_local_files(src: Path) -> List[Path]:
    return sorted(
        p
        for p in src.rglob("*")
        if p.is_file() and p.name != ".DS_Store"
    )


def load_cache(cache_path: Path) -> Dict[str, str]:
    if not cache_path.exists():
        return {}
    try:
        return json.loads(cache_path.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        return {}


def save_cache(cache_path: Path, cache: Dict[str, str]) -> None:
    cache_path.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")


def upload_blob(file_path: Path, token: str) -> str:
    blob = api(
        "POST",
        f"/repos/{OWNER}/{REPO}/git/blobs",
        token,
        blob_payload(file_path),
    )
    return blob["sha"]


def main() -> None:
    token = os.environ.get("GITHUB_TOKEN", "").strip()
    if not token:
        sys.exit("错误: 请设置 GITHUB_TOKEN 环境变量（需 repo 权限）")

    src = Path(__file__).resolve().parent.parent
    scripts_dir = Path(__file__).resolve().parent
    cache_path = scripts_dir / CACHE_FILE
    cache = load_cache(cache_path)

    local_files = collect_local_files(src)
    if not local_files:
        sys.exit(f"错误: {src} 下没有可上传文件")

    ref = api("GET", f"/repos/{OWNER}/{REPO}/git/ref/heads/{BRANCH}", token)
    base_sha = ref["object"]["sha"]
    base_commit = api("GET", f"/repos/{OWNER}/{REPO}/git/commits/{base_sha}", token)
    base_tree_sha = base_commit["tree"]["sha"]
    remote_tree = api(
        "GET",
        f"/repos/{OWNER}/{REPO}/git/trees/{base_tree_sha}?recursive=1",
        token,
    )

    tree_entries = []  # type: List[Dict]
    for item in remote_tree.get("tree", []):
        if item.get("type") != "blob":
            continue
        path = item["path"]
        if path == PREFIX or path.startswith(f"{PREFIX}/"):
            continue
        tree_entries.append(
            {
                "path": path,
                "mode": item["mode"],
                "type": "blob",
                "sha": item["sha"],
            }
        )

    print(f"上传 {len(local_files)} 个文件到 {OWNER}/{REPO}/{PREFIX} ...")
    uploaded = 0
    for index, file_path in enumerate(local_files, start=1):
        rel_path = file_path.relative_to(src).as_posix()
        github_path = f"{PREFIX}/{rel_path}"
        size_kb = file_path.stat().st_size // 1024

        if rel_path in cache:
            blob_sha = cache[rel_path]
            print(f"  {index}/{len(local_files)} 缓存 {rel_path} ({size_kb} KB)")
        else:
            print(f"  {index}/{len(local_files)} 上传 {rel_path} ({size_kb} KB)")
            try:
                blob_sha = upload_blob(file_path, token)
            except SystemExit as exc:
                raise SystemExit(f"文件失败: {rel_path}\n{exc}") from exc
            cache[rel_path] = blob_sha
            save_cache(cache_path, cache)
            uploaded += 1
            time.sleep(BLOB_DELAY_SEC)

        mode = "100755" if os.access(file_path, os.X_OK) else "100644"
        tree_entries.append(
            {
                "path": github_path,
                "mode": mode,
                "type": "blob",
                "sha": blob_sha,
            }
        )

    print("创建 tree / commit ...")
    new_tree = api(
        "POST",
        f"/repos/{OWNER}/{REPO}/git/trees",
        token,
        {"tree": tree_entries},
    )
    new_commit = api(
        "POST",
        f"/repos/{OWNER}/{REPO}/git/commits",
        token,
        {
            "message": "Sync qieman-skills from local canonical tree.",
            "tree": new_tree["sha"],
            "parents": [base_sha],
        },
    )
    api(
        "PATCH",
        f"/repos/{OWNER}/{REPO}/git/refs/heads/{BRANCH}",
        token,
        {"sha": new_commit["sha"]},
    )

    if cache_path.exists():
        cache_path.unlink()

    print(f"已发布: https://github.com/{OWNER}/{REPO}/tree/{BRANCH}/{PREFIX}")
    print(f"commit: {new_commit['sha'][:7]}")
    if uploaded:
        print(f"本次新上传 blob: {uploaded}")


if __name__ == "__main__":
    main()
