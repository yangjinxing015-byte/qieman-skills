# App 页面 Pattern（L0）

只覆盖标准 App 页。营销长 H5 → `qieman-h5-design`；财富报告 / PPT → `report-design`。

圈子 / 信息流优先对照 [`../assets/prototypes/circle-siyuan-feed.html`](../assets/prototypes/circle-siyuan-feed.html)，不要从空白 HTML 起稿。

## Account Review（账户复盘）

结构：页头 → 核心结论 → 本周收益 → 资产配置变化 → 贡献和拖累 → 风险观察 → 建议 → 风险提示。

- 先结论，再图表。
- 收益、基准、回撤、仓位变化必须有时间口径。

## Fund Advisory Dashboard（投顾看板）

结构：顶部指标 → 组合概览 → 资产配置 → 收益/回撤趋势 → 持仓明细 → 风险提示。

- 指标卡一组不超过 4 个。
- 图表与表格分层，避免同时抢视线。

## List / Form（列表与表单）

- 列表行：标题 `{typography.title-sm}` 或 `body-lg` 600；辅助 `{typography.caption-sm}` + `{colors.text-tertiary}`；右箭头 `ri-arrow-right-s-line`。
- 行高与触控：可点行高度 ≥ 44px。
- 表单：`{components.input-field}`；提交用唯一 `{components.button-primary}`；协议用 `{components.text-link}`。
- 校验失败必须写原因，不要只变红框。

## 非本 skill 的页面

| 用户要的 | 叠加 |
|---|---|
| 策略介绍 H5 / 优惠券活动长页 | L0 + `qieman-h5-design` |
| 家庭财富报告 / 报告书 | L0 + `qieman-ppt-design` + `qieman-report-swipe-design` |
| 卖出挽留弹窗 | L0 + `qieman-sell-popup-design` |
| 独立图表 / 仪表板可视化 | L0 + `qieman-chart-design` |
