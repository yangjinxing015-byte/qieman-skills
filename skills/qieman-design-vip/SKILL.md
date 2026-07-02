---
name: qieman-design-vip
description: >-
  Use this skill to create Qieman high-net-worth private-domain marketing visuals,
  including 9:16 vertical posters, 300万+ asset-threshold invitations, investment
  circle graphics, research-viewpoint spreads, advisor WeChat Moments assets,
  and nine-grid social campaigns. Output must follow blue-gold / black-gold VIP
  aesthetics, simplified composition rules, strong metaphor-led visual language,
  copy-led minimal composition, complete-grid-first nine-grid delivery rules,
  structured design tokens, risk disclosure rules, and AI image prompt workflows
  compatible with mainstream generative tools.
extends: qieman-design-ui
layer: L2
license: Complete terms in LICENSE.txt

colors:
  # VIP core palette — inherits brand-primary from qieman-design-ui
  brand-primary: "#1B88EE"
  brand-blue: "#1B88EE"
  navy-deep: "#0A1F3D"
  black-blue: "#0D1526"
  navy-rational: "#1A3A5C"
  light-blue: "#69B1F4"
  light-blue-white: "#E8F2FA"
  cream: "#F5F0E8"
  white: "#FFFFFF"

  champagne-gold: "#C9A962"
  soft-gold: "#E8D5A3"
  gold-accent: "#D4AF37"
  gold-line: "#B8956A"

  text-primary: "#FFFFFF"
  text-on-light: "#1A3A5C"
  text-secondary: "#B8C5D6"
  text-gold-emphasis: "#E8D5A3"
  text-inverse: "#FFFFFF"

  risk-disclosure: "#999999"
  semantic-error: "#FA440C"
  semantic-warning: "#EA9500"

  palette-a-bg: "#0A1F3D"
  palette-a-title: "#E8D5A3"
  palette-a-accent: "#C9A962"
  palette-b-bg: "#0D1526"
  palette-b-title: "#C9A962"
  palette-b-accent: "#D4AF37"
  palette-c-bg: "#E8F2FA"
  palette-c-title: "#1A3A5C"
  palette-c-accent: "#C9A962"

  footer-curve: "#1B88EE"
  on-dark: "#FFFFFF"
  on-light: "#1A3A5C"

typography:
  title-serif-bold:
    fontFamily: "Source Han Serif CN, Noto Serif SC, serif"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  title-serif-heavy:
    fontFamily: "Source Han Serif CN, Noto Serif SC, serif"
    fontWeight: 900
    lineHeight: 1.22
    letterSpacing: 0
  title-serif-regular:
    fontFamily: "Source Han Serif CN, Noto Serif SC, serif"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  title-serif-medium:
    fontFamily: "Source Han Serif CN, Noto Serif SC, serif"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  body-sans:
    fontFamily: "Source Han Sans CN, PingFang SC, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sans-medium:
    fontFamily: "Source Han Sans CN, PingFang SC, system-ui, sans-serif"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Source Han Sans CN, PingFang SC, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  micro-legal:
    fontFamily: "Source Han Sans CN, PingFang SC, system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0

canvas:
  poster-single:
    width: 1080
    height: 1920
    unit: px
  poster-ratio: "9:16"
  grid-cell:
    width: 360
    height: 360
    unit: px
  grid-cell-master:
    width: 1080
    height: 1080
    unit: px
  grid-layout: "3×3"

spacing:
  # Poster zone ratios (percentage of canvas height)
  zone-brand: "7%–10%"
  zone-title: "20%–28%"
  zone-selling: "12%–20%"
  zone-visual: "38%–48%"
  zone-footer: "8%–12%"
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px

shadow:
  none: "none"
  gold-glow: "0 0 24px rgba(201, 169, 98, 0.15)"
  card-soft: "0 4px 16px rgba(10, 31, 61, 0.12)"
  cinematic: "0 8px 32px rgba(13, 21, 38, 0.25)"

copy:
  slogan: "安放财富 · 静待花开"
  risk-disclosure: "市场有风险，投资需谨慎"
  brand-logo-text: "盈米基金｜且慢"
  threshold-keywords:
    - "300万+"
    - "300万以上"
    - "资产300万以上"
    - "高净值人士专属"
    - "席位有限，短暂开放"
    - "短暂开启席位"
    - "不是所有人都能进"

components:
  poster-shell:
    canvas: "{canvas.poster-single}"
    ratio: "{canvas.poster-ratio}"
    backgroundColor: "{colors.palette-a-bg}"
    textColor: "{colors.text-primary}"
  brand-header:
    logoText: "{copy.brand-logo-text}"
    logoOnDark: "{colors.on-dark}"
    logoOnLight: "{colors.brand-primary}"
    typography: "{typography.caption}"
    placement: "top-left or top-center"
  title-hero:
    typography: "{typography.title-serif-bold}"
    emphasisColor: "{colors.champagne-gold}"
    lines: "2–4"
  selling-points:
    typography: "{typography.title-serif-medium}"
    maxItems: 3
  visual-hero:
    zone: "{spacing.zone-visual}"
    style: "simple, restrained, single-subject, professional"
    density: "low"
    maxPrimarySubject: 1
    maxSupportingObjects: 2
    maxDataCards: 2
    emptySpace: "55%–65%"
  footer-curve:
    backgroundColor: "{colors.footer-curve}"
    shape: "blue curved closure"
  brand-slogan:
    text: "{copy.slogan}"
    typography: "{typography.title-serif-regular}"
    textColor: "{colors.text-inverse}"
  risk-disclosure-block:
    text: "{copy.risk-disclosure}"
    typography: "{typography.micro-legal}"
    textColor: "{colors.risk-disclosure}"
  grid-cell:
    canvas: "{canvas.grid-cell}"
    backgroundColor: "{colors.palette-b-bg}"
  grid-cell-master:
    canvas: "{canvas.grid-cell-master}"
    backgroundColor: "{colors.palette-b-bg}"
  grid-master:
    canvas: "{canvas.grid-cell-master}"
    layout: "{canvas.grid-layout}"
    outputModeDefault: "single complete 3x3 master image"
    qualityGoal: "high-definition, complete text, complete imagery, no garbled text, no obvious errors"
  grid-story-card:
    style: "dark minimal story card"
    composition: "one proposition, one symbol, one light source"
    textPlacement: "lower-left / center / right-balanced"
  grid-center-card:
    style: "copy-led center statement card"
    typography: "{typography.title-serif-heavy}"
    composition: "large title, minimal symbol, strongest contrast"
  threshold-badge:
    typography: "{typography.title-serif-heavy}"
    textColor: "{colors.champagne-gold}"
    keywords: "{copy.threshold-keywords}"
  data-card:
    style: "transparent glass panel"
    border: "1px solid rgba(201, 169, 98, 0.3)"
    shadow: "{shadow.card-soft}"

composition:
  density: "low"
  core-rule: "one scene + one primary subject + one accent"
  empty-space-ratio: "55%–65%"
  max-primary-subjects: 1
  max-supporting-objects: 2
  max-data-cards: 2
  max-people: 2
  background-detail: "soft, low-contrast, non-distracting"
  no-combined-sets: "do not combine people, city skyline, sea view, charts, globe, documents, trophy and data panels in one image"

nine_grid_delivery:
  default-output: "single complete 3x3 master image"
  master-canvas: "1080x1080"
  cell-logic-size: "360x360"
  split-output-trigger: "only when user explicitly asks for separate single images"
  quality-priority: "clarity and correctness before quantity"
  mandatory-quality: "HD, complete nine cells, complete text, no garbled text, no cropped core imagery, no obvious visual errors"

visual_language:
  principle: "theme-first metaphor, not literal financial decoration"
  default-expression: "symbolic, spatial, atmospheric, natural or object-based metaphor"
  direct-finance-limit: "charts, dashboards, candlesticks, currency symbols and trading screens are not default primary visuals"
  diversity-rule: "for multi-poster output, each image must use a different metaphor family"
  max-literal-finance-elements: 1
  preferred-metaphor-families:
    threshold-seat: "empty seat, private doorway, quiet invitation, reserved table, illuminated threshold"
    information-source: "lighthouse, window, horizon, telescope, compass shadow, layered light path"
    alpha-opportunity: "hidden path, constellation, quiet current, sealed envelope, narrow beam of light"
    same-frequency-circle: "round table, aligned seats, concentric ripples, orbit, quiet salon"
    research-global-view: "observatory, star map, world texture, navigation chart, globe shadow"
    long-term-companionship: "sailing route, mountain ridge, tree rings, calm river, sunrise horizon"
    layout-vs-waiting: "chessboard, split light, early footprints, half-open curtain, distant route"
---

# qieman-design-vip

| 字段 | 值 |
|------|-----|
| **ID** | `qieman-design-vip` |
| **层级** | L2 |
| **场景** | VIP 私域海报 |
| **规范** | 本文件 `SKILL.md` |
| **依赖** | [`qieman-design-ui`](../qieman-design-ui/qieman-ui-design.md) |
| **更新日期** | 2026-07-01 |

## 调用

```bash
npx openskills read qieman-design-vip
```

---

## Overview

qieman-design-vip 是一个面向 **且慢高净值用户私域传播** 的营销视觉生成规范。它用于把高净值门槛、圈层邀请、投研观点、严选机会、全球视野等私域传播需求，转化为专业、克制、高端、可信的 9:16 竖版海报与九宫格传播物料，并适配市面主流 AI 生图工具。

本 Skill **继承并扩展** [qieman-design-ui](../qieman-design-ui/qieman-ui-design.md) 的基础品牌 token（如 `{colors.brand-primary}` #1B88EE），在此基础上定义 VIP 私域专属的蓝金 / 黑金视觉体系、海报版式结构、文案逻辑、AI 生图提示词和九宫格传播方法。

**Version:** V0.1.12

**核心设计气质：**
- 门槛感：资产 300万+、准入筛选、席位稀缺，不是普通理财广告。
- 圈层感：认知同频、信息效率、私域专属，强调「进对圈子」而非促销。
- 专业可信：金融专业感，克制高级，不奢侈品炫耀、不承诺收益。
- 长期主义：帆船、远山、书房、长期价值曲线，避免短期暴涨暗示。
- Agent 友好：所有视觉决策优先引用 token，而不是临时硬编码。

**核心方法：**

```txt
蓝金 / 黑金高端视觉
+
Source Han Serif CN 标题
+
盈米基金｜且慢 Logo 体系
+
300万+ 门槛前置
+
圈层、信息源、投研能力、长期陪伴的价值表达
+
低复杂度构图控制：一个场景 + 一个主视觉 + 一个强调点
+
强视觉语言：一个观点 + 一个符号 + 一处聚光 + 大面积留白
+
九宫格默认交付：先出 1 张完整 3×3 总图，再按明确指令拆分单张
```

### V0.1.4 简洁化更新重点

本版本针对验证中「AI 生图内容过于复杂」的问题，新增 **低复杂度构图规则**：

* 默认只生成 **无字背景图**，不让 AI 同时处理文字、Logo、风险提示和复杂场景。
* 每张图只保留 **1 个主视觉**，例如空席位、邀请函、山湖书房、商务对谈、数据中台中的一个。
* 每张图最多搭配 **2 个辅助物**，例如钢笔、咖啡杯、地球仪、透明数据卡中的两个。
* 数据卡最多 **1–2 张**，只做氛围点缀，不做报告页展示。
* 画面留白建议提升到 **55%–65%**，降低背景细节密度。
* 生图提示词避免使用「可包含 A、B、C、D、E」的开放式长列表，改为「从候选元素中选择 1 个主视觉」。


### V0.1.8 Nine-grid Story System 更新重点

本版本针对「画面简洁但视觉语言需要更强、更高级、更主题化」的问题，新增 **极简隐喻式视觉基准**。

核心调整：

* 默认不直白出现金融元素，优先把主题转译为 **认知、门槛、方向、布局、同频、筛选、长期主义** 等抽象语义。
* 每张图优先采用 **一个观点 + 一个主符号 + 一处聚光 + 大面积留白** 的结构。
* 金融元素从「主视觉」降级为「弱金融暗示」，可完全不出现。
* 鼓励使用棋子、光束、门洞、点阵、同心圆、箭头、轨迹、光点、星轨、筛选路径等高级视觉隐喻。
* 画面应具备观点型传播感，而不是金融场景展示感。
* 九宫格优先采用「每格一个判断句 + 一个强隐喻符号」的观点卡片结构。

新增默认表达公式：

```txt
主题判断
→ 高阶语义
→ 单一视觉符号
→ 极简高对比画面
→ 后期叠加准确文案
```

### V0.1.10 Nine-grid Complete-master 更新重点

本版本针对「模型多图输出限制」和「九格分别生成容易风格漂移」的问题，新增 **完整九宫格总图优先** 的交付规则。

核心调整：

* 用户要求「九宫格」「朋友圈九图」「九格观点图」时，默认先输出 **1 张完整九宫格总图**。
* 完整总图画布默认为 `{canvas.grid-cell-master}`（1080×1080），内部为 `3×3`，每格逻辑尺寸为 `{canvas.grid-cell}`（360×360）。
* 不默认分别输出 9 张单图，避免模型多次生成导致风格漂移、文字不统一、构图不连续。
* 只有当用户明确提出「分别输出单张 / 拆成 9 张 / 逐张出图 / 每格单独导出」时，才切换为单张输出模式。
* 不论完整总图还是单张输出，都必须优先保证：**高清、文字完整、图像完整、无乱码、无明显错误**。

默认工作流：

```txt
先出 1 张完整九宫格总图
→ 验证主题、节奏、视觉统一性
→ 需求稳定后
→ 再按明确口令拆成 9 张单图
```


### V0.1.12 Direct-demand Nine-grid 更新重点

本版本针对真实业务中“用户已经明确提供总标题 + 9 条逐格文案，并直接要求生成完整九宫格图”的场景，新增 **需求直出型九宫格模式（Direct-demand Nine-grid Mode）**。

核心调整：

* 当用户已明确提供：
  1. 一个总标题
  2. 九宫格的 9 条完整文案
  3. 明确要求“生成九宫格图 / 直接出图 / 生成朋友圈九宫格”

  则默认进入 **Direct-demand Nine-grid Mode**。

* 在该模式下：
  - 不默认先输出分镜表
  - 不默认先输出逐格提示词
  - 不默认先做方案解释
  - 直接优先生成 **1 张完整九宫格总图**

* Direct-demand Nine-grid Mode 的目标是：
  - 优先满足“按需求内容直接出图”
  - 优先保证完整 3×3 结构
  - 优先保证文案顺序正确
  - 优先保证整体视觉统一
  - 优先保证缩略图识别度

* 只有在以下情况，才切换回 Storyboard / 分镜模式：
  - 用户明确要求“先输出分镜表”
  - 用户明确要求“先出提示词”
  - 用户没有给出完整 9 条文案
  - 用户只给主题，没有给逐格内容

## When to Use

### 适用范围

本 Skill 适用于：

* 且慢高净值私域宣传海报
* 高净值投资圈邀请图
* 300万+资产门槛海报
* 投资圈层席位开放海报
* 私享投资机会传播图
* 投研观点 / 严选机会 / 全球视野主题图
* 顾问朋友圈转发图
* 私域社群宣传图
* H5 头图 / 活动主视觉图
* 九宫格传播图
* 高净值权益拆解图
* 高净值圈层价值传播图
* AI 生图工具提示词生成
* 无字背景图生成
* 后期排版用海报背景生成

### 不适用范围

不适用于：

* 普通大众理财促销海报
* 电商大促类活动图
* 低幼卡通插画图
* 红包雨 / 抢购类营销图
* 复杂数据分析报告
* PC 官网整站
* App 常规交易 UI
* 后台管理系统
* 非且慢品牌视觉页面
* 承诺收益、暗示稳赚的金融广告

## Token Architecture

### Token 使用规则

- 所有颜色必须来自 `colors:`；基础品牌蓝 `{colors.brand-primary}` 继承自 qieman-design-ui。
- 所有字号、字体、行高必须来自 `typography:`。
- 所有画幅尺寸必须来自 `canvas:`。
- 所有模块间距与版式比例优先来自 `spacing:`。
- 所有固定文案（slogan、风险提示、Logo 文字）必须来自 `copy:`。
- 所有常用组件优先来自 `components:`。
- 生成 HTML/CSS 或设计稿时，将 YAML token 映射为 CSS variables；不要在组件 CSS 中反复硬编码十六进制色值。
- VIP 海报与九宫格不使用 qieman-design-ui 的 `{rounded.*}` 圆角体系作为核心表达；层级优先通过色彩、留白、光影建立。
- AI 生图默认采用 `{composition.core-rule}`：一个场景 + 一个主视觉 + 一个强调点，避免多元素堆叠。
- 若用户未明确要求复杂场景，默认执行 `{composition.density}` 低密度构图，画面留白不低于 `{composition.empty-space-ratio}`。

### Token 引用语法

正文与生成代码中引用 token 时，**分区名必须与 YAML frontmatter 键名一致**：

| YAML 分区 | 引用格式 | 示例 |
|---|---|---|
| `colors` | `{colors.<key>}` | `{colors.champagne-gold}` |
| `typography` | `{typography.<key>}` | `{typography.title-serif-bold}` |
| `canvas` | `{canvas.<key>}` | `{canvas.poster-single}` |
| `spacing` | `{spacing.<key>}` | `{spacing.zone-title}` |
| `shadow` | `{shadow.<key>}` | `{shadow.cinematic}` |
| `copy` | `{copy.<key>}` | `{copy.slogan}` |
| `components` | `{components.<key>}` | `{components.poster-shell}` |

### 命名原则

- `palette-a/b/c-*`：三套 VIP 配色方案的背景与强调色。
- `navy-*` / `black-blue`：深蓝 / 黑蓝金融专业背景色。
- `champagne-gold` / `soft-gold` / `gold-*`：尊享、门槛、稀缺强调色；只作点缀，不可大面积铺满。
- `text-*`：深色背景与浅色背景上的文字层级。
- `zone-*`：海报各区域占画布高度的比例。
- `threshold-*`：300万+ 门槛相关组件与关键词。

### 与 qieman-design-ui 的关系

| 层级 | Skill | 职责 |
|---|---|---|
| 基础层 | qieman-design-ui | 品牌蓝 `{colors.brand-primary}`、基础文本语义色、App/H5 UI 组件 |
| 扩展层 | qieman-design-vip（本 Skill） | VIP 蓝金/黑金配色、思源宋体标题、海报/九宫格版式、私域文案、AI 生图流程 |

当任务同时涉及 App UI 与 VIP 海报时，UI 部分引用 qieman-design-ui，海报部分引用本 Skill。

## Colors

### Core Palette

本 Skill 以蓝金体系为基础，继承 `{colors.brand-primary}` #1B88EE 作为品牌蓝与底部弧形收口色。

核心色彩：

```txt
深蓝 / 黑蓝 / 品牌蓝 / 浅蓝 / 香槟金 / 浅金 / 米白 / 白色
```

| Token | 色值 | 含义 |
|---|---|---|
| `{colors.navy-deep}` | #0A1F3D | 专业、理性、信任、金融感 |
| `{colors.black-blue}` | #0D1526 | 稳重、高端、克制 |
| `{colors.brand-primary}` | #1B88EE | 品牌识别、底部弧形收口 |
| `{colors.light-blue-white}` | #E8F2FA | 通透、专业、国际化、长期主义 |
| `{colors.champagne-gold}` | #C9A962 | 尊享、门槛、稀缺、价值感 |
| `{colors.soft-gold}` | #E8D5A3 | 标题强调、重点词高亮 |
| `{colors.cream}` | #F5F0E8 | 干净、克制、留白感 |
| `{colors.white}` | #FFFFFF | 辅助文字、Logo 反白 |

### Recommended Ratio

推荐比例：

```txt
蓝色：70%–85%
白色 / 浅色：10%–20%
金色：5%–10%
```

金色只作为重点强调和高级点缀，不可大面积铺满。

### Palette A: 深蓝金高净值版

Token 映射：`{colors.palette-a-bg}` / `{colors.palette-a-title}` / `{colors.palette-a-accent}`

适合：

* 300万+门槛
* 席位开放
* 私享投资圈
* 高端商务会谈
* 品牌器物
* 专属圈层

视觉特征：

```txt
深蓝背景
浅金标题
白色辅助文字
金色细线 / 光效点缀
高端商务场景
蓝色弧形底部收口
```

### Palette B: 黑金高净值版

Token 映射：`{colors.palette-b-bg}` / `{colors.palette-b-title}` / `{colors.palette-b-accent}`

适合：

* 九宫格
* 高端权益
* 私域邀请
* 会员专属
* 高端会议室

视觉特征：

```txt
近黑深蓝背景
香槟金重点字
金色线条
商务精英 / 城市夜景 / 会客厅元素
高端、稳重、克制
```

### Palette C: 浅蓝白专业版

Token 映射：`{colors.palette-c-bg}` / `{colors.palette-c-title}` / `{colors.palette-c-accent}`

适合：

* 投资信息源
* 收益天花板
* 认知判断
* 山湖书房
* 投研观点
* 长期主义

视觉特征：

```txt
浅蓝白背景
深蓝标题
少量金色重点词
自然远景
书桌 / 电脑 / 山湖 / 帆船
底部保留蓝色弧形收口
```

### Text & Risk Colors

| Token | 色值 | 用途 |
|---|---|---|
| `{colors.text-primary}` | #FFFFFF | 深色背景主标题 |
| `{colors.text-on-light}` | #1A3A5C | 浅色背景主标题 |
| `{colors.text-gold-emphasis}` | #E8D5A3 | 重点词强调（300万+、席位等） |
| `{colors.risk-disclosure}` | #999999 | `{copy.risk-disclosure}` 风险提示 |
| `{colors.semantic-error}` | #FA440C | 风险警示（继承 ui-design） |

### Color Avoidance

避免：

* 绿色主调
* 土豪金
* 大面积高饱和黄色
* 红色促销感
* 彩虹色科技感
* 廉价渐变
* 过多杂色
* 高饱和赛博霓虹

## Typography

### 字体策略

| Token | 字体 | 字重 | 用途 |
|---|---|---|---|
| `{typography.title-serif-bold}` | Source Han Serif CN / 思源宋体 CN | Bold (700) | 主标题 |
| `{typography.title-serif-heavy}` | Source Han Serif CN / 思源宋体 CN | Heavy (900) | 九宫格拼接大标题、300万+ 门槛数字 |
| `{typography.title-serif-regular}` | Source Han Serif CN / 思源宋体 CN | Regular (400) | 副标题、slogan |
| `{typography.title-serif-medium}` | Source Han Serif CN / 思源宋体 CN | Medium (500) | 卖点标题 |
| `{typography.body-sans}` | Source Han Sans CN | Regular (400) | 数据小字、图表标签 |
| `{typography.body-sans-medium}` | Source Han Sans CN | Medium (500) | 小号说明文字 |
| `{typography.caption}` | Source Han Sans CN | 14px Regular | 辅助说明 |
| `{typography.micro-legal}` | Source Han Sans CN | 11px Regular | `{copy.risk-disclosure}` 风险提示 |

### 主标题风格规则

主标题应体现：

* 稳重
* 典雅
* 正式
* 金融品牌感
* 高净值邀请感

避免：

* 普通黑体大标题
* 卡通字体
* 圆体
* 促销字体
* 过度装饰字体
* 太强互联网网感的标题字体

### 标题排版规则

单张海报中，主标题建议：

* 2–4 行断句
* 大字号
* 行距紧凑但不拥挤
* 留白充足
* 重点词可使用 `{colors.soft-gold}` / `{colors.champagne-gold}` 强调

适合强调的关键词（见 `{copy.threshold-keywords}`）：

* 300万+
* 300万以上
* 投资机会
* 投资圈
* 对的圈子
* 收益天花板
* 全球视野
* 严选机会
* 席位
* 门槛

## Layout

### Canvas Sizes

#### Single Poster — `{canvas.poster-single}`

单张海报尺寸：

```txt
1080 × 1920
```

比例：`{canvas.poster-ratio}` → 9:16

适用：

* 朋友圈竖版海报
* 私域转发图
* 顾问宣传图
* H5 头图
* 高净值圈层邀请页
* 投研观点完整表达页
* 私享机会主题图

#### Grid Poster — `{canvas.grid-cell}`

九宫格单格尺寸：

```txt
360 × 360
```

整体结构：`{canvas.grid-layout}` → 3 × 3

适用：

* 朋友圈九宫格
* 社群传播
* 高净值权益拆解
* 投资圈层主题系列图
* 活动预热
* 顾问私域连续传播

### Size Priority Rule

当用户未明确说明尺寸时：

* 如果用户说「单张海报」「宣传图」「竖版海报」，默认输出 `1080×1920`
* 如果用户说「九宫格」「朋友圈九图」，默认输出 `360×360 × 9`
* 如果用户要求多张同主题海报，保持 `1080×1920` 系列一致性
* 不再使用旧版 `1125×2436` 作为默认尺寸

### Poster Structure — `{components.poster-shell}`

单张海报默认结构：

```txt
顶部品牌区（{components.brand-header}）
↓
主标题区（{components.title-hero}）
↓
副标题 / 简短说明
↓
分隔线 / 装饰点
↓
卖点区（{components.selling-points}）
↓
主视觉区（{components.visual-hero}）
↓
底部蓝色弧形收口（{components.footer-curve}）
↓
安放财富 · 静待花开（{components.brand-slogan}）
↓
市场有风险，投资需谨慎（{components.risk-disclosure-block}）
```

### Layout Ratios

推荐比例（对应 `{spacing.zone-*}`）：

```txt
顶部品牌区：7%–10%（{spacing.zone-brand}）
主标题区：20%–28%（{spacing.zone-title}）
副标题 / 卖点区：12%–20%（{spacing.zone-selling}）
主视觉区：38%–48%（{spacing.zone-visual}）
底部弧形收口：8%–12%（{spacing.zone-footer}）
```

### Poster Layout Requirements

单张海报必须满足：

* 尺寸为 `{canvas.poster-single}`（1080×1920）
* 保持 `{canvas.poster-ratio}`（9:16）构图
* 顶部 Logo 清晰
* 主标题为第一视觉中心
* 主视觉集中在中下部
* 底部有 `{components.footer-curve}` 蓝色弧形收口
* 底部有 `{copy.slogan}` 和 `{copy.risk-disclosure}`
* 画面留白充足
* 信息不堆叠
* 风格贴近用户参考图

### Nine-grid Basics

九宫格单格尺寸：`{canvas.grid-cell}`（360×360）

九宫格不是单张海报缩小版，需要做到：

* 单图可读
* 整体成组
* 主题统一
* 节奏清晰
* 信息分层
* 高端调性一致

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | `{shadow.none}` | 海报背景、大面积色块 |
| Soft Card | `{shadow.card-soft}` | 透明数据卡、信息面板 |
| Gold Glow | `{shadow.gold-glow}` | 金色细线、门槛数字轻微光效 |
| Cinematic | `{shadow.cinematic}` | 主视觉场景景深、会客厅空间层次 |

VIP 海报通过 **色彩深浅、留白、光影质感** 建立层级，而非厚重投影或玻璃拟态。可以使用金属细节、玻璃质感、高级商务空间，但避免过度发光和 3D 装饰。

## Shapes

### Footer Curve — `{components.footer-curve}`

单张海报底部统一使用蓝色弧形收口，颜色为 `{colors.footer-curve}`（`{colors.brand-primary}` #1B88EE）。弧形上方放置 `{copy.slogan}`，下方放置 `{copy.risk-disclosure}`。

### Decorative Elements

* 金色细线分隔：颜色 `{colors.gold-line}`，宽度 1px，用于标题区与卖点区之间。
* 装饰点：小圆点或菱形，颜色 `{colors.champagne-gold}`，用于分隔线两端。
* 透明数据卡：圆角 8–12px，边框 `rgba(201, 169, 98, 0.3)`，背景半透明。

### Logo Symbol Extension

且慢圆形 Logo 可延展为：

* 品牌奖杯
* 金属装置
* 玻璃装置
* 数据中台中心符号
* 桌面摆件
* 空间门洞
* 会客厅艺术装置
* 透明水晶品牌符号

要求：

* 保持原始识别关系
* 不做结构性变形
* 不过度发光
* 不做低清、破碎、拉伸处理

## Components

### Brand Header — `{components.brand-header}`

单张海报顶部默认使用：

```txt
盈米基金｜且慢
```

（引用 `{copy.brand-logo-text}`）

要求：

* 深色背景使用 `{colors.on-dark}` 白色 Logo
* 浅色背景使用 `{colors.brand-primary}` 蓝色 / 彩色 Logo
* Logo 位置清晰但不抢主标题
* Logo 与顶部边距保持高级留白
* 不得拉伸、压扁、旋转或变形

**Logo Placement：**

单张海报推荐：

* 顶部左对齐
* 或顶部居中
* 与主标题保持稳定距离

九宫格推荐：

* 第1格、第5格、第9格可放品牌 Logo
* 其他格子可不放完整 Logo，避免重复拥挤
* 深色格使用白色 Logo
* 浅色格使用蓝色 Logo

### Title Hero — `{components.title-hero}`

* 字体：`{typography.title-serif-bold}` 或 `{typography.title-serif-heavy}`
* 重点词颜色：`{colors.soft-gold}` / `{colors.champagne-gold}`
* 行数：2–4 行断句
* 为第一视觉中心

### Selling Points — `{components.selling-points}`

* 字体：`{typography.title-serif-medium}`
* 最多 3 个卖点
* 使用分隔线 / 装饰点分隔

### Visual Hero — `{components.visual-hero}`

* 占画布 `{spacing.zone-visual}`（38%–48%）
* 集中在中下部
* 风格：simple, restrained, single-subject, professional
* 默认只使用 1 个主视觉，不同时堆叠人物、建筑、自然远景、数据图表和器物
* 辅助物最多 2 个，透明数据卡最多 1–2 张
* 背景细节低对比、低密度，不抢主标题
* 背景图不能把关键人物、建筑、器物放在标题区域

### Footer — `{components.footer-curve}` + `{components.brand-slogan}` + `{components.risk-disclosure-block}`

单张海报底部统一使用：

```txt
安放财富 · 静待花开
```

（`{copy.slogan}`）

并在 slogan 下方加入风险提示：

```txt
市场有风险，投资需谨慎
```

（`{copy.risk-disclosure}`）

风险提示要求：

* 字号小（`{typography.micro-legal}`）
* 弱化处理（`{colors.risk-disclosure}`）
* 可读即可
* 不抢主视觉
* 不隐藏、不删除

### Threshold Badge — `{components.threshold-badge}`

* 字体：`{typography.title-serif-heavy}`
* 颜色：`{colors.champagne-gold}`
* 九宫格第4格优先使用
* 数字必须大、醒目、可远读

### Data Card — `{components.data-card}`

* 透明玻璃面板风格
* 用于全球地图、资产配置图、宏观洞察卡等
* 简洁专业，避免复杂报告堆砌

### Grid Cell — `{components.grid-cell}`

* 尺寸：`{canvas.grid-cell}`（360×360）
* 背景：根据配色方案选用 `{colors.palette-a-bg}` 或 `{colors.palette-b-bg}`

## Page Patterns

### Pattern A: 门槛席位类

适合文案：

* 资产300万以上，才能进的投资圈
* 资产300万+，才能进的投资圈
* 短暂开启席位
* 不是所有人都能进
* 席位有限，短暂开放

推荐场景：

* 高端商务会谈
* 海景会客厅
* 顶层露台
* 城市夜景会议室
* 高端办公室
* 会客沙发
* 空席位
* 邀请制席位
* 私享俱乐部场景
* 会员卡 / 邀请函 / 品牌奖杯

推荐配色：`{colors.palette-a-bg}` 深蓝金高净值版

核心表达：

```txt
门槛
席位
圈层
专属
长期陪伴
```

### Pattern B: 信息源判断类

适合文案：

* 你的投资信息源，决定了你的收益天花板
* 进对圈子，比选对产品重要
* 有些投资机会，不在APP上，不在研报里
* 好的投资判断，来自更高质量的信息源

推荐场景：

* 山湖书房
* 窗边远眺
* 投资桌面
* 电脑走势图
* 书本 / 钢笔 / 咖啡杯
* 指南针
* 帆船远航
* 单人思考
* 数据中台
* 信息卡环绕

推荐配色：`{colors.palette-c-bg}` 浅蓝白专业版

核心表达：

```txt
信息源
判断力
方向感
收益上限
认知圈层
```

### Pattern C: 投研能力类

适合文案：

* 投研观点、严选机会、全球视野
* 顶尖团队深度研判
* 全球资产配置
* 私享投资机会
* 长期价值陪伴

推荐场景：

* 透明数据卡
* 全球地图
* 资产配置图
* 数据中台
* 投资会议桌
* 地球仪
* 金融趋势图
* 城市天际线
* 品牌装置

核心表达：

```txt
专业
严选
全球视野
数据能力
投研判断
```

### Pattern D: 自然隐喻类

适合文案：

* 长期价值陪伴
* 从容穿越周期
* 看得更远，才能走得更稳
* 稳健远航

推荐场景：

* 帆船
* 海面
* 远山
* 日出
* 日落
* 湖面
* 山脉
* 天际线

注意：

* 自然隐喻必须服务金融主题
* 避免变成旅游宣传图

## Semantic Visual Language

### 核心原则：先翻译主题，再选择画面

高净值私域海报不要默认把主题翻译成 **K线、走势图、饼图、金融大屏、金币、钞票、地球仪**。这些是直观金融元素，容易让画面普通、拥挤、广告化。

默认流程应改为：

```txt
主题文案
→ 提炼关键词
→ 转译为高阶语义
→ 选择一个视觉隐喻家族
→ 生成一个简洁主画面
```

### Theme-to-Metaphor Matrix

| 主题关键词 | 高阶语义 | 推荐高级视觉语言 | 避免直给 |
|---|---|---|---|
| 300万+ / 门槛 / 不是所有人能进 | 准入、筛选、稀缺、边界 | 半开的私享门廊、被光照亮的空席位、专属邀请函、静置的席卡、阶梯尽头的一束光 | 钱堆、金条、会员卡大特写、夸张豪华会所 |
| 席位有限 / 短暂开放 | 时间窗口、机会窗口、被保留的位置 | 落地窗前唯一空椅、圆桌上未被打开的邀请函、光线穿过门缝、安静的私享沙龙入口 | 抢购倒计时、红色促销、拥挤人群 |
| 信息源 / 收益天花板 | 视野高度、信息到达、判断边界 | 灯塔、远处海平线、窗外开阔视野、望远镜剪影、指南针投影、层层展开的光路 | 大屏资讯流、密集数据卡、新闻弹窗 |
| 对的圈子 / 同频 | 共识、认知圈层、连接质量 | 圆桌留白、同心涟漪、星体轨道、少量座席围合、安静会谈的侧影 | 一群人开会、商务握手大合影、社群头像墙 |
| Alpha / 私享机会 / 流通 | 隐秘路径、提前抵达、非公开流动 | 暗流、星轨、窄光束、隐约路径、封缄信封、被风掀起一角的地图 | 走势图暴涨、箭头冲天、交易屏幕 |
| 投研观点 / 严选机会 | 观察、筛选、研判、洞察 | 观测台、星图、玻璃棱镜、筛选光束、少量纸页叠层、研究桌面的局部静物 | 复杂研究报告、满屏图表、金融仪表盘 |
| 全球视野 / 资产配置 | 坐标、航线、全局观、跨区域 | 航海图纹理、星盘、世界轮廓压纹、地球阴影、远航路线 | 直白地球仪、世界地图大屏、密集国家标签 |
| 长期陪伴 / 穿越周期 | 时间、耐心、稳定、远方 | 山脊、海面航线、树木年轮、慢河、日出前的远方、长桥 | 收益曲线、保本暗示、过度励志风景 |
| 有人在布局 / 有人在观望 | 先后、路径、决策差异 | 棋盘一枚棋子已落、两束不同方向的光、窗边一人已起身、桌面上已展开的路线图 | 两个人看盘、红绿涨跌屏、焦虑表情 |

### Direct Finance Element Limiter

默认情况下，直观金融元素只允许作为弱辅助，不作为主视觉：

* 可以使用：低透明度趋势线、抽象数据纹理、无字细线图、极简坐标网格。
* 谨慎使用：电脑屏幕、资产配置饼图、全球地图、透明数据卡。
* 默认避免：K线、红绿涨跌、货币符号、密集金融大屏、满屏图表、复杂报告页。

### Multi-visual Diversity Rule

当用户要求生成 4 张、8 张或九宫格时，不能只是换角度重复同一金融场景。必须按不同隐喻家族分配视觉方向：

```txt
方案 1：空间隐喻，例如空席位 / 门廊 / 圆桌
方案 2：自然隐喻，例如海平线 / 山脊 / 光线
方案 3：器物隐喻，例如邀请函 / 指南针 / 封缄信封
方案 4：抽象隐喻，例如星轨 / 涟漪 / 光路 / 棋盘
```

每张图仍然遵守低复杂度规则：**一个主场景 + 一个主视觉 + 最多两个辅助物**。


### Strong Visual Language Benchmark — 极简隐喻视觉基准

当主题强调 **认知、门槛、圈层、布局、方向、筛选机制、长期主义、Alpha** 时，优先采用极简隐喻式表达，而不是直白金融元素堆叠。

目标气质：

* 极简
* 克制
* 强判断感
* 高级
* 高对比
* 高留白
* 强视觉语言
* 非字面金融

核心结构：

```txt
一个观点
+
一个主符号
+
一处聚光
+
大面积留白
+
少量强调色
```

#### One Proposition Rule — 一张图只讲一个判断

每张海报 / 九宫格单格只承载一个核心判断，不并列堆砌多个卖点。

正确方向：

```txt
不是信息差，是认知差
看行情，不如看结构
筛掉的是噪音，留下的是同频
少数人的方向，多数人看不懂
```

避免方向：

```txt
门槛 + 圈层 + 投研 + 全球视野 + 权益 + 服务全部放进一张图
```

#### One Symbol Rule — 一张图只保留一个主符号

主符号必须能独立承载主题，不依赖复杂场景解释。

推荐主符号：

| 主题语义 | 推荐主符号 |
|---|---|
| 门槛 / 席位 | 半开的门、唯一空席、封缄邀请函、被照亮的入口 |
| 信息源 / 认知 | 光点、灯塔、透镜、同心圆、地平线、指南针投影 |
| 布局 / 先手 | 棋子、一步先手、已点亮路径、单向箭头、分割光影 |
| 同频 / 筛选 | 点阵筛选、轨道圈层、聚焦节点、波纹、连接路径 |
| 长期主义 / 复利 | 上扬光轨、远方微光、年轮、星轨、缓慢曲线 |
| Alpha / 隐秘机会 | 暗流、窄光束、隐约路径、星图、被掀起一角的地图 |

#### Copy-led Composition — 文案主导构图

正式海报中，文案本身应是视觉系统的一部分，而不是后置说明。

要求：

* 文字区必须有清晰舞台，背景不可抢字。
* 主符号与标题形成二元关系：上 / 下、左 / 右、中心 / 边缘、明 / 暗。
* 标题区留白应足够强，适合叠加大字重中文标题。
* 无字背景图也必须预留「强标题位」，而不是只留普通空白。

#### Minimal Dark-card Aesthetic — 深色极简观点卡

适合九宫格和观点型传播图。

视觉公式：

```txt
90% 深色背景
+
8% 白色标题
+
2% 金色主符号 / 高光
```

画面特征：

* 深黑蓝 / 黑金背景。
* 微弱纹理、颗粒、雾化光，不做复杂空间。
* 只有一处金色高光，集中在主符号。
* 背景接近空，靠光影和符号传达判断。
* 尽量不用写实金融场景。

#### Advanced Visual Language Do / Don't

Do：

* 用「棋子」表达布局。
* 用「门缝光」表达准入门槛。
* 用「光点穿过点阵」表达认知筛选。
* 用「同心圆」表达结构和圈层。
* 用「一条上扬光轨」表达复利和长期。
* 用「远方微光」表达方向和长期陪伴。

Don't：

* 不要为了高级感而堆砌抽象元素。
* 不要让多个符号同时争抢视觉中心。
* 不要把城市、人物、会议室、图表、地球仪全部塞进一张图。
* 不要做成廉价金融广告或奢侈品炫耀图。

### Premium Story Mood Benchmark — 高级感与故事感基准

参考高端观点卡式表达，画面不应只停留在“抽象图形”，还应具备**微叙事、空间感、情绪张力和被保留的含义**。

目标气质：

* 高级感
* 故事感
* 克制的戏剧性
* 被筛选 / 被接近 / 被照亮的感觉
* 接近答案但不直白揭示
* 安静但有力量

核心结构：

```txt
一个主题判断
+
一个叙事瞬间
+
一个视觉焦点
+
一条隐含路径或边界
+
一处光线揭示
```

#### Story-first Interpretation — 先有情境，再有符号

当主题允许时，不只生成抽象符号，还要让符号存在于一个简洁但成立的情境里。

推荐方向：

* 门缝中的光 —— 表达准入、筛选、被邀请。
* 海面尽头的微光 —— 表达方向、长期、接近答案。
* 山脊或路径通向亮处 —— 表达少数人走的路、靠近答案的路。
* 圆桌中央的光 —— 表达小范围交流、圈层、私享对话。
* 黑暗空间里被点亮的节点网络 —— 表达私域不是聚集，而是筛选后的连接。

要求：

* 情境只能服务一个主题，不做复杂剧情。
* 场景必须简洁、可远读。
* 主体仍然只有一个视觉焦点。

#### Premium Feel Formula — 高级感公式

高级感不来自元素多，而来自以下因素叠加：

```txt
大面积深色基底
+
局部暖金或冷白聚光
+
克制材质（雾面、金属边线、玻璃微光）
+
清晰留白
+
单一明确的主叙事符号
```

推荐做法：

* 用局部聚光制造仪式感。
* 用深色空间制造未知与边界感。
* 用少量金色边线或光轨提升精致度。
* 用尺度反差提升故事感，例如“小入口 / 大空间”“小光点 / 大黑场”。
* 允许轻微景深、雾化、空气感，但不要复杂写实。

#### Story-rich Visual Families — 具故事感的视觉家族

| 家族 | 适合主题 | 推荐画面表现 |
|---|---|---|
| Threshold Arrival / 准入时刻 | 300万+门槛、席位开放、不是所有人都能进 | 半开的门、门缝光、唯一被照亮的入口、通向门的地面光路 |
| Scarce Conversation / 稀缺交流 | 进对圈子、少数人的交流、更接近答案 | 圆桌中央光、少量座位、安静会谈空间的远景或俯视 |
| Hidden Path / 隐秘路径 | 少数人的方向、机会不在公开处、靠近答案的路 | 海面尽头灯光、山路通向微光、单线延伸的光路 |
| Selective Connection / 筛选连接 | 私域不是聚集，是筛选；认知相近的人找到彼此 | 极简节点网络、被点亮的少量节点、连接到中心的路径 |
| Signal Emergence / 信号显现 | 不是信息差，是认知差；真正的信号从不在广场上叫卖 | 黑场中的光点、聚焦光束、透镜、局部显影 |
| Boundary & Circle / 边界与圈层 | 圈层越小，边界越清晰；结构比行情重要 | 同心圆、边线几何、被切开的圆、边界内外对照 |

#### Narrative Diversity Rule — 多元但统一

当生成 4 张、8 张、9 张时，必须体现“表达家族的切换”，而不是同一招反复使用。

推荐搭配：

```txt
第 1 张：空间叙事（门 / 圆桌 / 会谈空间）
第 2 张：路径叙事（海面 / 山路 / 光路）
第 3 张：符号叙事（同心圆 / 棋子 / 光点）
第 4 张：连接叙事（节点网络 / 筛选结构）
```

但整体仍需统一：

* 深色基底一致
* 光线逻辑一致
* 金色强调比例一致
* 文案气质一致
* 构图保持简洁

#### What Creates Story Mood / 什么让画面更有故事感

推荐加入以下微妙线索，而不是复杂剧情：

* 刚被推开的门
* 正在接近终点的一束光
* 远处微亮但不完全揭示的目的地
* 圆桌中心亮起但四周克制安静
* 一组节点中仅少量被连接
* 光从画面边缘进入，而不是平均铺满

避免：

* 人物动作戏过多
* 过度写实的大场景叙事
* 复杂建筑细节
* 过多道具堆叠
* 只是“黑底+金线”但没有主题含义

Don't：

* 不要用 K 线直接表达投资。
* 不要用金币直接表达财富。
* 不要用多人会议直接表达圈层。
* 不要用资讯大屏直接表达信息源。
* 不要用复杂仪表盘直接表达投研。
* 不要把海景、人物、城市、图表、数据卡、品牌器物同时放进一张图。

### Strong Metaphor Mapping — 主题到高级视觉语言

| 主题内容 | 高级语义 | 推荐极简视觉 | 禁止直白表现 |
|---|---|---|---|
| 资产300万以上才能进的投资圈 | 准入门槛、被保留的位置 | 半开的门、唯一空席、封缄邀请函、门缝光 | 钱堆、金条、豪宅、会所大场景 |
| 不是所有人都能进 | 筛选、边界、资格 | 点阵中被照亮的一个点、阶梯尽头的光 | 人群排队、夸张会员卡 |
| 你的投资信息源决定收益天花板 | 视野高度、信息到达 | 灯塔、海平线、透镜、指南针投影 | 新闻流、复杂金融屏幕 |
| 进对圈子，比选对产品重要 | 同频、连接、圈层质量 | 同心圆、轨道圈层、中心聚合点 | 社交聚会、握手大合影 |
| 有些投资机会只在对的圈子里流通 | 非公开路径、暗流、提前抵达 | 暗流光线、窄光束、隐约路径、封缄地图 | 暴涨箭头、交易屏幕 |
| 同样的市场，有人已经在布局 | 先手、路径、判断差 | 棋盘单子、已点亮路线、分割光影 | 两人看盘、红绿涨跌屏 |
| 看行情，不如看结构 | 结构、秩序、底层逻辑 | 同心圆结构、网格中轴、几何骨架 | K线、走势大屏 |
| 认知的复利，比资产的复利更快 | 复利、时间、积累 | 上扬光轨、星轨、年轮、远方微光 | 收益率数字、夸张曲线 |
| 投研观点、严选机会、全球视野 | 观察、筛选、全局 | 观测台、星图、棱镜、航海图纹理 | 复杂研报、地球仪大屏 |

### Nine-grid: 4 Core Strategies

九宫格采用 4 个核心策略：

```txt
局部拼接聚焦
门槛前置筛选
内容分层递进
高端质感统一
```

#### Strategy 1: 局部拼接聚焦

第1 / 第2 / 第3张横向拼接为完整主题大字，打破九宫格割裂感。

适合拼接主题：

* 高净值投资交流圈
* 资产300万以上才能进的投资圈
* 有些投资机会，只在对的圈子里流通
* 投研观点、严选机会、全球视野

执行要求：

* 第一行 3 张图优先形成完整大标题
* 拼接标题在九宫格预览状态下仍可识别
* 标题使用 `{typography.title-serif-bold}` / `{typography.title-serif-heavy}`
* 字号、基线、行距保持一致
* 背景可以统一延展，也可轻微变化
* 第一行减少复杂视觉元素，突出主题文字

#### Strategy 2: 门槛前置筛选

第4格优先突出门槛信息，使目标用户第一时间识别准入条件。

推荐内容（见 `{copy.threshold-keywords}`）：

* 300万+
* 资产300万以上
* 300万资产门槛
* 仅限资产300万以上用户
* 高净值人士专属

执行要求：

* 数字必须大、醒目、可远读
* 第4格不要堆叠过多信息
* 可搭配资产曲线、金色走势、深蓝背景、会员门槛卡
* 作用是精准筛选高净值用户，减少无效曝光

推荐文案：

```txt
300万+
资产300万以上
高净值人士专属
```

```txt
300万资产门槛
筛掉的是噪音
留下的是同频
```

```txt
仅限300万以上用户加入
席位有限
短暂开放
```

#### Strategy 3: 内容分层递进

九宫格按三行逻辑分层：

```txt
第一行：核心主题
第二行：门槛筛选 + 场景认同
第三行：权益拆解 / 品牌收口
```

推荐结构：

```txt
第1格：主题拼接左段
第2格：主题拼接中段
第3格：主题拼接右段
第4格：300万+门槛
第5格：核心视觉中心
第6格：价值主张
第7格：权益点1
第8格：权益点2
第9格：权益点3 / 品牌收口
```

第5格建议作为视觉中心，可放：

* 商务精英会谈
* 高端会客厅
* 品牌 Logo 装置
* 数据中台
* 空席位
* 邀请函

第9格可作为品牌收口，可放：

* 安放财富 · 静待花开
* 席位有限，短暂开放
* 只在对的圈子里流通

#### Strategy 4: 高端质感统一

九宫格整体必须像同一套品牌传播物料，而不是 9 张随机图片。

统一要求：

* 色彩统一
* 字体统一
* 场景统一
* 品牌规范统一
* 光影质感统一
* 信息层级统一

推荐元素：

* 商务精英对谈
* 高端会客厅
* 城市天际线
* 夜景办公空间
* 高端书桌 / 书房
* 品牌奖杯 / 圆形 Logo 装置
* 邀请函 / 会员卡 / 全球配置手册
* 数据中台 / 透明数据卡
* 海景露台 / 顶层空间



## Nine-grid Task Mode Switch

九宫格任务必须先判断执行模式，再决定输出流程。

### Mode A — Storyboard Mode

适用条件：

* 用户只给主题
* 用户没有给出完整 9 条逐格文案
* 用户明确要求“先输出分镜表 / 先给提示词 / 先拆内容”

输出：

* 九宫格分镜表
* 每格观点句
* 每格视觉家族
* 每格主符号
* 每格构图建议
* 每格提示词

特点：

* 先策划，再出图
* 更适合方案探索、创意发散和早期视觉讨论

---

### Mode B — Direct-demand Nine-grid Mode

适用条件：

* 用户给出总标题
* 用户给出完整 9 条逐格文案
* 用户明确要求“生成九宫格图 / 直接出九宫格 / 生成朋友圈九宫格”

输出：

* 直接生成 1 张完整九宫格总图
* 不先输出分镜表
* 不先输出方案分析
* 不先拆成 9 张单图

特点：

* 优先满足“按需求内容直接出图”
* 更适合执行型场景和高确定性需求

---

### Mode C — Split-cell Output Mode

适用条件：

* 用户明确要求“拆成 9 张单图 / 每格单独输出 / 分别生成单张 / 逐张出图”

输出：

* 9 张单独九宫格单图
* 保持与完整九宫格一致的风格系统

特点：

* 适合后续单格精修、朋友圈单发、A/B测试或后期细化

## Nine-grid Dedicated Rules — 九宫格专用规则

九宫格不是 9 张单图的简单集合，也不是竖版海报裁切。它是朋友圈 / 私域环境里的 **观点型传播矩阵**，需要同时满足：

```txt
单格可读
+
整体成组
+
中间有记忆点
+
九格有节奏
+
缩小后仍有高级感
```

### Grid Production Size

对外规范仍使用 `{canvas.grid-cell}`（360×360）作为九宫格单格尺寸；但 AI 生图和设计源文件建议使用 `{canvas.grid-cell-master}`（1080×1080）制作，再导出为 360×360 或组合成 3×3 预览。

原因：

* 360×360 是朋友圈九宫格的结构尺寸。
* 1080×1080 更适合 AI 生成细节和后期排版。
* 最终必须通过 3×3 缩略图预览检查，不以单张高清效果为唯一标准。

### Nine-grid Copy Order Rule

当用户为九宫格明确给出 **9 张文案**、**逐格文案**、**按序文案列表** 时，必须严格按照用户提供的顺序生成，**不得调换、重组、合并或擅自重排**。

#### Order-first Principle

```txt
用户给出顺序 = 最终出图顺序
```

适用情况：

* 用户直接给出 1-9 的九条文案
* 用户按换行、编号、列表方式给出逐格文案
* 用户说明“第一张 / 第二张 / 第三张 …”
* 用户给出完整九宫格文案顺序并要求生图

执行要求：

* 第1条文案必须对应第1格
* 第2条文案必须对应第2格
* 第3条文案必须对应第3格
* 依此类推，直到第9格
* 不得因为“更适合排版”或“更适合节奏”而重新排序
* 不得擅自把中心观点挪到第5格，除非用户原本就这样给出
* 不得擅自把门槛文案提前、把品牌收口文案后置，除非用户原本顺序就是如此

#### When the User Does Not Provide Per-cell Copy

只有在用户 **没有明确提供每张图文案** 时，才允许根据总主题自由拆分内容。

允许发挥的前提：

* 用户只给一个总主题
* 用户只给一个主标题
* 用户没有指定每格文案内容和顺序

此时可以：

* 按主题逻辑拆成 9 格
* 按中心观点、解释、延伸、品牌收口进行结构化编排
* 按视觉节奏和传播节奏安排顺序

#### Conflict Resolution Rule

如果用户同时给出：

* 明确的逐格文案顺序
* 和一个通用九宫格结构模板

则必须优先遵循：

```txt
用户明确文案顺序 > 默认九宫格模板 > 模型自主发挥
```

也就是说：

* 默认结构（如第5格中心、第9格收口）只能在用户未指定顺序时使用
* 一旦用户给了明确顺序，模板必须让位于用户顺序

#### Prompt Execution Requirement

九宫格提示词中必须显式写出：

```txt
严格按照用户提供的9条文案顺序生成，
按从左到右、从上到下的九宫格阅读顺序依次对应：
第1格、第2格、第3格、
第4格、第5格、第6格、
第7格、第8格、第9格。
不要打乱顺序，不要重排文案。
```

#### Reading Order Mapping

九宫格默认阅读顺序定义为：

```txt
第1格 第2格 第3格
第4格 第5格 第6格
第7格 第8格 第9格
```

即：

* 从左到右
* 从上到下

除非用户明确指定特殊顺序，否则所有逐格文案都按此顺序映射。


## User-provided Copy Priority Rule

当用户已经明确提供九宫格总标题与 9 条逐格文案时，必须优先遵循用户文案，不得默认重写为模型自拟文案。

执行要求：

* 总标题作为九宫格整体主题，置于完整九宫格总图顶部。
* 9 条逐格文案严格按从左到右、从上到下的顺序映射到第1格至第9格。
* 不得调换顺序。
* 不得擅自重组。
* 不得合并两个格子的文案。
* 不得擅自删除核心语义。
* 不得默认改写为更短的新文案，除非用户明确要求“压缩文案”或“优化文案”。

### 允许的轻度处理

为了适配九宫格排版，允许进行以下轻度处理：

* 将“/”处理为换行或层级断句
* 将长句拆为主标题 + 副标题样式
* 对标点做极小幅规范化
* 在不改变原意的前提下调整换行位置
* 为了适配缩略图可读性，允许略微调整行数，但不得改变文案含义

### 不允许的处理

* 不得把用户文案改成全新观点句
* 不得擅自加入模型生成的营销文案
* 不得擅自加入强行动号召
* 不得把完整文案替换成只有关键词的极短句

### Nine-grid Incomplete Copy Fill Rule

当用户提供的九宫格文案 **少于 9 条** 时，不能打乱已给文案，也不能为了补齐九宫格而重写用户已给内容。

#### Partial-copy Principle

```txt
已给文案保持原顺序
+
缺失格子按主题补位
```

适用情况：

* 用户只给出 1–8 条逐格文案
* 用户明确说“按这些文案做九宫格”，但文案数量不足 9 条
* 用户给出若干句主题观点，希望补齐为九宫格

执行要求：

* 用户给出的第1条文案仍对应第1格
* 用户给出的第2条文案仍对应第2格
* 依此类推，不得插队、调换或重排
* 缺失格子从用户已给文案之后继续补齐
* 补位文案必须服务同一主题、同一语气、同一传播目标
* 不得把补位文案插入到用户已给文案中间

#### Fill Position Rule

如果用户给出 N 条文案，N 小于 9：

```txt
第1格至第N格：严格使用用户给出的文案
第N+1格至第9格：根据主题补充文案
```

示例：

```txt
用户给出 6 条文案
→ 第1–6格严格按用户文案顺序
→ 第7–9格由 Skill 根据主题补齐
```

#### Fill Content Strategy

补位文案优先承担以下作用：

* 总结主题
* 强化门槛
* 补充圈层价值
* 补充情绪共鸣
* 做品牌收口
* 做行动暗示，但不做强促销

推荐补位方向：

```txt
第7格：补充价值 / 场景认同
第8格：补充权益 / 情绪共鸣
第9格：品牌收口 / 席位有限 / 安放财富 · 静待花开
```

#### When Copy Is More Than 9 Items

如果用户给出的文案超过 9 条：

* 默认只使用前 9 条作为九宫格文案
* 不得把多余文案强行塞进已有格子
* 不得缩小文字把所有文案塞满画面
* 可提示“已按前9条生成，剩余文案可作为下一组九宫格”

#### Ask-or-fill Rule

如果用户明确要求“不要改文案”“只用我给的文案”，但文案不足 9 条：

* 不应擅自补写新文案
* 应保留空白格、视觉符号格或品牌收口格
* 空白格也要保持画面完整和高级感

如果用户没有明确禁止补写，则可以按主题自然补齐。

#### Prompt Execution Requirement

当文案不足 9 条时，提示词必须明确写出：

```txt
严格保留用户已给文案的顺序，
第1条对应第1格，第2条对应第2格，依此类推。
缺失格子从后续位置开始补齐，
不要把补位文案插入到用户文案中间，
不要打乱用户原始顺序。
```

### Nine-grid Delivery Priority Rules

由于模型出图限制，九宫格任务默认采用 **完整总图优先** 的交付策略。

#### Default Output Rule

当用户要求生成九宫格时，默认优先输出：

```txt
1 张完整九宫格总图
=
1 个 1080×1080 画布
包含 3×3 共 9 个格子
```

而不是默认分别输出 9 张单图。

默认理解规则：

* 用户说「九宫格」「朋友圈九图」「九图传播」「九格观点图」时，默认输出 **1 张完整九宫格总图**。
* 只有当用户明确提出「分别输出单张」「拆成 9 张单独输出」「每格单独给我」「逐张输出」「我要单张版本」「给我 9 张单独图片」时，才切换为 **9 张单独输出模式**。

#### Why Full-grid First

优先输出完整九宫格总图的原因：

* 更容易先验证整体主题是否成立。
* 更容易确认九格之间的节奏、层级与统一性。
* 更符合朋友圈九宫格预览效果。
* 能降低模型在多次独立生成中产生风格漂移的问题。
* 更适合需求早期方案确认。

#### Default Canvas Rule

默认完整九宫格总图规格：

```txt
1080 × 1080
3 × 3
每格逻辑尺寸 360 × 360
```

要求：

* 9 格必须完整展示。
* 不可裁切边缘格。
* 不可出现拼接错位。
* 不可出现格子间距不一致。
* 不可出现九格比例失真。
* 需要有清晰的 3×3 结构边界，但边线不宜过重。

### Single-grid Output Trigger Rule

只有在以下情况，才允许从默认“完整九宫格总图”切换为“分别输出单张”。

#### Explicit Trigger

用户明确提出以下任一指令：

* 分别输出单张
* 拆开给我
* 每格单独导出
* 逐张出图
* 我要单张版本
* 给我 9 张单独图片

#### Stable-demand Trigger

当完整九宫格方案已经确认，且文案、视觉语言、风格方向稳定后，可以进入单张输出阶段。

推荐工作流：

```txt
先出 1 张完整九宫格总图
→ 用户确认主题 / 节奏 / 风格
→ 再根据明确指令拆分输出单张
```

#### Consistency Requirement

若后续进入单张输出模式，必须保持：

* 主色系统一致。
* 字体风格一致。
* 光影逻辑一致。
* 视觉语言一致。
* 主符号表达一致。
* 文案调性一致。

单张输出不得因为逐张生成而明显风格漂移。

### Nine-grid Quality Requirements

无论输出完整九宫格总图，还是分别输出单张，必须优先满足以下质量要求。

#### Core Quality Goal

```txt
高清
+
文字完整
+
图像完整
+
没有乱码
+
没有明显错误
```

#### 1. High Definition

所有九宫格输出必须高清清晰。

要求：

* 画面清晰，不模糊。
* 边缘清晰，不糊边。
* 标题可读。
* 主视觉符号可辨认。
* 不得出现低清晰度压缩感。

#### 2. Complete Text

所有格子的标题和副标题必须尽量完整可读。

要求：

* 不缺字。
* 不断句错乱。
* 不出现明显乱码。
* 不出现错误中文。
* 不出现无意义英文碎片。
* 不出现残缺字形。

建议：

* 单格文案尽量短句化。
* 标题优先 8–18 个汉字。
* 副标题尽量精简。
* 避免长段落小字。

#### 3. Complete Imagery

所有格子的图像主体必须完整。

要求：

* 主符号不得被裁切一半。
* 门、圆、路径、光束、节点等核心元素必须完整。
* 九宫格边缘格不可被错误裁边。
* 图像主体不得被文字严重遮挡。
* 视觉中心必须清晰。

#### 4. No Garbled Content

严格避免：

* 中文乱码。
* 英文乱码。
* 伪文字。
* 错误数字。
* 无意义图标。
* 结构错误的图形。
* 人物畸形（如有人物）。
* 明显透视错误。
* 拼接错乱。

#### 5. No Obvious Visual Errors

严格避免：

* 九格构图失衡。
* 图文层级混乱。
* 中心格不突出。
* 同一组中风格严重不统一。
* 光影逻辑前后冲突。
* 金色高光过量。
* 背景噪点过多。
* 元素堆砌。


## Direct-demand Nine-grid Quality Bar

当九宫格任务属于 Direct-demand Nine-grid Mode 时，验收标准必须优先围绕“需求内容是否被准确执行”来判断，而不是优先追求抽象创意发散。

### Priority Order

在需求直出型九宫格中，质量优先级如下：

```txt
文案顺序正确
>
九格完整
>
文字可读
>
整体统一
>
主符号明确
>
高级感与氛围感
```

### Mandatory Checks

必须检查：

* 总标题是否正确出现
* 第1格至第9格是否严格对应用户文案顺序
* 是否存在漏字、错字、断句异常
* 是否有明显乱码
* 9 格是否完整呈现，没有裁边
* 第5格是否有足够视觉中心感
* 整体是否仍保持高净值、克制、深蓝黑金调性
* 缩略图下是否仍可识别这是“高净值观点型九宫格”

### Execution-first Principle

Direct-demand Nine-grid Mode 的核心不是“先解释方案”，而是：

```txt
用户给内容
→ 直接出完整九宫格
→ 再视情况微调
```

而不是：

```txt
用户给内容
→ 先长篇分析
→ 再分镜
→ 再提示词
→ 最后才出图
```

### Nine-grid Text Safety Rule

由于模型对小字和复杂排版的生成稳定性有限，九宫格文字必须采用 **短句优先、层级简化、可读第一** 的策略。

#### Text Safety Principles

* 标题短于长。
* 大字优先于小字。
* 单句优先于段落。
* 强观点优先于复杂解释。
* 可读性优先于信息量。

#### Recommended Text Limit

每格建议：

* 主标题：8–18 个汉字。
* 副标题：10–24 个汉字。
* 小字：尽量不用，必要时极短。

#### Text Stability Strategy

如果工具对文字生成不稳定，优先采用：

```txt
完整九宫格总图优先
+
单格短标题
+
少量副标题
+
强标题位留白
```

必要时可采用：

```txt
先生成完整九宫格背景结构
→ 后期在设计软件中叠加准确文字
```

但在直接成稿模式下，仍应尽量保证文字正确、完整、无乱码。

### Nine-grid Prompt Execution Rule

九宫格生图提示词必须明确输出模式，避免模型误解为 9 张分开图；同时在用户提供逐格文案时，必须明确顺序映射，避免模型自行重排。

#### Default Prompt Instruction

当生成九宫格时，提示词必须明确写出：

```txt
请优先生成 1 张完整九宫格总图，
画布为 1080×1080，
3×3 排列，
总图中完整包含 9 个格子，
而不是分别生成 9 张单独图片。
```

如果用户给出了逐格文案，提示词还必须明确写出：

```txt
请严格按照用户提供的文案顺序生成，
按从左到右、从上到下的九宫格阅读顺序映射到第1格至第9格，
不要打乱顺序，不要重排文案。
```

如果用户给出的逐格文案不足 9 条，提示词还必须明确写出：

```txt
请保留已给文案的原始顺序，
第1条对应第1格，第2条对应第2格，依此类推；
不足的格子从后续位置开始补齐，
不要把补位文案插入到用户已给文案中间。
```

#### Quality Instruction

提示词必须同时写出：

```txt
确保画面高清，
确保 9 格完整显示，
确保每格文字完整可读，
不要乱码，
不要缺字，
不要裁切主体，
不要出现明显错误。
```

#### Single-grid Trigger Instruction

只有在用户明确要求单张输出时，提示词才可写为：

```txt
请分别输出 9 张单独的九宫格单图，
每张保持与完整九宫格一致的风格与质量。
```

### Nine-grid Core Formula

推荐使用：

```txt
中心观点卡
+
8 张周边故事 / 符号卡
```

九宫格的中心第 5 格必须承担最强记忆点，周边 8 格负责展开主题语义。

```txt
第5格 = 核心观点 / 主标题 / 品牌判断
第1、3、7、9格 = 情绪与故事感
第2、4、6、8格 = 逻辑、门槛、筛选、连接
```

### Recommended Grid Structure

#### Structure A: 观点型九宫格

适合认知差、圈层、信息源、布局、筛选机制类主题。

| 位置 | 角色 | 推荐内容 | 推荐视觉 |
|---|---|---|---|
| 1 | 开场判断 | 点出问题或反常识 | 黑场光点、远景微光、暗处边界 |
| 2 | 圈层现象 | 大多数人如何理解 | 同心圆、池塘、广场暗喻 |
| 3 | 机会入口 | 真正机会在哪里 | 门缝光、被照亮的入口、金色边界 |
| 4 | 筛选机制 | 为什么不是所有人 | 点阵筛选、少数亮点、窄光束 |
| 5 | 核心主张 | 最大标题 / 主题金句 | 纯文字 + 单一符号，最强对比 |
| 6 | 价值解释 | 圈层、边界、结构 | 圆形边界、透镜、切面结构 |
| 7 | 对话价值 | 一次对话 / 信息抵达 | 一条光线、圆桌光、路径 |
| 8 | 准入感 | 只邀请符合要求的人 | 半开的门、邀请函、唯一空席 |
| 9 | 品牌收口 | 同频、长期、谨慎 | 门内暖光、远处微光、品牌收口 |

#### Structure B: 门槛邀请型九宫格

适合“资产300万+”“席位有限”“不是所有人都能进”。

| 位置 | 角色 | 推荐内容 | 推荐视觉 |
|---|---|---|---|
| 1 | 稀缺感 | 不是公开招募 | 黑色空间、唯一入口 |
| 2 | 资产门槛 | 300万+准入 | 极简门槛线、封缄邀请函 |
| 3 | 席位感 | 位置有限 | 唯一空席、微光桌面 |
| 4 | 筛选机制 | 筛掉噪音 | 点阵中少数亮点 |
| 5 | 中心主张 | 资产300万+才能进的投资圈 | 大字标题 + 金色线框 |
| 6 | 圈层价值 | 留下同频 | 同心圆 / 圆桌 / 连接节点 |
| 7 | 信息效率 | 更早抵达 | 光路、信号、远方微光 |
| 8 | 投研陪伴 | 不只信息，更是判断 | 透镜、观测台、桌面一束光 |
| 9 | 行动收口 | 席位有限，短暂开放 | 半开的门、品牌 slogan |

#### Structure C: 高级故事型九宫格

适合更接近参考图的高级黑金观点卡。

```txt
第1行：提出矛盾
第2行：给出核心判断
第3行：完成邀请和收口
```

| 行 | 传播任务 | 视觉节奏 |
|---|---|---|
| 第一行 | 建立问题：信息噪音、机会难见、方向不明 | 黑场、远光、局部符号 |
| 第二行 | 给出判断：圈层越小，边界越清晰 | 中心大标题、强符号、边界图形 |
| 第三行 | 完成转化：筛选、邀请、同频 | 门、路径、连接、品牌收口 |

### Single-cell Copy Rules

九宫格单格必须通过缩略图测试，因此文案比单张海报更短、更硬、更像判断句。

#### 主标题

* 建议 8–18 个汉字。
* 最多 2 行。
* 每行 6–10 个汉字最稳。
* 不使用长句，不写完整说明段。
* 可以使用顿号和逗号，但避免复杂标点。

示例：

```txt
不是信息差，
是认知差
```

```txt
圈层越小，
边界越清晰
```

```txt
真正的机会，
从不在广场上叫卖
```

#### 副标题

* 建议 10–24 个汉字。
* 最多 1–2 行。
* 只解释主标题，不新增第二个卖点。

示例：

```txt
高净值投资交流圈
```

```txt
资产300万+用户加入
```

```txt
筛掉噪音，留下同频
```

#### 小字 / 风险提示

* 九宫格单格内小字应极少。
* 品牌 slogan 和风险提示可以只在第 5 或第 9 格出现。
* 若每格都放风险提示，必须保持极低存在感，不影响主标题可读性。
* 不要把完整合规长段落塞入九宫格。


## Long-copy Layout Rule for Nine-grid

当用户提供的九宫格单格文案较长时，优先通过排版处理解决，而不是优先重写文案。

执行策略：

* 每格默认采用：
  - 1 个主视觉符号
  - 1 段标题型文案
  - 1 段副标题型文案
* 文案区优先放置于格子下半部或下三分之一位置。
* 画面主体简化，避免主视觉过大挤占文字空间。
* 每格文字建议控制在 2–4 行。
* 每行字数建议控制在 8–14 个汉字左右。
* 当文案过长时，优先缩小主视觉密度，而不是压缩到不可读小字。
* 中心第5格允许文字更大、更醒目，作为视觉中心。
* 第1、2、3、4、6、7、8、9格的文字应保持相对统一的字号体系。

### 文案呈现方式优先级

优先使用：

```txt
原文案
→ 通过“/”拆分为两层
→ 第一层做主标题
→ 第二层做副标题
```

示例：

```txt
你需要的不是建议，是共鸣 / 和懂的人聊，一句顶一万句
```

可呈现为：

```txt
主标题：你需要的不是建议，是共鸣
副标题：和懂的人聊，一句顶一万句
```

而不是改写为：

```txt
不是建议 / 是共鸣
```

除非用户明确要求压缩。

### 视觉让位原则

当文案承载优先级更高时，图像必须让位于文字：

* 优先保证文字完整可读
* 再保证主符号清晰
* 最后再追求复杂氛围与细节装饰

### Single-cell Layout Rules

每格只允许一种主排版：

| 类型 | 适合位置 | 规则 |
|---|---|---|
| 左下标题型 | 1、3、4、6、7、9 | 主标题左下，视觉符号在右上或中上 |
| 中心观点型 | 5 | 大标题居中，符号极少，最强识别 |
| 右侧标题型 | 2、8 | 主标题在右侧，左侧放门、路径、光束 |
| 纯符号型 | 辅助格 | 几乎无字，只做情绪和节奏 |

必须避免：

* 每格都左下角排版，导致节奏单调。
* 每格都居中大标题，导致没有层级。
* 文案压住主符号。
* 主符号与标题竞争视觉中心。

### Visual Family Assignment for 3×3

生成九宫格前，必须先做“九格视觉家族分配表”。

推荐分配：

| 位置 | 视觉家族 | 作用 |
|---|---|---|
| 1 | Signal Emergence / 信号显现 | 开场吸引 |
| 2 | Boundary & Circle / 边界与圈层 | 建立结构 |
| 3 | Threshold Arrival / 准入时刻 | 制造机会感 |
| 4 | Selective Connection / 筛选连接 | 解释门槛 |
| 5 | Center Statement / 中心观点 | 记忆点 |
| 6 | Lens / Structure / 透镜结构 | 强化判断 |
| 7 | Hidden Path / 隐秘路径 | 增加故事感 |
| 8 | Scarce Conversation / 稀缺交流 | 体现私域价值 |
| 9 | Brand Closure / 品牌收口 | 形成转化 |

限制：

* 同一视觉家族最多连续出现 2 次。
* 9 格中至少包含 3 种视觉家族。
* 不要 9 格全是光点 / 全是门 / 全是同心圆。
* 中心第 5 格不能和周边格视觉权重相同。

### Thumbnail Test

九宫格生成后必须做 3 个检查：

#### 1. 3 秒测试

把九宫格缩小到朋友圈预览尺寸后，3 秒内能看出：

* 主主题是什么。
* 第 5 格记忆点是什么。
* 整体是高端观点图，不是普通金融广告。

#### 2. 2 米测试

从远处看，至少有 3 张图的主符号仍然可识别：

* 门
* 光路
* 同心圆
* 棋子
* 节点网络
* 圆桌光
* 远方微光

#### 3. 降噪测试

遮住所有小字后，画面仍能成立；去掉所有图像后，标题仍能成立。图像和文字必须互相增强，而不是互相依赖。


## Nine-grid Visual Simplification Rule

当九宫格任务以“完整文案承载”为主时，必须降低视觉复杂度，避免图文同时过载。

执行要求：

* 每格只保留 1 个主视觉符号
* 主视觉占比不宜过大，避免挤压文字区域
* 不使用复杂多人场景
* 不使用复杂金融数据屏
* 不使用复杂图表
* 不使用多器物堆叠
* 每格背景应保持简洁、可读、可承载文字
* 金色高光控制在局部，不大面积铺金
* 背景应使用深蓝黑，而不是纯黑，提升缩略图识别度
* 图文关系优先级为：

```txt
文案可读
>
主符号明确
>
高级氛围
>
装饰细节
```

### Direct-demand 模式下的画面原则

在 Direct-demand Nine-grid Mode 中：

* 文案是主角
* 视觉是承载
* 隐喻符号是辅助识别
* 不追求每格独立成为复杂海报
* 追求整组九宫格在朋友圈缩略图中整体成立

### Nine-grid Visual Avoidance

严格避免：

* 9 格都像单张海报缩小版。
* 9 格全是会议室、桌面、城市夜景。
* 每格都放满数据屏、图表、地球仪。
* 每格都放 Logo，造成品牌噪音。
* 每格文案超过 3 行。
* 复杂小字密集堆叠。
* 中心格不突出。
* 周边格抢中心格。
* 缩小后只剩黑成一片，没有可识别符号。
* 只有黑底金线，没有故事含义。

### Nine-grid Prompt Workflow

生成九宫格时，必须先判断任务模式，再执行对应流程。

---

### Workflow A — 用户未给完整文案

适用：

* 用户只有主题
* 或文案不足 9 条
* 或明确要求先看方案

流程：

1. 提炼主题核心判断
2. 拆成 9 个单格观点
3. 为每格选择视觉家族
4. 为每格定义主符号
5. 输出九格分镜表
6. 输出每格提示词
7. 根据用户确认后再生成完整总图

---

### Workflow B — 用户已给完整 9 条文案，要求直接出图

适用：

* 用户已给总标题
* 用户已给 9 条逐格文案
* 用户明确要求生成九宫格图

流程：

1. 读取总标题
2. 严格读取第1至第9条逐格文案
3. 保持从左到右、从上到下的九宫格顺序
4. 为每格匹配一个简洁主视觉符号
5. 统一黑金 / 深蓝黑金视觉系统
6. 直接生成 1 张完整九宫格总图
7. 仅在用户明确要求时，再拆成 9 张单图

---

### Workflow C — 用户要求拆成单张

适用：

* 用户明确要求“每格单独输出”
* 或完整九宫格总图已确认，需要进一步拆单张

流程：

1. 保持完整九宫格的顺序与视觉风格
2. 按第1格至第9格逐格拆分
3. 每张单图保持独立可读
4. 不得因为拆单张而明显风格漂移

### Nine-grid Storyboard Template

```txt
请使用 qieman-design-vip Skill 生成一组高净值私域九宫格。

主题：
「{主题文案}」

风格目标：
参考高端黑金观点卡。整体深色、极简、强隐喻、有故事感，不直白使用金融元素。
每格只表达一个判断，每格只保留一个主符号或一个微叙事情境。

请先输出九格分镜表，字段包括：
1. 格子编号
2. 单格观点句
3. 视觉家族
4. 主符号 / 微叙事情境
5. 标题位置
6. 是否出现品牌 Logo
7. 是否需要风险提示

结构要求：
第5格为中心观点卡，主标题最大。
第1、3、7、9格偏故事感。
第2、4、6、8格偏结构解释。
至少使用 3 种视觉家族。
同一视觉家族最多连续出现 2 次。
不要 9 格全是同一类黑金抽象符号。

视觉要求：
黑蓝或深蓝基底，白色大标题，金色只作为 1 处主符号或高光。
每格留白 45%–65%。
每格主标题最多 2 行。
不要复杂金融图表，不要 K 线，不要金币钞票，不要会议室堆叠，不要多人写实场面。
```

### Single-cell Prompt Template

```txt
生成一张 1:1 正方形高端观点卡背景图，不要文字，不要 Logo。
这是且慢高净值私域九宫格的第 {n} 格。

单格观点：
「{单格观点句}」

视觉家族：
{视觉家族}

主视觉：
只使用一个主符号 / 微叙事情境：「{主符号}」。

构图：
{标题位置} 预留大面积干净留白，便于后期叠加中文大标题。
主符号放在 {主符号位置}，只保留一处金色高光。
背景为深黑蓝或黑金色调，画面简洁、高级、有故事感。
不要直白金融元素，不要 K 线，不要交易屏幕，不要金币钞票，不要复杂图表，不要多人场景，不要拥挤构图。
```

### Example Nine-grid Brief

主题：

```txt
不是所有信息，都适合公开
```

推荐九格：

| 格 | 单格观点 | 视觉家族 | 主符号 |
|---|---|---|---|
| 1 | 每天1000条资讯，真正有用的不超过3条 | Signal Emergence | 黑场中少数亮点 |
| 2 | 大多数人在同一个池子里抢同一条鱼 | Boundary & Circle | 暗色池面同心波纹 |
| 3 | 你没听说过的标的，才是真正的机会所在 | Threshold Arrival | 半开的金色门缝 |
| 4 | 圈层，是更有效的风险筛选机制 | Selective Connection | 点阵中少数连接 |
| 5 | 不是所有信息，都适合公开 | Center Statement | 大标题 + 金色边线 |
| 6 | 财富最终靠的不是理财顾问，而是同行者 | Scarce Conversation | 圆桌中央一束光 |
| 7 | 一次对话的价值，有时胜过一份尽调报告 | Hidden Path | 单线光路穿过黑场 |
| 8 | 我们只邀请符合要求的投资人 | Threshold Arrival | 封缄邀请函 / 门框 |
| 9 | 边界清晰的圈，只为同频的人而开 | Brand Closure | 门内暖光 + 品牌收口 |


## Copywriting Framework

### Copy Tone

高净值私域文案必须：

* 邀请式
* 克制
* 稳重
* 有门槛
* 有认知筛选感
* 不促销
* 不喊卖点
* 不制造焦虑
* 不承诺收益

### Core Brand Principles (Copy-driven)

#### 高净值门槛感

画面必须让用户第一眼感受到：

* 这不是普通理财服务
* 这是面向高净值用户的专属圈层
* 有明确资产门槛
* 有筛选机制
* 不是所有人都能进入

推荐表达：

* 资产300万以上
* 300万+
* 高净值人士专属
* 不是所有人都能进
* 席位有限，短暂开放
* 短暂开启席位

#### 圈层与同频感

高净值私域宣传的重点不是「卖产品」，而是强调：

* 与认知相当的人同行
* 进入更高质量的信息圈层
* 交流环境纯粹
* 资源、观点和机会在对的圈子中流通

推荐表达：

* 只与认知相当的人同行
* 进对圈子，比选对产品重要
* 筛掉的是噪音，留下的是同频
* 有些投资机会，只在对的圈子里流通

#### 专业可信

视觉必须体现金融专业感，而不是奢侈品炫耀感。

要求：

* 场景高级但克制
* 图表简洁专业
* 文案不承诺收益
* 风险提示必须保留
* 不制造焦虑
* 不夸张渲染暴富、稀缺、抢购

#### 长期主义

且慢高净值私域视觉应传达长期陪伴、理性配置和穿越周期的气质。

推荐元素：

* 帆船
* 海面
* 远山
* 山湖书房
* 城市远景
* 指南针
* 书桌研究
* 长期价值曲线

避免：

* 短期暴涨暗示
* 抄底焦虑
* 夸张收益承诺
* 「稳赚」「必涨」「闭眼买」等表达

#### 克制高级

整体要高端，但不能土豪化。

可以使用：

* 深蓝
* 黑金
* 香槟金
* 米白
* 浅蓝白
* 金属细节
* 玻璃质感
* 高级商务空间

避免：

* 大面积土豪金
* 豪车炫耀
* 金条钞票堆
* 过度奢侈品化
* 红金促销感
* 廉价霓虹科技风

### Main Title Library

#### 门槛类

* 资产300万以上，才能进的投资圈
* 资产300万+，才能进的投资圈
* 不是所有人都能进
* 300万资产门槛，筛掉的是噪音，留下的是同频

#### 圈层类

* 有些投资机会，不在APP上，不在研报里，只在对的圈子里流通
* 只与认知相当的人同行
* 进对圈子，比选对产品重要
* 这个位置不公开招募，但席位刚好有空缺

#### 信息源类

* 你的投资信息源，决定了你的收益天花板
* 好的投资判断，来自更高质量的信息源
* 信息效率，决定资产布局效率

#### 投研能力类

* 投研观点、严选机会、全球视野
* 顶尖团队深度研判，把握趋势前瞻布局
* 全球视野，严选机会，长期陪伴

#### 席位类

* 席位有限，短暂开放
* 短暂开启席位
* 这个位置不公开招募，但席位刚好有空缺

### Selling Point Copy

推荐权益文案：

```txt
高净值圈层｜纯粹圈层交流
优质投资机会｜专业严格筛选
长期价值陪伴｜从容穿越周期
专业赋能｜顶尖团队深度研判
全球视野｜把握趋势前瞻布局
严选圈层｜高净值人群专属
私享机会｜在对的圈子里流通
```

### Risk Copy

单张海报必须保留：

```txt
市场有风险，投资需谨慎
```

（`{copy.risk-disclosure}`）

涉及产品、策略、投顾、历史表现时，不得出现收益承诺。

## Visual Element Library

### Low-complexity Selection Rule

AI 生图阶段不允许把元素库当作「全部加入」清单使用。每次生成必须遵循：

```txt
1 个视觉隐喻家族
+
1 个主场景
+
1 个主视觉
+
0–2 个辅助物
+
0–1 个弱金融暗示
```

默认不把金融元素作为主视觉。金融元素只作为 **低透明、无字、抽象、局部** 的弱暗示。

### Metaphor Families — 每张图只选 1 类

| 隐喻家族 | 适合主题 | 推荐画面 | 气质 |
|---|---|---|---|
| Threshold / 门槛 | 300万+、席位、不是所有人能进 | 半开的门、被光照亮的空席、私享入口、安静门廊 | 稀缺、筛选、专属 |
| Horizon / 视野 | 信息源、收益天花板、判断力 | 海平线、山脊、落地窗、远望视角 | 开阔、前瞻、认知高度 |
| Compass / 方向 | 进对圈子、判断方向、长期配置 | 指南针投影、航线、地图局部、光线路径 | 理性、判断、路径感 |
| Circle / 同频 | 圈层、同频、私域交流 | 圆桌、座席围合、同心涟漪、星体轨道 | 连接、共识、圈层 |
| Observatory / 投研 | 投研观点、严选机会、全球视野 | 观测台、星图、棱镜、研究桌面局部 | 洞察、筛选、专业 |
| Time / 长期 | 陪伴、穿越周期、长期主义 | 树木年轮、慢河、日出、长桥、远航 | 耐心、稳定、时间感 |
| Hidden Path / Alpha | 私享机会、不公开流通、提前布局 | 暗流、窄光束、星轨、封缄信封、隐约路径 | 隐秘、提前、稀缺 |
| Chess / 布局 | 有人已布局、有人还在观望 | 棋盘、已落一子、半开地图、分割光影 | 策略、先后、判断差异 |


### Minimal Symbol Library — 极简主符号库

当用户给出观点型文案，优先从下面选择 **1 个主符号**，而不是生成完整金融场景。

| 符号 | 适合表达 | 视觉处理 |
|---|---|---|
| 金色箭头 | 方向、领先、少数人的路径 | 单一箭头，周围留黑，不做多箭头 |
| 棋子 | 布局、先手、判断力 | 一枚棋子，局部聚光，棋盘弱化 |
| 光点 | 认知、被发现的机会 | 一个光点穿过暗场或点阵 |
| 同心圆 | 结构、圈层、共识 | 2–3 圈细线，中心轻微高光 |
| 门洞 / 门缝 | 门槛、准入、席位 | 一道光，不做复杂建筑 |
| 点阵 | 筛选、噪音、同频 | 大部分暗点，一个或少数亮点 |
| 光轨 | 复利、长期、路径 | 一条克制曲线，不做暴涨箭头 |
| 棱镜 / 透镜 | 洞察、判断、信息过滤 | 小面积玻璃质感，避免复杂科技风 |
| 星轨 / 星图 | 全球视野、长期周期 | 抽象星点，不加国家标签 |
| 封缄信封 | 私享机会、邀请制 | 一封信，低饱和金色封蜡 |

符号使用规则：

* 每张图只选一个主符号。
* 金色只集中在主符号上。
* 背景只保留弱纹理、弱网格或弱空间感。
* 不要同时使用箭头、棋子、门、点阵、数据卡等多个符号。

### Primary Scene — 每张图只选 1 个

* 私享门廊 / 安静入口
* 海平线 / 远山 / 山脊
* 窗边书房 / 开阔落地窗
* 简洁圆桌 / 空席位
* 观测台 / 抽象星图空间
* 研究桌面局部
* 长桥 / 远航路线
* 棋盘局部 / 光影分割空间

### Primary Visual — 每张图只选 1 个

* 空席位
* 半开的门
* 邀请函 / 封缄信封
* 指南针投影
* 窗外海平线
* 圆桌局部
* 同心涟漪
* 星轨 / 光路
* 棱镜 / 观测镜头
* 树木年轮 / 长桥
* 棋盘已落一子

### Supporting Objects — 最多选 2 个

* 钢笔
* 书页
* 咖啡杯
* 席卡
* 地图局部
* 金色细线
* 柔和光束
* 低透明度纹理

### Weak Finance Signals — 最多选 1 个

* 低透明度趋势线
* 抽象坐标网格
* 无字数据纹理
* 极简资产配置轮廓
* 世界轮廓压纹

禁止把这些弱金融暗示变成主体；不要出现可读数字、密集标签、复杂报表、K线或红绿涨跌。

### People Elements

* 默认优先不用人物，通过空间、器物、光线表达高级感。
* 如需人物，优先使用背影、侧影、远景人物，人数 1–2 人。
* 人物出现时，不再叠加复杂金融图表、城市夜景、数据中台、地球仪。
* 避免多人会议、拥挤沙龙、群像合影、夸张精英摆拍。

### Brand Elements

AI 生图阶段默认不生成真实品牌文字和真实 Logo。可使用抽象品牌感元素：

* 蓝色弧形底部区域
* 柔和品牌蓝光线
* 金属圆形装置
* 简洁奖杯轮廓
* 水晶摆件
* 蓝金细线

真实「盈米基金｜且慢」Logo、slogan、风险提示必须由设计软件后期叠加。

### Element Combination Examples

推荐组合：

```txt
门槛席位：私享门廊 + 半开的门 + 一束暖金光
短暂席位：圆桌局部 + 唯一空席 + 封缄邀请函
信息源：落地窗 + 远处海平线 + 指南针投影
对的圈子：极简圆桌 + 4 个座席轮廓 + 同心光晕
私享机会：深蓝空间 + 一条隐约光路 + 封缄信封
投研观点：观测台 + 星图纹理 + 棱镜光束
全球视野：航海图局部 + 远航路线 + 世界轮廓压纹
长期陪伴：山脊日出 + 长桥剪影 + 柔和蓝金光线
布局观望：棋盘局部 + 已落一枚棋子 + 分割光影
```

不推荐组合：

```txt
会议室 + 商务人士 + 城市夜景 + 电脑大屏 + 全球地图 + 走势图 + 数据卡 + 地球仪
海景露台 + 多人会谈 + 邀请函 + 奖杯 + 咖啡杯 + 多张金融图表
数据中台 + 透明大屏环绕 + 人物 + 地球 + 城市天际线 + 密集图表
```

## Technical Implementation

### AI Image Tool Compatibility

本 Skill 需要适配市面主流 AI 生图工具，包括但不限于：

* 即梦 / 剪映系生图工具
* Midjourney
* Stable Diffusion / SDXL
* DALL·E / ChatGPT Image
* Adobe Firefly
* 通义万相
* 文心一格
* Canva AI
* Figma AI / 插件类生图工具
* Lovart / 设计类 AI 工具
* 其他支持文本生图、图生图、局部重绘或扩图的工具

由于不同工具对中文文字、Logo、品牌标识、精确排版的支持不一致，默认不强制依赖 AI 直接生成完整可用成稿。

正式设计交付推荐流程：

```txt
先根据主题选择视觉隐喻家族
→ AI 生成无字、无 Logo、低复杂度背景图
→ 设计软件叠加准确 Logo
→ 设计软件叠加准确标题
→ 设计软件叠加 slogan 和风险提示
→ 输出最终海报
```

### Two Generation Modes

#### Mode A: Direct Poster Mode

适合快速探索整体调性。可尝试生成完整海报结构，但必须人工检查中文、Logo、风险提示和合规表达。

#### Mode B: Background-only Mode

正式设计交付优先使用。只生成无字、无 Logo 的高净值背景图，文字、Logo、slogan、风险提示全部由设计软件叠加。

#### Mode C: Metaphor-led Poster Mode

适合：

* 高净值观点型九宫格
* 认知差 / 信息源 / 圈层 / 布局 / Alpha 主题
* 希望画面像高端观点卡，而不是金融广告时

特点：

* 先提炼一句核心判断。
* 再选择一个主视觉符号或一个微叙事情境。
* 金融元素默认不出现，或仅做极弱暗示。
* 构图以深色背景、局部聚光、大标题留白为主。
* 允许出现门、路径、海面、山路、圆桌、节点网络等更有故事感的高级视觉语言。
* 适合后期叠加大字重中文标题。

推荐优先级：

```txt
正式设计交付：优先使用 Background-only Mode
观点型九宫格 / 高级隐喻表达：优先使用 Metaphor-led Poster Mode
快速概念探索：可使用 Direct Poster Mode
```

### Semantic Translation Rules

所有生图提示词必须先完成语义翻译：

```txt
不要直接画金融
先画主题背后的语义
```

示例：

```txt
「资产300万+，才能进的投资圈」
不要默认画钱、走势图、豪华会议室。
应转译为：门槛 / 被保留的位置 / 安静的准入感。
推荐画面：半开的私享门廊，门内有一束暖金光，前景留出大面积深蓝空间。
```

```txt
「你的投资信息源，决定了你的收益天花板」
不要默认画金融资讯大屏。
应转译为：视野高度 / 信息到达 / 判断边界。
推荐画面：窗边开阔海平线，桌面只有指南针投影和一页纸。
```

```txt
「私域不是聚集，是筛选」
不要默认画人群或社交场面。
应转译为：被筛选后留下的少量连接、边界、同频感。
推荐画面：黑暗背景中一个极简节点网络，只有少数节点被点亮并相互连接。
```

```txt
「靠近答案的路，从不拥挤」
不要默认画交易机会或成功学画面。
应转译为：通向光的少数路径 / 远方微亮的目的地。
推荐画面：深蓝黑山路或海面路径通向远处微光，画面安静克制。
```

### Complexity Control Rules

为了避免 AI 把画面生成得过满，所有生图提示词必须执行以下规则：

```txt
一张图 = 一个隐喻家族 + 一个主场景 + 一个主视觉 + 最多两个辅助物 + 最多一个弱金融暗示
```

#### 必须执行

* 先选择 1 个隐喻家族：门槛 / 视野 / 方向 / 同频 / 投研 / 长期 / Alpha / 布局。
* 主场景只选 1 个。
* 主视觉只选 1 个。
* 辅助物最多 2 个。
* 弱金融暗示最多 1 个，且必须低透明、无字、抽象化。
* 背景细节使用低对比、虚化、柔光处理。
* 顶部和中上部留白提升到 55%–65%。

#### 禁止执行

* 不要使用「可包含 A、B、C、D、E、F」作为生图提示词。
* 不要默认使用 K 线、走势图、饼图、金融大屏、交易屏幕、货币符号。
* 不要同时出现人物、城市、海景、地球仪、数据卡、邀请函、奖杯、走势图。
* 不要生成满屏透明屏幕、复杂仪表盘、多层数据面板。
* 不要让金融元素成为画面主体，金融元素只做轻量暗示。

### Universal Prompt Structure

面向大多数 AI 生图工具，提示词应按以下结构组织：

```txt
画幅尺寸 / 比例
+
主题文案
+
高阶语义解释
+
唯一视觉隐喻家族
+
唯一主场景
+
唯一主视觉
+
最多两个辅助物
+
最多一个弱金融暗示
+
色彩风格
+
留白要求
+
禁止项
```

推荐通用提示词结构：

```txt
生成一张 9:16 竖版高端金融私域海报背景图，画面用于高净值投资圈层宣传。
主题是「{主题文案}」。
请先把主题转译为「{高阶语义}」，不要直接画金融图表或交易屏幕。
视觉隐喻选择「{隐喻家族}」。
画面只选择一个主场景「{主场景}」，只选择一个主视觉「{主视觉}」。
辅助物最多两个：「{辅助物1}」「{辅助物2}」。
弱金融暗示最多一个：「{弱金融暗示}」，必须低透明、无字、抽象化。
画面风格专业、大气、克制、高端、安静、可信。
色彩以深蓝、黑蓝、香槟金、浅金为主，少量品牌蓝柔光和金色细线。
顶部和中上部预留 55%–65% 干净留白，用于后期添加 Logo 和标题。
底部需要预留蓝色弧形收口区域，用于后期添加 slogan 和风险提示。
不要出现任何文字，不要出现 Logo，不要出现乱码，不要 K 线，不要交易屏幕，不要复杂金融图表，不要多人物，不要多屏幕，不要绿色主调，不要低幼卡通，不要电商促销感，不要土豪炫富，不要满屏金币钞票。
```

### Negative Prompt Rules

通用 Negative Prompt：

```txt
文字、乱码、错误中文、错误英文、变形 Logo、低清 Logo、绿色主调、红色促销、土豪金、满屏金币、钞票堆、豪车、低幼卡通、Q版人物、廉价广告、杂乱背景、复杂背景、过多图表、复杂仪表盘、金融大屏、交易屏幕、K线、红绿涨跌、货币符号、饼图大屏、满屏数据卡、多层透明屏幕、信息卡环绕、过多人物、多人会议、拥挤构图、复杂城市夜景、器物堆叠、屏幕乱码、人物比例异常、手部畸形、过曝光效、霓虹赛博、电商促销风、收益承诺、稳赚不赔、保本暗示
```

英文工具可使用：

```txt
text, Chinese characters, garbled text, wrong logo, deformed logo, watermark, green color scheme, red promotional style, cheap luxury, piles of cash, gold bars, luxury car, childish cartoon, cute character, messy layout, complex background, cluttered charts, financial dashboard, trading screen, candlestick chart, red and green stock market screen, currency symbol, pie chart dashboard, too many data panels, multiple transparent screens, floating information cards, too many people, group meeting, crowded composition, detailed city clutter, object pile, screen gibberish, distorted people, deformed hands, overexposed lighting, cyberpunk neon, e-commerce promotion poster, guaranteed returns, risk-free investment
```

### Text & Logo Handling Rule

为了适配更多 AI 生图工具，默认建议：

* AI 生图阶段不要生成中文标题
* AI 生图阶段不要生成真实 Logo
* AI 生图阶段不要生成风险提示
* AI 生图阶段只生成背景、场景、氛围、器物、光影和视觉空间
* AI 生图阶段必须控制元素密度：1 个主视觉 + 最多 2 个辅助物
* 文字、Logo、slogan、风险提示由设计软件后期准确叠加

只有当用户明确要求「直接生成完整海报成稿」时，才尝试让 AI 生成完整海报。

### Layout-safe Background Requirements

无字背景图必须预留：

* 顶部 Logo 区留白
* 中上部主标题区留白
* 中部副标题 / 卖点区留白
* 中下部主视觉区
* 底部蓝色弧形收口区
* 底部 slogan 和风险提示空间

背景图不能把关键人物、建筑、器物放在标题区域，避免后期文字遮挡主体。

### Tool-specific Prompt Adaptation

#### Midjourney / 类 Midjourney 工具

重点：

* 使用英文提示词更稳定
* 明确 `vertical poster background`
* 明确 `semantic metaphor, not literal finance`
* 明确 `no text, no logo`
* 使用 `--ar 9:16`

示例：

```txt
minimal luxury private wealth management poster background, semantic metaphor for an exclusive high-net-worth investment circle, not literal finance, deep navy blue and champagne gold palette, one quiet private doorway with a half-open door, a narrow warm golden beam of light inside, one subtle sealed invitation envelope on a dark blue surface, spacious premium composition, 60 percent clean empty space at the top and upper middle for title, simple blue curved footer area at the bottom, calm cinematic lighting, restrained premium mood, no text, no logo, no letters, no financial dashboard, no stock chart, no trading screen, no currency symbols, no crowded charts, no green color scheme, no childish cartoon, no piles of cash --ar 9:16
```

#### Stable Diffusion / SDXL

重点：

* 正向提示词写清「隐喻」而不是只写金融场景。
* 负向提示词必须写清 text、logo、financial dashboard、stock chart、trading screen。
* 建议使用 9:16 尺寸，如 1080×1920 或工具支持的等比尺寸。

正向提示词示例：

```txt
A vertical 9:16 minimal luxury private wealth management poster background. The theme is exclusive access for high-net-worth investors, expressed through a symbolic visual metaphor rather than literal financial elements. Use one quiet private doorway with a half-open door and a narrow warm golden beam of light. Add one sealed invitation envelope as the only supporting object. Deep navy blue, brand blue, champagne gold, calm cinematic lighting, premium restrained atmosphere, large clean empty space in the top and upper-middle area, simple blue curved footer area at the bottom.
```

负向提示词示例：

```txt
text, logo, watermark, letters, Chinese characters, garbled text, financial dashboard, stock chart, candlestick chart, trading screen, currency symbol, pie chart, green theme, red promotion, cartoon, cute, low quality, cluttered, complex background, too many charts, multiple transparent screens, floating cards, cash pile, gold bars, luxury car, deformed people, bad hands, overexposed, cyberpunk, noisy background
```

#### 即梦 / 通义万相 / 文心一格等中文工具

重点：

* 中文提示词先写清「主题语义」，再写「视觉隐喻」。
* 必须明确「不要直白金融元素」。
* 必须明确「不要文字、不要 Logo」。
* 明确「顶部留白、中上部留白、底部蓝色弧形收口」。

示例：

```txt
生成一张9:16竖版高端金融海报背景图，不要文字，不要Logo。主题是「资产300万以上才能进的投资圈，短暂开启席位」。不要直观表现钱、走势图、K线、金融大屏。请把主题转译为「准入门槛、被保留的位置、安静的邀请」。画面只选择一个视觉隐喻：半开的私享门廊。主视觉是一扇半开的门，门内有一束柔和香槟金光，前景只有一个封缄邀请函。整体深蓝金色调，专业、大气、克制、高端。顶部和中上部预留约60%干净留白，底部预留蓝色弧形收口区域。不要多人会谈，不要复杂城市夜景，不要多张透明屏幕，不要绿色主调，不要低幼卡通，不要促销感，不要满屏金币和钞票。
```

#### ChatGPT Image / DALL·E 类工具

适合两种模式：

1. 直接生成完整海报
2. 生成无字背景图

正式设计仍推荐无字背景图。

无字背景图示例：

```txt
生成一张 1080×1920 的 9:16 竖版高端金融海报背景图。不要任何文字，不要任何 Logo。主题是「你的投资信息源，决定了你的收益天花板」。不要直白画金融资讯大屏、K线、走势图、交易屏幕。请把主题转译为「视野高度、信息到达、判断边界」。画面只选择一个视觉隐喻：窗边远望的海平线。主视觉为一扇大面积落地窗外的开阔海平线，桌面只有一个指南针投影和一页微微翻起的纸。整体浅蓝白与深蓝点缀，专业、克制、高端、安静。顶部和中上部预留约60%干净留白，便于后期添加品牌Logo和主标题。底部保留品牌蓝弧形收口区域，便于后期添加「安放财富 · 静待花开」和风险提示。不要人物群像，不要金融大屏，不要复杂图表，不要绿色主调，不要旅游宣传感，不要低幼卡通。
```

## Do's and Don'ts

### Do

* 使用蓝金 / 黑金 / 蓝白 VIP 配色体系
* 主标题使用 Source Han Serif CN Bold / Heavy
* 顶部放置 `{copy.brand-logo-text}` Logo
* 底部保留蓝色弧形收口 + slogan + 风险提示
* 300万+ 门槛信息前置、醒目
* 保持充足留白和信息层级清晰
* 默认采用低复杂度构图：一个隐喻家族 + 一个场景 + 一个主视觉 + 最多两个辅助物
* 默认优先使用高级视觉隐喻，而不是直观金融元素
* 多张方案必须使用不同隐喻家族，避免重复会议室 / 数据屏 / 金融桌面
* 正式交付优先使用 Background-only Mode
* 九宫格第一行做局部拼接大标题
* 九宫格第4格突出门槛
* 保留 `{copy.risk-disclosure}` 且可读

### Don't — Prohibited Rules

生成时严格避免：

* 不要绿色主调
* 不要低幼插画感
* 不要 Q 版
* 不要土豪金
* 不要过度奢华炫富
* 不要俗气豪宅炫耀感
* 不要豪车、金条、钞票堆
* 不要拥挤版式
* 不要过多小字
* 不要营销促销海报感
* 不要廉价金融广告感
* 不要复杂报告页堆砌
* 不要默认使用 K 线、走势图、交易屏幕、货币符号、金融大屏
* 不要把金融元素当作主视觉，除非用户明确要求
* 不要所有方案都使用同一种会议室 / 数据屏 / 商务桌面视觉
* 不要屏幕乱码
* 不要图表错误感过强
* 不要人物比例异常
* 不要明显假 Logo
* 不要信息层级混乱
* 不要杂乱无章的元素堆叠
* 不要九宫格风格割裂
* 不要弱化 300万+ 门槛信息

## Output Requirements

### Single Poster Output

当用户要求生成单张海报时：

* 输出尺寸必须为 `{canvas.poster-single}`（1080×1920）
* 保持 `{canvas.poster-ratio}`（9:16）构图
* 顶部放置盈米基金｜且慢 Logo
* 主标题清晰突出
* 主视觉集中在中下部
* 底部保留蓝色弧形收口
* 底部包含「安放财富 · 静待花开」
* 底部包含「市场有风险，投资需谨慎」
* 风格贴近用户提供的参考图

### Multi-poster Output

当用户要求生成多张同主题海报时：

* 保持系列风格一致
* 可切换不同主视觉方向
* 但配色、字体、Logo、底部收口需统一
* 不同方案应体现不同视觉切入点，不是简单重复

### Nine-grid Output

当用户要求生成九宫格时，默认优先输出 **1 张完整九宫格总图**，而不是默认分别输出 9 张。

默认要求：

* 输出 1 张 `{canvas.grid-cell-master}`（1080×1080）的完整九宫格总图。
* 整体为 `3×3`。
* 每格逻辑尺寸为 `{canvas.grid-cell}`（360×360）。
* 第一行优先做局部拼接大标题，或按观点型九宫格结构展开。
* 第4格优先放 `300万+` 门槛或关键信息。
* 第5格作为视觉中心。
* 第7–9格拆解权益 / 价值 / 品牌收口。
* 9 格必须整体统一。
* 画面必须高清。
* 文案必须完整可读。
* 不得出现乱码、缺字、裁切或明显错误。

只有当用户明确要求「分别输出单张」时，才切换为 9 张单独输出模式。

### AI Image Tool Output

当用户要求「给我提示词」「适配生图工具」「用于即梦 / Midjourney / SD」等时：

必须输出：

1. 中文通用提示词
2. 英文通用提示词
3. Negative Prompt
4. 建议参数，如比例、尺寸、风格、是否无字
5. 后期叠字建议

默认推荐：

```txt
无字背景图模式
```

## Quality Bar

### Quality Checklist

输出前必须检查：

#### Brand

* 是否符合且慢品牌气质？
* Logo 是否清晰规范？
* 是否使用盈米基金｜且慢品牌体系？
* 底部是否有「安放财富 · 静待花开」？

#### Audience

* 是否符合高净值用户审美？
* 是否一眼能看出高端、专业、可信？
* 是否体现门槛感、圈层感、稀缺感？
* 是否避免普通理财宣传感？

#### Visual

* 是否使用蓝金 / 黑金 / 蓝白体系？
* 是否有足够留白？
* 留白是否达到 55%–65%？
* 是否只有 1 个明确主视觉？
* 是否最多只有 2 个辅助物？
* 数据卡是否控制在 1–2 张以内？
* 主视觉是否服务主题？
* 是否做到「一个观点 + 一个主符号」？
* 是否优先使用隐喻而不是直白金融元素？
* 图表、数据卡是否简洁专业？
* 是否避免绿色主调、促销感、低幼感、土豪感？

#### Layout

* 单张海报是否为 `1080×1920`？
* 九宫格单格是否为 `360×360`？
* 单张海报底部是否有蓝色弧形收口？
* 九宫格是否整体成组？
* 九宫格第4格是否突出门槛？

#### Compliance

* 是否避免收益承诺？
* 是否保留风险提示？
* 是否没有「稳赚」「保本」「必涨」等违规表达？
* 风险提示是否可读？

#### AI Tool Compatibility

* 是否说明了无字背景模式？
* 是否避免要求 AI 生成真实 Logo？
* 是否避免要求 AI 生成准确中文小字？
* 是否给出 Negative Prompt？
* 是否预留了后期排版区域？
* 是否避免开放式元素长列表？
* 是否能适配不同 AI 生图工具？

### Nine-grid Final Principle

九宫格任务的默认原则是：

```txt
先完整
再拆分
先验证整体
再输出单张
质量优先于数量
可读性优先于复杂度
```

验收时，完整九宫格总图必须先满足：

* 9 格完整，没有边缘裁切。
* 整体视觉统一，没有明显风格漂移。
* 中心格或主标题有足够记忆点。
* 每格文字尽量完整可读，无明显乱码。
* 图像主体完整，无明显错误。


### Direct-demand Exception Rule

当用户已经明确提供完整九宫格文案并要求直接出图时，九宫格任务不再默认“先分镜后出图”，而是优先执行：

```txt
先完整出图
→ 再按需要优化细节
```

此时应优先满足业务执行效率，而不是默认进入创意策划流程。

### Final Acceptance Standard

一张合格的高净值私域海报 / 九宫格，必须满足：

* 一眼看出是面向高净值客群
* 一眼看出不是普通理财宣传
* 有品牌感
* 有圈层感
* 有认知价值感
* 有长期主义气质
* 有高级审美
* 信息不多但有效
* 画面像高端观点卡，而不是普通金融广告
* 适合朋友圈传播、私域传播、海报投放和营销触达
* 符合且慢品牌的专业、宁静、长期主义气质

最终核心方法：

```txt
蓝金 / 黑金高端视觉
+
Source Han Serif CN 标题
+
盈米基金｜且慢 Logo 体系
+
300万+ 门槛前置
+
圈层、信息源、投研能力、长期陪伴的价值表达
+
AI 无字背景图生成
+
低复杂度构图：一个场景 + 一个主视觉 + 一个强调点
+
设计软件后期准确叠加品牌与文字
```

## Iteration Guide

### 14.1 门槛 / 席位 / 圈层主题

如果文案强调：

* 300万以上
* 资产门槛
* 投资圈
* 席位
* 不是所有人都能进
* 高净值圈层

优先使用：

```txt
深蓝金高净值版 / 黑金高净值版
```

（`{colors.palette-a-bg}` / `{colors.palette-b-bg}`）

推荐视觉：

* 商务会谈
* 高端会客厅
* 海景露台
* 空席位
* 品牌器物
* 邀请函

### 14.2 信息源 / 判断力主题

如果文案强调：

* 投资信息源
* 收益天花板
* 进对圈子
* 信息效率
* 判断力

优先使用：

```txt
浅蓝白专业版 / 深蓝理性版
```

（`{colors.palette-c-bg}` / `{colors.navy-rational}`）

推荐视觉：

* 山湖书房
* 单人远眺
* 投资桌面
* 指南针
* 帆船远航
* 数据中台

### 14.3 投研 / 全球视野主题

如果文案强调：

* 投研观点
* 严选机会
* 全球视野
* 全球资产配置

优先使用：

```txt
品牌器物 / 数据中台 / 全球视角类视觉
```

推荐视觉：

* 透明数据卡
* 全球地图
* 资产配置图
* 高端会议桌
* 品牌奖杯
* 地球仪

## Prompt Templates

### Single Poster Prompt Template

```txt
请使用 qieman-design-vip Skill 生成一张且慢高净值私域宣传海报。

尺寸：
1080×1920，比例 9:16。

主题：
「{主题文案}」

设计目标：
画面用于高净值用户私域传播，体现高净值门槛、圈层稀缺感、专业财富管理能力、信息效率和长期价值陪伴。

主题语义转译：
先从主题中提炼关键词，再转译为高级视觉隐喻。不要默认直观展示金融图表、K线、交易屏幕、资产配置大屏、金币钞票。

视觉隐喻选择 1 个：
门槛 / 视野 / 方向 / 同频 / 投研 / 长期 / Alpha / 布局。

观点型构图：
一张图只讲一个判断，只使用一个主符号。主符号可以是棋子、光点、箭头、同心圆、点阵、门洞、光轨、棱镜、星轨或封缄信封。

整体风格：
专业、大气、克制、高端、安静、可信，有且慢品牌感。
色彩以蓝金体系为主，可根据主题选择深蓝金高净值版、黑金高净值版、浅蓝白专业版。

字体：
主标题使用 Source Han Serif CN / 思源宋体 CN Bold 或 Heavy 风格，重点词可用浅金色强调。

版式结构：
顶部使用「盈米基金｜且慢」组合 Logo。
中上部为大标题，标题下方可加细分隔线。
中部放简短副标题或 3 个卖点。
中下部为主视觉场景。
底部使用蓝色弧形收口，并放置「安放财富 · 静待花开」和「市场有风险，投资需谨慎」。

画面元素控制：
每张图只选择 1 个隐喻家族、1 个主场景、1 个主视觉、最多 2 个辅助物、最多 1 个弱金融暗示。不要把候选元素全部放进同一张图。

多方案规则：
如果生成多张图，每张图必须使用不同的视觉隐喻家族，例如：空席位 / 海平线 / 指南针 / 星轨，不要只重复会议室、数据屏或金融桌面。

禁止：
不要绿色主调，不要低幼卡通，不要电商促销感，不要土豪炫富，不要满屏金币钞票，不要复杂报告堆砌，不要 K 线，不要交易屏幕，不要货币符号，不要金融大屏，不要过多文字，不要杂乱。
```

### Background-only AI Prompt Template

#### 中文通用提示词

```txt
生成一张 1080×1920 的 9:16 竖版高端金融海报背景图。不要任何文字，不要任何 Logo。

画面用于且慢高净值私域宣传，主题是「{主题文案}」。

不要直白表现钱、走势图、K线、交易屏幕、金融大屏、资产配置饼图。请先把主题转译为「{高阶语义}」，再选择一个高级视觉隐喻「{隐喻家族}」。

整体风格专业、大气、克制、高端、安静、可信。色彩以深蓝、黑蓝、品牌蓝、香槟金、浅金为主，画面干净，有高级留白和柔和光影。

画面只允许一个主场景「{主场景}」和一个主视觉「{主视觉}」。辅助物最多选择 2 个：「{辅助物1}」「{辅助物2}」。弱金融暗示最多 1 个，例如低透明度趋势线、无字数据纹理或抽象坐标网格；也可以完全不出现金融元素。

构图要求：
顶部和中上部预留约 60% 干净留白，形成强标题位，便于后期添加「盈米基金｜且慢」Logo 和大字重主标题。
中下部放置主视觉场景。
底部预留蓝色弧形收口区域，便于后期添加「安放财富 · 静待花开」和「市场有风险，投资需谨慎」。

禁止：
不要出现文字，不要出现 Logo，不要出现乱码，不要绿色主调，不要低幼卡通，不要电商促销感，不要土豪炫富，不要满屏金币钞票，不要复杂报告堆砌，不要过多图表，不要金融大屏，不要 K 线，不要交易屏幕，不要货币符号，不要杂乱。
```

#### English Universal Prompt

```txt
Create a vertical 9:16 luxury private wealth management poster background, 1080x1920 composition. No text, no logo.

The theme is: "{theme copy}".

Do not represent the theme with literal financial charts, candlestick charts, trading screens, money, currency symbols, financial dashboards or dense data panels. Translate the theme into a high-level semantic metaphor: "{semantic meaning}". Use one visual metaphor family: "{metaphor family}".

Use one primary scene: "{primary scene}". Use one primary subject: "{primary subject}". Add at most two supporting objects: "{supporting object 1}", "{supporting object 2}". Add at most one weak financial signal, such as a faint abstract line texture, subtle coordinate grid or low-opacity data texture. It is also acceptable to use no financial element at all.

Use a refined deep navy blue, black blue, brand blue, champagne gold and soft gold color palette. The style should be premium, professional, calm, elegant, restrained, trustworthy and cinematic.

Composition requirements:
Leave about 60 percent clean empty space at the top and upper-middle area for later adding brand logo and headline.
Place the main visual in the middle-lower area.
Keep a blue curved footer area at the bottom for later adding brand slogan and risk disclosure.

Avoid:
text, letters, Chinese characters, garbled text, logo, watermark, green color scheme, red promotional style, childish cartoon, cute character, cheap luxury, piles of cash, gold bars, luxury car, financial dashboard, trading screen, candlestick chart, stock chart, currency symbols, messy charts, multiple screens, floating card cluster, cluttered layout, complex background, overexposed neon, e-commerce poster style, guaranteed-return feeling.
```

#### Negative Prompt

```txt
文字、乱码、错误中文、错误英文、变形 Logo、低清 Logo、绿色主调、红色促销、土豪金、满屏金币、钞票堆、豪车、低幼卡通、Q版人物、廉价广告、杂乱背景、复杂背景、过多图表、复杂仪表盘、金融大屏、交易屏幕、K线、红绿涨跌、货币符号、饼图大屏、满屏数据卡、多层透明屏幕、信息卡环绕、过多人物、多人会议、拥挤构图、复杂城市夜景、器物堆叠、屏幕乱码、人物比例异常、手部畸形、过曝光效、霓虹赛博、电商促销风、收益承诺、稳赚不赔、保本暗示
```

English Negative Prompt:

```txt
text, Chinese characters, garbled text, wrong logo, deformed logo, watermark, green color scheme, red promotional style, cheap luxury, piles of cash, gold bars, luxury car, childish cartoon, cute character, messy layout, cluttered charts, financial dashboard, trading screen, candlestick chart, stock chart, red and green market screen, currency symbols, pie chart dashboard, screen gibberish, distorted people, deformed hands, overexposed lighting, cyberpunk neon, e-commerce promotion poster, guaranteed returns, risk-free investment
```


### Metaphor-led Poster Prompt Template

适合高净值观点型海报、认知差主题、布局主题、圈层筛选主题。

```txt
请使用 qieman-design-vip Skill 的 Metaphor-led Poster Mode 生成一张 9:16 竖版高端观点海报背景图。不要文字，不要 Logo。

主题：
「{主题文案}」

核心判断：
将主题压缩为一个观点，不并列多个卖点。

视觉转译：
不要直白表现金融元素，不要 K 线、走势图、交易屏幕、金融大屏、金币、钞票、地球仪、商务会议室。
请把主题转译为一个高级、克制、抽象的视觉隐喻。

主符号：
只选择一个主符号，例如：棋子 / 金色箭头 / 光点 / 同心圆 / 门洞 / 点阵 / 光轨 / 棱镜 / 星轨 / 封缄信封。

构图：
深黑蓝或黑金背景，背景接近空，只有轻微纹理或弱空间感。
主符号使用一处金色高光或一束聚光，不做满屏装饰。
画面留白 60%–70%，适合后期叠加大字重中文标题。
整体克制、高级、有判断感，像高端投资观点卡，而不是金融广告。

禁止：
不要复杂场景，不要多人会议，不要城市大屏，不要密集数据卡，不要多个主体并存，不要金融仪表盘，不要促销感，不要土豪炫富，不要绿色主调。
```

### Nine-grid Prompt Template

```txt
请使用 qieman-design-vip Skill 生成一组且慢高净值私域九宫格。

默认输出模式：
请优先生成 1 张完整九宫格总图，
画布为 1080×1080，
3×3 排列，
总图中完整包含 9 个格子，
而不是分别生成 9 张单独图片。

主题：
「{主题文案}」

整体方向：
参考高端黑金观点卡，不是金融广告，不是长图海报缩小。
整体需要深色、高级、克制、有故事感、有强视觉语言。
每格一个判断，每格一个主符号，每格一个清晰标题区。

执行流程：
1. 先提炼主题核心判断。
2. 再拆成 9 个单格观点。
3. 输出九格分镜表：编号 / 观点句 / 视觉家族 / 主符号 / 标题位置 / Logo / 风险提示。
4. 第5格必须是中心观点卡，主标题最大，视觉最强。
5. 第1、3、7、9格偏故事感；第2、4、6、8格偏结构解释。
6. 至少使用 3 种视觉家族，同一视觉家族最多连续出现 2 次。
7. 最后生成 1 张完整九宫格总图；只有用户明确要求“分别输出单张”时，才逐格生成 9 张单图。

视觉家族可选：
Threshold Arrival / 准入时刻
Scarce Conversation / 稀缺交流
Hidden Path / 隐秘路径
Selective Connection / 筛选连接
Signal Emergence / 信号显现
Boundary & Circle / 边界与圈层
Chess & Layout / 布局先手
Long-term Track / 长期光轨
Brand Closure / 品牌收口

文案规则：
每格主标题 8–18 个汉字，最多 2 行。
副标题 10–24 个汉字，最多 1–2 行。
不要长段落，不要每格都堆满小字。
品牌 Logo 建议只出现在第1、第5或第9格。
风险提示可只在第5或第9格出现，避免九格过度拥挤。

构图规则：
每格只允许一个主视觉符号或一个微叙事情境。
每格留白 45%–65%。
完整总图必须 9 格完整展示，不裁切边缘格，不出现拼接错位。
格子间距统一，3×3 结构清晰。

质量要求：
确保画面高清。
确保 9 格完整显示。
确保每格文字完整可读。
不要乱码，不要缺字，不要裁切主体。
不要明显错误，不要错误中文，不要伪文字，不要图形结构错乱。

禁止：
不要默认分别生成 9 张单独图片。
不要复杂金融大屏，不要 K 线，不要金币钞票，不要绿色主调。
不要多人会议，不要复杂数据卡，不要图文层级混乱。
不要让九格风格割裂，不要中心格失焦。
```


### Direct-demand Nine-grid Prompt Template

请使用 qieman-design-vip Skill 生成一张完整九宫格总图。

适用条件：

用户已经提供：
1. 一个总标题
2. 九条逐格文案
3. 明确要求直接生成九宫格图

执行要求：

* 直接生成 1 张完整九宫格总图
* 画布为 1080×1080
* 3×3 排列
* 总标题放在顶部
* 九条文案严格按从左到右、从上到下顺序对应第1格到第9格
* 不要打乱顺序，不要重排文案
* 文案可按“/”拆成上下两层排版，但不得改变原意
* 每格搭配 1 个极简主视觉符号
* 每格画面简洁，优先保证文字可读
* 整体风格为深蓝黑金 / 黑蓝金，高级、克制、有故事感
* 不要 K 线、不要金币、不要交易屏、不要复杂数据屏、不要多人会议

优先保证：

1. 九格完整
2. 文案顺序正确
3. 文字尽量完整可读
4. 中心格突出
5. 整体统一
6. 缩略图下仍有较高辨识度

建议视觉结构：

* 顶部：总标题
* 第1–9格：用户提供逐格文案
* 每格：1 个主符号 + 1 段标题型文案 + 1 段副标题型文案
* 第5格：可适度增强视觉和字号，作为中心视觉焦点

如果用户未要求拆单张，则不要默认输出 9 张单独图片。

### Tool-specific Quick Prompt Guide

#### 20.1 门槛席位类背景图

```txt
生成一张9:16竖版高端金融海报背景图，不要文字，不要Logo。主题是高净值投资圈层、资产300万以上、短暂开启席位。不要直接画钱、走势图或金融大屏。请把主题转译为「准入门槛、被保留的位置、安静的邀请」。只选择一个视觉隐喻：半开的私享门廊。主视觉是一扇半开的门，门内有一束柔和香槟金光。辅助物只保留一个封缄邀请函。整体深蓝金色调，专业、大气、克制、高端。顶部和中上部预留约60%干净留白，底部预留蓝色弧形收口区域。不要人物群像，不要复杂城市夜景，不要多张数据卡，不要绿色主调，不要低幼卡通，不要促销感，不要满屏金币钞票。
```

#### 20.2 信息源判断类背景图

```txt
生成一张9:16竖版高端金融海报背景图，不要文字，不要Logo。主题是投资信息源决定收益天花板，进对圈子比选对产品重要。不要直接画金融资讯大屏、K线或交易屏幕。请把主题转译为「视野高度、信息到达、判断边界」。只选择一个视觉隐喻：窗边远望的海平线。主视觉为大面积落地窗外的开阔海平线，桌面只保留一个指南针投影和一页微微翻起的纸。整体浅蓝白专业色调，专业、克制、长期主义。顶部和中上部预留约60%干净留白，底部预留蓝色弧形收口区域。不要人物群像，不要地球仪和多屏幕，不要绿色主调，不要旅游宣传感，不要低幼卡通。
```

#### 20.3 投研能力类背景图

```txt
生成一张9:16竖版高端金融海报背景图，不要文字，不要Logo。主题是投研观点、严选机会、全球视野。不要直接画复杂报告、金融大屏和满屏数据卡。请把主题转译为「观察、筛选、洞察、全局视角」。只选择一个视觉隐喻：观测台与星图。主视觉为深蓝空间中的极简观测台轮廓，背景有低透明度星图纹理，辅助物只保留一道棱镜光束。整体深蓝金色调，专业、克制、可信，有柔和光影和清晰空间层次。顶部和中上部预留约60%标题留白，底部预留蓝色弧形收口区域。不要数据卡环绕，不要满屏透明屏幕，不要会议室人物，不要绿色，不要强赛博霓虹。
```

#### 20.4 Alpha / 私享机会类背景图

```txt
生成一张9:16竖版高端金融海报背景图，不要文字，不要Logo。主题是有些投资机会不在公开渠道，只在对的圈子里流通。不要画股票走势图、交易屏幕或财富符号。请把主题转译为「隐秘路径、提前抵达、非公开流动」。只选择一个视觉隐喻：深蓝空间中的一条窄光路。主视觉是一条从暗处延展到远方的柔和金色光路，辅助物只保留一个封缄信封或地图一角。整体深蓝、黑蓝、香槟金，克制、高端、安静。顶部和中上部预留约60%干净留白，底部预留蓝色弧形收口区域。不要人物群像，不要复杂图表，不要金融大屏，不要满屏金币钞票。
```

#### 20.5 布局 / 观望类背景图

```txt
生成一张9:16竖版高端金融海报背景图，不要文字，不要Logo。主题是同样的市场，有人已经在布局，有人还在观望，区别只是信息效率。不要直接画看盘、K线和交易屏幕。请把主题转译为「先后差异、策略判断、已经落下的一步」。只选择一个视觉隐喻：极简棋盘。主视觉为深蓝桌面上的局部棋盘，一枚香槟金棋子已经落下，光影形成清晰方向感。辅助物最多保留一条低透明度路线光线。顶部和中上部预留约60%干净留白，底部预留蓝色弧形收口区域。不要复杂棋局，不要人物群像，不要股票屏幕，不要绿色主调，不要促销感。
```


#### 20.6 认知差 / 信息源极简观点图

```txt
生成一张 9:16 竖版高端观点海报背景图，不要文字，不要 Logo。主题是“不是信息差，是认知差”。不要直白出现金融元素，不要 K 线，不要交易屏幕，不要金币。请使用极简隐喻式视觉语言：一个被聚焦的金色光点，置于深黑蓝背景与微弱点阵结构中，形成“认知被点亮”的感觉。画面克制、简洁、高级，局部高光明确，背景细节极少，大面积留白，适合后期叠加大标题。
```

#### 20.7 布局 / 先手极简观点图

```txt
生成一张 9:16 竖版高端金融观点海报背景图，不要文字，不要 Logo。主题是“同样的市场，有人已经在布局，有人还在观望”。不要直白金融元素。请使用极简隐喻：深色棋盘上一枚被聚光照亮的棋子，周围空间安静克制，体现先手、布局、判断力。只保留一个主符号，不要多人，不要复杂场景，不要杂乱背景，不要交易屏幕。
```

#### 20.8 圈层 / 同频极简观点图

```txt
生成一张 9:16 竖版高端观点海报背景图，不要文字，不要 Logo。主题是“认知相近的人，总会找到彼此”。请用抽象视觉隐喻表达，不要直白社交场景，不要金融图表。主视觉为一个被光照亮的门洞或中心点，周围以极简的轨道或波纹结构向中心聚拢，表达同频、连接与圈层吸引。整体深色背景，金色为唯一强调色，构图简洁，留白充足。
```

#### 20.9 筛选机制极简观点图

```txt
生成一张 9:16 竖版高端观点海报背景图，不要文字，不要 Logo。主题是“筛掉的是噪音，留下的是同频”。不要人物聚会，不要金融大屏，不要复杂图表。使用极简点阵隐喻：深色背景中大量低亮度圆点排列成秩序网格，只有少数金色光点被筛选并连成细线，表达筛选、同频、纯净圈层。画面高级、克制、留白充足。
```


## V0.1.12 Practical Note

本版本新增的 Direct-demand Nine-grid Mode，主要解决以下实际问题：

* 用户已经明确给出逐格内容，但 Skill 仍倾向先做方案分析，导致出图效率低
* 长文案九宫格容易因为默认压缩文案而偏离需求原意
* 九宫格在执行端更需要“需求正确还原”，而不是过度创意重构
* 完整九宫格总图在业务场景中比逐张拆图更高频

因此，V0.1.12 的重点是：增强“按需求内容直接出完整九宫格”的能力。

## Known Gaps

- VIP 海报专用 hex 色值尚未与 Figma 设计系统完全对齐；当前 token 为 Skill 层推导值，正式交付前建议对照品牌设计稿校验。
- 思源宋体 / 思源黑体在 AI 生图工具中无法直接渲染；正式交付须在设计软件中叠加准确字体。
- 且慢 Logo 图形尚未提供 SVG 资产引用路径；后期叠加须使用官方 Logo 文件。
- 九宫格局部拼接大标题的跨格对齐规则尚未提供像素级模板；当前为策略级描述。
- `{extends: qieman-design-ui}` 关系已声明，但跨 Skill token 自动合并尚未在 openskills 运行时验证。
- V0.1.5 已增加主题语义转译与高级视觉隐喻规则，但不同生图工具仍可能默认补全金融大屏、走势图或商务会议室；验证时建议优先使用 Background-only Mode，并反复强调「不要直白金融元素，只使用一个视觉隐喻」。


