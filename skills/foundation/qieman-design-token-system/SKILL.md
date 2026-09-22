---
name: qieman-design-token-system
description: Create and apply Qieman design tokens for color, typography, spacing, radius, shadow, component and theme variables across App UI, H5, Web, AI products, marketing pages, PPT visuals and data reports. Use when defining token naming, mapping Figma Variables to CSS or JSON tokens, generating UI specifications, or ensuring cross-product visual consistency.
---

# Qieman Design Token System Skill

## Purpose

This skill defines and applies the Qieman Design Token System.

It helps AI agents, designers and developers use one consistent visual language across Qieman App UI, H5, Web official sites, AI products, marketing pages, PPT visuals and financial data reports.

The skill converts brand and UI decisions into reusable variables:

```text
Color Token
Typography Token
Spacing Token
Radius Token
Shadow Token
Component Token
Theme Token
```

## When to Use

Use this skill when the user asks for:

- 设计 Token 规范
- Figma Variables 整理
- CSS Variables 生成
- JSON Token 生成
- UI 颜色变量映射
- 字号 / 间距 / 圆角变量规范
- App / H5 / Web 跨端视觉统一
- Light / Dark mode 主题变量
- 组件 Token 命名规范
- 设计系统底层变量重构
- 让 AI / Cursor / 前端按统一 Token 还原 UI

## Do Not Use When

Do not use this skill alone when:

- The user only needs a full visual design without token requirements.
- The user needs a complete App page design; use `qieman-app-ui-design` after this skill.
- The user needs a marketing H5; use `qieman-marketing-h5-design` after this skill.
- The user needs brand tone or photography rules; use `qieman-brand-guidelines`.

## Dependencies

This skill follows:

- `qieman-brand-guidelines`
- `qieman-ui-design-system`
- `qieman-financial-compliance-guidelines` when tokens are used in financial trading, risk or return scenarios

This skill provides foundational variables for:

- `qieman-app-ui-design`
- `qieman-popup-design`
- `qieman-marketing-h5-design`
- `qieman-financial-chart-design`
- `qieman-ai-assistant-ui-design`
- `yingmi-ai-platform-design`
- `yingmi-financial-pitch-deck-design`

## Source Files

The current package is generated from uploaded Figma variable JSON files:

```text
色阶.json     → Primitive color scale
色彩 .json    → Semantic color tokens
单元 .json    → Unit tokens: radius, spacing, line-height
```

## Token Architecture

Recommended architecture:

```text
Primitive Token
    ↓
Semantic Token
    ↓
Component Token
    ↓
Scene / Product UI
```

### Primitive Token

Primitive tokens are raw values, such as brand color scales, neutral scales, red, yellow, green, gold, purple, cyan and blue scales.

Use primitive tokens to build a color system. Do not use them directly in business UI unless creating new semantic tokens.

### Semantic Token

Semantic tokens express UI meaning:

```text
foreground/neutral
foreground/primary
background/page/default
background/card/default
border/default
background/error faded
chart/01
```

Business UI should prefer semantic tokens.

### Component Token

Component tokens translate semantic tokens into specific components:

```text
button/primary/bg
button/primary/text
card/default/bg
input/border/focus
popup/mask
```

### Theme Token

Theme tokens support Light mode and Dark mode through the same semantic names.

## Design Principles

1. Use semantic tokens first.
2. Avoid hard-coded colors in UI output.
3. Keep token names stable and descriptive.
4. Separate primitive values, semantic meaning and component usage.
5. Support Light / Dark mode through token values, not duplicated components.
6. Use financial state tokens consistently for risk, warning, success, rise and fall.
7. Keep Qieman's tone clean, trustworthy, calm and professional.

## Naming Rules

Use slash-separated names in design tools:

```text
foreground/primary
background/page/default
border/error faded
Radius/Large 1
Layout/x6
```

Use kebab-case CSS variables in code:

```css
--qdm-color-foreground-primary
--qdm-color-background-page-default
--qdm-unit-radius-large-1
--qdm-unit-layout-x6
```

Prefix rules:

| Prefix | Meaning |
|---|---|
| `--qdm-scale-*` | Primitive color scale |
| `--qdm-color-*` | Semantic color token |
| `--qdm-unit-*` | Unit token: spacing, radius, line-height |
| `--qdm-shadow-*` | Shadow token |
| `--qdm-component-*` | Component token |

## Reference Files

Always consult the reference files before generating final UI rules:

```text
references/color-token.md
references/typography-token.md
references/spacing-token.md
references/radius-token.md
references/shadow-token.md
references/component-token.md
references/theme-token.md
```

## Output Requirements

When the user requests token documentation, output:

- Token architecture
- Token naming rules
- Token tables
- Light / Dark mode mapping
- CSS variable examples
- JSON token examples
- Component usage examples

When the user requests files, generate a complete folder package:

```text
qieman-design-token-system/
├── references/
├── assets/
├── SKILL.md
└── README.md
```

## Implementation Rules

When generating HTML / CSS with this skill:

- Define variables in `:root` or `[data-theme="light"]` / `[data-theme="dark"]`.
- Use `var(--qdm-*)` in components.
- Do not hard-code brand colors in component styles.
- Use `background/primary` for primary actions.
- Use `foreground/error`, `foreground/warning`, `foreground/success` for state feedback.
- Use `Radius/Large 1` or `Radius/Large 2` for Qieman cards and popups.
- Use `Layout/x4` to `Layout/x6` for common spacing.

## Quality Checklist

Before final output, check:

- Are token names consistent?
- Are primitive and semantic tokens separated?
- Does Light / Dark mode use the same token names?
- Are financial state colors unified?
- Are component styles using semantic variables instead of raw hex values?
- Are spacing and radius values from the unit token system?
- Does the output preserve Qieman's clean, calm and trustworthy financial brand tone?
