# Marketing Fonts

This folder contains font files used in **Qieman marketing design** (KV / H5 / posters / reports).

> ⚠️ Note: Only store fonts here if licensing allows internal distribution.
> If not, store a download link in `skills/marketing-design/references/` instead.

---

## Font roles (standard)

- **Alibaba PuHuiTi** — Primary Chinese text font (headings/body)
- **MiSans** — Digits-only font (KPIs, amounts, returns, chart numbers)

---

## Files

### Alibaba PuHuiTi (Chinese text)
- `font-alibaba-puhuiti-regular-v02.ttf`
- `font-alibaba-puhuiti-medium.ttf`
- `font-alibaba-puhuiti-bold-v03.ttf`

### MiSans (digits only)
- `font-mi-sans-regular.ttf`
- `font-mi-sans-medium.ttf`
- `font-mi-sans-demibold.ttf`

---

## Usage rules (quick)

- **Chinese copy**: use **Alibaba PuHuiTi**
- **Digits only**: use **MiSans**
  - numbers, currency, %, chart axis labels, KPI cards
- Avoid mixing different font families within the same number block.

---

## Naming convention

Use kebab-case, no spaces, no Chinese characters:

- `font-<family>-<weight>[-vNN].ttf`

Examples:
- `font-alibaba-puhuiti-regular-v02.ttf`
- `font-mi-sans-demibold.ttf`

---

## Maintenance

- Keep the set minimal (only required weights).
- Prefer `.ttf` (or `.otf`). Remove duplicates if both exist.
- If you add typography rules, put them in:
  - `skills/marketing-design/references/typography_zh.md`
