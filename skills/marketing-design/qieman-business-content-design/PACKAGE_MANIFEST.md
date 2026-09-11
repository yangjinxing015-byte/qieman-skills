# PACKAGE MANIFEST

正式运行包仅包含：

- `SKILL.md`
- `README.md`
- `MIGRATION.md`

不包含：
- assets
- references
- legacy files
- font binaries

这是推荐用于后续持续迭代的主 Skill 版本。


Updated in this revision:
- white-card spacing lock: 16px
- section spacing lock: 24px
- default white cards: no outer border
- hero/content transition: avoid excessive empty height
- section number marker: optional, remove if it inflates layout


Latest complete revision:
- integrated qieman-ui-design as page foundation
- integrated qieman-chart-design as chart foundation
- fixed white-card spacing: 16px
- fixed section spacing: 24px
- default white cards: no uniform border
- included fixed prompt templates for strategy / marketing / insurance / general pages


Strong contracts added:
- equal-weight KPI typography for same-level metrics
- sticky CTA is always one full-width large button
- sticky CTA contract overrides prototype button styling


2026-09-11 update:
- Hero/KV → content transition is now a routed system, not a single rounded-card rule.
- Modes: auto / rounded-surface / soft-gradient / flat-spacing.
- qieman-business-content-design is the source of truth for page transition structure.
- Insurance defaults to soft-gradient.
- Sticky CTA strong contract retained and clarified in invocation template.


2026-09-11 V8 update:
- Added source_mode: requirement-only / visual-continuation.
- Added Requirement Source Isolation.
- Added unstyled Requirement Model before visual generation.
- Added Semantic Reconstruction and Visual Recomposition.
- Added Visual Divergence Gate: requirement-only outputs should visibly redesign at least 4 core visual dimensions.
- Clarified that source prototype is NOT automatically Locked Layout.
- Replaced long invocation prompt with concise invocation templates.
- Existing stable contracts retained: 16px white-card gap, 24px module groups, equal-weight KPI, transition routing, qieman-chart-design dependency, single full-width sticky CTA.


2026-09-11 V9 update:
- Added Transition Zone contract for Hero/KV → content.
- Added overlay-card mode: 56–88px transition zone, first card overlaps by 20–28px.
- Kept soft-gradient and flat-spacing as alternate routing modes.
- Added strong guards against hard cuts and empty transition gaps.
- Fixed Sticky CTA radius as system-level pill: border-radius 999px.
- Existing Visual Isolation / Semantic Reconstruction / Visual Divergence Gate remain unchanged.
