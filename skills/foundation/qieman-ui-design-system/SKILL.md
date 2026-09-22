---
name: qieman-ui-design-system
description: Create and audit Qieman product UI component systems. Use when designing buttons, cards, forms, navigation, feedback components, transaction components, AI assistant components, accessibility rules, or when composing App, H5, and Web product interfaces based on the Qieman Figma component library and design tokens.
---

# Qieman UI Design System Skill

## Purpose

This Skill defines the reusable UI component system for Qieman product design.

It helps AI agents, designers, and developers produce consistent components and pages across Qieman App UI, H5, Web, AI products, financial transaction flows, and data reports.

The system answers:

- What does each component look like?
- When should each component be used?
- How do component states change?
- How should interaction feedback work?
- How should components combine into pages?
- How should financial compliance and accessibility constraints be handled?

## When to Use

Use this Skill when the user asks for:

- 且慢 UI 组件规范
- App / H5 / Web 组件体系
- Button / Card / Form / Tab / Toast / Popup / Bottom Sheet 设计
- 金融交易组件设计
- AI 小顾组件设计
- Figma 组件库梳理
- 设计系统规范输出
- 组件状态、交互、可访问性规则
- App 图标体系、Icon Library、Remix Icon 调用规范
- Cursor / 前端还原 UI 组件
- 页面组件组合规范

## Do Not Use When

Do not use this Skill alone when:

- The user only needs brand positioning or tone of voice. Use `qieman-brand-guidelines`.
- The user only needs color, typography, spacing, radius, or shadow variables. Use `qieman-design-token-system`.
- The user needs a full trading process design. Use this Skill together with `qieman-trading-flow-design`.
- The user needs a popup-specific design. Use this Skill together with `qieman-popup-design`.
- The user needs marketing H5 or poster output. Use this Skill as foundation, then call the marketing Skill.

## Dependencies

This Skill follows:

- `qieman-brand-guidelines`
- `qieman-design-token-system`
- `qieman-financial-compliance-guidelines`

Recommended downstream Skills:

- `qieman-app-ui-design`
- `qieman-popup-design`
- `qieman-trading-flow-design`
- `qieman-ai-assistant-ui-design`
- `qieman-financial-chart-design`
- `qieman-html-ui-generation`

## Core Principles

1. Use semantic design tokens before raw values.
2. Keep components lightweight, clear, and calm.
3. Make financial data easy to scan and explain.
4. Do not use components to create misleading urgency.
5. Show risk, cost, timing, and source information in financial operations.
6. Provide complete states: default, pressed, focused, disabled, loading, error, success, warning.
7. Make the primary action obvious and keep secondary actions visually weaker.
8. Ensure mobile touch targets are large enough and content is readable.
9. AI components must explain data source, uncertainty, and decision boundary.
10. For App icons, use Remix Icon as the default icon source and follow `references/icon-library.md`.

## Component Scope

This Skill covers:

```text
references/
├── component-principles.md
├── button-system.md
├── card-system.md
├── form-system.md
├── navigation-system.md
├── feedback-system.md
├── transaction-components.md
├── ai-components.md
├── icon-library.md
├── accessibility.md
└── token-mapping-summary.md
```

## Component Generation Rules

When generating UI components:

1. Start with the component purpose and usage scenario.
2. Select the correct component type and variant.
3. Apply tokens from `qieman-design-token-system`.
4. Add state definitions.
5. Add interaction rules.
6. Add accessibility requirements.
7. Add financial compliance notes when the component handles money, risk, products, advice, trading, or AI output.
8. Produce either:
   - design specification,
   - HTML prototype,
   - Figma implementation note,
   - QA checklist,
   - component reference document.

## Visual Rules

Use Qieman product UI direction:

- background: light gray / white / light blue;
- components: rounded cards, clean borders, soft shadows;
- primary color: Qieman brand blue;
- avoid pure black and excessive green;
- use warm colors only for warnings, benefits, or high-net-worth accents;
- keep information hierarchy calm and trustworthy.

## Financial Compliance Rules

For financial UI components:

- Do not promise returns.
- Do not imply guaranteed profit.
- Do not over-emphasize urgency.
- Show risks clearly.
- Mark estimated values as estimated.
- Explain fees, timing, and confirmation rules.
- Use “建议 / 可关注 / 可参考” rather than deterministic instructions.

## Output Requirements

When asked to generate files, output a complete Skill folder:

```text
qieman-ui-design-system/
├── references/
├── assets/
├── SKILL.md
└── README.md
```

When asked to generate HTML, output a standalone HTML file with embedded CSS and basic interaction if needed.
