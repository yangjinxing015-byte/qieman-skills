| name | description |
| --- | --- |
| ui-ux | Qieman app UI/UX: flows, interaction patterns, components, layout/typography, accessibility, and handoff specs. |

# UI/UX

This skill defines how to produce Qieman app UI/UX design outputs that are consistent, implementation-ready, and easy to hand off.

## Output

This skill produces a **UI/UX design spec** containing:
- intent & scope  
- layout & information hierarchy  
- components (variants / states)  
- interaction flows (happy path + edge cases)  
- copy notes  
- handoff checklist (design → dev)

## What goes here

- **`SKILL.md` (this file):** entry point, how to use, required output structure, and links.  
- **`references/`:** source-of-truth docs (full guidelines, checklists, templates, examples).  
- **`assets/`:** small UI/UX-only assets for prototypes/docs/handoff (keep lightweight).

## Assets

UI/UX-specific assets live here:

- [assets/README.md](assets/README.md)  
- [assets/logos/README.md](assets/logos/README.md)  
- [assets/logos/qieman/](assets/logos/qieman/)  
- [assets/logos/yingmi/](assets/logos/yingmi/)  
- [assets/logos/lockups/](assets/logos/lockups/)  

Notes:
- Prefer **SVG** as the source of truth when available.  
- Avoid large binaries (big images / videos / zip). Store large files externally and link them in `references/`.

## References

UI/UX guidelines, templates, and examples:

- [references/README.md](references/README.md)  
- [references/ui-design-skill.md](references/ui-design-skill.md) *(EN summary)*  
- [references/ui-design-skill_zh.md](references/ui-design-skill_zh.md) *(ZH source of truth)*  

## Usage

1. Start from this `SKILL.md` to understand expected outputs.  
2. Use `references/` when you need full specs, checklists, or templates.  
3. Use `assets/` when you need lightweight reusable UI materials.

## Conventions

### File naming
- Folders: `kebab-case` (e.g., `ui-ux`, `data-visualization`)  
- Docs: `kebab-case.md`  
- Chinese docs: add `_zh` suffix (e.g., `typography_zh.md`)  
- Versions: `-vNN` (e.g., `icon-cool-coin-stack-v01.png`)  

### What not to put here
- Do not store large videos / huge images / zip archives in this repo.  
- Do not duplicate brand-wide shared assets across skills. Prefer linking via `references/`.

---

Maintained by the Qieman design team.
