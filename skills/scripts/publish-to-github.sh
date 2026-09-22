#!/usr/bin/env bash
# Publish qieman-skills to https://github.com/yanzichloe/skills (no clone)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PY="$ROOT/scripts/publish-to-github.py"

if [[ ! -f "$PY" ]]; then
  echo "错误: 找不到 $PY" >&2
  exit 1
fi

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "错误: 请先设置 GITHUB_TOKEN（需 repo 权限）" >&2
  echo "示例: export GITHUB_TOKEN=ghp_xxx" >&2
  exit 1
fi

python3 "$PY"
