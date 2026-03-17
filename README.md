# Qieman Design Skills（且慢 Design Skills）

面向且慢（Qieman）设计团队的 Skill / Spec / Asset 共享仓库，用于沉淀 UI/UX、营销 H5、数据图表、PPT、动效、小顾 IP、AI 工作流等规范，便于在 Claude / Agent / 设计工作流中按需调用。

每个 Skill 以独立目录组织，核心入口为 `SKILL.md`；补充说明文档统一放在 `references/` 目录下；素材与轻量资产统一放在 `assets/` 目录下。

---

## Skill index（入口导航）

- UI/UX → `skills/ui-ux/SKILL.md`
- Marketing H5 → `skills/marketing-h5/SKILL.md`
- Data Visualization → `skills/data-visualization/SKILL.md`
- PPT → `skills/ppt/SKILL.md`
- Motion → `skills/motion/SKILL.md`
- Xiaogu IP → `skills/xiaogu-ip/SKILL.md`
- AI Workflow → `skills/ai-workflow/SKILL.md`

---

## Project structure

```text
qieman-skills/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── ui-ux/
│   │   ├── SKILL.md
│   │   ├── references/
│   │   └── assets/
│   │
│   ├── marketing-h5/
│   │   ├── README.md
│   │   ├── SKILL.md
│   │   ├── assets/
│   │   │   ├── README.md
│   │   │   ├── fonts/
│   │   │   │   └── README.md
│   │   │   └── library/
│   │   │       ├── README.md
│   │   │       ├── characters/
│   │   │       │   └── README.md
│   │   │       ├── decorations/
│   │   │       │   └── README.md
│   │   │       ├── icons/
│   │   │       │   ├── README.md
│   │   │       │   ├── cool/
│   │   │       │   │   └── README.md
│   │   │       │   └── warm/
│   │   │       │       └── README.md
│   │   │       └── scenes/
│   │   │           └── README.md
│   │   └── references/
│   │       ├── README.md
│   │       ├── card-styles_zh.md
│   │       ├── color-guidelines_zh.md
│   │       ├── header-hero-guidelines_zh.md
│   │       └── marketing-design-spec_zh.md
│   │
│   ├── data-visualization/
│   │   ├── SKILL.md
│   │   └── references/
│   │
│   ├── ppt/
│   │   ├── SKILL.md
│   │   └── references/
│   │
│   ├── motion/
│   │   ├── SKILL.md
│   │   └── references/
│   │
│   ├── xiaogu-ip/
│   │   ├── SKILL.md
│   │   └── references/
│   │
│   └── ai-workflow/
│       ├── SKILL.md
│       └── references/
│
└── README.md
