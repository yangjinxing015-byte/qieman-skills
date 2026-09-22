---
name: qieman-brand-guidelines
description: Use this skill to define and enforce Qieman brand positioning, personality, visual language, color system, typography, photography style, illustration style, tone of voice, and forbidden styles. Apply it whenever generating or reviewing Qieman App, H5, Web, popup, report, campaign, AI assistant, icon, illustration, or brand communication work.
---

# Qieman Brand Guidelines Skill

## Purpose

This Skill defines the brand foundation for Qieman.

It helps the agent answer one core question:

> What makes a design, copy, image, page, popup, report, or AI-generated asset feel like Qieman?

The Skill should keep all Qieman-related outputs consistent, trustworthy, calm, professional, and compliant with financial communication principles.

## Brand Definition

Qieman is a wealth management and investment advisory platform centered on buy-side advisory service.

It is not a pure fund transaction tool, and it should not feel like a short-term trading or opportunity-chasing platform.

Qieman should help users:

- understand their wealth goals;
- build long-term asset allocation plans;
- reduce anxiety and impulsive investment decisions;
- receive professional, explainable, and continuous investment advisory companionship.

## One-sentence Positioning

Qieman is a wealth management platform that uses professional investment advisory service and long-term companionship to help users manage wealth more calmly.

## Core Brand Keywords

Use these keywords as the baseline for brand judgment:

```text
professional
trustworthy
calm
restrained
warm
long-term
clear
explainable
buy-side advisory
wealth companionship
```

Chinese expression:

```text
专业可信
温和克制
长期陪伴
年轻清爽
理性投资
安放财富
静待花开
```

## When to Use This Skill

Use this Skill when the user asks for:

- Qieman brand positioning;
- Qieman brand personality;
- Qieman visual direction;
- Qieman color, typography, photography, or illustration rules;
- Qieman campaign, H5, App, Web, popup, report, chart, icon, badge, or AI assistant design;
- review of whether a design direction fits Qieman;
- prompts for image generation that must follow Qieman brand style;
- financial copywriting that needs Qieman tone of voice;
- forbidden style checking for Qieman outputs.

## Do Not Use This Skill When

Do not use this Skill as the only source when the task requires:

- complete App page layout rules;
- detailed component design system;
- transaction flow interaction logic;
- financial compliance legal review;
- complete H5 page production;
- HTML implementation details.

For these tasks, combine this Skill with the relevant specialized Skill.

## Dependencies and Related Skills

This Skill should be called before or together with:

- `qieman-ui-design-system`
- `qieman-app-ui-design`
- `qieman-popup-design`
- `qieman-marketing-h5-design`
- `qieman-financial-compliance-guidelines`
- `qieman-icon-design`
- `qieman-financial-illustration-design`
- `qieman-xiaogu-ip-design`
- `qieman-high-net-worth-private-design`
- `qieman-html-ui-generation`

## Reference Files

Always consult the following reference files when relevant:

```text
references/brand-personality.md
references/visual-language.md
references/color-system.md
references/typography.md
references/photography-style.md
references/illustration-style.md
references/tone-of-voice.md
references/forbidden-style.md
```

## Brand Principles

### 1. Do not stimulate trading

Qieman should not push users to act impulsively.

Avoid:

- urgent trading signals;
- exaggerated opportunity language;
- emotional pressure;
- fear of missing out.

Prefer:

- calm explanations;
- risk context;
- long-term planning;
- advisory companionship.

### 2. Make finance easier to understand

Financial information should be translated into clear, readable, and explainable user language.

Use:

- clear hierarchy;
- plain language;
- readable chart and data presentation;
- concise risk explanation.

### 3. Express professionalism through restraint

Professionalism should come from clarity, logic, data discipline, and stable layout, not visual heaviness.

Avoid traditional financial clichés such as skyscrapers, exaggerated handshakes, gold piles, and aggressive dark luxury scenes.

### 4. Keep warmth without becoming childish

Qieman can feel warm, friendly, and healing, but should not become low-age, cartoonish, or toy-like in serious financial scenarios.

## Visual Baseline

Use the following visual direction:

```text
light financial feeling
large whitespace
soft blue system
rounded cards
restrained shadow
soft gradients
clean information hierarchy
natural companionship atmosphere
calm data visualization
```

## Color Baseline

Primary brand color:

```text
#1B88EE
```

Basic palette:

```text
Page background: #F9FAFB
Card background: #FFFFFF
Title text: #333333
Body text: #606060
Secondary text: #999999
Divider: #F0F2F5
Error / Risk: #FA440C
Warning: #EA9500
Success: #07AD8F
```

Do not use pure black. Avoid large areas of green in financial trading or investment scenarios.

## Typography Baseline

Typography should be clear, modern, readable, and restrained.

Use hierarchy to create trust:

- title: concise and stable;
- body: readable and explanatory;
- data: clear, aligned, and easy to compare;
- risk notes: visible but not visually threatening.

## Photography Baseline

Prefer:

- soft natural light;
- low saturation;
- calm lifestyle scenes;
- investment planning, reading, family wealth, advisory communication;
- sea, sky, mountains, morning light, windows, desks, notebooks;
- warm but clean financial technology scenes.

Avoid:

- exaggerated business handshake;
- skyscraper cliché;
- luxury flaunting;
- piles of money, gold bars, coins;
- aggressive trading screens.

## Illustration Baseline

Prefer:

- light 2.5D or soft flat illustration;
- brand blue as the main color;
- warm color accents under 20%;
- rounded geometry;
- simple financial elements;
- calm user emotion;
- AI cards, data flows, asset allocation modules when needed.

Avoid:

- childish IP expression;
- complex city background;
- excessive money symbols;
- large green areas;
- wrong or uncontrolled text inside image screens.

## Tone of Voice Baseline

Use this order:

```text
Conclusion first → reason second → risk boundary third → next step last
```

Tone should be:

- professional but not cold;
- calm but not vague;
- warm but not overly emotional;
- clear but not simplistic;
- advisory but not deterministic.

## Financial Copywriting Boundaries

Do not:

- promise returns;
- imply guaranteed profit;
- overstate certainty;
- create excessive urgency;
- hide risk notices;
- use “sure win”, “must buy”, “risk-free high return”, “bottom is here”, or similar expressions.

Prefer:

- “基于当前账户情况……”
- “可以优先关注……”
- “建议结合风险承受能力再决策……”
- “市场短期波动加大，我们先帮你看清变化来自哪里。”

## Output Requirements

When this Skill is used, outputs should explicitly reflect:

1. Qieman brand positioning;
2. professional and calm financial tone;
3. visual restraint and brand blue system;
4. risk-aware expression;
5. avoidance of exaggerated marketing and trading stimulation.

For design generation tasks, include clear constraints for:

- color;
- layout feeling;
- illustration or photography direction;
- typography tone;
- prohibited elements;
- financial compliance reminders.

## Quality Checklist

Before finalizing a Qieman-related output, check:

- Does it feel calm, trustworthy, and professional?
- Is the brand blue used as the main recognition color?
- Is there enough whitespace?
- Are financial risks expressed clearly?
- Does the copy avoid return promises and urgency pressure?
- Are images free of exaggerated money, luxury, or trading symbols?
- Is the expression warm but not childish?
- Would the user feel guided rather than pushed?
