# L0 通用组件用法

视觉数值以 [`tokens.yaml`](tokens.yaml) `components:` 为准。本文件只写 **何时用、必须带哪些字段**。

复杂表单 / 交易 / AI / 无障碍全量状态：叠 [`../../../foundation/qieman-foundation/references/components/`](../../../foundation/qieman-foundation/references/components/)，落地仍用本层 token。

`report-hero` / `h5-hero` / `coupon-card` / `footer-brand` 仅在对应营销 H5 或报告 skill 中使用；标准 App 页不要铺大面积海报 hero。

## Buttons

- `{components.button-primary}`：唯一主操作（立即领取 / 生成报告 / 确认配置）。最小高度 44px。页面同时只突出一个主按钮。
- `{components.button-primary-pressed}`：按下，`{colors.brand-primary-pressed}` + `scale(0.98)`。移动端不以 hover 作为核心状态。
- `{components.button-primary-focus}`：键盘焦点，2px 主色轮廓。
- `{components.button-primary-disabled}`：禁用，勿降低对比到不可读后再当可点。
- `{components.button-secondary}`：白底蓝字蓝边，不与主按钮抢层级。
- `{components.text-link}`：协议、规则、详情。不要把大段文字设成链接色。

## Tags

短文案，**2–6 个中文字**，不要用标签承载长句。

- `{components.tag-primary}`：当前 / 推荐 / 选中
- `{components.tag-warning}`：待确认、提醒
- `{components.tag-risk}`：异常、风险暴露

## Cards

灰底 `{colors.surface-page}` `#F9FAFB` 上的卡片 **不要描边**。白卡用 `{colors.surface-card}` + `{shadow.card-soft}` 分层；摘要卡用 `{colors.surface-summary}` 填色即可。描边只留给表格、输入框、白底上的嵌套块。

- `{components.summary-card}`：先放结论，不放长表格。例：「本周账户收益 -0.8%，权益拖累为主」。
- `{components.metric-card}`：指标名 + 核心数字 + 单位 + 变化 + 时间口径。一组不超过 4 个。
- `{components.chart-card}`：标题、图例、图表、单位、数据来源。图表卡不能只有图没有解释。独立图表细则走 `qieman-chart-design`。
- `{components.content-card}`：解释、明细、建议。
- `{components.portfolio-card}`：投顾组合 / 资产包。必须展示风险等级、配置比例、收益/回撤口径。
- `{components.strategy-card}`：策略介绍。必须有定位、适用人群、风险提示。
- `{components.disclosure-card}`：风险与数据来源。必须可读，禁止过浅灰隐藏。
- `{components.section-card}` / `{components.step-item}`：分区与步骤，App 内流程说明可用。

## Inputs

- `{components.input-field}`：白底、8px 圆角、1px 默认边框、最小高度 44px。
- `{components.input-field-focus}`：主色边框 + 浅蓝外轮廓。
- 错误：`{colors.semantic-error}` 文案 + `{colors.border-error-subtle}` 边框，必须写明原因。

## 导航与 Toast

顶栏 / 页内 Tab / 底栏 / Toast 见 [`navigation.md`](navigation.md)。标准 App 页默认带 `{components.tab-bar}`；二级页去掉底栏。Toast 禁止替代风险确认。

## 组合节奏（标准 App 页）

1. `{components.page-shell}`
2. `{components.summary-card}`（结论）
3. `{components.metric-card}`
4. `{components.chart-card}` 或列表（按需）
5. `{components.content-card}`
6. `{components.disclosure-card}`
