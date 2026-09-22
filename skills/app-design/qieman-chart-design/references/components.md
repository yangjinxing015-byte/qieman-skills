# 可调用图表 UI 组件

Agent 生成图表时 **调用本 skill 的 UI 组件**，不要另起 Chart.js / 通用柱状模板。实现真源：

- 样式：[`../assets/qieman-charts.css`](../assets/qieman-charts.css)
- API：[`../assets/qieman-charts.js`](../assets/qieman-charts.js)
- 对照案例：[`../html/chart-gallery.html`](../html/chart-gallery.html)
- 复制壳：[`../assets/templates/chart-card.html`](../assets/templates/chart-card.html)

设计稿：[Qieman Design Charts · 双向图表](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=16-120452)

## 调用

把 CSS + JS 内联进单文件 HTML（375 App 页）后：

```js
QiemanChart.render(document.querySelector("#chart"), {
  type: "bidirectional",
  variant: "negative",
  title: "区间收益分布",
  items: [
    { label: "近1月", value: -0.75 },
    { label: "近3月", value: -5.75 },
    { label: "近6月", value: -7.75 },
    { label: "近1年", value: -20.75 },
    { label: "成立来", value: -25.6 }
  ]
});
```

`type` 必须是下表之一。缺字段用案例默认数据，不要发明新色板。

## 组件目录

| `type` | Figma | 何时用 |
|--------|--------|--------|
| `bidirectional` | 16:120452 双向图表 | 正负收益、回撤、温度带 + 折线 |
| `column` | Column Chart 02 | 带 Y 轴的纵向柱（单系列 / 双系列） |
| `line` | [14:117305 折线图](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=14-117305) | 净值 / 收益率走势，1–5 条线 |
| `area` | [15:118626 区域折线图](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=15-118626) | 折线段 + 主系列渐变填充，1–5 条线 |
| `bar` | [16:127719 横向柱](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=16-127719) | 标签 + 灰轨 + 右侧百分比 |
| `donut` | [13:84680 环图](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=13-84680) | 空心饼，2–6 项，色序同 `pie` |
| `sunburst` | [13:84075 旭日图](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=13-84075) | 三级资产穿透，280px |
| `flow` | [16:122918 资金流](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=16-122918) | `asset` 月初月末；`fee` 费率拆解 |
| `sankey` | [154:849](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=154-849) / [154:589](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=154-589) | `asset` 资产负债；`income` 年收支 |
| `progress` | [16:126637](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=16-126637) / [16:127013](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=16-127013) | `slider` 气泡滑条；`range` 舒适区间 |
| `share` | [40:130472 横向占比](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=40-130472) | 四笔钱堆叠条 6px |
| `scale` | Column Chart 01 规模变动 | 少柱、柱顶数字、Tab + 日期 |
| `pie` | Pie Charts 饼图卡 | 持仓 / 大类占比，2–6 项 |
| `treemap` | [16:120342 矩形树图](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=16-120342) | 板块涨跌贡献、 mosaic |
| `gauge` | [16:122036 仪表盘](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=16-122036) | 仓位比、评分 |
| `radar` | [16:126319 网状图](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=16-126319) | 六维能力雷达 |
| `correlation` | [16:123118 相关性](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=16-123118) | 基金相关性矩阵 |

公共外壳 `{components.chart-card}`：白底、`12px` 圆角、`16px 12px` 内边距、宽 `343px`。

### `{components.chart-legend}`

- 色块 `6px` 方点（饼图用圆点），与文案间距 `8px`。
- 文案 `13px` `{colors.text-secondary}`。
- 双向图 5 项撑满一行；柱状图 / 折线图 / 区域折线图左对齐。折线与区域图图例用 `10×1.5` 短线，不用方点。

### `bidirectional`

`variant`：

| 值 | Figma | 形态 |
|----|--------|------|
| `negative` | Default | 柱从顶向下，Y 上正下负 |
| `positive` | Variant2 | 柱从底向上，Y 0–100 |
| `band-line` | Variant3 | 五色温度带 + 折线 + X 轴 |

色带固定按 `chart-band-01` → `05`（绿浅 → 红深），**不要**改成 `chart-01`。柱内数字 `13px`（正值为 `12px`），`#606060`。

```js
QiemanChart.render(el, {
  type: "bidirectional",
  variant: "band-line",
  title: "市场温度",
  yLabels: ["100°C", "80°C", "40°C", "20°C", "0°C"],
  xLabels: ["2023-10", "2024-11", "2025-01", "2026-01", "2027-03"],
  line: [12, 28, 18, 22, 48, 62, 70]
});
```

### `column`

```js
QiemanChart.render(el, {
  type: "column",
  variant: "single", // single | compare
  title: "收益率对比",
  yLabels: ["50%", "40%", "20%", "10%", "0%"],
  xLabels: ["2023-10", "2024-11", "2025-01", "2026-01", "2027-03"],
  series: [
    { name: "本组合", color: "var(--brand-primary)", data: [12, 20, 45, 22, 42] },
    { name: "沪深300", color: "var(--semantic-success)", data: [8, 18, 30, 40, 28] }
  ]
});
```

柱落在 `{colors.chart-track}` 轨道上；单系列全用 `{colors.brand-primary}`，对比系列第二色 `{colors.semantic-success}`。

### `line`

[Figma 14:117305](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=14-117305)。1–5 条平滑折线，虚线网格，Y 轴按刻度对齐。色序：`brand-primary` / `chart-03` / `chart-02` / `chart-04` / `chart-06`。

```js
QiemanChart.render(el, {
  type: "line",
  title: "区间收益率",
  yLabels: ["50%", "40%", "20%", "10%", "0%"],
  xLabels: ["2023-10", "2024-11", "2025-01", "2026-01", "2027-03"],
  series: [
    { name: "本组合", color: "var(--brand-primary)", data: [32, 38, 26, 50, 36, 18, 42] },
    { name: "沪深300", color: "var(--chart-03)", data: [32, 38, 26, 45, 45, 18, 43] }
  ]
});
```

图例短线 `10×1.5`，左对齐。超过 5 条截断。

### `area`

[Figma 15:118626](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=15-118626)。1–5 条**折线段**（不平滑），虚线网格，Y 轴按刻度对齐。仅**第一条**线下铺垂直渐变填充（色 → 透明）。色序同折线图。

```js
QiemanChart.render(el, {
  type: "area",
  title: "区间收益率",
  yLabels: ["50%", "40%", "20%", "10%", "0%"],
  xLabels: ["2023-10", "2024-11", "2025-01", "2026-01", "2027-03"],
  series: [
    { name: "本组合", color: "var(--brand-primary)", data: [32, 38, 18, 45, 50, 18, 42] },
    { name: "沪深300", color: "var(--chart-03)", data: [20, 38, 36, 44, 42, 18, 36] }
  ]
});
```

图例短线 `10×1.5`，左对齐。超过 5 条截断。

### `bar`

[Figma 16:127719](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=16-127719)。行高 `48px`，灰轨 `12px` `#F0F0F0`，填充默认 `{colors.brand-primary}`，右侧数值 `13px` Medium、宽 `60px`。

```js
QiemanChart.render(el, {
  type: "bar",
  title: "持仓占比",
  items: [
    { label: "股票型", value: 66.55 },
    { label: "债券型", value: 52.4 }
  ]
});
```

### `donut`

[Figma 13:84680](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=13-84680)。空心环径 `120px`，图例圆点 + 百分比。也可用 `type: "pie", variant: "donut"`。最多 6 项。

```js
QiemanChart.render(el, {
  type: "donut",
  title: "持仓分布",
  items: [
    { name: "股票型", value: 34.5 },
    { name: "债券型", value: 28 },
    { name: "货币型", value: 18.5 },
    { name: "混合型", value: 19 }
  ]
});
```

### `sunburst`

[Figma 13:84075](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=13-84075)。三级环 `280px`，白缝 `1.5px`，图例取一级节点。

```js
QiemanChart.render(el, {
  type: "sunburst",
  title: "资产配置",
  nodes: [
    { name: "股票权益", value: 52, color: "#FAB6A5", children: [
      { name: "中国股票", value: 40, children: [{ name: "大盘价值风格", value: 16 }] }
    ]}
  ]
});
```

### `flow`

[Figma 16:122918](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=16-122918)。

- `variant: "asset"`（默认）：转入 / 转出汇入净投入，落到月末资产
- `variant: "fee"`：综合费率拆显性 / 隐性

```js
QiemanChart.render(el, { type: "flow", variant: "asset", title: "资金流分析", subtitle: "本月" });
QiemanChart.render(el, { type: "flow", variant: "fee", title: "综合费率", subtitle: "持有成本" });
```

### `sankey`

- `variant: "asset"`（默认）[154:849](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=154-849)：左源一列，右两支。左节点用 `from`，避免和页脚 `source` 撞名。
- `variant: "income"` [154:589](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=154-589)：多源汇入中轴，再拆到结余 / 支出。

```js
QiemanChart.render(el, {
  type: "sankey",
  variant: "income",
  title: "年收支",
  total: { name: "年收入", value: "134.90 万" },
  sources: [
    { name: "先生薪资", value: 108, color: "#69B1F4" },
    { name: "太太薪资", value: 13.45, color: "#9CCBF8" }
  ],
  targets: [
    { name: "结余", value: 100, color: "#C5D0F0" },
    { name: "房贷", value: 14, color: "#FBCA74" }
  ]
});
```

### `progress`

[进度 01 · 16:126637](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=16-126637) 滑条：品牌蓝填充 + 白点 + 气泡数字。  
[进度 02 · 16:127013](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=16-127013) 区间：青绿条 +「风险舒适范围」标签。

```js
QiemanChart.render(el, { type: "progress", variant: "slider", title: "风险评分", value: 60 });
QiemanChart.render(el, { type: "progress", variant: "range", title: "风险舒适范围", from: 10, to: 20 });
```

### `share`

[Figma 40:130472](https://www.figma.com/design/e0e7HneAYwkFrP0efHp2gj/%F0%9F%8C%9F-Qieman-Design-Charts?node-id=40-130472)。6px 堆叠条，图例 6px 圆点 + 名称 + 百分比。

```js
QiemanChart.render(el, {
  type: "share",
  title: "四笔钱持仓",
  hint: true,
  action: "切换账户模式",
  items: [
    { name: "活钱", value: 20, color: "var(--chart-02)" },
    { name: "稳钱", value: 10, color: "var(--chart-03)" },
    { name: "长钱", value: 10, color: "var(--chart-04)" },
    { name: "保障", value: 0, color: "var(--chart-01)" }
  ],
  tip: "您的投资规划书完成进度为60%，继续执行"
});
```

### `scale`

```js
QiemanChart.render(el, {
  type: "scale",
  tabs: ["资产配置", "行业占比", "规模变动"],
  activeTab: 2,
  date: "2021-03-31",
  items: [
    { value: "314.63亿", label: "21年Q3", ratio: 0.42 },
    { value: "280.10亿", label: "21年Q4", ratio: 0.36 }
  ]
});
```

1–4 根柱。柱宽 `12px`，品牌蓝，灰轨道。柱顶 `13px` Semibold `#333`。

### `pie`

```js
QiemanChart.render(el, {
  type: "pie",
  title: "持仓分布",
  items: [
    { name: "股票型", value: 34.5 },
    { name: "债券型", value: 28.0 },
    { name: "货币型", value: 18.5 },
    { name: "混合型", value: 19.0 }
  ]
});
```

饼径 `120px`。色序：`chart-01`、`brand-primary`、`chart-03`、`chart-02`、`chart-04`、`chart-06`。右侧图例：圆点 + 名称 + 百分比。最多 6 项。

### `treemap`

卡片宽 `343px`，标题 `15px` + 副标题 `13px`。格子圆角 `4px`、间距 `4px`、高 `285px`。

- 上涨 / 正贡献：底 `{colors.semantic-error-faded}` `#FEEDE9`，数字 `{colors.semantic-error}` `#FA440C`，带 `+`
- 下跌 / 负贡献：底 `{colors.chart-band-01}` `#E6F7F4`，数字 `{colors.semantic-success}` `#07AD8F`
- 名称 `12px` `#606060`；数字 `13px` Semibold。过小格子可只留名称。

```js
QiemanChart.render(el, {
  type: "treemap",
  title: "收益贡献",
  subtitle: "近1月",
  items: [
    { name: "货币现金", value: 3753.21 },
    { name: "中国纯债", value: -353.21 }
  ]
});
```

### `gauge`

窄卡 `158px`，plot `134×80`。`variant`：

| 值 | 形态 |
|----|------|
| `percent` | 上半环（左 `#B4C8F5` / 右轨 `#E4EAF2`），▲ 在环内侧指向读数，`50.52%` + 说明在环心 |
| `score` | 蓝→黄渐变半环，▲ 在环内侧，`65分` + 舒适区间在环心 |

指针是环内小三角，贴在半环内侧对应刻度，不是圆心长针。

```js
QiemanChart.render(el, {
  type: "gauge",
  variant: "percent",
  title: "权益仓位",
  subtitle: "当前组合",
  value: 50.52,
  hint: "合理范围: ≤60%"
});
```

### `radar`

六轴网状图，轴序顺时针：偿债能力 → 财富自由 → 增值能力 → 应急能力 → 储蓄能力 → 保障能力。网格三层 `#D8E4F0`，填充 `chart-01` 28% 透明，顶点圆点。

```js
QiemanChart.render(el, {
  type: "radar",
  title: "家庭财务能力",
  subtitle: "诊断摘要",
  axes: [
    { name: "偿债能力", value: 0.84 },
    { name: "财富自由", value: 0.8 },
    { name: "增值能力", value: 0.78 },
    { name: "应急能力", value: 0.8 },
    { name: "储蓄能力", value: 0.82 },
    { name: "保障能力", value: 0.84 }
  ]
});
```

`value` 为 0–1。

### `correlation`

左列基金名 `12px` + 代码 `10px` + 序号；右侧 4 列相关系数，格 `45×42`、圆角 `4px`。

- `≥ 0`：底 `#FEEDE9`，数字保留两位（`1.00`）
- `-0.6 < v < 0`：底 `#DBEBFF`
- `≤ -0.6`：底 `#9CCBF8`
- 空值 `—`：白底
- `variant: "dark"`：整卡底 `#2B2B2B`（Figma Variant2）

```js
QiemanChart.render(el, {
  type: "correlation",
  variant: "light",
  title: "基金相关性",
  subtitle: "近1年",
  labels: [{ name: "创金合信恒利超短债债", code: "006076" }],
  columns: 4,
  matrix: [[1, 0.67, -0.43, -0.43]]
});
```

## 金融页必填

App 页内图表（不只是组件库预览）还必须有：单位、时间口径、数据来源、风险句（`11px` `{colors.text-tertiary}`，如「历史数据不预示未来表现」）。用 `source` / `disclaimer` 字段，组件会渲染在卡底。

## 禁止

- 用 Chart.js / Plotly / matplotlib 模板替代上述组件（除非用户明确要静态 PNG / 科研图）。
- 把温度带改成 `chart-01–12`。
- 饼图超过 6 项还不合并「其他」。
- 只出图、不写图例 / 单位。
- 用绿色表达「赚钱」主视觉；涨跌语义跟业务，不默认绿涨红跌。
