# Qieman Design Skills（且慢 Design Skills）

面向且慢（Qieman）设计团队的 Skill / Spec / Asset 共享仓库，用于沉淀 UI/UX、营销 H5、VIP 高净值私域、数据图表、PPT、动效、小顾 IP、AI 工作流等规范，便于在 Claude / Agent / 设计工作流中按需调用。

每个 Skill 以独立目录组织，核心入口为 `SKILL.md`；补充说明文档统一放在 `references/` 目录下；素材与轻量资产统一放在 `assets/` 目录下。

---

## Skill index（入口导航）

* UI/UX → [skills/ui-ux/SKILL.md](skills/ui-ux/SKILL.md)
* Marketing H5 → [skills/marketing-h5/SKILL.md](skills/marketing-h5/SKILL.md)
* VIP 高净值私域 → [skills/qieman-vip-design/SKILL.md](skills/qieman-vip-design/SKILL.md)
* Data Visualization → [skills/data-visualization/SKILL.md](skills/data-visualization/SKILL.md)
* PPT → [skills/ppt/SKILL.md](skills/ppt/SKILL.md)
* Motion → [skills/motion/SKILL.md](skills/motion/SKILL.md)
* Xiaogu IP → [skills/xiaogu-ip/SKILL.md](skills/xiaogu-ip/SKILL.md)
* AI Workflow → [skills/ai-workflow/SKILL.md](skills/ai-workflow/SKILL.md)

---

## Project structure

```txt
qieman-skills/
├── .claude-plugin/
│   └── plugin.json
│
├── skills/
│   ├── ui-ux/
│   │   ├── SKILL.md
│   │   ├── README.md
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
│   ├── qieman-vip-design/
│   │   ├── README.md
│   │   ├── SKILL.md
│   │   ├── assets/
│   │   └── references/
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

Skill 目录统一使用英文、小写、短横线命名。

推荐：

```txt
marketing-h5
qieman-vip-design
ui-ux
data-visualization
ai-workflow
xiaogu-ip
```

不推荐：

```txt
Qieman-H5-Design
Qieman-VIP-Design
marketing h5
高净值私域
```

---

### Required files

每个正式 Skill 目录必须包含：

```txt
SKILL.md
```

建议包含：

```txt
README.md
references/
assets/
```

说明：

* `SKILL.md`：Skill 的核心入口文件，用于定义适用任务、输出预期、生成规则、调用逻辑、检查清单。
* `README.md`：说明该 Skill 目录的维护范围、目录职责和局部结构。
* `references/`：沉淀补充规范、案例说明、设计原则、版本记录等。
* `assets/`：管理字体、图标、人物、装饰、场景等轻量素材。

---

### Reference documents

规范文档统一使用语义清晰的英文文件名。

中文版本可加 `_zh` 后缀。

推荐：

```txt
card-styles_zh.md
color-guidelines_zh.md
header-hero-guidelines_zh.md
marketing-design-spec_zh.md
vip-poster-guidelines_zh.md
nine-grid-guidelines_zh.md
```

---

### Asset naming

素材文件名统一使用英文、小写、短横线。

推荐按：

```txt
类型 + 语义 + 版本
```

的方式命名。

示例：

```txt
font-mi-sans-regular.ttf
char-general-analyst-desk-v01.png
icon-cool-bar-chart-growth-v01.png
scene-investment-background-v02.png
```

---

## Marketing H5 asset naming examples

以下示例与当前 `marketing-h5` 仓库中已使用的命名风格保持一致。

### Fonts

```txt
font-alibaba-puhuiti-bold-v03.ttf
font-alibaba-puhuiti-medium.ttf
font-alibaba-puhuiti-regular-v02.ttf
font-mi-sans-demibold.ttf
font-mi-sans-medium.ttf
font-mi-sans-regular.ttf
```

### Characters

```txt
char-general-analyst-desk-v01.png
char-general-analyst-report-v01.png
char-general-presenter-chart-v01.png
```

### Decorations

```txt
dec-wheat-ear-left-v01.png
dec-wheat-ear-right-v01.png
```

### Icons

```txt
icon-cool-bar-chart-growth-v01.png
icon-cool-pie-chart-allocation-v01.png
icon-warm-festival-gift-v01.png
```

### Scenes

```txt
scene-newyear-landscape-v01.png
scene-investment-background-v02.png
scene-festival-hero-v01.png
```

---

## Skill usage guidance

### Root README

仓库根目录 `README.md` 用于：

* 仓库整体介绍
* Skill 入口导航
* 目录结构说明
* 命名规范
* 全局使用约定

不建议在根目录 `README.md` 中直接粘贴某个具体 Skill 的完整正文内容。

---

### Skill README

各 Skill 目录下的 `README.md` 用于：

* 说明该 Skill 的正式维护范围
* 说明目录职责
* 补充该 Skill 的局部结构说明
* 指向当前目录下的 `SKILL.md`
* 说明 references / assets 的使用方式

---

### SKILL.md

各 Skill 目录下的 `SKILL.md` 用于：

* 定义 Skill 的适用任务
* 定义输出预期
* 定义参考文档加载逻辑
* 定义素材调用规则
* 定义任务处理流程
* 提供 Prompt 模板
* 提供质量检查清单

`SKILL.md` 是每个 Skill 的正式入口，不建议用其他名称替代。

---

## Current maintained Skills

### 1. Marketing H5

路径：

```txt
skills/marketing-h5/SKILL.md
```

用途：

* 且慢 App 内营销 H5
* 策略介绍页
* 活动页
* 权益页
* 定投页
* 诊断页
* 报告页
* 功能上线页
* 投教专题页

核心目标：

```txt
页面框架 + 视觉规范 + Pattern Library + 生成检查清单
```

---

### 2. VIP 高净值私域

路径：

```txt
skills/qieman-vip-design/SKILL.md
```

用途：

* 高净值用户私域海报
* 300万+ 资产门槛海报
* 投资圈层邀请图
* 投研观点传播图
* 顾问朋友圈转发图
* 九宫格传播图
* 9:16 竖版营销视觉
* 适配市面主流 AI 生图工具的提示词生成

核心目标：

```txt
高净值私域视觉风格 + 版式结构 + 品牌规则 + AI 生图提示词 + 九宫格传播方法
```

---

## Marketing H5 notes

* `marketing-h5` 是当前营销 H5 页面相关任务的正式 Skill 目录。
* `skills/marketing-h5/SKILL.md` 是唯一正式入口。
* `references/` 用于沉淀页面结构、Hero、卡片、配色、图表等规范。
* `assets/` 用于统一管理字体、图标、人物、装饰、场景等正式素材。
* 本地原型、HTML Demo、临时预览文件不应混入正式 Skill 结构。

---

## VIP Design notes

* `qieman-vip-design` 是且慢高净值私域传播相关任务的正式 Skill 目录。
* `skills/qieman-vip-design/SKILL.md` 是唯一正式入口。
* 该 Skill 聚焦高净值私域海报、300万+门槛、投资圈层邀请、九宫格传播图和 AI 生图提示词。
* 如果后续有高净值参考图、Logo、九宫格样例、颜色规范，可放入：

```txt
skills/qieman-vip-design/references/
skills/qieman-vip-design/assets/
```

建议结构：

```txt
skills/qieman-vip-design/
├── README.md
├── SKILL.md
├── assets/
│   ├── logos/
│   ├── posters/
│   └── nine-grid/
└── references/
    ├── color-guidelines_zh.md
    ├── poster-layout-guidelines_zh.md
    ├── nine-grid-guidelines_zh.md
    └── ai-image-prompt-guidelines_zh.md
```

---

## Notes

* 本仓库中的 Skill、reference、assets 应优先保持结构清晰、语义明确、易于检索与复用。
* 若某个 Skill 的 `assets/` 或 `references/` 结构较复杂，建议在对应目录下补充 `README.md` 进行说明。
* 所有新增文件应尽量遵循现有命名风格，不建议混用多套命名体系。
* 正式 Skill 主入口统一命名为 `SKILL.md`。
* Skill 目录统一使用英文、小写、短横线命名。
* 临时文件、预览文件、无关 Demo 不应混入正式 Skill 目录。
