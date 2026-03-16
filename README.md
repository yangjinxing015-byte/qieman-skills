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
│   │   ├── SKILL.md
│   │   ├── assets/
│   │   │   ├── fonts/
│   │   │   └── library/
│   │   │       ├── characters/
│   │   │       ├── decorations/
│   │   │       ├── icons/
│   │   │       └── scenes/
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
```

---

## Naming conventions

### Skill directory
- 使用英文、小写、短横线命名
- 例如：`marketing-h5`、`ui-ux`、`data-visualization`

### Required files
- 每个 Skill 必须有 `SKILL.md`
- 规范说明文档放在 `references/`
- 轻量素材放在 `assets/`

### Reference documents
- 规范文档统一使用语义清晰的英文文件名
- 中文版本可加 `_zh` 后缀
- 例如：
  - `card-styles_zh.md`
  - `color-guidelines_zh.md`
  - `header-hero-guidelines_zh.md`
  - `marketing-design-spec_zh.md`

### Asset naming
- 文件名统一使用英文、小写、短横线
- 推荐格式：
  - 字体：`family-weight-version.ext`
  - 角色：`qieman-character-name-state-01.png`
  - 装饰：`qieman-decoration-element-style-01.png`
  - 图标：`qieman-icon-name-style-01.svg`
  - 场景：`qieman-scene-theme-layout-01.png`

---

## Marketing H5 asset naming examples

### Fonts
- `alibaba-puhuiti-bold-v03.ttf`
- `alibaba-puhuiti-medium.ttf`
- `alibaba-puhuiti-regular-v02.ttf`
- `mi-sans-demibold.ttf`
- `mi-sans-medium.ttf`
- `mi-sans-regular.ttf`

### Characters
- `qieman-character-xiaogu-default-01.png`
- `qieman-character-xiaogu-smile-02.png`
- `qieman-character-user-female-default-01.png`

### Decorations
- `qieman-decoration-confetti-gold-01.png`
- `qieman-decoration-lantern-red-01.png`
- `qieman-decoration-cloud-gold-02.png`

### Icons
- `qieman-icon-arrow-right-cool-01.svg`
- `qieman-icon-calendar-warm-01.svg`
- `qieman-icon-coin-cool-01.svg`

### Scenes
- `qieman-scene-newyear-landscape-01.png`
- `qieman-scene-investment-landscape-02.png`
- `qieman-scene-festival-landscape-03.png`

---

## Notes

- `marketing-h5` 是当前唯一保留的营销设计 Skill。
- 旧目录如 `marketing-design/`、`qieman-mktdesign-H5/` 在确认内容已迁移完成后应删除，避免重复。
- `README.md` 用于仓库入口导航，不应直接粘贴某个 `SKILL.md` 的正文内容。
