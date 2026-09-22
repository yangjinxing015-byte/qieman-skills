# App 导航与轻反馈（L0）

视觉数值以 [`tokens.yaml`](tokens.yaml) 为准。挽留弹窗不走本节，走 `qieman-sell-popup-design`。

## Top bar（`nav-bar`）

高度 **44px**，白底 + 底部分割线 `{colors.border-default}`。结构：`[返回 40px 热区] [标题居中 title-sm] [右侧操作]`。

- 标题短；一页只有一条顶栏。
- 返回用 `ri-arrow-left-s-line`，热区 ≥ 40px。
- 高风险流程页必须能退出（返回或「取消」），不要只剩主操作。

## Tab（页内分段，`tab-item`）

同一维度 2–5 项，如「持有中 / 交易中 / 历史」。不要把操作按钮放进 Tab。

| 状态 | 字色 | 指示 |
|------|------|------|
| 未选 | `{colors.text-secondary}` · `{typography.body-sm}` | 无指示或 1px 透明 |
| 选中 | `{colors.brand-primary}` · 600 | 底部 2px `{colors.brand-primary}` |
| 热区 | 高度 ≥ 44px | 可横滑，勿挤成 < 4 字宽点不中 |

切换后内容必须立刻换成当前 Tab，不要只改颜色。

## Tab bar（底栏，`tab-bar`）

一级入口 **3–5 项**。高度 **56px + safe-area**。白底、顶部分割线、`{shadow.floating}` 可省略（优先 hairline）。

| 元素 | Token |
|------|------|
| 图标 | 24px；未选 `-line` + `{colors.text-tertiary}`；选中 `-fill` + `{colors.brand-primary}` |
| 文案 | `{typography.caption-sm}` 12px |
| 热区 | 每项 flex:1，高度含安全区 |

且慢常见四项：首页 / 资产 / 圈子 / 我的（图标见 [`icons.md`](icons.md)）。二级页 **不要重复底栏**。

内容区底部预留 `56px + safe-area`，避免被挡住。协议、风险披露不要藏在底栏下面。

## Toast（`toast`）

短反馈，**1.5–2s 自动消失**，不拦截操作。文案 ≤ 12 字：「已保存」「已复制」。

- 位置：水平居中，底栏上方约 16px（无底栏则距底 80px）。
- 样式：`rgba(51,51,51,0.92)` 底 + `{colors.text-inverse}` + `{typography.caption}`，圆角 `{rounded.sm}`。
- `role="status"`；不要用 Toast 承载风险、费用、协议、交易确认。

## Sticky action（吸底主操作）

表单提交用。一条主按钮，协议勾选在按钮上方。底 padding 含 `safe-area-inset-bottom`。风险提示必须在吸底栏 **之上** 仍可见。
