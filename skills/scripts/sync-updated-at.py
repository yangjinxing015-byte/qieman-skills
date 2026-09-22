#!/usr/bin/env python3
"""Sync | **更新日期** | in qieman-skills header tables from file mtime."""

from __future__ import annotations

import re
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATE_ROW = "| **更新日期** | {date} |"
DATE_RE = re.compile(r"^\| \*\*更新日期\*\* \| .+ \|$", re.M)

SKILLS = [
    ("app-design/qieman-ui-design/SKILL.md", "app-design", "qieman-ui-design", "L0", "SKILL.md"),
    ("app-design/qieman-sell-popup-design/SKILL.md", "app-design", "qieman-sell-popup-design", "L1", "SKILL.md"),
    ("app-design/qieman-chart-design/SKILL.md", "app-design", "qieman-chart-design", "L2", "SKILL.md"),
    ("marketing-design/qieman-h5-design/SKILL.md", "marketing-design", "qieman-h5-design", "L2", "SKILL.md"),
    ("marketing-design/qieman-vip-design/SKILL.md", "marketing-design", "qieman-vip-design", "L2", "SKILL.md"),
    ("report-design/qieman-ppt-design/SKILL.md", "report-design", "qieman-ppt-design", "L2", "SKILL.md"),
    ("report-design/qieman-report-swipe-design/SKILL.md", "report-design", "qieman-report-swipe-design", "L1", "SKILL.md"),
]


def mtime_date(path: Path) -> str:
    return datetime.fromtimestamp(path.stat().st_mtime).strftime("%Y-%m-%d")


def sync_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    date = mtime_date(path)
    row = DATE_ROW.format(date=date)

    text = DATE_RE.sub("", text)
    text = re.sub(r"\n{3,}", "\n\n", text)

    marker = "\n## 调用"
    if marker not in text:
        return False

    before, after = text.split(marker, 1)
    before = before.rstrip("\n")
    if before.endswith("|"):
        new_text = before + "\n" + row + "\n" + marker + after
    else:
        new_text = before + "\n\n" + row + "\n" + marker + after

    if new_text == text:
        return False
    path.write_text(new_text, encoding="utf-8")
    return True


def collect_md_files() -> list[Path]:
    files: list[Path] = []
    for pattern in ("**/SKILL.md",):
        files.extend(ROOT.glob(pattern))
    return sorted(set(f for f in files if "_legacy" not in f.parts))


def sync_readme() -> None:
    readme = ROOT / "README.md"
    files = [f for f in collect_md_files() if f != readme]
    latest = max(mtime_date(f) for f in files) if files else mtime_date(readme)

    text = readme.read_text(encoding="utf-8")
    line = f"> **包更新日期**：{latest}（各文件以头部信息栏「更新日期」为准，由 `scripts/sync-updated-at.py` 同步）\n\n"

    if text.startswith("> **包更新日期**"):
        text = re.sub(r"(?:^> \*\*包更新日期\*\*：.+?\n\n)+", line, text, count=1)
    else:
        text = text.replace("# qieman skills\n\n", f"# qieman skills\n\n{line}", 1)

    table_start = "| 分类 | 文件夹 | `name` | 层级 | 完整规范 | 更新日期 |"
    table_sep = "|------|--------|--------|------|----------|----------|"
    rows = [table_start, table_sep]
    for rel, category, name, layer, spec in SKILLS:
        p = ROOT / rel
        d = mtime_date(p) if p.exists() else "—"
        rows.append(f"| `{category}` | `{name}` | `{name}` | {layer} | `{spec}` | {d} |")

    new_table = "\n".join(rows)
    text = re.sub(
        r"\| 分类 \| 文件夹 \| `name` \| 层级 \| 完整规范 \| 更新日期 \|\n\|[-| ]+\|\n(?:\| `.+` \| `.+` \| `.+` \| .+ \| `.+` \| .+ \|\n)+",
        new_table + "\n",
        text,
        count=1,
    )

    readme.write_text(text, encoding="utf-8")


def main() -> None:
    changed = []
    for path in collect_md_files():
        if path.name == "README.md" and path.parent == ROOT:
            continue
        if sync_file(path):
            changed.append(path.relative_to(ROOT))

    sync_readme()

    print(f"Synced update dates for {len(changed)} file(s):")
    for p in changed:
        print(f"  {p}")


if __name__ == "__main__":
    main()
