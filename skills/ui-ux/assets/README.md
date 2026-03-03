# UI/UX Assets

This folder stores **UI/UX-only** assets used for prototypes, documentation, and handoff examples.

## What goes here
- Small UI icons (SVG/PNG)
- Sample UI images (small screenshots, placeholders)
- UI templates/snippets (JSON/SVG, lightweight)
- Any asset that is **specific to UI/UX** (not shared across skills)

## Logos
UI/UX logos are organized here:

- `assets/logos/qieman/` — Qieman brand logos
- `assets/logos/yingmi/` — Yingmi brand logos
- `assets/logos/lockups/` — Lockups (slogan / co-brand)

### Naming convention
`<brand>-logo-<variant>.<ext>`

- brand: `qieman` / `yingmi` / `yingmi-qieman`
- variant: `regular` / `white` / `graphic` / `slogan`
- ext: `png` / `svg`

Examples:
- `qieman-logo-regular.svg`
- `qieman-logo-white.png`
- `qieman-logo-graphic.svg`
- `yingmi-logo-regular.svg`
- `yingmi-qieman-logo-regular.png`
- `qieman-logo-slogan.svg`

## Avoid (keep the repo light)
- Fonts (`.ttf`, `.otf`, `.ttc`) — store externally and link from references
- Large binaries (big PNGs, ZIP archives)
- Duplicating assets that should be shared across multiple skills

## Notes
- Prefer **SVG** as the source-of-truth when available; PNG is for quick placement.
- Keep this folder lightweight to prevent upload/push issues.
