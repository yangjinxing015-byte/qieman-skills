---
name: qieman-design-vip
description: >-
  Use this skill to create Qieman high-net-worth private-domain marketing visuals,
  including 9:16 vertical posters, 300万+ asset-threshold invitations, investment
  circle graphics, research-viewpoint spreads, advisor WeChat Moments assets,
  and nine-grid social campaigns. Output must follow blue-gold / black-gold VIP
  aesthetics, structured design tokens, risk disclosure rules, and AI image
  prompt workflows compatible with mainstream generative tools.
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
    style: "cinematic, restrained, professional"
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
  threshold-badge:
    typography: "{typography.title-serif-heavy}"
    textColor: "{colors.champagne-gold}"
    keywords: "{copy.threshold-keywords}"
  data-card:
    style: "transparent glass panel"
    border: "1px solid rgba(201, 169, 98, 0.3)"
    shadow: "{shadow.card-soft}"
---

# qieman-design-vip

| 字段 | 值 |
|------|-----|
| **ID** | `qieman-design-vip` |
| **层级** | L2 |
| **场景** | VIP 私域海报 |
| **规范** | 本文件 `SKILL.md` |
| **依赖** | [`qieman-design-ui`](../qieman-design-ui/SKILL.md) |
| **更新日期** | 2026-06-30 |

## 调用

```bash
npx openskills read qieman-design-vip
```

---

## Overview

qieman vip design 是一个面向 **且慢高净值用户私域传播** 的营销视觉生成规范。它用于把高净值门槛、圈层邀请、投研观点、严选机会、全球视野等私域传播需求，转化为专业、克制、高端、可信的 9:16 竖版海报与九宫格传播物料，并适配市面主流 AI 生图工具。

本 Skill **继承并扩展** [qieman-design-ui](../qieman-design-ui/SKILL.md) 的基础品牌 token（如 `{colors.brand-primary}` #1B88EE），在此基础上定义 VIP 私域专属的蓝金 / 黑金视觉体系、海报版式结构、文案逻辑、AI 生图提示词和九宫格传播方法。

**Version:** V0.1.2

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
```

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
* 风格：cinematic, restrained, professional
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

### Space Elements

* 海景露台
* 山景书房
* 顶层会客厅
* 高端会议室
* 现代别墅
* 城市夜景
* 游艇甲板
* 落地窗办公室
* 私享沙龙空间

### Object Elements

* 邀请函
* 会员卡
* 全球配置手册
* 投资报告
* 资产配置图
* 平板电脑
* 透明数据屏
* 地球仪
* 水晶数据摆件
* 钢笔
* 咖啡杯
* 文件夹
* 腕表
* 书本
* 品牌奖杯

### Data Elements

* 全球地图
* 资产配置饼图
* 组合表现走势图
* 宏观洞察卡
* 私享机会卡
* 长期策略卡
* 全球市场卡
* 政策动向卡
* 产业趋势卡

### People Elements

* 成熟商务人士
* 高净值投资者
* 顾问与客户对谈
* 单人远眺思考
* 小范围圈层交流
* 高端商务精英

### Brand Elements

* 盈米基金｜且慢组合 Logo
* 且慢圆形图形 Logo
* QIEMAN 字样
* 品牌金属装置
* 品牌奖杯
* 蓝色弧形底部
* 安放财富 · 静待花开

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
AI 生成无字高净值背景图
→ 设计软件叠加准确 Logo
→ 设计软件叠加准确标题
→ 设计软件叠加 slogan 和风险提示
→ 输出最终海报
```

### Two Generation Modes

本 Skill 支持两种 AI 生图模式：

#### Mode A: Direct Poster Mode

适合：

* ChatGPT Image
* 能较好处理中文字和版式的设计型工具
* 快速生成整体风格参考
* 方案探索阶段

特点：

* 可要求 AI 生成完整海报结构
* 可包含标题、Logo、底部 slogan
* 但必须人工检查文字准确性和 Logo 形态

风险：

* 中文可能乱码
* Logo 可能变形
* 风险提示可能错误
* 字距、层级、排版可能不稳定

#### Mode B: Background-only Mode

适合：

* Midjourney
* Stable Diffusion
* 即梦
* Firefly
* 通义万相
* 文心一格
* 大多数市面 AI 生图工具

特点：

* 只生成无文字、无 Logo 的高净值背景图
* 保留顶部、中上部、底部留白
* 后期在 Figma / Photoshop / Canva / 即梦编辑器中叠加文字和 Logo
* 最适合正式交付

推荐优先级：

```txt
正式设计交付：优先使用 Background-only Mode
快速概念探索：可使用 Direct Poster Mode
```

### Universal Prompt Structure

面向大多数 AI 生图工具，提示词应按以下结构组织：

```txt
画幅尺寸 / 比例
+
主题场景
+
高净值金融语义
+
主体元素
+
空间构图
+
色彩风格
+
材质光影
+
品牌气质
+
留白要求
+
禁止项
```

推荐通用提示词结构：

```txt
生成一张 9:16 竖版高端金融私域海报背景图，画面用于高净值投资圈层宣传。
主题是高净值用户、资产门槛、投资圈层、专业投研、长期陪伴。
画面风格专业、大气、克制、高端、安静、可信。
色彩以深蓝、黑蓝、香槟金、浅金为主，少量蓝色光效和金色细线。
主视觉为{具体场景}，体现圈层感、稀缺感、专业判断力和长期主义。
画面顶部和中上部需要预留大面积干净留白，用于后期添加 Logo 和标题。
底部需要预留蓝色弧形收口区域，用于后期添加 slogan 和风险提示。
不要出现任何文字，不要出现 Logo，不要出现乱码，不要出现绿色主调，不要低幼卡通，不要电商促销感，不要土豪炫富，不要满屏金币钞票。
```

### Negative Prompt Rules

通用 Negative Prompt：

```txt
文字、乱码、错误中文、错误英文、变形 Logo、低清 Logo、绿色主调、红色促销、土豪金、满屏金币、钞票堆、豪车、低幼卡通、Q版人物、廉价广告、杂乱背景、过多图表、屏幕乱码、人物比例异常、手部畸形、过曝光效、霓虹赛博、拥挤构图、电商促销风、收益承诺、稳赚不赔、保本暗示
```

英文工具可使用：

```txt
text, Chinese characters, garbled text, wrong logo, deformed logo, green color scheme, red promotional style, cheap luxury, piles of cash, gold bars, luxury car, childish cartoon, cute character, messy layout, cluttered charts, screen gibberish, distorted people, deformed hands, overexposed lighting, cyberpunk neon, e-commerce promotion poster, guaranteed returns, risk-free investment
```

### Text & Logo Handling Rule

为了适配更多 AI 生图工具，默认建议：

* AI 生图阶段不要生成中文标题
* AI 生图阶段不要生成真实 Logo
* AI 生图阶段不要生成风险提示
* AI 生图阶段只生成背景、场景、氛围、器物和视觉空间
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
* 明确 `no text, no logo`
* 使用 `--ar 9:16`
* 避免让工具生成真实品牌文字

示例：

```txt
luxury private wealth management poster background, high-net-worth investor circle, deep navy blue and champagne gold color palette, elegant private lounge by the sea, professional business atmosphere, cinematic lighting, refined financial objects, subtle transparent data panels, premium and restrained style, large clean empty space at the top for title, curved blue brand footer area at the bottom, no text, no logo, no letters, no watermark, no green color scheme, no childish cartoon, no piles of cash --ar 9:16
```

#### Stable Diffusion / SDXL

重点：

* 正向提示词写清主体、构图、风格
* 负向提示词必须写清 text、logo、watermark
* 建议使用 9:16 尺寸，如 1080×1920 或工具支持的等比尺寸

正向提示词示例：

```txt
A vertical 9:16 luxury private wealth management poster background, high-net-worth investor circle, elegant deep navy blue and champagne gold color palette, premium private lounge, sea view terrace, refined financial atmosphere, subtle transparent data cards, cinematic lighting, clean composition, large empty space on the top left for title, blue curved footer area at the bottom, professional, restrained, trustworthy, long-term investment mood
```

负向提示词示例：

```txt
text, logo, watermark, letters, Chinese characters, garbled text, green theme, red promotion, cartoon, cute, low quality, cluttered, cash pile, gold bars, luxury car, deformed people, bad hands, overexposed, cyberpunk, noisy background
```

#### 即梦 / 通义万相 / 文心一格等中文工具

重点：

* 中文提示词可以更具体
* 必须明确「不要文字、不要 Logo」
* 明确「顶部留白、中上部留白、底部蓝色弧形收口」
* 尽量避免复杂文字要求

示例：

```txt
生成一张9:16竖版高端金融海报背景图，画面用于高净值投资圈层宣传。整体为深蓝金色调，专业、大气、克制、高端。场景为海景露台上的高端商务会谈，远处是城市夜景和海面，画面有轻微金色光效和透明金融数据卡片，体现高净值圈层、私享投资机会、长期陪伴。顶部和中上部预留大面积干净留白，底部预留蓝色弧形收口区域。不要出现文字，不要出现Logo，不要出现乱码，不要绿色主调，不要低幼卡通，不要促销感，不要满屏金币和钞票。
```

#### ChatGPT Image / DALL·E 类工具

适合两种模式：

1. 直接生成完整海报
2. 生成无字背景图

正式设计仍推荐无字背景图。

无字背景图示例：

```txt
生成一张 1080×1920 的9:16竖版高端金融海报背景图。不要任何文字，不要任何Logo。画面用于且慢高净值私域宣传，主题是「资产300万以上才能进的投资圈，短暂开启席位」。整体深蓝金色调，专业、大气、克制、高端。主视觉为海景露台中的高端商务会谈，远处有海面、城市天际线和日落光线。画面顶部和中上部需要大面积干净留白，便于后期添加品牌Logo和主标题。底部保留蓝色弧形收口区域，便于后期添加「安放财富 · 静待花开」和风险提示。不要绿色主调，不要低幼卡通，不要电商促销感，不要土豪炫富，不要满屏金币钞票。
```

## Do's and Don'ts

### Do

* 使用蓝金 / 黑金 / 蓝白 VIP 配色体系
* 主标题使用 Source Han Serif CN Bold / Heavy
* 顶部放置 `{copy.brand-logo-text}` Logo
* 底部保留蓝色弧形收口 + slogan + 风险提示
* 300万+ 门槛信息前置、醒目
* 保持充足留白和信息层级清晰
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

当用户要求生成九宫格时：

* 每格尺寸为 `{canvas.grid-cell}`（360×360）
* 共 9 张
* 第一行优先做局部拼接大标题
* 第4格优先放 `300万+` 门槛
* 第5格作为视觉中心
* 第7–9格拆解权益
* 九张图必须整体统一

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
* 主视觉是否服务主题？
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
* 是否能适配不同 AI 生图工具？

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
请使用 Qieman-high-net-worth-private-Design Skill 生成一张且慢高净值私域宣传海报。

尺寸：
1080×1920，比例 9:16。

主题：
「{主题文案}」

设计目标：
画面用于高净值用户私域传播，体现高净值门槛、圈层稀缺感、专业财富管理能力、信息效率和长期价值陪伴。

整体风格：
专业、大气、克制、高端、安静、可信，有且慢品牌感。
色彩以蓝金体系为主，可根据主题选择深蓝金高净值版、黑金高净值版、浅蓝白专业版或蓝金科技展陈版。

字体：
主标题使用 Source Han Serif CN / 思源宋体 CN Bold 或 Heavy 风格，重点词可用浅金色强调。

版式结构：
顶部使用「盈米基金｜且慢」组合 Logo。
中上部为大标题，标题下方可加细分隔线。
中部放简短副标题或 3 个卖点。
中下部为主视觉场景。
底部使用蓝色弧形收口，并放置「安放财富 · 静待花开」和「市场有风险，投资需谨慎」。

视觉方向可选择：
人物圈层会谈 / 高端空间氛围 / 器物邀请函 / 数据圈层流通 / 投研能力展示 / 信息源判断力 / 自然远景长期主义。

画面元素可包含：
海景、山景、城市夜景、会客厅、露台、邀请函、全球配置手册、地球仪、透明数据卡、资产配置图、品牌奖杯、钢笔、咖啡杯、单人远眺、商务会谈。

禁止：
不要绿色主调，不要低幼卡通，不要电商促销感，不要土豪炫富，不要满屏金币钞票，不要复杂报告堆砌，不要过多文字，不要杂乱。
```

### Background-only AI Prompt Template

#### 中文通用提示词

```txt
生成一张 1080×1920 的 9:16 竖版高端金融海报背景图。不要任何文字，不要任何 Logo。

画面用于且慢高净值私域宣传，主题是「{主题文案}」。

整体风格专业、大气、克制、高端、安静、可信，体现高净值门槛、圈层稀缺感、专业财富管理能力、信息效率和长期价值陪伴。

色彩以深蓝、黑蓝、品牌蓝、香槟金、浅金为主，画面干净，有高级留白和柔和光影。

主视觉为「{视觉方向}」，可包含海景、山景、城市夜景、会客厅、露台、邀请函、全球配置手册、地球仪、透明数据卡、资产配置图、品牌奖杯、钢笔、咖啡杯、单人远眺、商务会谈等元素。

构图要求：
顶部和中上部预留大面积干净留白，便于后期添加「盈米基金｜且慢」Logo 和主标题。
中下部放置主视觉场景。
底部预留蓝色弧形收口区域，便于后期添加「安放财富 · 静待花开」和「市场有风险，投资需谨慎」。

禁止：
不要出现文字，不要出现 Logo，不要出现乱码，不要绿色主调，不要低幼卡通，不要电商促销感，不要土豪炫富，不要满屏金币钞票，不要复杂报告堆砌，不要过多图表，不要杂乱。
```

#### English Universal Prompt

```txt
Create a vertical 9:16 luxury private wealth management poster background, 1080x1920 composition. No text, no logo.

The theme is: "{theme copy}".

The image is for high-net-worth private marketing communication, expressing asset threshold, exclusive investment circle, professional research capability, information advantage, long-term wealth companionship, trust and restraint.

Use a refined deep navy blue, black blue, brand blue, champagne gold and soft gold color palette. The style should be premium, professional, calm, elegant, restrained, trustworthy and cinematic.

Main visual direction: {visual direction}. Possible elements include sea-view terrace, mountain-view study room, luxury lounge, private meeting room, city skyline at night, sailing boat, compass, investment desk, laptop with financial chart, globe, transparent financial data cards, asset allocation chart, premium brand trophy, invitation card, refined coffee cup, pen, books, and high-end business conversation.

Composition requirements:
Leave large clean empty space at the top and upper-middle area for later adding brand logo and headline.
Place the main visual in the middle-lower area.
Keep a blue curved footer area at the bottom for later adding brand slogan and risk disclosure.

Avoid:
text, letters, Chinese characters, garbled text, logo, watermark, green color scheme, red promotional style, childish cartoon, cute character, cheap luxury, piles of cash, gold bars, luxury car, messy charts, cluttered layout, overexposed neon, e-commerce poster style, guaranteed-return feeling.
```

#### Negative Prompt

```txt
文字、乱码、错误中文、错误英文、变形 Logo、低清 Logo、绿色主调、红色促销、土豪金、满屏金币、钞票堆、豪车、低幼卡通、Q版人物、廉价广告、杂乱背景、过多图表、屏幕乱码、人物比例异常、手部畸形、过曝光效、霓虹赛博、拥挤构图、电商促销风、收益承诺、稳赚不赔、保本暗示
```

English Negative Prompt:

```txt
text, Chinese characters, garbled text, wrong logo, deformed logo, watermark, green color scheme, red promotional style, cheap luxury, piles of cash, gold bars, luxury car, childish cartoon, cute character, messy layout, cluttered charts, screen gibberish, distorted people, deformed hands, overexposed lighting, cyberpunk neon, e-commerce promotion poster, guaranteed returns, risk-free investment
```

### Nine-grid Prompt Template

```txt
请使用 Qieman-high-net-worth-private-Design Skill 生成一组且慢高净值私域宣传九宫格。

尺寸：
单张尺寸 360×360，共 9 张。

主题：
「{主题文案}」

九宫格用于朋友圈和私域传播，不是长图海报缩小版。
整体需要单图可读、整体成组、主题统一、节奏清晰。

设计方向：
1. 局部拼接聚焦：第1/2/3张横向拼接为完整主题大标题，第一眼传递核心服务。
2. 门槛前置筛选：第4张突出“300万+”或“资产300万以上”准入门槛，精准筛选高净值用户。
3. 内容分层递进：第一行点明核心主题，第二行用高端商务场景和价值主张唤起认同，第三行拆解核心权益。
4. 高端质感统一：整体采用黑金或深蓝黑金高级配色，搭配商务精英、城市天际线、会客厅、数据屏、品牌器物等高净值审美元素。

推荐结构：
第1-3格：拼接主标题，如“高净值投资交流圈”或“资产300万以上才能进的投资圈”。
第4格：门槛前置，如“300万+资产准入门槛”。
第5格：核心品牌视觉或高端商务场景。
第6格：价值主张，如“进对圈子，比选对产品更重要”。
第7-9格：权益拆解，如“高净值圈层”“优质投资机会”“长期价值陪伴”，第9格可做品牌收口。

字体：
主标题使用 Source Han Serif CN Bold / Heavy。
卖点标题使用 Source Han Serif CN Medium / Bold。
小字使用 Source Han Sans CN Regular。

品牌：
第1格、第5格、第9格可放品牌 Logo。
深色背景使用白色 Logo，浅色背景使用蓝色 Logo。
第5格可强化且慢圆形 Logo 装置或品牌核心视觉。

禁止：
不要把长图直接缩小，不要单格文字过多，不要九格风格割裂，不要促销感，不要低幼，不要绿色主调，不要复杂报告堆砌，不要弱化 300万+ 门槛。
```

### Tool-specific Quick Prompt Guide

#### 20.1 门槛席位类背景图

```txt
生成一张9:16竖版高端金融海报背景图，不要文字，不要Logo。主题是高净值投资圈层、资产300万以上、短暂开启席位。画面采用深蓝金色调，专业、大气、克制、高端。主视觉为海景露台上的高端商务会谈，远处有城市夜景、海面和日落光线，局部有透明金融数据卡片和金色细线光效。顶部和中上部预留大面积干净留白，底部预留蓝色弧形收口区域。不要绿色主调，不要低幼卡通，不要促销感，不要满屏金币钞票。
```

#### 20.2 信息源判断类背景图

```txt
生成一张9:16竖版高端金融海报背景图，不要文字，不要Logo。主题是投资信息源决定收益天花板，进对圈子比选对产品重要。画面采用浅蓝白专业色调，深蓝文字区域留白。主视觉为山湖书房或窗边投资桌面，一位成熟商务人士在窗边思考，桌面有电脑金融走势图、投资书籍、钢笔、咖啡杯、地球仪，远处是山湖和开阔天空。顶部和中上部预留干净留白，底部预留蓝色弧形收口区域。画面专业、克制、长期主义，不要绿色主调，不要旅游宣传感，不要低幼卡通。
```

#### 20.3 投研能力类背景图

```txt
生成一张9:16竖版高端金融海报背景图，不要文字，不要Logo。主题是投研观点、严选机会、全球视野。画面采用深蓝金金融科技色调，主视觉为高端会议室或数据中台，透明数据卡片环绕展示全球地图、资产配置、趋势曲线、宏观洞察等抽象信息，中心可有品牌感的金属圆形装置或高端会议桌。整体专业、克制、可信，有高级光影和空间层次。顶部和中上部预留大面积标题留白，底部预留蓝色弧形收口区域。不要文字，不要乱码，不要绿色，不要赛博霓虹过强，不要复杂报告堆砌。
```

## Known Gaps

- VIP 海报专用 hex 色值尚未与 Figma 设计系统完全对齐；当前 token 为 Skill 层推导值，正式交付前建议对照品牌设计稿校验。
- 思源宋体 / 思源黑体在 AI 生图工具中无法直接渲染；正式交付须在设计软件中叠加准确字体。
- 且慢 Logo 图形尚未提供 SVG 资产引用路径；后期叠加须使用官方 Logo 文件。
- 九宫格局部拼接大标题的跨格对齐规则尚未提供像素级模板；当前为策略级描述。
- `{extends: qieman-design-ui}` 关系已声明，但跨 Skill token 自动合并尚未在 openskills 运行时验证。

