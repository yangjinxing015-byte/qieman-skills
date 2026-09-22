---
name: qieman-chart-design
layer: L2
license: Complete terms in LICENSE.txt
description: >-
  且慢 App 图表 UI 组件（L2，extends qieman-ui-design）。按 Figma Qieman Design Charts
  输出可调用 HTML 组件：双向图、柱状图、横向柱、折线图、区域折线图、规模变动、饼图、环图、旭日图、资金流、桑基图、进度占比、横向占比、矩形树图、仪表盘、网状图、相关性热力图。
  当用户提及图表设计、曲线、走势图、饼图、环图、柱状图、横向柱、折线图、区域折线图、面积图、双向图、温度带、树图、
  旭日图、资金流、桑基图、进度占比、横向占比、四笔钱、
  仪表盘、网状图、雷达图、相关性、持仓分布、净值走势、数据可视化时，
  在 qieman-foundation + qieman-ui-design 之上叠加本 skill，调用 QiemanChart.render。
extends: qieman-ui-design
---

# qieman-chart-design

| 字段 | 值 |
|------|-----|
| **ID** | `qieman-chart-design` |
| **层级** | L2 |
| **场景** | App 页内图表 UI |
| **规范** | 本文件 + [`references/components.md`](references/components.md) |
| **依赖** | [`qieman-ui-design`](../qieman-ui-design/SKILL.md) |
| **组件 API** | [`assets/qieman-charts.js`](assets/qieman-charts.js) · [`assets/qieman-charts.css`](assets/qieman-charts.css) |
| **案例** | [`html/chart-gallery.html`](html/chart-gallery.html) |
| **复制壳** | [`assets/templates/chart-card.html`](assets/templates/chart-card.html) |
| **设计稿** | [Qieman Design Charts](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=16-120452) |
| **图表色** | [Figma 7、chart 图表色](https://www.figma.com/design/jflpIzZBUNd9HbH70guNFV/%F0%9F%8C%9FQieman-Design-Mobile?node-id=29238-3379) · [`references/tokens.yaml`](references/tokens.yaml) · [`html/color-preview.html`](html/color-preview.html) |
| **更新日期** | 2026-09-15 |

## 调用

```bash
npx openskills read qieman-foundation
npx openskills read qieman-ui-design
npx openskills read qieman-chart-design
```

生成前再读：[`references/tokens.yaml`](references/tokens.yaml) + [`references/components.md`](references/components.md)。对照视觉打开 `html/chart-gallery.html`。

---

## 执行流程

1. 先读 foundation + L0。`:root` 从 L0 `app-shell.html` 复制，再以本层 `references/tokens.yaml` 覆盖系列色与 `--chart-band-*`（系列色真源在本 skill，不在 L0）。
2. 按数据选 `type`（见下表），**调用 `QiemanChart.render`**，不要手写一套新图表。
3. 把 `qieman-charts.css` / `qieman-charts.js` 内联进单文件 HTML（375 页），或从 `chart-card.html` 复制后改 `spec`。
4. 金融页补 `source` + `disclaimer`。DOM Ready 后 `render`；`resize` 时再 `render` 同一节点。

## 选组件

| 数据 / 话术 | `type` / `variant` |
|-------------|-------------------|
| 回撤、负收益、从 0 向下 | `bidirectional` / `negative` |
| 正收益、达标率、从 0 向上 | `bidirectional` / `positive` |
| 温度带、估值分位、区间 + 走势 | `bidirectional` / `band-line` |
| 带坐标轴的时间柱 | `column` / `single` 或 `compare` |
| 横向占比、标签+进度条 | `bar` |
| 净值 / 收益率走势、1–5 条折线 | `line` |
| 带填充的走势、区域折线、面积图 | `area` |
| 规模变动、1–4 根柱、柱顶金额 | `scale` |
| 持仓 / 大类占比 | `pie` |
| 空心饼、环图 | `donut` 或 `pie` / `donut` |
| 多级资产穿透、旭日图 | `sunburst` |
| 月初月末资金流、综合费率拆解 | `flow` / `asset` 或 `fee` |
| 总资产分流负债/净资产 | `sankey` / `asset` |
| 年收支、多源汇入再拆出 | `sankey` / `income` |
| 评分滑条、0–100 进度 | `progress` / `slider` |
| 风险舒适区间、区间高亮 | `progress` / `range` |
| 四笔钱、堆叠横向占比 | `share` |
| 板块涨跌、 mosaic 贡献 | `treemap` |
| 仓位 / 评分 | `gauge` / `percent` `score` |
| 能力雷达、六维网状 | `radar` |
| 基金相关性矩阵 | `correlation` / `light` 或 `dark` |

细则与完整 spec → [`references/components.md`](references/components.md)。

## 调用 UI 组件

```html
<section id="drawdown" class="qdm-chart-host"></section>
<script>
QiemanChart.render(document.getElementById("drawdown"), {
  type: "bidirectional",
  variant: "negative",
  title: "区间收益",
  items: [
    { label: "近1月", value: -0.75 },
    { label: "近3月", value: -5.75 },
    { label: "近6月", value: -7.75 },
    { label: "近1年", value: -20.75 },
    { label: "成立来", value: -25.6 }
  ],
  source: "数据来源：且慢",
  disclaimer: "历史数据不预示未来表现"
});
</script>
```

`QiemanChart.render(el, spec)` 是唯一入口。禁止再引入 Chart.js 默认皮肤或旧 `assets/templates/bar_chart_template.html`。

## Token

系列色真源：本层 [`references/tokens.yaml`](references/tokens.yaml)，对照 [Figma 7、chart 图表色](https://www.figma.com/design/jflpIzZBUNd9HbH70guNFV/%F0%9F%8C%9FQieman-Design-Mobile?node-id=29238-3379)。CSS 已写在 `qieman-charts.css` `:root`。主系列优先 `{colors.brand-primary}`。

| token | hex | 用途 |
|-------|-----|------|
| `chart-01` | `#69B1F4` | 货币型、海外市场 |
| `chart-02` | `#F88D72` | 股票型、A股 |
| `chart-03` | `#FBCA74` | 债券型、黄金 |
| `chart-04` | `#7DD4C4` | 保本型、海外新兴 |
| `chart-05` | `#ADAFE8` | 混合型、境内债券 · **紫，勿对调成青** |
| `chart-06` | `#68E0F3` | 商品型、原油 · **青，勿对调成紫** |
| `chart-07` | `#3A7BB8` | 指数型、海外债券 |
| `chart-08` | `#FAB6A5` | 盈米宝、现金 |
| `chart-09` | `#EDC273` | 另类型 |
| `chart-10` | `#9CCBF8` | QD |
| `chart-11` | `#C8CAEF` | FOF |
| `chart-12` | `#6B9CCA` | 保险 |
| `chart-13` | `#BBC4CE` | 中性灰 |
| `chart-cash` | `#DBEBFF` | 现金浅底 |
| `chart-wallet` | `#EA9500` | 钱包 / 黄 |

- 双向图色带：`{colors.chart-band-01}` → `05`（`#E6F7F4` … `#FDDBD3`），**不要**用系列色顶替。
- 轨道 `{colors.chart-track}` `#F7F7F7`；轴字 `{colors.text-tertiary}` `11px`；图例 `{colors.text-secondary}` `13px`；标题 `15px` Medium。
- 卡片宽 `343px`，圆角 `{rounded.md}` `12px`，内边距 `16px 12px`。
- 组件里写 `var(--chart-*)`，不写十六进制。

## 硬约束

- 单文件 HTML；图表在 DOM Ready 后初始化。
- 每张金融图：标题、图例、单位、时间口径、来源、风险句。风险句 ≥ 11px，不可 `display:none`。
- 不承诺收益；原型数据用占位。涨跌色跟业务，不默认绿=赚钱。
- 饼图 ≤ 6 项，多则合并「其他」。
- 对照 `html/chart-gallery.html` 验收：间距、色带、图例方点 `6px`。

## 资源（按需读）

| 何时 | 读 |
|------|-----|
| 每次 | 本文件 + `references/tokens.yaml` + `references/components.md` |
| 对照视觉 | `html/chart-gallery.html`（顶部色带 = 本层系列色） |
| 复制壳 | `assets/templates/chart-card.html` |
| 系列色 / 预览 | `references/tokens.yaml` · `references/color-palettes.md` · `html/color-preview.html` |
| 静态 PNG / 科研图（用户明确要求） | `references/matplotlib-guide.md` |

旧 Chart.js / Plotly / D3 指南仅作非 App 输出后备，**App 页不要用**。
