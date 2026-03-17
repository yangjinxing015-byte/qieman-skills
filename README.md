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

Naming conventions
Skill directory

使用英文、小写、短横线命名

例如：marketing-h5、ui-ux、data-visualization

Required files

每个 Skill 必须有 SKILL.md

规范说明文档放在 references/

素材与轻量资源放在 assets/

如目录结构较复杂，建议补充 README.md 说明文件

Reference documents

规范文档统一使用语义清晰的英文文件名

中文版本可加 _zh 后缀

例如：

card-styles_zh.md

color-guidelines_zh.md

header-hero-guidelines_zh.md

marketing-design-spec_zh.md

Asset naming

文件名统一使用英文、小写、短横线

推荐按“类型 + 语义 + 版本”的方式命名

尽量保持与仓库现有素材命名体系一致

Marketing H5 asset naming examples

以下示例与当前 marketing-h5 仓库中已使用的命名风格保持一致。

Fonts

font-alibaba-puhuiti-bold-v03.ttf

font-alibaba-puhuiti-medium.ttf

font-alibaba-puhuiti-regular-v02.ttf

font-mi-sans-demibold.ttf

font-mi-sans-medium.ttf

font-mi-sans-regular.ttf

Characters

char-general-analyst-desk-v01.png

char-general-analyst-report-v01.png

char-general-presenter-chart-v01.png

Decorations

dec-wheat-ear-left-v01.png

dec-wheat-ear-right-v01.png

Icons

icon-cool-bar-chart-growth-v01.png

icon-cool-pie-chart-allocation-v01.png

icon-warm-festival-gift-v01.png

Scenes

scene-newyear-landscape-v01.png

scene-investment-background-v02.png

scene-festival-hero-v01.png

Repository usage guidance
Root README

仓库根目录 README.md 用于：

仓库整体介绍

Skill 导航

目录结构说明

命名规范

全局使用约定

不建议在根目录 README.md 中直接粘贴某个具体 Skill 的正文内容。

Skill README

各 Skill 目录下的 README.md 用于：

说明该 Skill 的正式维护范围

说明目录职责

补充该 Skill 的局部结构说明

SKILL.md

各 Skill 目录下的 SKILL.md 用于：

定义 Skill 的适用任务

输出预期

参考文档加载逻辑

素材调用规则

任务处理流程

Marketing H5 notes

marketing-h5 是当前营销设计相关任务的正式 Skill 目录

skills/marketing-h5/ 为正式维护目录

references/ 用于沉淀页面结构、Hero、卡片、配色等规范

assets/ 用于统一管理字体、图标、人物、装饰、场景等正式素材

本地原型、HTML Demo、临时预览文件不应混入正式 Skill 结构

Notes

本仓库中的 Skill、reference、assets 应优先保持结构清晰、语义明确、易于检索与复用

若某个 Skill 的 assets/ 或 references/ 结构较复杂，建议在对应目录下补充 README.md 进行说明

所有新增文件应尽量遵循现有命名风格，不建议混用多套命名体系
