# Qieman Design Skills（且慢 Design Skills）

面向且慢（Qieman）设计团队的 Skill / Spec / Asset 共享仓库，用于沉淀 UI/UX、营销 H5、VIP 高净值私域、数据图表、PPT、小顾 IP、AI 工作流等设计规范，便于在 Claude / Agent / Cursor / Figma / 设计工作流中按需调用。

每个 Skill 以独立目录组织；正式入口文件优先使用 `SKILL.md`；补充说明文档统一放在 `references/` 目录下；素材与轻量资产统一放在 `assets/` 目录下。

---

## Skill index（入口导航）

* UI/UX → [skills/qieman-design-ui/qieman-ui-design.md](skills/qieman-design-ui/qieman-ui-design.md)
* Marketing H5 → [skills/qieman-design-h5/SKILL.md](skills/qieman-design-h5/SKILL.md)
* VIP 高净值私域 → [skills/qieman-design-vip/SKILL.md](skills/qieman-design-vip/SKILL.md)
* Data Visualization → [skills/qieman-design-data/SKILL.md](skills/qieman-design-data/SKILL.md)
* PPT → [skills/qieman-design-ppt/SKILL.md](skills/qieman-design-ppt/SKILL.md)
* Xiaogu IP → [skills/qieman-design-xiaogu-ip/SKILL.md](skills/qieman-design-xiaogu-ip/SKILL.md)
* AI Workflow → [skills/qieman-design-ai-workflow/SKILL.md](skills/qieman-design-ai-workflow/SKILL.md)

---

## Project structure

```txt
qieman-skills/
├── .claude-plugin/
│   └── plugin.json
│
├── skills/
│   ├── qieman-design-ui/
│   │   ├── qieman-ui-design.md
│   │   ├── assets/
│   │   └── references/
│   │
│   ├── qieman-design-h5/
│   │   ├── SKILL.md
│   │   ├── assets/
│   │   └── references/
│   │
│   ├── qieman-design-vip/
│   │   ├── SKILL.md
│   │   ├── assets/
│   │   └── references/
│   │
│   ├── qieman-design-data/
│   │   ├── SKILL.md
│   │   └── references/
│   │
│   ├── qieman-design-ppt/
│   │   ├── SKILL.md
│   │   └── references/
│   │
│   ├── qieman-design-xiaogu-ip/
│   │   ├── SKILL.md
│   │   └── references/
│   │
│   └── qieman-design-ai-workflow/
│       ├── SKILL.md
│       └── references/
│
└── README.md
