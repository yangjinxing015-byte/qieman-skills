# Qieman Design Skills（且慢 Design Skills）

面向且慢（Qieman）设计团队的 Skill / Spec / Asset 共享仓库，用于沉淀 UI/UX、营销 H5、VIP 高净值私域、数据图表、PPT、小顾 IP、AI 工作流等设计规范，便于在 Claude / Agent / Cursor / Figma / 设计工作流中按需调用。

每个 Skill 以独立目录组织；正式入口文件优先使用 `SKILL.md`；补充说明文档统一放在 `references/` 目录下；素材与轻量资产统一放在 `assets/` 目录下。

---

## Skill index（入口导航）

* UI/UX → [`qieman-design-ui`](skills/qieman-design-ui/qieman-ui-design.md)
* Marketing H5 → [`qieman-design-h5`](skills/qieman-design-h5/SKILL.md)
* VIP 高净值私域 → [`qieman-design-vip`](skills/qieman-design-vip/SKILL.md)
* Data Visualization → [`qieman-design-data`](skills/qieman-design-data/SKILL.md)
* PPT → [`qieman-design-ppt`](skills/qieman-design-ppt/SKILL.md)
* Xiaogu IP → [`qieman-design-xiaogu-ip`](skills/qieman-design-xiaogu-ip/SKILL.md)
* AI Workflow → [`qieman-design-ai-workflow`](skills/qieman-design-ai-workflow/SKILL.md)

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
```

---

## Naming conventions

### Skill directory

Skill 目录统一使用英文、小写、短横线命名，并使用 `qieman-design-` 前缀，便于识别品牌归属和设计场景。

推荐：

```txt
qieman-design-ui
qieman-design-h5
qieman-design-vip
qieman-design-data
qieman-design-ppt
qieman-design-xiaogu-ip
qieman-design-ai-workflow
```

不推荐：

```txt
ui-ux
marketing-h5
data-visualization
ppt
xiaogu-ip
ai-workflow
Qieman-H5-Design
Qieman-VIP-Design
高净值私域
```

---

## Required files

每个正式 Skill 目录建议包含：

```txt
SKILL.md
```

当前过渡阶段，`qieman-design-ui` 仍保留历史主文件：

```txt
qieman-ui-design.md
```

后续可逐步统一为：

```txt
SKILL.md
```

建议目录包含：

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

## Current maintained Skills

### 1. Qieman Design UI

路径：

```txt
skills/qieman-design-ui/qieman-ui-design.md
```

用途：

* 且慢基础品牌规范
* App UI 规范
* 字体、颜色、圆角、间距、组件风格
* 页面基础布局规则
* 设计系统基础约束

---

### 2. Marketing H5

路径：

```txt
skills/qieman-design-h5/SKILL.md
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
页面框架 + 视觉规范 + Pattern Library + HTML 单文件输出规则 + 生成检查清单
```

---

### 3. VIP 高净值私域

路径：

```txt
skills/qieman-design-vip/SKILL.md
```

用途：

* 高净值用户私域海报
* 300万+ 资产门槛海报
* 投资圈层邀请图
* 投研观点传播图
* 顾问朋友圈转发图
* 九宫格传播图
* 9:16 竖版营销视觉
* 适配主流 AI 生图工具的提示词生成

核心目标：

```txt
高净值私域视觉风格 + 版式结构 + 品牌规则 + AI 生图提示词 + 九宫格传播方法
```

---

### 4. Data Visualization

路径：

```txt
skills/qieman-design-data/SKILL.md
```

用途：

* 数据图表
* 金融可视化
* 图形化表达
* 数据分析页面
* 图表风格规范

---

### 5. PPT

路径：

```txt
skills/qieman-design-ppt/SKILL.md
```

用途：

* PPT
* 汇报页
* 演示文稿
* 方案展示页
* 商务展示模板

---

### 6. Xiaogu IP

路径：

```txt
skills/qieman-design-xiaogu-ip/SKILL.md
```

用途：

* 小顾 IP 视觉规范
* 小顾角色设定
* 小顾 3D / 插画风格
* 小顾在营销、产品、AI 场景中的使用规则

---

### 7. AI Workflow

路径：

```txt
skills/qieman-design-ai-workflow/SKILL.md
```

用途：

* AI 设计工作流
* AI 工具调用规范
* Prompt 规范
* 设计生产流程
* Claude / Agent / Figma / Cursor 等工具协作方式

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
* 指向当前目录下的主入口文件
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

`SKILL.md` 是每个 Skill 的正式入口。历史文件可暂时保留，后续逐步统一。

---

## Reference documents

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

## Asset naming

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

## Notes

* 本仓库中的 Skill、reference、assets 应优先保持结构清晰、语义明确、易于检索与复用。
* 若某个 Skill 的 `assets/` 或 `references/` 结构较复杂，建议在对应目录下补充 `README.md` 进行说明。
* 所有新增文件应尽量遵循现有命名风格，不建议混用多套命名体系。
* 正式 Skill 主入口后续建议统一命名为 `SKILL.md`。
* Skill 目录统一使用英文、小写、短横线命名。
* 临时文件、预览文件、无关 Demo 不应混入正式 Skill 目录。
