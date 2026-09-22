# qieman-brand-guidelines

且慢品牌规范 Skill，用于统一 AI 生成内容、设计方案、页面体验与营销物料的品牌基准。

## 核心定位

**定义“什么是且慢”，保证所有 AI 生成内容、设计方案、页面体验都保持统一品牌感。**

且慢不是单纯的基金交易工具，也不是追求短期热点的投资平台，而是以买方投顾为核心，帮助用户更理性、更长期、更从容地管理财富的理财平台。

## 目录结构

```text
qieman-brand-guidelines/
├── SKILL.md
├── README.md
├── references/
│   ├── brand-personality.md
│   ├── visual-language.md
│   ├── color-system.md
│   ├── typography.md
│   ├── photography-style.md
│   ├── illustration-style.md
│   ├── tone-of-voice.md
│   └── forbidden-style.md
└── assets/
    ├── logo/
    ├── brand-color/
    ├── typography/
    ├── illustration/
    ├── photography/
    └── examples/
```

## 什么时候调用

当任务涉及以下内容时，应优先调用本 Skill：

- 且慢品牌定位 / 品牌调性 / 品牌语气
- App、H5、Web、弹窗、报告、海报等设计方向判断
- 色彩、字体、摄影、插画、文案表达统一
- AI 小顾、金融投顾、高净值、交易、营销等品牌表达
- 判断某个方案是否“像且慢”

## 和其他 Skill 的关系

```text
qieman-brand-guidelines
        ↓
qieman-ui-design-system
        ↓
qieman-app-ui-design / qieman-popup-design / qieman-marketing-h5-design
        ↓
具体设计产出
```

本 Skill 是品牌基座，不直接替代具体页面 Skill。具体 UI 结构、组件规范、交互状态应继续交给 UI / App / H5 / Popup 等专项 Skill。
