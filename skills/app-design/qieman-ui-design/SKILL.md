---
name: qieman-ui-design
layer: L0
license: Complete terms in LICENSE.txt
description: >-
  Use this skill when the user asks for UI interface, UI design, 且慢 App design,
  App pages, forms, lists, or Qieman/Yingmi financial mobile UI prototypes.
  For popups use qieman-sell-popup-design; for charts use qieman-chart-design on top of this L0.

colors:
  brand-primary: "#1B88EE"
  brand-primary-pressed: "#0F78D4"
  brand-primary-focus: "#1580E0"
  brand-poster: "#3180EC"
  brand-primary-faded: "#F0F6FF"

  text-primary: "#333333"
  text-secondary: "#606060"
  text-tertiary: "#999999"
  text-disabled: "#CCCCCC"
  text-inverse: "#FFFFFF"

  semantic-error: "#FA440C"
  semantic-warning: "#EA9500"
  semantic-success: "#07AD8F"
  semantic-error-faded: "#FEEDE9"
  semantic-warning-faded: "#FFFAEF"

  surface-page: "#F9FAFB"
  surface-card: "#FFFFFF"
  surface-card-subtle: "#F9FAFB"
  surface-card-muted: "#F7F7F7"
  surface-summary: "#DBEBFF"

  border-default: "#D8D8D8"
  border-primary: "#1B88EE"
  border-primary-subtle: "#9CCBF8"
  border-warning-subtle: "#FFDC9E"
  border-error-subtle: "#FAB6A5"

  chart-01: "#69B1F4"
  chart-02: "#F88D72"
  chart-03: "#FBCA74"
  chart-04: "#7DD4C4"
  chart-05: "#68E0F3"
  chart-06: "#ADAFE8"
  chart-07: "#3A7BB8"
  chart-08: "#FAB6A5"
  chart-09: "#EDC273"
  chart-10: "#9CCBF8"
  chart-11: "#C8CAEF"
  chart-12: "#6B9CCA"

  on-primary: "#FFFFFF"
  on-dark: "#FFFFFF"

typography:
  hero-display:
    fontFamily: "PingFang SC, MiSans, system-ui, -apple-system, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: -0.2px
  display-lg:
    fontFamily: "PingFang SC, MiSans, system-ui, -apple-system, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: -0.1px
  display-md:
    fontFamily: "PingFang SC, MiSans, system-ui, -apple-system, sans-serif"
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.28
    letterSpacing: 0
  title-lg:
    fontFamily: "PingFang SC, MiSans, system-ui, -apple-system, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "PingFang SC, MiSans, system-ui, -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  title-sm:
    fontFamily: "PingFang SC, MiSans, system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: "PingFang SC, MiSans, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body:
    fontFamily: "PingFang SC, MiSans, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "PingFang SC, MiSans, system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "PingFang SC, MiSans, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  caption-sm:
    fontFamily: "PingFang SC, MiSans, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  micro-legal:
    fontFamily: "PingFang SC, MiSans, system-ui, -apple-system, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  button:
    fontFamily: "PingFang SC, MiSans, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  number-xl:
    fontFamily: "MiSans, DIN Alternate, PingFang SC, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.2px
  number-lg:
    fontFamily: "MiSans, DIN Alternate, PingFang SC, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.1px
  number-md:
    fontFamily: "MiSans, DIN Alternate, PingFang SC, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  mono:
    fontFamily: "Courier New, ui-monospace, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 20px
  xl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px
  h5-safe: 16px

shadow:
  none: "none"
  card-soft: "0 2px 8px rgba(27, 136, 238, 0.06)"
  floating: "0 8px 24px rgba(30, 62, 98, 0.08)"

icons:
  library: "Remix Icon"
  libraryUrl: "https://remixicon.com/"
  cdn: "https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css"
  defaultStyle: "line"
  sizes:
    sm: 16px
    md: 20px
    lg: 24px
    xl: 32px

components:
  button-primary:
    backgroundColor: "{colors.brand-primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    minHeight: 44px
  button-primary-pressed:
    backgroundColor: "{colors.brand-primary-pressed}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    transform: "scale(0.98)"
  button-primary-focus:
    backgroundColor: "{colors.brand-primary}"
    textColor: "{colors.on-primary}"
    outline: "2px solid {colors.brand-primary-focus}"
    outlineOffset: 2px
  button-primary-disabled:
    backgroundColor: "{colors.text-disabled}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.brand-primary}"
    border: "1px solid {colors.border-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    minHeight: 44px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.brand-primary}"
    typography: "{typography.body}"
  tag-primary:
    backgroundColor: "{colors.brand-primary-faded}"
    textColor: "{colors.brand-primary}"
    border: "1px solid {colors.border-primary-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  tag-warning:
    backgroundColor: "{colors.semantic-warning-faded}"
    textColor: "{colors.semantic-warning}"
    border: "1px solid {colors.border-warning-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  tag-risk:
    backgroundColor: "{colors.semantic-error-faded}"
    textColor: "{colors.semantic-error}"
    border: "1px solid {colors.border-error-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  page-shell:
    backgroundColor: "{colors.surface-page}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
  report-hero:
    backgroundColor: "{colors.brand-poster}"
    textColor: "{colors.text-inverse}"
    typography: "{typography.hero-display}"
    rounded: "{rounded.xl}"
    padding: 32px
    minHeight: 280px
  h5-hero:
    backgroundColor: "{colors.brand-primary-faded}"
    textColor: "{colors.text-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.xl}"
    padding: "40px 16px"
  summary-card:
    backgroundColor: "{colors.surface-summary}"
    textColor: "{colors.text-primary}"
    border: "1px solid {colors.border-primary-subtle}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 16px
  content-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    border: "1px solid rgba(216, 216, 216, 0.72)"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 16px
    shadow: "{shadow.card-soft}"
  section-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
    shadow: "{shadow.card-soft}"
  metric-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    typography: "{typography.number-lg}"
    rounded: "{rounded.md}"
    padding: 16px
    shadow: "{shadow.card-soft}"
  chart-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 20px
    shadow: "{shadow.card-soft}"
  portfolio-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    border: "1px solid rgba(156, 203, 248, 0.55)"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 20px
  strategy-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 24px
  coupon-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    border: "1px solid {colors.border-primary-subtle}"
    typography: "{typography.number-lg}"
    rounded: "{rounded.lg}"
    padding: 20px
  disclosure-card:
    backgroundColor: "{colors.surface-card-muted}"
    textColor: "{colors.text-tertiary}"
    typography: "{typography.micro-legal}"
    rounded: "{rounded.sm}"
    padding: 12px
  step-item:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 16px
  input-field:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    border: "1px solid {colors.border-default}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "11px 12px"
    minHeight: 44px
  input-field-focus:
    border: "1px solid {colors.border-primary}"
    outline: "2px solid rgba(27, 136, 238, 0.12)"
  icon-standard:
    color: "{colors.text-tertiary}"
    size: 20px
  icon-primary:
    color: "{colors.brand-primary}"
    size: 20px
  footer-brand:
    backgroundColor: "{colors.brand-poster}"
    textColor: "{colors.text-inverse}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 24px
---

# qieman-ui-design

| 字段 | 值 |
|------|-----|
| **ID** | `qieman-ui-design` |
| **层级** | L0 |
| **规范** | 本文件 `SKILL.md` |
| **L1 扩展** | [qieman-sell-popup-design.md](../qieman-sell-popup-design/SKILL.md) |
| **更新日期** | 2026-07-02 |

## 调用

```bash
npx openskills read qieman-ui-design
```

---

## Overview

qieman ui design 是一个面向 **盈米基金 / 且慢** 金融产品设计任务的高保真界面生成规范。它用于把复杂的基金投顾、账户复盘、资产配置、财富规划、策略介绍、优惠券营销和数据可视化需求，转化为清晰、克制、可信、可落地的 HTML 原型或设计稿结构。

这个 Skill 采用 **“前置结构化 tokens + 后置执行型说明”** 的格式。前置 YAML 提供 agent 可直接引用的颜色、字体、圆角、间距、阴影和组件键；正文解释这些 token 的使用规则、页面结构、组件语法、响应式策略、风险披露和输出约束。

**核心设计气质：**
- 金融可信：信息真实、风险提示可读、结论优先。
- 克制轻盈：浅蓝、白底、轻卡片、低阴影，不制造过度装饰。
- 数据清晰：收益、回撤、仓位、现金流、风险等级必须有口径说明。
- 移动优先：适合 375px / 750px H5、App 页面、长图和响应式 HTML。
- Agent 友好：所有视觉决策优先引用 token，而不是临时硬编码。

## Skill Layering（规范分层）

且慢设计 skill 按 **业务域分类** 组织，每类下 **文件夹名 = `SKILL.md` 的 `name` 字段**。生成界面时先确定分类与层级，再按需叠加；**L0 token 优先，上层只补充场景差异**。

### 分类总览

```
qieman-skills/
├── app-design/                  App 界面与组件
│   ├── qieman-ui-design         L0  基础 UI、token、组件
│   ├── qieman-sell-popup-design L1  卖出/赎回挽留弹窗
│   └── qieman-chart-design      L2  图表与数据可视化
├── marketing-design/              营销传播
│   ├── qieman-h5-design         L2  营销 H5
│   └── qieman-vip-design        L2  VIP 私域海报
└── report-design/               报告与演示
    ├── qieman-ppt-design        L2  原生 PowerPoint
    └── qieman-report-design     L1  HTML 16:9 投顾报告幻灯片
```

| 层级 | 含义 | 依赖关系 |
|------|------|----------|
| **L0** | 品牌基础 token、组件、通用 Pattern | 无 |
| **L1** | 单一高频场景扩展 | `extends` 同域父级或 L0 |
| **L2** | 完整垂直场景 | `extends` L0 `qieman-ui-design` |

### app-design（本类）

| `name` | 层级 | 路径 | 适用任务 |
|--------|------|------|----------|
| `qieman-ui-design` | L0 | 本目录 `SKILL.md` | 标准 App 页、看板、表单、列表 |
| `qieman-sell-popup-design` | L1 | [`../qieman-sell-popup-design/SKILL.md`](../qieman-sell-popup-design/SKILL.md) | 卖出/赎回/退出策略底部挽留弹窗 |
| `qieman-chart-design` | L2 | [`../qieman-chart-design/SKILL.md`](../qieman-chart-design/SKILL.md) | 独立图表、仪表板、数据可视化 |

### marketing-design

| `name` | 层级 | 路径 | 典型产出 |
|--------|------|------|----------|
| `qieman-h5-design` | L2 | `../../marketing-design/qieman-h5-design/SKILL.md` | 营销 H5、活动页（触发词见 [`../../marketing-design/README.md`](../../marketing-design/README.md)） |
| `qieman-vip-design` | L2 | `../../marketing-design/qieman-vip-design/SKILL.md` | VIP 海报、九宫格（触发词见 [`../../marketing-design/README.md`](../../marketing-design/README.md)） |

### report-design

| `name` | 层级 | 路径 | 典型产出 |
|--------|------|------|----------|
| `qieman-ppt-design` | L2 | `../../report-design/qieman-ppt-design/SKILL.md` | PPT、幻灯片（触发词见 [`../../report-design/README.md`](../../report-design/README.md)） |
| `qieman-report-design` | L1 | `../../report-design/qieman-report-design/SKILL.md` | 家庭财富报告、财富报告书（触发词见 [`../../report-design/README.md`](../../report-design/README.md)） |

### 选用流程（Agent 路由）

按用户指令 / 提示词关键词选择 skill（详见 [`../README.md`](../README.md)）：

| 触发词 | 调用 |
|--------|------|
| **UI 界面、UI 设计、且慢 App 设计** | **L0** `qieman-ui-design` |
| **弹窗设计、营销类弹窗、卖出挽留弹窗** | **L0 + L1** `qieman-ui-design` → `qieman-sell-popup-design` |
| **UI 类 + 图表设计、曲线、走势图、饼图等** | **L0 + L2** `qieman-ui-design` → `qieman-chart-design` |

组合示例：图表页含卖出挽留弹窗 → 三者叠加。

### 选用流程（场景细分）

1. **标准 App 页 / 看板 / 表单 / 列表** → **L0** `qieman-ui-design`。
2. **卖出挽留弹窗 / 营销类弹窗** → **L0 + L1** `qieman-sell-popup-design`。
3. **App 内图表 / 曲线 / 饼图 / 走势图** → **L0 + L2** `qieman-chart-design`。
4. **营销 H5 / 活动页**（H5 页面设计、活动页设计、营销页设计）→ **L0 + L2** `qieman-h5-design`。
5. **VIP 私域海报**（高净值私域宣传、VIP 视觉、高客营销、顾问设计）→ **L0 + L2** `qieman-vip-design`。
6. **PPT / 幻灯片设计** → **L0 + L2** `qieman-ppt-design`。
7. **家庭财富报告 / 财富报告书** → **L0 + L2** `qieman-ppt-design` **+ L1** `qieman-report-design`。

## When to Use

使用本 Skill 当用户提出以下需求（**仅 L0，不含弹窗专用规范与独立图表规范**）：

- **UI 界面、UI 设计、界面设计、且慢 App 设计、且慢 app 设计**
- 生成且慢 / 盈米基金风格的 App 页面或 UI 原型（不含营销 H5 长页，见 `qieman-h5-design`）
- 设计账户复盘看板、策略介绍页、投顾组合卡、表单、列表等标准 App 页
- 需要输出完整单文件 HTML、CSS、JS 的 App 界面
- 用户明确要求遵守「且慢设计规范」「Qieman UI」「金融 APP 浅蓝风格」

**叠加其他 app-design skill：**

- 出现 **弹窗设计、营销类弹窗、卖出挽留弹窗** → 再读 `qieman-sell-popup-design`
- 出现 **图表设计、曲线、走势图、饼图、柱状图、数据可视化** → 再读 `qieman-chart-design`

不要使用本 Skill 处理与且慢金融 UI 无关的纯文本写作、论文写作、通用插画生成、照片编辑或非品牌视觉任务。

## Token Architecture

### Token 使用规则

- 所有颜色必须来自 `colors:`。
- 所有字号、字体、行高必须来自 `typography:`。
- 所有圆角必须来自 `rounded:`。
- 所有模块间距优先来自 `spacing:`。
- 所有常用组件优先来自 `components:`。
- 所有图标优先来自 `icons:` 定义的 [Remix Icon](https://remixicon.com/) 库，通过 CDN 引入。
- 生成 HTML/CSS 时，将 YAML token 映射为 CSS variables；不要在组件 CSS 中反复硬编码十六进制色值。

### Token 引用语法

正文与生成代码中引用 token 时，**分区名必须与 YAML frontmatter 键名一致**（复数 `components`，不用单数 `component`）：

| YAML 分区 | 引用格式 | 示例 |
|---|---|---|
| `colors` | `{colors.<key>}` | `{colors.brand-primary}` |
| `typography` | `{typography.<key>}` | `{typography.body}` |
| `rounded` | `{rounded.<key>}` | `{rounded.md}` |
| `spacing` | `{spacing.<key>}` | `{spacing.md}` |
| `shadow` | `{shadow.<key>}` | `{shadow.card-soft}` |
| `components` | `{components.<key>}` | `{components.summary-card}` |
| `icons` | `{icons.<key>}` | `{icons.cdn}` |

### YAML → CSS 变量映射

生成 HTML 时，将 token 映射为 `:root` CSS 变量。命名规则：

| YAML 分区 | 映射规则 | 示例 |
|---|---|---|
| `colors.*` | `--<key>` | `colors.brand-primary` → `--brand-primary` |
| `spacing.*` | `--space-<key>` | `spacing.md` → `--space-md` |
| `rounded.*` | `--radius-<key>` | `rounded.sm` → `--radius-sm` |
| `shadow.*` | `--shadow-<key>` | `shadow.card-soft` → `--shadow-card-soft` |
| `icons.sizes.*` | `--icon-size-<key>` | `icons.sizes.md` → `--icon-size-md` |
| 字体族（正文约定） | `--font-sans` / `--font-number` / `--font-mono` | 见 CSS Variable Baseline |

### 命名原则

- `brand-*`：品牌与行动色。
- `text-*`：文本层级。
- `surface-*`：页面、卡片、摘要等表面颜色。
- `border-*`：边框颜色。
- `semantic-*`：错误、提醒、成功等状态颜色。
- `chart-*`：图表数据色。
- `*-pressed` / `*-focus`：只描述按下和焦点，不鼓励依赖 hover 作为核心状态。

## Colors

### Brand & Action

**`{colors.brand-primary}` #1B88EE** 是且慢界面的唯一主行动色。用于主要按钮、文字链接、当前步骤、选中边框、核心 CTA、重点数据强调。除图表多系列色外，不要引入第二个行动色。

**`{colors.brand-poster}` #3180EC** 用于页头海报、品牌页尾、报告封面和需要大面积铺底的品牌模块。它比主行动色更适合作为视觉背景。

**`{colors.brand-primary-faded}` #F0F6FF** 用于浅蓝卡片、选中项背景、轻量提示区和移动端 H5 重点模块。

### Text

文本层级遵循：

| Token | 色值 | 用途 |
|---|---|---|
| `{colors.text-primary}` | #333333 | 标题、核心结论、主要正文 |
| `{colors.text-secondary}` | #606060 | 解释性正文、普通描述 |
| `{colors.text-tertiary}` | #999999 | 辅助说明、图例、时间、单位 |
| `{colors.text-disabled}` | #CCCCCC | 禁用态、弱提示 |
| `{colors.text-inverse}` | #FFFFFF | 蓝色或深色背景反白文字 |
| `{colors.on-primary}` | #FFFFFF | 主色按钮上的文字与图标 |
| `{colors.on-dark}` | #FFFFFF | 深色/海报背景上的文字与图标 |

### Semantic

| Token | 色值 | 用途 |
|---|---|---|
| `{colors.semantic-error}` | #FA440C | 风险、异常、亏损、卖出、上涨等需警示状态 |
| `{colors.semantic-warning}` | #EA9500 | 提醒、待确认、风险说明 |
| `{colors.semantic-success}` | #07AD8F | 买入、下跌、完成等业务定义为正向的状态 |
| `{colors.semantic-error-faded}` | #FEEDE9 | 错误/风险浅底提示区 |
| `{colors.semantic-warning-faded}` | #FFFAEF | 提醒浅底提示区 |

金融红绿语义必须服从业务。不要默认“绿色=赚钱”或“红色=亏损”。在且慢营销视觉中，绿色不作为主视觉色；只有业务语义明确时才使用 `{colors.semantic-success}`。

### Surfaces

页面默认使用 `{colors.surface-page}`。卡片使用 `{colors.surface-card}`。嵌套层级使用 `{colors.surface-card-subtle}` 或 `{colors.surface-card-muted}`。摘要区域使用 `{colors.surface-summary}`，以保证用户先读到结论。

### Charts

图表颜色必须按 `{colors.chart-01}` 到 `{colors.chart-12}` 顺序取色。主系列优先 `{colors.chart-01}`，对比系列 `{colors.chart-02}`，警示标记 `{colors.chart-03}`，辅助系列依次后推。不要随机生成图表色，也不要让图表色与业务语义冲突。

## Typography

### 字体策略

- 中文标题、正文、按钮：优先使用 `PingFang SC / MiSans / system-ui`；macOS/iOS 回退 `-apple-system`，末位 `sans-serif` 兜底。
- 数字：优先使用 `MiSans / DIN Alternate`，用于收益率、金额、百分比、仓位；无数字字体时回退 `PingFang SC / system-ui`。
- 等宽：用于代码、原始数据和调试信息。
- 不要输出字体文件；只使用字体族声明和系统 fallback。

### 层级

| Token | 大小 | 字重 | 用途 |
|---|---:|---:|---|
| `{typography.hero-display}` | 40px | 700 | H5 首屏标题、报告封面标题 |
| `{typography.display-lg}` | 32px | 700 | 页面主标题、大模块标题 |
| `{typography.display-md}` | 26px | 600 | 二级分区标题 |
| `{typography.title-lg}` | 24px | 600 | 模块标题、图表组标题 |
| `{typography.title-md}` | 20px | 600 | 卡片标题 |
| `{typography.title-sm}` | 18px | 600 | 小卡片标题、列表标题 |
| `{typography.body-lg}` | 17px | 400 | 主要正文、摘要段落 |
| `{typography.body}` | 16px | 400 | 标准正文、表格正文 |
| `{typography.body-sm}` | 15px | 400 | 次级正文 |
| `{typography.caption}` | 14px | 400 | 图例、说明、标签 |
| `{typography.caption-sm}` | 12px | 400 | 数据来源、补充说明 |
| `{typography.micro-legal}` | 11px | 400 | 风险披露、法律声明 |
| `{typography.number-xl}` | 36px | 700 | 关键收益、金额、百分比 |
| `{typography.number-lg}` | 28px | 700 | 指标卡核心数字 |
| `{typography.number-md}` | 22px | 600 | 小指标数字 |

### 排版原则

- 先用标题和摘要建立判断，再用正文解释原因。
- 核心数字必须配单位、时间口径和必要说明。
- 风险提示不得低于 11px，且对比度必须可读。
- 同一卡片内不要同时出现超过 3 个字号层级。
- 长报告正文桌面端行宽建议 640–760px；移动端保持 16px 安全边距。

## Layout

### Spacing System

结构节奏以 4px 为基础，常用间距为 8 / 12 / 16 / 24 / 32 / 48 / 64px。

- 页面左右安全边距：移动端 `{spacing.h5-safe}` 16px。
- 卡片内边距：标准 16px；信息密集卡可用 12px；大型营销模块可用 24px。
- 模块间距：默认 16px；大区块间距 32–64px。
- 图表上下留白：标题区与图表区至少 12px；图表与说明至少 8px。

### Containers

- 移动 H5：推荐宽度 375px / 750px 设计稿，左右 16px。
- App 页面：按 iPhone 13 mini / 375px 宽度优先适配。
- 报告页：桌面最大宽度 960–1120px。
- 看板页：桌面最大宽度 1200–1440px。
- 长图：保留顶部和底部呼吸感，避免首屏堆满信息。

### Page Rhythm

标准金融报告页面使用：

1. `{components.report-hero}`：报告名称、生成时间、核心视觉。
2. `{components.summary-card}`：核心结论、建议、AI 生成说明。
3. `{components.metric-card}`：关键指标。
4. `{components.chart-card}`：趋势、结构、贡献、风险图表。
5. `{components.content-card}`：解释、明细、建议。
6. `{components.disclosure-card}`：数据来源和风险提示。

标准营销 H5 使用：

1. `{components.h5-hero}`：主题标题、副标题、主视觉。
2. `{components.section-card}`：价值主张。
3. `{components.metric-card}`：关键利益点或数据证明。
4. `{components.coupon-card}`：权益或优惠券。
5. `{components.step-item}`：领取 / 配置 / 使用流程。
6. `{components.disclosure-card}`：活动规则和风险提示。

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | `{shadow.none}` | 页面背景、页头海报、页尾 |
| Hairline | 1px 弱边框 | 表格、普通卡片、输入框 |
| Soft Card | `{shadow.card-soft}` | 白卡片从浅灰背景中轻微浮起 |
| Floating | `{shadow.floating}` | 底部固定栏、重要浮层、轻量弹窗 |

不要使用厚重投影、玻璃拟态、霓虹光效或复杂 3D 装饰来表达金融专业感。层级优先通过背景、边框、间距、字号建立。

## Shapes

### Radius Scale

| Token | Value | Use |
|---|---:|---|
| `{rounded.none}` | 0px | 页尾、满版背景 |
| `{rounded.xs}` | 4px | 表格内小标签 |
| `{rounded.sm}` | 8px | 按钮、输入框、小卡片 |
| `{rounded.md}` | 12px | 标准卡片、摘要卡 |
| `{rounded.lg}` | 20px | 图表卡、策略卡、权益卡 |
| `{rounded.xl}` | 24px | H5 首屏、大型营销模块 |
| `{rounded.pill}` | 9999px | 胶囊标签、筛选项 |
| `{rounded.full}` | 9999px | 圆形图标按钮、头像 |

同一页面建议只使用 2–3 个圆角层级。不要让圆角成为视觉噪音。

## Components

### Buttons

**`{components.button-primary}`**：唯一主操作按钮。用于“立即领取”“生成报告”“确认配置”“查看详情”。最小高度 44px。

**`{components.button-primary-pressed}`**：按下状态。使用 `{colors.brand-primary-pressed}`，可配合 `transform: scale(0.98)`。

**`{components.button-primary-focus}`**：键盘或可访问性焦点状态。使用 2px 主色焦点轮廓。

**`{components.button-secondary}`**：次级操作按钮。白底、蓝字、蓝边框，不与主按钮争夺层级。

**`{components.text-link}`**：正文链接。用于协议、规则、详情跳转。不要把大段文字都设置为链接色。

### Tags

**`{components.tag-primary}`**：蓝色标签，用于当前状态、推荐、选中。

**`{components.tag-warning}`**：黄色标签，用于待确认、提醒、风险提示入口。

**`{components.tag-risk}`**：红色风险标签，用于异常、风险暴露、亏损提醒。

标签必须短，建议 2–6 个中文字。不要用标签承载长句。

### Cards

**`{components.summary-card}`**：先放结论，不放长表格。适合“本周账户收益 -0.8%，权益拖累为主”这类摘要。

**`{components.metric-card}`**：数值优先，包含：指标名、核心数字、单位、变化、时间口径。

**`{components.chart-card}`**：包含：标题、图例、图表主体、单位、数据来源。图表卡不要只有图，没有解释。

**`{components.portfolio-card}`**：用于投顾组合、资产包、基金组合。必须展示风险等级、配置比例、收益/回撤口径。

**`{components.strategy-card}`**：用于策略介绍，如低回撤定投、守正出奇、生生不息等。必须有策略定位、适用人群、风险提示。

**`{components.coupon-card}`**：用于营销券。必须包含金额、门槛、适用范围、有效期。不要只放大金额不解释规则。

**`{components.disclosure-card}`**：风险和数据来源。必须可读，不可隐藏成过浅灰小字。

### Inputs

**`{components.input-field}`**：输入框，白底、8px 圆角、1px 默认边框、44px 最小高度。

**`{components.input-field-focus}`**：聚焦时使用主色边框和浅蓝外轮廓。

错误状态使用 `{colors.semantic-error}` 文案和 `{colors.border-error-subtle}` 边框；必须给出错误原因。

### Icons

且慢界面统一使用 **[Remix Icon](https://remixicon.com/)** 开源图标库。优先选用 **`-line`** 线性风格，保持金融界面克制、简洁的视觉气质。图标只辅助识别，不替代文字说明；金融页面中不要使用过度卡通或低幼 IP 图标。

#### 引入方式

单文件 HTML 原型在 `<head>` 中通过 CDN 引入样式表（与项目现有页面保持一致）：

```html
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css" rel="stylesheet" />
```

图标库官网：[https://remixicon.com/](https://remixicon.com/) — 可在官网搜索图标名称后再写入代码。

#### 基础调用

Remix Icon 通过 `<i>` 标签 + 类名使用。类名格式为 `ri-{name}-{style}`：

| 风格 | 类名后缀 | 且慢使用建议 |
|---|---|---|
| 线性 | `-line` | **默认首选**，用于导航、列表、卡片、按钮、标签 |
| 填充 | `-fill` | 仅用于选中态、成功态、强调态（如已勾选、已完成） |

```html
<!-- 辅助说明图标 -->
<i class="ri-information-line"></i>

<!-- 主色强调图标 -->
<i class="ri-arrow-right-s-line icon-primary"></i>

<!-- 成功态（fill） -->
<i class="ri-checkbox-circle-fill icon-success"></i>
```

#### 尺寸规范

图标视觉尺寸固定为 **16 / 20 / 24 / 32px** 四档，通过 `font-size` 控制（Remix Icon 为 icon font，尺寸即字号）：

| 尺寸 | 用途 | 对应场景 |
|---:|---|---|
| 16px | 辅助、内联、表格 | 标签内小图标、脚注、列表次要操作 |
| 20px | **默认标准** | 卡片标题旁、表单、导航项（`{components.icon-standard}`） |
| 24px | 模块强调 | 价值卡图标区、步骤序号、Toast |
| 32px | 首屏/空状态 | H5 首屏利益点、空状态占位 |

```css
.icon-sm  { font-size: 16px; line-height: 1; vertical-align: -0.15em; }
.icon-md  { font-size: 20px; line-height: 1; vertical-align: -0.15em; }
.icon-lg  { font-size: 24px; line-height: 1; }
.icon-xl  { font-size: 32px; line-height: 1; }
```

图标按钮触控区域 **40–44px**，即使图标本身为 20px，外层容器仍需保证可点区域。

#### 颜色规范

颜色必须引用 `colors` token，禁止随意硬编码：

| Token / 类名 | 色值 | 用途 |
|---|---|---|
| `{components.icon-standard}` / `.icon-standard` | `{colors.text-tertiary}` #999999 | 默认辅助图标 |
| `{components.icon-primary}` / `.icon-primary` | `{colors.brand-primary}` #1B88EE | 主操作、链接、当前步骤 |
| `.icon-secondary` | `{colors.text-secondary}` #606060 | 正文旁说明图标 |
| `.icon-inverse` | `{colors.text-inverse}` #FFFFFF | 蓝色/深色背景上的反白图标 |
| `.icon-success` | `{colors.semantic-success}` #07AD8F | 完成、成功（需业务语义明确） |
| `.icon-warning` | `{colors.semantic-warning}` #EA9500 | 提醒、待确认 |
| `.icon-error` | `{colors.semantic-error}` #FA440C | 风险、异常 |

```css
.icon-standard { color: var(--text-tertiary); font-size: 20px; line-height: 1; }
.icon-primary  { color: var(--brand-primary);  font-size: 20px; line-height: 1; }
.icon-inverse  { color: var(--text-inverse);   font-size: 20px; line-height: 1; }
```

带底色图标容器（如价值卡、Toast）使用 `{colors.brand-primary-faded}` 背景 + `{colors.brand-primary}` 图标，圆角 `{rounded.sm}`。

#### 常用图标映射（金融场景）

在 [remixicon.com](https://remixicon.com/) 搜索以下关键词选取对应图标；名称以官网为准，生成代码时使用完整类名：

| 场景 | 推荐类名 | 说明 |
|---|---|---|
| 收益/趋势 | `ri-line-chart-line` | 收益走势、净值图表 |
| 基金/资产 | `ri-exchange-funds-line` | 基金转换、资产配置 |
| 礼物/权益 | `ri-gift-line` / `ri-gift-2-line` | 优惠券、重逢礼、活动 |
| 时间/限时 | `ri-time-line` / `ri-timer-line` | 倒计时、有效期 |
| 规则/协议 | `ri-file-list-3-line` | 活动规则、风险披露入口 |
| 信息说明 | `ri-information-line` | 口径说明、辅助提示 |
| 成功/完成 | `ri-check-line` / `ri-checkbox-circle-line` | Toast、步骤完成 |
| 警告/风险 | `ri-error-warning-line` | 风险提示、异常状态 |
| 箭头/跳转 | `ri-arrow-right-s-line` | 列表跳转、查看更多 |
| 关闭 | `ri-close-line` | 弹层、Toast 关闭 |
| 搜索 | `ri-search-line` | 基金/策略搜索 |
| 设置 | `ri-settings-3-line` | 账户设置、偏好 |
| 用户/账户 | `ri-user-line` | 个人中心、客户信息 |
| 分享 | `ri-share-line` | 报告分享、活动转发 |
| 下载/导出 | `ri-download-line` | 报告 PDF、数据导出 |

同一页面内，相同语义应复用同一图标，不要混用多个近义图标。

#### 使用原则

- **Line 优先**：未选中、未激活状态一律用 `-line`；仅选中/成功/强调时用 `-fill`。
- **图文并存**：图标旁必须有文字标签或 aria 说明，不可只用图标表达关键金融信息。
- **对齐正文**：内联图标使用 `vertical-align: -0.15em` 或与文字 flex 居中对齐。
- **不抢层级**：图标不得比核心数字、结论标题更醒目；装饰性图标密度每屏不超过 3–5 处。
- **禁止混库**：不要在同一页面同时使用 Remix Icon 与其他 icon font（如 Font Awesome、Material Icons）。

## Data Visualization

### Chart Palette

- 主系列：`{colors.chart-01}`。
- 对比系列：`{colors.chart-02}`。
- 警示/目标线：`{colors.chart-03}` 或语义色。
- 多系列：按 `{colors.chart-01}` 到 `{colors.chart-12}` 顺序取色。
- 避免绿色作为营销主视觉；若业务中绿色表示特定金融含义，必须明确说明。

### Required Chart Metadata

每个金融图表必须包含：

- 指标名称。
- 时间范围。
- 单位。
- 图例。
- 数据来源。
- 必要风险提示，例如“历史数据不预示未来表现”。

### Chart Types

- 折线图：收益趋势、净值走势、回撤曲线。
- 柱状图：收益贡献、分月分红、资产收益对比。
- 饼图 / 环图：资产占比、行业占比、组合结构。
- 面积图：资金流、累计收益、现金流变化。
- 雷达图：组合能力画像、风险收益特征。
- 仪表盘：发车信号、市场深度、风险评分。

### ECharts Rules

- DOM Ready 后初始化。
- `window.resize` 时调用 `chart.resize()`。
- 移动端减少坐标轴标签密度。
- 饼图移动端图例放到底部。
- tooltip 数字必须带单位。
- 不要把重要结论只藏在 tooltip 里。

## Page Patterns

### Account Review Report

结构：报告头图 → 核心结论 → 本周收益表现 → 资产配置变化 → 贡献和拖累 → 风险观察 → 下周建议 → 风险提示。

重点：先给结论，再给图表。收益、基准、回撤、仓位变化必须有时间口径。

### Fund Advisory Dashboard

结构：顶部指标区 → 组合概览 → 资产配置 → 收益/回撤趋势 → 持仓明细 → 风险提示。

重点：指标卡不超过 4 个一组；图表和表格分层，避免同时抢占视线。

### Strategy Introduction H5

结构：首屏策略主张 → 机制解释 → 数据证明 → 适合人群 → 使用步骤 → 风险说明。

重点：每屏一个核心观点，移动端不要堆太多表格。

### Coupon Campaign H5

结构：首屏利益点 → 优惠券卡 → 适用范围 → 使用步骤 → 活动规则 → 风险提示。

重点：金额大但规则清楚；优惠券不可只展示面额而省略门槛。

### Wealth Planning Report

结构：目标摘要 → 风险属性 → 目标规划 → 资源差测算 → 配置建议 → 现金流预测 → 风险提示。

重点：目标金额、时间窗口、风险等级、测算假设必须明确。

## Technical Implementation

### HTML

- 输出单文件 HTML，内嵌 CSS 和 JS。
- 使用语义化标签：`header`、`main`、`section`、`article`、`footer`。
- 保持结构清晰，模块有注释。
- 金融风险提示不要放在不可见区域。
- 需要图标时，在 `<head>` 引入 [Remix Icon](https://remixicon.com/) CDN，使用 `<i class="ri-*-line">` 调用；详见 **Components → Icons**。

### CSS

- YAML token 必须映射为 `:root` CSS variables。
- CSS 结构顺序：tokens → reset/base → layout → components → charts → responsive。
- 使用 Flexbox / Grid。
- 不使用固定死宽度破坏响应式。
- 不引入无关 CSS 框架，除非用户明确要求。

### JavaScript

- 仅在需要图表和基础交互时使用 JS。
- ECharts 数据集中定义，便于替换。
- 图表初始化和 resize 逻辑必须完整。
- 不模拟真实交易，不生成误导性收益承诺。

### CSS Variable Baseline

```css
:root {
  /* colors → --<key> */
  --brand-primary: #1B88EE;
  --brand-primary-pressed: #0F78D4;
  --brand-primary-focus: #1580E0;
  --brand-poster: #3180EC;
  --brand-primary-faded: #F0F6FF;

  --text-primary: #333333;
  --text-secondary: #606060;
  --text-tertiary: #999999;
  --text-disabled: #CCCCCC;
  --text-inverse: #FFFFFF;

  --semantic-error: #FA440C;
  --semantic-warning: #EA9500;
  --semantic-success: #07AD8F;
  --semantic-error-faded: #FEEDE9;
  --semantic-warning-faded: #FFFAEF;

  --surface-page: #F9FAFB;
  --surface-card: #FFFFFF;
  --surface-card-subtle: #F9FAFB;
  --surface-card-muted: #F7F7F7;
  --surface-summary: #DBEBFF;

  --border-default: #D8D8D8;
  --border-primary: #1B88EE;
  --border-primary-subtle: #9CCBF8;
  --border-warning-subtle: #FFDC9E;
  --border-error-subtle: #FAB6A5;

  --on-primary: #FFFFFF;
  --on-dark: #FFFFFF;

  --chart-01: #69B1F4;
  --chart-02: #F88D72;
  --chart-03: #FBCA74;
  --chart-04: #7DD4C4;
  --chart-05: #68E0F3;
  --chart-06: #ADAFE8;
  --chart-07: #3A7BB8;
  --chart-08: #FAB6A5;
  --chart-09: #EDC273;
  --chart-10: #9CCBF8;
  --chart-11: #C8CAEF;
  --chart-12: #6B9CCA;

  --font-sans: PingFang SC, MiSans, system-ui, -apple-system, sans-serif;
  --font-number: MiSans, DIN Alternate, PingFang SC, system-ui, sans-serif;
  --font-mono: Courier New, ui-monospace, monospace;

  /* rounded → --radius-<key> */
  --radius-none: 0px;
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 24px;
  --radius-pill: 9999px;
  --radius-full: 9999px;

  /* spacing → --space-<key> */
  --space-xxs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-xxl: 48px;
  --space-section: 64px;
  --space-h5-safe: 16px;

  /* shadow → --shadow-<key> */
  --shadow-none: none;
  --shadow-card-soft: 0 2px 8px rgba(27, 136, 238, 0.06);
  --shadow-floating: 0 8px 24px rgba(30, 62, 98, 0.08);

  /* icons.sizes → --icon-size-<key> */
  --icon-size-sm: 16px;
  --icon-size-md: 20px;
  --icon-size-lg: 24px;
  --icon-size-xl: 32px;
}
```

## Do's and Don'ts

### Do

- 使用 `{colors.brand-primary}` 作为唯一行动色。
- 先输出结构和信息层级，再做装饰。
- 金融数据必须有单位、时间口径、数据来源。
- 重要结论优先放在 `{components.summary-card}`。
- 图表使用 `{colors.chart-*}` token，不随机生成颜色。
- 使用浅灰页面 + 白色卡片 + 蓝色强调的稳定结构。
- 图标统一使用 [Remix Icon](https://remixicon.com/) `-line` 风格，颜色与尺寸引用 icon token。
- 移动端保持 16px 安全边距和 44px 触控目标。
- 风险提示必须可读，不能过浅或过小。
- 输出 HTML 时使用 CSS variables 和语义化结构。

### Don't

- 不要使用多个主行动色。
- 不要用厚重阴影、强玻璃拟态、霓虹渐变破坏金融可信感。
- 不要把风险披露放到不可读的小字或隐藏区域。
- 不要在没有业务语义确认时用红绿暗示收益好坏。
- 不要让图标、插画、装饰抢走核心数据层级。
- 不要在移动端单屏堆叠过多图表和表格。
- 不要硬编码 token 已定义的颜色、字号、间距。
- 不要承诺收益或生成“稳赚”“无风险”等金融误导表达。
- 不要在且慢品牌页面中使用低幼卡通、杂乱城市背景或高饱和绿色主视觉。
- 不要混用多个 icon 库，不要用 emoji 替代正式 UI 图标。

## Responsive Behavior

### Breakpoints

| Name | Width | Behavior |
|---|---:|---|
| Small phone | ≤ 375px | 单列布局，减少图表标签密度，保持 16px 安全边距 |
| Phone | 376–640px | H5 / App 主布局，卡片单列，指标 1–2 列 |
| Tablet | 641–1024px | 指标 2 列，图表可整行或 2 列 |
| Small desktop | 1025–1199px | 报告最大 960–1120px，看板 3 列指标 |
| Desktop | 1200–1440px | 看板 4 列指标，图表栅格布局 |
| Wide desktop | ≥ 1441px | 内容锁定最大宽度，外侧留白吸收 |

### Collapsing Strategy

- 指标卡：4 → 3 → 2 → 1 列。
- 图表卡：桌面可并排，移动端单列。
- 表格：桌面完整表格，移动端横向滚动或卡片化。
- H5 首屏：桌面左右结构，移动端标题优先、视觉后置。
- 页尾：桌面横向，移动端纵向堆叠。

### Touch Targets

- 主按钮最小高度 44px。
- 图标按钮触控区域 40–44px，即使图标为 20px。
- 表单输入框最小高度 44px。
- 筛选标签点击区域高度不低于 32px。

## Output Requirements

### Default Output

当用户要求“生成页面 / HTML / 原型 / H5 / 看板”时，默认输出：

1. 完整单文件 HTML。
2. 内嵌 CSS variables。
3. 响应式布局。
4. 必要的 ECharts 初始化代码。
5. 基础交互状态。
6. 风险提示和数据来源区域。
7. 代码注释清晰，便于复制运行。

### Quality Bar

生成结果必须满足：

- 视觉符合且慢浅蓝、白卡、克制金融风格。
- 信息层级清晰，首屏能看到核心结论或利益点。
- 数据图表可读，移动端不溢出。
- 风险提示存在且可读。
- 无明显无关色彩、无随机字体、无混乱阴影。
- 组件可复用，CSS 变量可维护。

## Iteration Guide

1. 先判断页面类型：报告、看板、H5、策略页、优惠券页、组件库。
2. 选择对应 Page Pattern。
3. 引用 YAML 中的 `components` token 建立结构。
4. 用 typography token 建立标题、正文、数字层级。
5. 用 chart token 配置数据图表。
6. 检查风险提示、时间口径、单位、数据来源。
7. 移动端优先测试：375px 宽度不可溢出。
8. 若需要强化视觉，优先调整留白、插图位置和卡片层级，不要新增主色。

## Known Gaps

- 本 Skill 不定义完整品牌 Logo 使用规范；Logo 位置和尺寸需根据实际品牌文件确定。
- 本 Skill 不包含暗色模式；默认浅色金融界面。
- **底部挽留 / 卖出确认弹窗** → 使用 L1 扩展 [qieman-sell-popup-design.md](../qieman-sell-popup-design/SKILL.md)，不要仅在 L0 临时拼凑弹窗样式。
- 本 Skill 不包含 Toast、Tab、导航栏、复杂表单等其它组件的完整规范；需要时在 L0 token 上扩展或沉淀为新的 L1 文件。
- 图表参数只定义原则和色板，具体坐标轴、tooltip、legend 需按页面场景补充。
- 字体族不包含字体文件；若生产环境缺少品牌字体，使用系统 fallback。
- 金融红绿语义需要结合具体业务确认，不能由 agent 自行推断。
- 如果输出用于真实投资决策页面，必须由业务、合规和投顾团队复核文案与风险披露。
