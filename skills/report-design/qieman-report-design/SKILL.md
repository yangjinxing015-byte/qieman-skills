---
name: qieman-report-design
layer: L1
extends: qieman-ppt-design
license: Complete terms in LICENSE.txt
description: >-
  且慢 HTML 16:9 财富报告幻灯片（L1，extends qieman-ppt-design）。当用户提及
  家庭财富报告、财富报告书、投顾报告 deck、16:9 合并报告页时，
  先读 qieman-ui-design、qieman-ppt-design 再读本 skill。

colors:
  brand-primary: "#1B88EE"
  brand-primary-hover: "#2F7BEC"
  brand-primary-light: "#9CCBF8"
  brand-primary-soft: "#D8EBFF"
  brand-primary-pale: "#EFF7FF"
  canvas-blue: "#E3EFFE"
  canvas-blue-deep: "#CFE4FF"
  card-white: "#FFFFFF"
  card-subtle: "#F9FAFB"
  card-blue-tint: "#F4F9FF"
  ink-title: "#1F2D3D"
  ink-body: "#333333"
  ink-secondary: "#606060"
  ink-tertiary: "#999999"
  ink-disabled: "#CCCCCC"
  on-primary: "#FFFFFF"
  success: "#07AD8F"
  warning: "#EA9500"
  error: "#FA440C"
  chart-blue-1: "#1B88EE"
  chart-blue-2: "#5AAEFF"
  chart-blue-3: "#9CCBF8"
  chart-blue-4: "#D8EBFF"
  chart-orange: "#F5A623"
  chart-red: "#FA440C"
  chart-green: "#07AD8F"
  chart-gray: "#C9D6E6"
  divider-blue-soft: "#D8E8FA"
  transparent: "transparent"

typography:
  report-title:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 18pt
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: 0
  cover-title:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 30pt
    fontWeight: 600
    lineHeight: 1.16
    letterSpacing: -0.2pt
  cover-subtitle:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 12pt
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  section-title:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 14pt
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  card-title:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 11pt
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 9pt
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-strong:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 9pt
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: 0
  caption:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 7.5pt
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  micro:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 6.5pt
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  metric-number:
    fontFamily: "MiSans, DIN Alternate, PingFang SC, Microsoft YaHei, system-ui, sans-serif"
    fontSize: 22pt
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -0.15pt
  metric-number-sm:
    fontFamily: "MiSans, DIN Alternate, PingFang SC, Microsoft YaHei, system-ui, sans-serif"
    fontSize: 16pt
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -0.1pt
  table-cell:
    fontFamily: "PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif"
    fontSize: 7.5pt
    fontWeight: 400
    lineHeight: 1.32
    letterSpacing: 0

rounded:
  none: 0pt
  xs: 3pt
  sm: 5pt
  md: 8pt
  lg: 12pt
  xl: 16pt
  pill: 999pt

spacing:
  xxs: 2pt
  xs: 4pt
  sm: 6pt
  md: 8pt
  lg: 12pt
  xl: 16pt
  xxl: 24pt
  page-x: 30pt
  page-top: 24pt
  page-bottom: 18pt
  header-height: 28pt
  footer-height: 14pt
  page-gap: 16px

canvas:
  aspectRatio: "16:9"
  pptWidth: 720pt
  pptHeight: 405pt
  browserWidth: 960px
  browserHeight: 540px
  backgroundColor: "{colors.canvas-blue}"
  multiPageGap: "{spacing.page-gap}"

shadows:
  none: "none"
  card: "none"
  soft-blue: "0 6pt 18pt rgba(27, 136, 238, 0.08)"
  float-object: "0 10pt 28pt rgba(27, 136, 238, 0.16)"

components:
  slide:
    width: "{canvas.pptWidth}"
    height: "{canvas.pptHeight}"
    backgroundColor: "{colors.canvas-blue}"
    position: relative
    overflow: hidden
  header:
    height: "{spacing.header-height}"
    padding: "0 {spacing.page-x}"
    titleTypography: "{typography.report-title}"
    titleColor: "{colors.ink-title}"
  footer:
    height: "{spacing.footer-height}"
    padding: "0 {spacing.page-x}"
    typography: "{typography.micro}"
    textColor: "{colors.ink-tertiary}"
    whiteSpace: nowrap
  panel:
    backgroundColor: "{colors.card-white}"
    border: "none"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    shadow: "{shadows.none}"
  content-card:
    backgroundColor: "{colors.card-white}"
    border: "none"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    shadow: "{shadows.none}"
  blue-summary-bar:
    backgroundColor: "{colors.brand-primary-light}"
    textColor: "{colors.ink-title}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  kpi-card:
    backgroundColor: "{colors.card-white}"
    border: "none"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    labelTypography: "{typography.caption}"
    numberTypography: "{typography.metric-number}"
  insight-chip:
    backgroundColor: "{colors.brand-primary-pale}"
    textColor: "{colors.brand-primary}"
    rounded: "{rounded.pill}"
    padding: "3pt 8pt"
    typography: "{typography.caption}"
  recommendation-card:
    backgroundColor: "{colors.card-white}"
    border: "none"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    titleTypography: "{typography.card-title}"
  chart-card:
    backgroundColor: "{colors.card-white}"
    border: "none"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  table-card:
    backgroundColor: "{colors.card-white}"
    border: "none"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  risk-note:
    backgroundColor: "{colors.card-blue-tint}"
    border: "none"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.caption}"
---

# qieman-report-design

| 字段 | 值 |
|------|-----|
| **ID** | `qieman-report-design` |
| **层级** | L1 |
| **规范** | 本文件 |
| **依赖** | [`qieman-ppt-design`](../qieman-ppt-design/SKILL.md) |
| **更新日期** | 2026-07-02 |

## 调用

先加载 **L0 `qieman-ui-design`** 与 **L2 `qieman-ppt-design`**，再阅读本 L1 扩展：

```bash
npx openskills read qieman-ui-design
npx openskills read qieman-ppt-design
npx openskills read qieman-report-design
```

---

## Overview

`qieman-report-design` 是 **qieman-ppt-design（L2）下的 L1 场景扩展规范**，文件位于 `../qieman-report-design/SKILL.md`。它定义 **PPT 还原优先** 的 HTML 16:9 报告设计语言，服务于账户诊断、周/月度复盘、财富目标规划、资产配置建议、投顾策略说明和高净值客户报告。它不是营销 H5，也不是后台数据看板，而是面向客户阅读与顾问讲解的 16:9 报告页；**独立 skill 目录（`name` = 文件夹名）**。

视觉核心是：浅蓝报告画布、无描边白色卡片、克制的金融图表、清晰的页眉页脚、可解释的数字重点。页面应该像一份专业投顾团队输出的财富报告，安静、可信、克制，但仍有且慢品牌的亲和与科技感。

**核心设计气质：**
- 固定 16:9 画布：`720pt × 405pt`，浏览器预览推荐 `960px × 540px`。
- 页面背景统一为 `{colors.canvas-blue}`（#E3EFFE），多页合并时页间距 `16px`。
- 所有白色内容区使用 `{components.panel}` / `{components.content-card}`，强制 `border: none`。
- 用背景色、留白、浅蓝标题条和信息密度建立层级，禁止用灰色描边堆叠层次。
- 标准内页页眉大标题 `.title` 为 18pt / 600，页脚声明为 6.5pt 单行。
- 图表优先使用蓝色序列，红/橙/绿只用于风险、警示、收益归因等语义场景。
- 所有输出必须能被截图、导出 PDF 或转成 PPT 后保持版式稳定。

## When to Use

在已加载 **L0 `qieman-ui-design`** 与 **L2 `qieman-ppt-design`** 的前提下，当用户提出以下需求时 **叠加本 L1 规范**：

- **家庭财富报告、财富报告书、财富报告**
- 投顾报告、资产配置报告、账户复盘报告、目标规划报告
- HTML 16:9 报告幻灯片、合并 deck、客户提案幻灯片
- 720pt×405pt 且慢报告页、导出 PDF/PPT 还原

使用 qieman report slides design 生成以下类型的 HTML 幻灯片：

- 财富体检报告：资产现状、收益表现、风险暴露、配置建议。
- 账户复盘报告：周度/月度收益、贡献拖累、再平衡建议。
- 目标规划报告：教育金、退休金、传承、流动性目标拆解。
- 投顾服务报告：组合运行、策略解释、调仓建议、风险提示。
- 客户沟通材料：顾问讲解版、客户留存版、PPT 汇报版。

不要用于 App 页面、移动端 H5、活动营销页、品牌 KV、长图海报或后台系统页面。

## Colors

### Brand & Action

- **Brand Primary** (`{colors.brand-primary}` — #1B88EE)：且慢品牌主蓝。用于重点数字、核心图表线条、结论强调、页眉辅助线和少量关键图标。
- **Brand Primary Hover** (`{colors.brand-primary-hover}` — #2F7BEC)：用于更深一点的强调蓝，例如封面主视觉、重要进度条或当前状态。
- **Brand Primary Light** (`{colors.brand-primary-light}` — #9CCBF8)：用于摘要条、表头底边、轻量标题栏。
- **Brand Primary Soft** (`{colors.brand-primary-soft}` — #D8EBFF)：用于浅蓝色块、图表辅助面积、信息分组背景。
- **Brand Primary Pale** (`{colors.brand-primary-pale}` — #EFF7FF)：用于标签、说明条、轻提示区域。

### Surface

- **Canvas Blue** (`{colors.canvas-blue}` — #E3EFFE)：全局页面背景。所有幻灯片统一使用，不要随页切换背景色。
- **Canvas Blue Deep** (`{colors.canvas-blue-deep}` — #CFE4FF)：仅用于封面或章节页的柔和背景层次。
- **Card White** (`{colors.card-white}` — #FFFFFF)：所有主内容卡片底色。
- **Card Subtle** (`{colors.card-subtle}` — #F9FAFB)：用于表格隔行、数据块内部轻底色，不作为卡片边框。
- **Card Blue Tint** (`{colors.card-blue-tint}` — #F4F9FF)：用于风险提示、补充说明、AI 生成说明等弱提示区域。

### Text

- **Title Ink** (`{colors.ink-title}` — #1F2D3D)：标题、一级结论、图表标题。
- **Body Ink** (`{colors.ink-body}` — #333333)：正文、关键说明。
- **Secondary Ink** (`{colors.ink-secondary}` — #606060)：辅助说明、表格次要文字。
- **Tertiary Ink** (`{colors.ink-tertiary}` — #999999)：页脚、时间、数据来源、备注。
- **Disabled Ink** (`{colors.ink-disabled}` — #CCCCCC)：未发生、未确认、不可用数据。

### Semantic

- **Success** (`{colors.success}` — #07AD8F)：正向收益、达成、改善。
- **Warning** (`{colors.warning}` — #EA9500)：待关注、偏离、轻风险。
- **Error** (`{colors.error}` — #FA440C)：回撤、风险暴露、负向拖累。

### Borders

白色卡片外框禁止使用灰色描边。只有以下场景允许出现线条：

- 图表坐标轴、网格线：使用极淡蓝灰，不使用高对比灰线。
- 表格内部行分隔：优先使用行高和浅底色，不强依赖线条。
- 摘要条彩色底边：可使用 `{colors.brand-primary-light}`。
- 结构性分隔：优先用留白、分栏、浅蓝底块，而不是 `#EDEDED`。

## Typography

### Font Family

- 中文：`PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif`
- 数字：`MiSans, DIN Alternate, PingFang SC, Microsoft YaHei, system-ui, sans-serif`
- 禁止使用宋体、仿宋、花体、手写体。
- 不要引入外部 Web Font，避免导出 PPT / PDF 时字体丢失。

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---:|---:|---:|---|
| `{typography.cover-title}` | 30pt | 600 | 1.16 | 封面主标题 |
| `{typography.cover-subtitle}` | 12pt | 400 | 1.45 | 封面副标题 / 报告说明 |
| `{typography.report-title}` | 18pt | 600 | 1.22 | 标准内页页眉大标题 `.title` |
| `{typography.section-title}` | 14pt | 600 | 1.25 | 页面内一级模块标题 |
| `{typography.card-title}` | 11pt | 600 | 1.30 | 卡片标题 |
| `{typography.body}` | 9pt | 400 | 1.55 | 正文说明 |
| `{typography.body-strong}` | 9pt | 600 | 1.45 | 正文强调 |
| `{typography.caption}` | 7.5pt | 400 | 1.35 | 图例、标签、辅助说明 |
| `{typography.micro}` | 6.5pt | 400 | 1.20 | 页脚声明、数据来源 |
| `{typography.metric-number}` | 22pt | 600 | 1.00 | 关键数字 |
| `{typography.metric-number-sm}` | 16pt | 600 | 1.00 | 次级数字 |
| `{typography.table-cell}` | 7.5pt | 400 | 1.32 | 表格内容 |

### Principles

- 标题只用 600，不使用 700/800，避免报告变得压迫。
- 正文保持 9pt，不要低于 8pt；页脚声明固定 6.5pt。
- 数字必须使用数字字体栈，金额、收益率、回撤、比例保持等宽感。
- 同一页不要出现超过 4 个字号层级。
- 负数可使用 `{colors.error}`，但不要整段大面积红色。
- 页脚声明必须单行展示，超长时缩短文案，不允许折行撑高。

## Layout

### Canvas

- PPT 标准画布：`720pt × 405pt`。
- 浏览器预览：建议用 `960px × 540px`，保持 16:9。
- 多页合并预览：每个 `.slide` 之间 `margin-bottom: 16px`。
- 所有页面背景统一为 `#E3EFFE`。

### Page Structure

每张标准内页由三部分组成：

1. **Header**：页眉区域，包含标题、日期/客户名/报告类型等辅助信息。
2. **Content**：主体内容区域，承载卡片、图表、表格、结论。
3. **Footer**：页脚区域，展示风险提示、数据来源、生成说明。

推荐尺寸：

```css
.slide {
  width: 720pt;
  height: 405pt;
  position: relative;
  overflow: hidden;
  background: #E3EFFE;
  font-family: PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif;
}
.header {
  height: 28pt;
  padding: 0 30pt;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  font-size: 18pt;
  font-weight: 600;
  line-height: 1.22;
  color: #1F2D3D;
}
.content {
  position: absolute;
  left: 30pt;
  right: 30pt;
  top: 52pt;
  bottom: 26pt;
}
.footer {
  position: absolute;
  left: 30pt;
  right: 30pt;
  bottom: 10pt;
  height: 14pt;
  font-size: 6.5pt;
  color: #999999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### Grid

- 页面左右安全边距：`30pt`。
- 内容卡片间距：`10pt–12pt`。
- 卡片内边距：`8pt–12pt`。
- 标准双栏：左 42%，右 58%；适用于结论 + 图表。
- 标准三栏：1:1:1；适用于 KPI 或目标拆解。
- 标准上下结构：上方摘要条 44pt，下方图表/表格区域。

### Whitespace

- 每页只讲一个核心结论。
- 卡片之间的留白比描边更重要。
- 页面信息密度控制在 6–9 个信息块以内。
- 图表周围至少保留 8pt 空白，不要贴边。
- 标题下方至少保留 10pt 呼吸空间。

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | `border: none; box-shadow: none` | 默认卡片、正文区 |
| Soft Blue Tint | 浅蓝底块，无描边 | 摘要条、风险提示、说明条 |
| Float Object | 极淡蓝色阴影 | 封面插画、章节页主视觉，可少量使用 |

### Shadow Philosophy

报告页不是营销海报，不用强阴影制造层次。所有白色卡片默认无阴影、无边框，靠 `{colors.canvas-blue}` 与 `{colors.card-white}` 的对比形成层次。只有封面图形、章节页装饰物、轻量浮层可使用 `{shadows.soft-blue}` 或 `{shadows.float-object}`。

## Shapes

| Token | Value | Use |
|---|---:|---|
| `{rounded.none}` | 0pt | 图表坐标轴、进度条内部填充 |
| `{rounded.xs}` | 3pt | 小标签、表格状态块 |
| `{rounded.sm}` | 5pt | 小型浅蓝底块 |
| `{rounded.md}` | 8pt | 普通内容卡、提示条 |
| `{rounded.lg}` | 12pt | 主卡片、图表卡、KPI 卡 |
| `{rounded.xl}` | 16pt | 封面大卡、章节页大视觉容器 |
| `{rounded.pill}` | 999pt | 标签、胶囊状态、进度条 |

不要混用过多圆角。报告页主卡片统一 12pt，小卡片 8pt，标签 pill。

## Components

### `slide`

固定 16:9 幻灯片容器。每页必须是独立 `.slide`，不得依赖浏览器滚动区域展示内容。

```css
.slide {
  width: 720pt;
  height: 405pt;
  background: #E3EFFE;
  position: relative;
  overflow: hidden;
}
```

### `header`

页眉用于建立报告语境。左侧放页面标题，右侧放报告日期、客户简称、页码或标签。

```css
.header-meta {
  font-size: 7.5pt;
  color: #606060;
  display: flex;
  gap: 6pt;
  align-items: center;
}
```

使用规则：
- 标准内页必须有标题。
- 封面页可不用标准页眉。
- 右侧信息不超过 2 组，避免页眉拥挤。

### `footer`

页脚声明必须出现，尤其是投顾、基金、收益、历史业绩相关页面。

推荐文案：

```text
本报告由且慢基于账户信息、市场数据与投顾模型生成，仅供参考，不构成收益承诺。投资有风险，入市需谨慎。
```

使用规则：
- 固定 6.5pt。
- 单行，不折行。
- 不使用深色，不喧宾夺主。

### `panel`

主内容白色卡片。适合承载一组完整信息，如「核心结论」「资产配置」「收益走势」。

```css
.panel {
  background: #FFFFFF;
  border: none;
  border-radius: 12pt;
  padding: 12pt;
  box-shadow: none;
}
```

强制规则：
- 禁止 `border: 1px solid #EDEDED`。
- 禁止灰色描边。
- 禁止卡片外发散阴影。
- 禁止使用半透明白导致导出后色差。

### `content-card`

小型内容卡片。适合 KPI、标签解释、建议条、归因条目。

```css
.content-card {
  background: #FFFFFF;
  border: none;
  border-radius: 8pt;
  padding: 8pt;
}
```

### `blue-summary-bar`

用于页面顶部的核心结论摘要。

```css
.blue-summary-bar {
  background: #9CCBF8;
  border-radius: 8pt;
  padding: 6pt 8pt;
  color: #1F2D3D;
  font-size: 9pt;
  font-weight: 600;
}
```

使用规则：
- 每页最多一个。
- 文案控制在 28 个中文以内。
- 不要放复杂图表，只放结论。

### `kpi-card`

用于展示收益、回撤、胜率、达成率、持仓规模等核心指标。

结构：

```html
<div class="kpi-card">
  <div class="kpi-label">本周收益</div>
  <div class="kpi-value negative">-0.80%</div>
  <div class="kpi-desc">跑赢沪深300 0.40pct</div>
</div>
```

规则：
- 每页 KPI 不超过 4 个。
- 数字使用 `{typography.metric-number}`。
- 单位不要和数字抢层级，单位可小 30%。
- 正负收益用语义色，非收益类指标用品牌蓝。

### `chart-card`

图表容器，适合折线、柱状、面积、饼图、资产配置矩阵。

规则：
- 图表标题放在卡片左上角，图例放右上角或下方。
- 坐标轴线使用淡蓝灰，不使用黑色轴线。
- 网格线透明度控制在 30% 以下。
- 一张图最多 4 个序列。
- 饼图/环图不显示过多百分比，优先使用右侧图例说明。

### `table-card`

适用于持仓明细、交易记录、分红记录、费用说明、归因列表。

规则：
- 表头使用浅蓝底，不使用灰色描边。
- 表格字号 7.5pt。
- 行高不低于 15pt。
- 超过 7 行要分页，不要压缩字号。
- 数字右对齐，文本左对齐，状态居中。

### `recommendation-card`

用于「建议做什么」而不是只展示数据。

结构：

```html
<div class="recommendation-card">
  <div class="rec-label">建议 01</div>
  <div class="rec-title">适度降低科技主题仓位</div>
  <div class="rec-body">当前权益波动主要来自科技主题，可考虑分批调整至更均衡的宽基配置。</div>
</div>
```

规则：
- 建议必须可执行，避免空泛。
- 每条建议用短标题 + 一句解释。
- 不承诺收益，不使用绝对化措辞。

### `risk-note`

用于页内风险提示、数据口径说明、AI 生成说明。

```css
.risk-note {
  background: #F4F9FF;
  border: none;
  border-radius: 8pt;
  padding: 6pt 8pt;
  font-size: 7.5pt;
  line-height: 1.35;
  color: #606060;
}
```

## Report Page Patterns

### Cover Page

适合财富报告首页。

结构：
- 左侧：报告标题、客户名/报告周期、生成时间、顾问/机构信息。
- 右侧：抽象财富图形、蓝色渐变几何、轻量数据卡片。
- 底部：风险声明或品牌标识。

规则：
- 封面标题 30pt。
- 画面留白不少于 45%。
- 不放过多图表，不做营销式大字报。

### Executive Summary Page

适合第二页核心结论。

结构：
- 顶部：一句话结论摘要。
- 中部：3–4 个 KPI。
- 底部：2–3 条关键洞察 / 建议。

规则：
- 先结论，后数据。
- KPI 只选最重要的，不堆满。
- 建议文案必须明确下一步动作。

### Asset Allocation Page

适合资产配置分析。

结构：
- 左侧：资产配置环图/条形图。
- 右侧：权益、债券、现金、另类资产的配置说明。
- 底部：偏离度和调仓建议。

规则：
- 资产类别颜色固定，避免同一报告中反复变化。
- 资产变化用箭头或微型条，不用复杂动画。
- 不要在饼图里塞满百分比数字。

### Performance Review Page

适合收益走势和归因。

结构：
- 上方：收益曲线 / 基准对比。
- 下方：贡献与拖累列表。
- 右侧或底部：最大回撤、波动、超额收益。

规则：
- 折线图主线使用品牌蓝。
- 基准线用浅灰蓝或虚线。
- 拖累项用红色，但只用于数字和小标签。

### Goal Planning Page

适合教育金、退休、传承、流动性目标。

结构：
- 左侧：目标进度 / 缺口。
- 右侧：目标金额、时间窗口、优先级、建议投入。
- 底部：阶段行动计划。

规则：
- 目标进度使用蓝色进度条，不使用强烈红绿对比。
- 资源缺口可用 warning 色，不用 error 色制造焦虑。
- 每个目标必须有时间、金额、状态三要素。

### Recommendation Page

适合最终建议。

结构：
- 顶部：总建议摘要。
- 中部：3 条行动建议卡片。
- 底部：风险提示与执行条件。

规则：
- 建议排序按重要性，而不是按资产类别。
- 明确「观察 / 调整 / 继续持有 / 分批投入」等动作。
- 不使用“必然”“保证”“稳赚”等词。

## Charts

### General Chart Rules

- 图表色彩以蓝色序列为主。
- 一页一个主图，最多一个辅助图。
- 图例不超过 4 项。
- 图表中不要使用纯黑文字。
- 关键数值可直接标注，但不要所有点都标注。
- 图表标题必须解释图表要表达什么，而不是只写数据名称。

### Line Chart

适用于收益走势、净值变化、目标达成曲线。

- 主线：`{colors.chart-blue-1}`，2pt。
- 基准线：`{colors.chart-gray}`，1.2pt，虚线。
- 正向区间可用浅蓝面积，不超过 18% 透明度。
- 最大回撤点可用 `{colors.error}` 小圆点标记。

### Bar Chart

适用于贡献拖累、资产类别收益、月度分红。

- 正向柱：`{colors.success}` 或 `{colors.chart-blue-1}`。
- 负向柱：`{colors.error}`。
- 中性柱：`{colors.chart-gray}`。
- 柱间距不小于柱宽 40%。

### Donut / Pie Chart

适用于资产配置。

- 环图优先于饼图。
- 内圈可展示总资产或配置状态。
- 不要在每个扇区都放百分比，使用右侧图例。
- 颜色不超过 5 种。

### Progress Bar

适用于目标达成率、风险等级、现金流覆盖率。

- 背景：`{colors.brand-primary-soft}`。
- 填充：`{colors.brand-primary}`。
- 圆角：`{rounded.pill}`。
- 进度文字放右侧或条内，确保对比度。

## PPT Fidelity

### HTML to PPT Rules

- 所有尺寸使用 `pt`，不要混用大量 `vw/vh/rem`。
- 不使用 CSS Grid 的复杂自动布局，优先使用 `position:absolute` 或简单 flex。
- 不使用滤镜、混合模式、复杂渐变、毛玻璃、遮罩动画。
- 不使用外链字体、外链图片。
- 图标建议用内联 SVG，避免导出丢失。
- 所有图片必须设置固定宽高和 `object-fit`。
- 文本框高度要留 1–2 行容错，避免 PPT 中文字溢出。

### Export-Safe CSS

推荐基础 CSS：

```css
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background: #E3EFFE;
  font-family: PingFang SC, Microsoft YaHei, system-ui, -apple-system, sans-serif;
  color: #333333;
}
.deck {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 16px 0;
}
.slide {
  width: 720pt;
  height: 405pt;
  background: #E3EFFE;
  position: relative;
  overflow: hidden;
}
.panel,
.content-card,
.goal-board,
.principle,
.goal-row,
.chart-card,
.table-card,
.kpi-card,
.recommendation-card {
  background: #FFFFFF;
  border: none !important;
  box-shadow: none;
}
```

### Forbidden CSS

```css
/* 禁止 */
border: 1px solid #EDEDED;
border: 1px solid #EEEEEE;
box-shadow: 0 4px 12px rgba(0,0,0,.08);
filter: blur(12px);
backdrop-filter: blur(20px);
font-size: 6pt; /* 正文禁止 */
```

## Content Writing

### Tone

- 专业、克制、可解释。
- 先说结论，再给依据，最后给建议。
- 避免营销口吻，避免夸张表达。
- 不承诺收益，不暗示确定性。

### Recommended Sentence Patterns

- “本期账户表现主要受……影响，整体风险仍处于……区间。”
- “当前配置与目标配置相比，主要偏离来自……”
- “建议优先关注……，短期可采取……，中长期继续观察……”
- “该数据为历史表现，不预示未来收益。”

### Avoid

- “稳赚”“保本”“必涨”“无风险”。
- “马上买入”“唯一机会”“错过不再”。
- 未说明口径的收益率、排名、规模。
- 没有数据支撑的情绪判断。

## Do's and Don'ts

### Do

- 使用 `{colors.canvas-blue}` 作为每页背景。
- 使用 `{components.panel}` 和 `{components.content-card}` 承载白色内容区。
- 保持 `.title` 为 18pt / 600。
- 保持页脚声明为 6.5pt 单行。
- 用 `{colors.brand-primary}` 作为报告中的主强调色。
- 用留白、浅蓝底块和分组建立层级，而不是灰色描边。
- 每页只保留一个主结论。
- 图表标题写成观点型标题。
- 所有收益、回撤、风险提示加必要说明。

### Don't

- 不要给白色卡片加灰色描边。
- 不要用强阴影制造卡片层级。
- 不要把页面做成 App UI 或营销海报。
- 不要一页塞入过多图表。
- 不要用纯黑大段文字。
- 不要滥用红色、绿色。
- 不要使用复杂渐变、毛玻璃、动效。
- 不要缩小正文到 8pt 以下来硬塞内容。
- 不要让页脚风险提示换行或缺失。

## Iteration Guide

1. 先确认页面类型：封面、摘要、资产配置、收益复盘、目标规划、建议页。
2. 先写一句核心结论，再决定图表和卡片数量。
3. 优先引用 token：`{colors.*}`、`{typography.*}`、`{components.*}`，不要随意写新颜色。
4. 每次只调整一个组件，例如 `{components.kpi-card}` 或 `{components.chart-card}`。
5. 如果层级不清，先增加留白或浅蓝底块，不要加灰色描边。
6. 如果内容放不下，拆成两页，不要压缩字号。
7. 导出前检查：标题、页脚、卡片无描边、图表清晰、风险提示完整。

## Quality Checklist

生成后逐页检查：

- [ ] 画布为 16:9，尺寸 `720pt × 405pt`。
- [ ] 页面背景为 `#E3EFFE`。
- [ ] 多页间距为 `16px`。
- [ ] 标准内页有 `.title`，字号 18pt / 600。
- [ ] 页脚声明为 6.5pt，单行展示。
- [ ] 所有白色卡片 `border: none`。
- [ ] 没有使用 `#EDEDED` / `#EEEEEE` 作为卡片描边。
- [ ] 没有给普通卡片加阴影。
- [ ] 每页只有一个主结论。
- [ ] 图表图例不超过 4 项。
- [ ] 数据来源、风险提示、历史业绩说明完整。
- [ ] 导出 PPT / PDF 后文字没有溢出。

## Known Gaps

- 本规范主要面向 16:9 HTML 幻灯片，不覆盖移动端 H5。
- 不定义复杂交互、悬浮态、点击态和动效。
- 不覆盖基金交易下单页面、App 原生组件、后台管理系统。
- 不提供真实收益数据口径，数据内容必须由业务或数据源另行确认。
