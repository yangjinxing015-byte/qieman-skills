# Qieman Design Skills（且慢 Design Skills）

> **包更新日期**：2026-06-30  
> 各文件以头部信息栏「更新日期」为准，后续可由 `scripts/sync-updated-at.py` 同步。

面向且慢（Qieman）设计团队的 Skill / Spec / Asset 共享仓库，用于沉淀 UI/UX、营销 H5、VIP 高净值私域、数据图表、PPT、小顾 IP、AI 工作流等设计规范，便于在 Claude / Agent / Cursor / Figma / 设计工作流中按需调用。

每个 Skill 以独立目录组织；正式入口文件优先使用 `SKILL.md`；补充说明文档统一放在 `references/` 目录下；素材与轻量资产统一放在 `assets/` 目录下。

官方约定：**文件夹名 = `SKILL.md` 的 `name` 字段**。  
当前处于过渡阶段，部分历史主文件仍保留原命名，后续逐步统一为 `SKILL.md`。

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

## 目录

| 文件夹 | `name` | 层级 | 完整规范 | 更新日期 |
|--------|--------|------|----------|----------|
| `qieman-design-ui` | `qieman-design-ui` | L0 | `qieman-ui-design.md` | 2026-06-30 |
| —（L1 扩展） | `spec-id: qieman-design-sell-popup` | L1 | `qieman-design-ui/references/qieman-design-sell-popup.md` | 2026-06-30 |
| `qieman-design-h5` | `qieman-design-h5` | L2 | `SKILL.md` | 2026-06-30 |
| `qieman-design-vip` | `qieman-design-vip` | L2 | `SKILL.md` | 2026-06-30 |
| `qieman-design-data` | `qieman-design-data` | L2 | `SKILL.md` | 2026-06-30 |
| `qieman-design-ppt` | `qieman-design-ppt` | L2 | `SKILL.md` | 2026-06-30 |
| —（L1 扩展） | `spec-id: qieman-design-report` | L1 | `qieman-design-ppt/references/qieman-design-report.md` | 2026-06-30 |
| `qieman-design-xiaogu-ip` | `qieman-design-xiaogu-ip` | L2 | `SKILL.md` | 2026-06-30 |
| `qieman-design-ai-workflow` | `qieman-design-ai-workflow` | L2 | `SKILL.md` | 2026-06-30 |

> 说明：`qieman-design-pdf` 可作为后续新增 Skill；如果当前仓库中尚未创建该目录，暂不放入正式目录表，避免产生失效路径。

分层说明见 `qieman-design-ui` 的基础规范；PPT 细分见 `qieman-design-ppt/SKILL.md` 中的 Skill Layering 或相关 references。

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
│   │       └── qieman-design-sell-popup.md
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
│   │       └── qieman-design-report.md
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

## 统一布局

### Frontmatter

正式 `SKILL.md` 建议统一使用以下结构，不使用 `version` / `title` 字段。

#### L0 / L2 `SKILL.md`

```yaml
---
name: <与文件夹同名>
layer: L0 | L2
license: Complete terms in LICENSE.txt
description: >-
  ...
extends: qieman-design-ui   # L2 必填；L0 省略
# colors / typography …（按需）
---
```

#### L1 扩展 `.md`

```yaml
---
spec-id: <规范 ID>
layer: L1
extends: <父级 skill name>
license: Complete terms in LICENSE.txt
description: >-
  ...
---
```

---

### 头部信息栏

#### L0 / L2

```markdown
# <name>

| 字段 | 值 |
|------|-----|
| **ID** | `<name>` |
| **层级** | L0 / L2 |
| **场景** | …（L2 可选） |
| **规范** | 本文件 `SKILL.md` |
| **L1 扩展** | …（若有） |
| **依赖** | …（L2） |
| **更新日期** | YYYY-MM-DD（文件最新修改日，运行 `scripts/sync-updated-at.py` 同步） |

## 调用

```bash
npx openskills read <name>
```

---
```

#### L1

```markdown
# <spec-id>

| 字段 | 值 |
|------|-----|
| **ID** | `<spec-id>` |
| **层级** | L1 |
| **规范** | 本文件 |
| **依赖** | 父级 `SKILL.md` |
| **更新日期** | YYYY-MM-DD |

## 调用

```bash
npx openskills read <父级 skill name>
# 如需 L1 扩展，再读取对应 references 文件
```

---
```

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

层级：

```txt
L0
```

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

层级：

```txt
L2，依赖 qieman-design-ui
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

层级：

```txt
L2，依赖 qieman-design-ui
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

层级：

```txt
L2，依赖 qieman-design-ui
```

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

层级：

```txt
L2，依赖 qieman-design-ui
```

L1 扩展：

```txt
skills/qieman-design-ppt/references/qieman-design-report.md
```

用于 HTML 报告幻灯片、汇报型页面、结构化报告展示等细分场景。

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

层级：

```txt
L2，依赖 qieman-design-ui
```

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

层级：

```txt
L2，依赖 qieman-design-ui
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
* 更新日期维护说明

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
qieman-design-report.md
qieman-design-sell-popup.md
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

## 更新日期维护

规范文件变更后，在 `qieman-skills` 目录执行：

```bash
python3 scripts/sync-updated-at.py
```

脚本按各文件**最新修改时间（mtime）**写入头部信息栏：

```markdown
| **更新日期** | YYYY-MM-DD |
```

并刷新本 README 目录表与包更新日期。

如果暂时不运行脚本，也可以手动更新对应文件的头部信息栏和本 README 目录表。

---

## 调用示例

```bash
npx openskills read qieman-design-ui
npx openskills read qieman-design-h5
npx openskills read qieman-design-vip
npx openskills read qieman-design-data
npx openskills read qieman-design-ppt
npx openskills read qieman-design-xiaogu-ip
npx openskills read qieman-design-ai-workflow
```

PPT 报告幻灯片细分场景：

```bash
npx openskills read qieman-design-ppt
# 再读取 skills/qieman-design-ppt/references/qieman-design-report.md
```

卖出挽留弹窗细分场景：

```bash
npx openskills read qieman-design-ui
# 再读取 skills/qieman-design-ui/references/qieman-design-sell-popup.md
```

---

## Planned Skills

以下 Skill 可作为后续扩展方向，当前如未创建目录，暂不放入正式入口导航：

```txt
qieman-design-pdf
qieman-design-motion
```

建议未来结构：

```txt
skills/qieman-design-pdf/SKILL.md
skills/qieman-design-motion/SKILL.md
```

---

## Notes

* 本仓库中的 Skill、reference、assets 应优先保持结构清晰、语义明确、易于检索与复用。
* 若某个 Skill 的 `assets/` 或 `references/` 结构较复杂，建议在对应目录下补充 `README.md` 进行说明。
* 所有新增文件应尽量遵循现有命名风格，不建议混用多套命名体系。
* 正式 Skill 主入口后续建议统一命名为 `SKILL.md`。
* Skill 目录统一使用英文、小写、短横线命名。
* 临时文件、预览文件、无关 Demo 不应混入正式 Skill 目录。
