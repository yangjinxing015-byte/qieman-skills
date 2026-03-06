
## 2）`skills/ui-ux/SKILL.md`

```md
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

- **`SKILL.md` (this file):** entry point, required output structure, and links.
- **`references/`:** source-of-truth docs (full guidelines, checklists, templates, examples).
- **`assets/`:** small UI/UX-only assets for prototypes/docs/handoff (keep lightweight).

## Folder structure

```text
ui-ux/
├─ SKILL.md
├─ references/
│  ├─ README.md
│  ├─ ui-design-skill.md          # EN summary (optional)
│  └─ ui-design-skill_zh.md       # ZH source of truth
└─ assets/
   ├─ README.md
   └─ logos/
      ├─ README.md
      ├─ qieman/
      ├─ yingmi/
      └─ lockups/
Assets

UI/UX-specific assets live here:

assets/README.md

assets/logos/README.md

assets/logos/qieman/

assets/logos/yingmi/

assets/logos/lockups/

Notes:

Prefer SVG as the source of truth when available.

Keep assets lightweight; avoid large binaries (big images / videos / zip).

References

Source-of-truth UI/UX docs live here:

references/README.md

references/ui-design-skill.md
 (EN summary)

references/ui-design-skill_zh.md
 (ZH source of truth)

Usage

Start from this SKILL.md to understand expected outputs.

Use references/ when you need full specs, checklists, or templates.

Use assets/ when you need lightweight reusable UI materials.

Conventions

Folder naming: kebab-case (e.g., ui-ux)

Doc naming: kebab-case.md

Chinese docs: add _zh suffix (e.g., typography_zh.md)

Asset versioning: -vNN (e.g., icon-cool-coin-stack-v01.png)
