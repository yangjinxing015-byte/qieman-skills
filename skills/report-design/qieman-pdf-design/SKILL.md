---
name: qieman-pdf-design
license: Complete terms in LICENSE.txt
description: >-
  Qieman brand PDF design and delivery spec for family wealth planning, advisory reports,
  product documentation, and research briefs. Includes RemixIcon, Apache ECharts chart colors,
  color tokens, layout templates, chart specifications, and delivery checklists.
layer: L2
extends: app-ui
---

# qieman-pdf-design

| 字段 | 值 |
|------|-----|
| **ID** | `qieman-pdf-design` |
| **层级** | L2 |
| **场景** | PDF 报告与文档 |
| **规范** | 本文件 `SKILL.md` |
| **依赖** | [`app-ui`](../app-ui/SKILL.md) |
| **更新日期** | 2026-07-01 |

## 调用

```bash
npx openskills read qieman-pdf-design
```

---

## Overview

qieman pdf design（本文件 `SKILL.md`）定义且慢品牌体系下的 PDF 设计与交付规范，适用于家庭财富规划、投顾报告、产品说明书、研究简报等可交付 PDF 场景。

## 0. 你的角色

你是一名「且慢」品牌体系下的资深金融报告设计师 / 文档排版专家。你的目标是把复杂金融信息以**可读、可信、清爽**的方式呈现为可交付的 PDF（适用于：家庭财富规划、投顾报告、产品说明书、研究简报等）。

---

## 1. 目标与输出

### 1.1 输出目标

* 视觉一致：严格遵循「且慢」配色与字体层级
* 信息清晰：结构化、强对比层级、少干扰装饰
* 交付可靠：导出后无错位、无裁切、图表清晰可读

### 1.2 输出物

* PDF 文件（可打印/可阅读）
* 可选：源文件（Keynote/Figma/Sketch）或图表配置（ECharts option/theme）

---

## 2. 版式与页面规范

> 默认提供两套 PDF 形态，你按需求选择其一并保持全稿一致。

### A. 报告型（推荐默认）

* 纸张：A4 竖版
* 页边距：左右 18–22mm，上 18mm，下 20mm
* 栅格：8pt 间距系统；内容区建议 12 栅格（便于卡片/双栏排版）

### B. 演示型（用于“PPT 导出 PDF”）

* 画布：16:9 横版
* 安全边距：左右/上下 48–64px（封面/章节页背景图可不留边距）
* 栅格：12 栅格；模块间距 24/32/40px

---

## 3. 字体与排版层级（Typography）

> 原则：金融报告以“可读优先”，避免花哨字体；数字与单位对齐统一。**中文统一采用思源体**，保证跨平台、可嵌入 PDF 的稳定表现。

### 3.1 字体规范（统一思源体）

* **中文（统一）**：**思源黑体（Source Han Sans CN / Noto Sans CJK SC）**
  * 首选：Source Han Sans CN（Adobe 思源黑体简体）
  * 等价：Noto Sans CJK SC（Google/思源同源，跨平台常用）
  * 全稿中文只使用思源体系列，不混用苹方/微软雅黑等
* **英文与数字**：与中文混排时优先用思源黑体内置拉丁/数字；若单独英文段落可用 Inter / DIN（需与思源体风格协调）

### 3.2 字号层级（A4 报告型建议）

* H1（章节标题）：20–24pt / SemiBold
* H2（模块标题）：14–16pt / Medium
* 正文：11–12pt / Regular
* 辅助说明：9–10pt / Regular
* 行高：正文 1.4–1.6；标题 1.2–1.3

### 3.3 排版规则

* 标题不超过 2 行；超出则收敛文案或拆模块
* 数字/单位/百分号：同一段落保持同一字体与字重
* 表格数字列：右对齐；文本列：左对齐

---

## 4. 信息结构与组件系统

### 4.1 推荐内容结构（报告型）

* 封面 Cover
* 目录 Contents（可选）
* 摘要 Executive Summary（1 页内）
* 章节 Section（每章可有章首页）
* 内容页 Content（图表/表格/要点）
* 结语 & 风险提示 / 免责声明
* 封底 Back Cover

### 4.2 常用内容组件（组件化复用）

* 标题区：章节标题 + 说明（可加小标签）
* 信息卡片 Card：数据/结论/对比（白底或浅灰底）
* 重点提示 Callout：成功/提醒/警示三态
* 表格 Table：轻网格线 + 分组表头
* 图表 Chart：统一配色、统一图例位置、统一数据标签策略

---

## 5. 图标系统（RemixIcon）

### 5.1 图标库

* 统一使用：**RemixIcon**
* 格式优先级：SVG > PDF矢量 > PNG（不得使用低清截图）

### 5.2 使用规范

* 风格统一：同一页面内只选一种风格（Line 或 Fill），推荐 **Line** 用于报告更克制
* 尺寸体系：16 / 20 / 24（与正文/标题对应）
* 线性图标线宽：保持视觉一致（避免混用粗细差异大的图标）
* 颜色使用：

  * 默认：`color/text/neutral subtler #999999`
  * 强调：`color/brand #1B88EE`（仅用于关键状态/链接）
  * 反白：`color/text/inverse #FFFFFF`（深色底）

### 5.3 放置与对齐

* 图标与文字基线对齐；图标与文字间距 6–8px
* 图标只做“辅助识别”，不要替代关键信息（尤其是风险提示）

---

## 6. 数据图表规范（Apache ECharts）

> 目标：图表在 PDF 中**清晰、可印刷、可解释**。避免炫技动效。

### 6.1 ECharts 配色规范（且慢图表数据颜色）

按序使用（系列颜色数组）：

1. `#69B1F4`（chart01）
2. `#F88D72`（chart02）
3. `#FBCA74`（chart03）
4. `#7DD4C4`（chart04）
5. `#68E0F3`（chart05）
6. `#ADAFE8`（chart06）
7. `#3A7BB8`（chart07）
8. `#FAB6A5`（chart08）
9. `#EDC273`（chart09）
10. `#9CCBF8`（chart10）
11. `#C8CAEF`（chart11）
12. `#6B9CCA`（chart12）

### 6.2 图表基础样式（建议统一 theme）

* 背景：透明或 `color/background/card/default #FFFFFF`
* 坐标轴文字：`color/text/neutral subtle #606060`
* 轴线/网格线：`color/border/neutral faded #D8D8D8`（更轻可用 20–40% 透明度）
* 图例 legend：

  * 字号 10–11pt（A4）
  * 默认置顶或置底，避免遮挡图形
* 数据标签：

  * 仅对关键数据点/峰谷/最后一个点展示，避免满屏数字

### 6.3 PDF 导出建议（避免糊）

* 优先 SVG 渲染（线条更锐）
* 若必须位图：导出 2x–3x 分辨率（300dpi 级别）再嵌入 PDF
* 避免细线 + 浅色叠加导致打印不可见；必要时提高线宽或加深颜色

### 6.4 ECharts 主题示例（可直接复用）

```js
// Qieman ECharts Theme (简化版)
export const qiemanTheme = {
  color: [
    "#69B1F4","#F88D72","#FBCA74","#7DD4C4","#68E0F3","#ADAFE8",
    "#3A7BB8","#FAB6A5","#EDC273","#9CCBF8","#C8CAEF","#6B9CCA"
  ],
  textStyle: { color: "#333333" },
  title: { textStyle: { color: "#333333" } },
  legend: { textStyle: { color: "#606060" } },
  categoryAxis: {
    axisLine: { lineStyle: { color: "#D8D8D8" } },
    axisTick: { show: false },
    axisLabel: { color: "#606060" },
    splitLine: { lineStyle: { color: "#D8D8D8", opacity: 0.4 } }
  },
  valueAxis: {
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: "#606060" },
    splitLine: { lineStyle: { color: "#D8D8D8", opacity: 0.4 } }
  }
};
```

---

## 7. Color Token（且慢颜色体系）

> 所有颜色必须从 token 中取值，不允许“随手挑一个差不多的蓝”。

### 7.1 主色/品牌色

* `color/brand` `#1B88EE`

### 7.2 文本色

* `color/text/neutral` `#333333`：标题/正文重点
* `color/text/neutral subtle` `#606060`：正文/次级说明
* `color/text/neutral subtler` `#999999`：icon/辅助信息
* `color/text/neutral subtlest` `#CCCCCC`：弱辅助
* `color/text/inverse` `#FFFFFF`：深色底反白
* `color/text/primary` `#1B88EE`：链接/成功（如用于正向提示）
* `color/text/error` `#FA440C`：警告、卖出（上涨）
* `color/text/warning` `#EA9500`：提醒、信息
* `color/text/success` `#07AD8F`：买入、下跌

### 7.3 页面背景

* `color/background/page/deep` `#F9FAFB`

### 7.4 卡片背景

* `color/background/card/default` `#FFFFFF`
* `color/background/card/deep` `#F9FAFB`
* `color/background/card/deeper` `#F7F7F7`
* `color/background/card/primary faded` `#F0F6FF`
* `color/background/card/warning faded` `#FFFAEF`
* `color/background/card/error faded` `#FEEDE9`

### 7.5 描边（Border）

* `color/border/neutral faded` `#D8D8D8`：默认灰
* `color/border/primary` `#1B88EE`：强调
* `color/border/info` `#9CCBF8`：蓝（信息）
* `color/border/warning` `#FFDC9E`：黄（提醒）
* `color/border/error` `#FAB6A5`：红（警示）

> 注：落地时在设计系统里使用 `border/info` / `border/warning` / `border/error` 与默认 `neutral faded` 区分，避免实现混乱。

---

## 8. 图表与表格的可读性规则（强制）

* 不用纯颜色区分含义：必要时加图例、标注、形状/线型区分
* 关键结论必须用文字写出来（图表只做证据）
* 表格行高 ≥ 1.4 倍字号；隔行底色用 `card/deep` 提升阅读
* 风险提示永远可见：用 `warning/error faded` 背景 + 对应文字色

---

## 9. 视觉一致性约束（硬性）

* 全稿只允许一种主视觉风格（克制、留白、卡片化）
* 同级标题字号/字重/间距必须一致
* 卡片圆角统一（建议 8–12），描边统一（默认 `#D8D8D8` 低对比）
* 不允许出现“像PPT拼贴”的阴影/高饱和渐变（除封面/章首页）

---

## 10. 导出与交付规范（PDF Export）

* 嵌入字体（避免跨设备替换导致错位）；中文务必嵌入思源黑体 / Noto Sans CJK SC
* 图片分辨率：打印用途建议等效 300dpi
* 图表优先矢量（SVG/PDF），避免截图糊边
* 文件命名（示例）：

  * `且慢_家庭财富规划_客户名_YYYYMM_v1.0.pdf`
  * `且慢_VIP投顾报告_客户名_YYYYMM_v1.0.pdf`

---

## 11. 交付前自检清单（Checklist）

* [ ] 封面信息完整、品牌色正确、Logo 清晰
* [ ] 全文无错别字、无孤行孤字、无对齐漂移
* [ ] 图表颜色按 chart01–12 顺序使用，图例与标注清晰
* [ ] 表格数字对齐正确，行距舒适
* [ ] 导出后无裁切/重叠/字体替换/图片发虚
* [ ] 风险提示与免责声明存在且位置一致

---

## 12. 标准页面模板（Page Templates）

统一原则：信息结构清晰 > 视觉装饰；所有页都遵循同一栅格与间距体系。
推荐默认：A4 竖版报告型（若是 16:9 导出 PDF，把单位 mm 替换为 px 也成立）。

### 12.1 统一栅格与间距（Spacing System）

* 基础间距：8pt（或 8px）体系
* 模块间距：16 / 24 / 32 / 40（逐级递增）
* 内容区建议：
  * A4：左右 18–22mm，上 18mm，下 20mm
  * 16:9：安全边距 48–64px（封面/章节页背景可全幅）

### 12.2 Cover 封面模板

**信息结构（从上到下）**

* Logo（左上或右上，固定位置）
* 报告主标题（H1）
* 关键信息块（2 列卡片或单列信息组）：客户姓名、风险测评等级、投顾姓名、报告时间
* 底部免责声明一句（小号、弱对比）

**视觉要求**

* 背景可使用品牌蓝 + 抽象金融科技纹理（但不影响标题可读性）
* 文本优先 `color/text/inverse #FFFFFF` 或深色底反白方案
* 封面可“无页边距背景图”（全幅铺满），但文字必须在安全区内

### 12.3 Contents 目录模板（可选）

**版式推荐**

* 左：目录列表（章节编号 + 标题）
* 右：导语/摘要（最多 3–5 行）或装饰性数据点（不喧宾夺主）

**规则**

* 目录项行距一致；章节编号对齐（统一 01/02/03）
* 目录最多 7–9 项，超过则合并章节或用二级目录缩进

### 12.4 Section 章节首页模板

**用途**：章节分隔、建立阅读节奏（每章 1 页）

**结构**

* 章节编号（大号、浅色，如 #9CCBF8 或 brand 低透明）
* 章节标题（H1）
* 章节一句话说明（10–12pt，neutral subtle）
* 右下或底部可放“本章包含：xx/yy/zz”三点列表

**视觉约束**

* 章节页可以允许更强品牌表现（渐变/背景图），但只用于章节页
* 内容页保持克制

### 12.5 Content 内容页模板（核心）

提供 3 种官方感最强的内容页骨架（全稿固定复用）：

**A. 结论先行（推荐默认）**

* 顶部：模块标题（H2）+ 时间/范围（小号）
* 第一屏：关键结论卡片（1–3 条要点，带数据）
* 下方：证据区（图表/表格）+ 简短解读（2–4 行）
* 适用：投顾建议、阶段总结、策略解读、风控结论

**B. 图表主导**

* 顶部：标题 + 关键指标（2–4 个 KPI 小卡）
* 中部：主图表（占 60–70% 高度）
* 底部：图表说明（口径、数据来源、风险提示）
* 适用：收益曲线、回撤、资产分布、对比分析

**C. 对比双栏**

* 左：方案 A（卡片）
* 右：方案 B（卡片）
* 中间：差异点列表（3–5 条）
* 适用：产品对比、策略对比、组合调整前后对比

### 12.6 Backcover 封底模板

**结构**

* 品牌收尾语（1 句）
* 联系方式/团队署名（可选）
* 免责声明（必备）

**规则**

* 封底可以全幅背景；信息仍放在安全区
* Logo 与封面位置对称（保持仪式感）

---

## 13. 常见金融图表类型（ECharts）规范与可复制配置

统一前置：所有 option 默认套用 qiemanTheme（见 6.4）。
下列代码给的是可直接复制的“模板 option”，替换数据即可。

### 13.1 收益曲线（Line）

**规则**：线宽 2–3；关键点（期末/峰谷）才加 label；yAxis 建议用百分比；tooltip 展示日期+数值。

```js
export const optionReturnLine = (dates, seriesList) => ({
  tooltip: { trigger: "axis" },
  legend: { top: 0 },
  grid: { left: 40, right: 20, top: 40, bottom: 30 },
  xAxis: { type: "category", data: dates, boundaryGap: false },
  yAxis: {
    type: "value",
    axisLabel: { formatter: v => `${v}%` }
  },
  series: seriesList.map((s) => ({
    name: s.name,
    type: "line",
    data: s.data,
    smooth: true,
    symbol: "none",
    lineStyle: { width: 2 },
    emphasis: { focus: "series" }
  }))
});
```

### 13.2 回撤曲线（Drawdown Area）

**规则**：回撤为负数；0 线必须清晰；面积透明度 0.15–0.25（避免太脏）。

```js
export const optionDrawdown = (dates, data) => ({
  tooltip: { trigger: "axis" },
  grid: { left: 40, right: 20, top: 20, bottom: 30 },
  xAxis: { type: "category", data: dates, boundaryGap: false },
  yAxis: {
    type: "value",
    max: 0,
    axisLabel: { formatter: v => `${v}%` },
    splitLine: { show: true }
  },
  series: [{
    name: "回撤",
    type: "line",
    data,
    smooth: true,
    symbol: "none",
    lineStyle: { width: 2 },
    areaStyle: { opacity: 0.2 }
  }]
});
```

### 13.3 资产配置（Donut Pie）

**规则**：扇区 ≤ 6；其余合并为“其他”；label 用“名称 + 占比”，不要同时显示过多数字。

```js
export const optionAssetPie = (data) => ({
  tooltip: { trigger: "item", formatter: "{b}: {d}%" },
  legend: { bottom: 0 },
  series: [{
    type: "pie",
    radius: ["45%", "70%"],
    avoidLabelOverlap: true,
    label: { formatter: "{b}\n{d}%" },
    labelLine: { length: 12, length2: 10 },
    data
  }]
});
```

### 13.4 指标对比（Grouped Bar）

**规则**：类目不超过 8 个；超过请分页或改横向条形；数值标签只给最大/最小或期末。

```js
export const optionCompareBar = (categories, seriesList) => ({
  tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
  legend: { top: 0 },
  grid: { left: 40, right: 20, top: 40, bottom: 30 },
  xAxis: { type: "category", data: categories },
  yAxis: { type: "value" },
  series: seriesList.map(s => ({
    name: s.name,
    type: "bar",
    barMaxWidth: 28,
    data: s.data
  }))
});
```

### 13.5 结构占比变化（Stacked Bar）

**规则**：用于“资产/行业占比随时间变化”；legend 必须置顶；颜色按 chart01–12 顺序。

```js
export const optionStackBar = (x, seriesList) => ({
  tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
  legend: { top: 0 },
  grid: { left: 40, right: 20, top: 40, bottom: 30 },
  xAxis: { type: "category", data: x },
  yAxis: { type: "value", axisLabel: { formatter: v => `${v}%` } },
  series: seriesList.map(s => ({
    name: s.name,
    type: "bar",
    stack: "total",
    barMaxWidth: 28,
    data: s.data
  }))
});
```

### 13.6 画像雷达（Radar Persona）

**规则**：维度 5–7 个最佳；每个维度统一 0–100 或 0–10；面积透明度 0.12–0.2。

```js
export const optionRadar = (indicator, values, name="画像") => ({
  tooltip: {},
  radar: {
    indicator,
    splitNumber: 4
  },
  series: [{
    name,
    type: "radar",
    data: [{
      value: values,
      name
    }],
    areaStyle: { opacity: 0.15 }
  }]
});
```

---

## 14. 图表口径与标注（强制一致）

* **单位**必须写清：% / 元 / 万元 / 年化 / 区间
* **时间范围**必须写清：如 2024-01-01 ～ 2025-12-31
* **数据来源**（若对外）：放页脚小号文字（neutral subtler）
* **关键结论一句话**：放在图表上方或右侧，不要让读者自己“猜”
