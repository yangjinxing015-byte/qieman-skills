---
name: marketing-h5
description: 用于且慢营销 H5 设计相关任务，包括页面结构梳理、首屏 Hero 区设计、卡片模块设计、配色规范、营销专题页规划，以及可直接用于设计执行或 AI 工具生成的结构化输出。
---

# Qieman Marketing H5

## Purpose
本 Skill 用于支持且慢营销 H5 相关内容的生成、整理与规范约束，帮助输出符合且慢品牌调性的页面结构、视觉建议、模块说明和可复用的设计描述，便于设计执行、策划沟通、AI 生图/生成工具调用，以及 HTML Demo / 页面原型产出。

本 Skill 适用于以下类型任务：

- 营销 H5 页面结构规划
- 年度账单页、专题页、活动页、品牌传播页设计
- 首屏 Hero 区设计建议
- 卡片模块与内容块设计建议
- 页面整体配色与视觉氛围定义
- 将结构化设计方案转化为 HTML Demo / 页面原型 / AI 提示词

---

## When to use
当需求涉及以下方向时，优先使用本 Skill：

- 生成且慢营销 H5 页面结构
- 规划活动页、专题页、品牌传播页内容框架
- 输出首屏 Hero 区设计建议
- 输出卡片式营销模块设计建议
- 统一 H5 页面视觉风格、布局逻辑和配色规则
- 输出适用于 Figma、即梦、Lovart、HTML Demo 或其他 AI 工具的结构化描述
- 根据参考规范生成可预览的单文件 HTML 原型

---

## Core principles

### 1. 保持且慢品牌调性一致
页面应体现且慢品牌应有的：

- 专业
- 可信
- 轻盈
- 现代
- 有秩序感

### 2. 先结构，后视觉
先明确页面目标、传播场景和信息优先级，再确定模块与视觉表现，不要先做装饰性设计。

### 3. 优先模块化与卡片化
优先采用模块化、卡片化、可复用的表达方式，便于设计沉淀、后续复用和工具生成。

### 4. 信息层级清晰
页面中应始终明确：

- 首屏主题
- 关键价值点
- 数据 / 证据
- 引导动作
- 风险说明

### 5. 营销感不能破坏金融品牌可信度
节日、热点、活动场景可以适度增强情绪氛围，但不能削弱品牌可信度与金融属性。

### 6. 输出应尽量可执行
输出内容尽量具体、清晰、结构化，可直接支持：

- 设计执行
- Figma 搭建
- HTML Demo 生成
- AI 生图 / 页面生成
- 前端原型开发

---

## Output expectations
输出内容通常应尽量包含以下部分：

- 页面目标
- 目标用户或传播场景
- 页面结构层级
- 模块划分建议
- 首屏 / Hero 区设计建议
- 卡片 / 内容区设计建议
- 配色与视觉风格建议
- CTA 与转化路径建议
- 可直接用于设计执行或 AI 工具的提示词 / 描述文本

如果用户明确要求产出页面原型，则输出应尽量转为：

- 单文件 HTML Demo
- 移动端 H5 原型
- 页面结构化代码草稿
- 可视化页面框架

---

## References
根据任务需要，按需加载以下参考文档：

- `references/card-styles_zh.md`  
  用于卡片类型、层级、圆角、阴影、信息密度、数据卡 / 引导卡 / 活动卡 / 对比卡的设计参考。

- `references/color-guidelines_zh.md`  
  用于主色、辅助色、背景色、文本色、状态色、节日场景色、 CTA 色和页面氛围定义。

- `references/header-hero-guidelines_zh.md`  
  用于首屏 Hero 区布局、标题层级、 CTA、插画 / 人物 / 氛围图位置、留白和信息顺序设计。

- `references/marketing-design-spec_zh.md`  
  用于营销 H5 整体页面结构、模块节奏、信息优先级、转化路径和品牌一致性控制。

---

## Loading guidance
处理任务时按需读取参考文档：

- 需要设计卡片模块、信息块、数据块时，读取 `references/card-styles_zh.md`
- 需要确定页面氛围、品牌主色、辅助色、 CTA 色时，读取 `references/color-guidelines_zh.md`
- 需要设计首屏、标题区、按钮区、主视觉区时，读取 `references/header-hero-guidelines_zh.md`
- 需要整理整体页面结构、模块节奏、营销层级和转化路径时，读取 `references/marketing-design-spec_zh.md`

当任务同时涉及页面结构、首屏、卡片和配色时，应综合读取多个 reference 文件，不要只依赖单一文档。

---

## Workflow
建议按以下流程处理营销 H5 相关任务：

1. 先判断页面业务目标与传播场景
2. 梳理页面结构与信息层级
3. 确定页面核心价值表达与转化路径
4. 按需加载 Hero、卡片、配色和通用规范文档
5. 输出结构化页面方案
6. 如用户要求原型，则进一步生成 HTML Demo / 页面原型 / 前端草稿

---

## HTML demo guidance
当用户明确要求输出 HTML Demo / 页面原型时，优先遵循以下原则：

- 输出单文件 HTML
- CSS 尽量内嵌
- 页面按移动端 H5 视觉习惯设计
- 使用清晰的标题层级、卡片布局、分段结构
- 风格优先遵循且慢营销 H5 配色、Hero 区和卡片规范
- 如无真实数据，可使用合理演示数据
- 页面至少保证可读、可预览、结构完整

如用户要求“不要 markdown，而要页面原型”，应优先生成 HTML 文件而不是文案方案。

---

## Asset loading guidance（强制）

### 强制规则（必须遵守）
- **必须使用本地素材**：logo、IP、插画、图标、背景、UI、图表等视觉元素仅允许来自 `assets/`，禁止用 emoji、占位图、通用图标或默认图形替代。
- **先搜索 assets**：接到任务后先检查 `assets/`（及 `assets/library/`）下是否存在匹配素材，再决定布局、主视觉与文案。
- **优先用户提供素材**：用户已指定文件或路径时，必须使用该精确路径，不得替换为其他资源。
- **不得忽略素材库**：有匹配素材则必须选用，不得跳过已有素材直接使用替代图。
- **使用精确文件与路径**：引用时使用实际存在的文件名与相对路径，禁止写泛化描述。
- **禁止泛化替代**：不得用“类似图标”“默认 logo”“通用插画”等说法替代真实素材。
- **保持品牌一致**：视觉素材必须符合且慢品牌调性。
- **缺失须明确声明**：若某类素材在 `assets/` 中不存在，必须显式写出 `缺失素材：［类型/用途］`，不得静默用其他元素顶替。

### 素材类型与来源
| 类型 | 允许来源 | 说明 |
|------|----------|------|
| logo | `assets/` 下对应文件 | 若无则输出 `缺失素材：logo` |
| IP / 人物 | `assets/library/characters/` | 小顾 IP、人物插画仅从此目录 |
| 插画 / 场景 | `assets/library/scenes/` | 背景、场景图仅从此目录 |
| 图标 | `assets/library/icons/cool/`、`assets/library/icons/warm/` | 页面图标、数据意向图标仅从此目录 |
| 背景 / 装饰 | `assets/library/decorations/` 或 CSS 渐变 | 装饰图仅从此目录或纯色 / 渐变 |
| 字体 | `assets/fonts/` | 字体资源 |

### Priority rules
优先顺序如下：

1. 用户明确指定的本地素材精确路径
2. `assets/library/` 下与页面场景最匹配的已有文件
3. 若库内无匹配素材：在方案或代码注释中显式写出 `缺失素材：［具体类型/用途］`

### Asset categories（查阅顺序）
处理任务时优先按需查阅以下目录：

- `assets/library/icons/`：页面图标、摘要卡图标、 Hero 辅助图标、数据 / 图表意向图标
- `assets/library/characters/`：小顾 IP、人物辅助视觉
- `assets/library/decorations/`：节日装饰、气氛元素
- `assets/library/scenes/`：场景插画、背景辅助图
- `assets/fonts/`：字体资源

### Required behavior
- 若库内存在与需求匹配的素材，必须使用该素材的精确路径
- 若库内不存在所需素材，必须在输出中明确写出 `缺失素材：［类型］`
- 用户已给出素材路径时，必须使用该精确路径，不得改用其他默认图形

### HTML demo requirements
- 仅引用本地 `assets/` 下的实际文件路径
- 禁止使用 emoji、外部占位图、通用破图作为主视觉或正式图标
- 首屏 Hero、卡片、图表意向等所需图标 / 人物 / 装饰仅从 `assets/library/` 选取；若无合适项，在 HTML 注释或说明中写 `缺失素材：［具体说明］`
- 若本地预览环境下跨目录引用不稳定，可将首屏所需素材复制到本地 `output/` 同级目录预览，但该目录不属于正式 skill 仓库内容

### Example
- 若库内存在 `assets/library/icons/cool/icon-cool-bar-chart-growth-v01.png`，则应优先在首屏或年度亮点模块中使用该精确路径
- 若库内不存在某类素材（如小顾 IP、某场景图），则在方案或代码中写 `缺失素材：小顾 IP（首屏主视觉）` 或 `缺失素材：场景图（xx 模块）`

---

## Project structure

正式目录结构如下：

- `README.md`
- `SKILL.md`
- `references/`
- `assets/`

其中：

**assets/**
- fonts
- library

**references/**
- README.md
- card-styles_zh.md
- color-guidelines_zh.md
- header-hero-guidelines_zh.md
- marketing-design-spec_zh.md

**output/**
- HTML demo
- 页面规划
- 原型草稿

说明：
- `output/` 仅作为本地预览或临时产物目录说明，不属于正式仓库内容
- 正式维护目录为 `skills/marketing-h5`
- 不应将 demo、output、临时预览文件纳入正式 skill 版本控制

---

## Default style direction
且慢营销 H5 默认建议采用以下方向：

- 品牌可信的金融科技感
- 清晰留白与层级分明的结构表达
- 明亮、轻盈、克制的视觉氛围
- 强调关键信息转化路径和模块节奏
- 优先采用卡片化与模块化布局
- 在节日或活动场景中适度增强情绪氛围，但不削弱品牌专业性
