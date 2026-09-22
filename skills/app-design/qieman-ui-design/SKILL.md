---
name: qieman-ui-design
layer: L0
extends: qieman-foundation
license: Complete terms in LICENSE.txt
description: >-
  且慢 / 盈米金融 App UI 执行层（L0，extends qieman-foundation）：设计 token、通用组件、单文件 HTML 原型。
  Use when the user asks for UI 界面、UI 设计、且慢 App 设计、App 页面、表单、列表、
  账户复盘、投顾组合、看板, or Qieman/Yingmi financial mobile UI with CSS variables and 风险披露.
  Also use for 且慢/盈米/AI开放平台 logo、AI小顾 logo、AI小顾图表元素（头像/入口图）.
  Always read qieman-foundation first. For 弹窗/卖出挽留 also read qieman-sell-popup-design;
  for 独立图表 read qieman-chart-design; for React/shadcn/Tailwind UI·UX read qieman-ui-ux-design;
  for 营销 H5 / VIP 海报 / PPT / 财富报告 use those skills on top of this L0 — do not handle them with L0 alone.
---

# qieman-ui-design

| 字段 | 值 |
|------|-----|
| **ID** | `qieman-ui-design` |
| **层级** | L0 · app-design |
| **底层** | [`qieman-foundation`](../../foundation/qieman-foundation/SKILL.md)（品牌 / Token 全量 / 组件全量 / 合规） |
| **Token 真源（落地）** | [`references/tokens.yaml`](references/tokens.yaml) |
| **页面壳** | [`assets/templates/app-shell.html`](assets/templates/app-shell.html) |
| **更新日期** | 2026-09-15 |

```bash
npx openskills read qieman-foundation
npx openskills read qieman-ui-design
```

**分层：** `qieman-foundation`（气质、禁区、合规、`--qdm-*`）→ 本 L0（375 HTML 的 px token 与页面壳）。冲突时：**落地数值以本层 `tokens.yaml` 为准**；品牌禁区与金融合规以 foundation 为准。

把复杂的基金投顾、账户复盘、资产配置需求，做成克制、可信、可落地的 **375 优先单文件 HTML**。视觉决策引用 token，不硬编码。

气质：金融可信 · 浅蓝白卡低阴影 · 数据带口径 · 移动优先。唯一行动色 `{colors.brand-primary}` `#1B88EE`。

## 执行流程

1. **先读底层**：`npx openskills read qieman-foundation`。金融页再按需打开其 `references/compliance/`（至少 `risk-disclosure.md` + `forbidden-words.md`）。品牌存疑读 `references/brand/forbidden-style.md`；组件状态不全读 `references/components/`。
2. **定类型**：标准 App 页（复盘 / 看板 / 表单 / 列表）用本 skill。弹窗、独立图表、React/shadcn UI·UX、营销 H5、VIP、PPT、财富报告 → 先本 L0，再叠对应 skill（见下方路由）。
3. **读 token + 复制壳**：读取 [`references/tokens.yaml`](references/tokens.yaml)。从 [`assets/templates/app-shell.html`](assets/templates/app-shell.html) 复制后改内容，**不要从零手写 `:root`**。圈子/信息流对照 [`assets/prototypes/circle-siyuan-feed.html`](assets/prototypes/circle-siyuan-feed.html)。
4. **按需补读**（见资源表）→ 套组件 → 过 [`references/output-checklist.md`](references/output-checklist.md)。

## 资源（按需读，不要一次全载）

| 何时 | 读 |
|------|-----|
| **每次（底层）** | `qieman-foundation`（硬约束）；金融页再读其 `references/compliance/` |
| 每次生成 HTML | 本层 `references/tokens.yaml` + `assets/templates/app-shell.html` |
| 字号场景 / 评审 | [`references/typography-scale.md`](references/typography-scale.md) · 样张 [`assets/prototypes/typography-specimen.html`](assets/prototypes/typography-specimen.html) |
| 按钮 / 卡 / 表单字段 | [`references/components.md`](references/components.md)；缺状态时叠 foundation `references/components/` |
| Tab / 底栏 / Toast | [`references/navigation.md`](references/navigation.md) |
| 间距、圆角、断点 | [`references/layout.md`](references/layout.md) |
| Remix 图标 | [`references/icons.md`](references/icons.md) |
| 复盘 / 看板 / 列表结构 | [`references/page-patterns.md`](references/page-patterns.md) |
| 交付前 | [`references/output-checklist.md`](references/output-checklist.md) |
| Logo / AI 小顾图表元素 | [`references/logos.md`](references/logos.md) · 源文件 `assets/logos/` |

## 叠加路由（本域四条；其他域读分类 README）

| 触发 | 调用 |
|------|------|
| UI 界面、且慢 App、表单、列表、复盘、看板 | **foundation + L0** |
| 弹窗、卖出挽留、赎回确认 | foundation + L0 + `qieman-sell-popup-design` |
| 图表、曲线、走势、饼图、数据可视化 | L0 + `qieman-chart-design`（仍先 foundation） |
| React / shadcn / Tailwind / UI·UX | foundation + L0 + `qieman-ui-ux-design` |

营销 H5 / VIP 海报 → `marketing-design/README.md`。PPT / 财富报告 / 翻页 deck → `report-design/README.md`。全库目录 → [`../../README.md`](../../README.md)。

L0 token 优先用于 **HTML 落地**；上层只补场景差异。`report-hero` / `h5-hero` / `coupon-card` 不要用在标准 App 页。不要跳过 foundation 直接发明品牌色或合规话术。

## Token 规则

- 颜色 / 字号 / 圆角 / 间距 / 组件 / 图标全部来自本层 `tokens.yaml`（App 执行型 YAML）。`--qdm-*` 全量与 Light/Dark 见 foundation `references/tokens/`，**不要把 `--qdm-*` 写进 375 原型**，除非用户明确要设计系统变量表。
- 生成 CSS 时映射为变量，组件里不反复写十六进制。
- 图表色按 `chart-01` → `chart-12` 顺序；主系列 `chart-01`，对比 `chart-02`，警示可用 `chart-03` 或语义色。
- 红绿服从业务，不要默认「绿=赚钱」。且慢不以绿色做营销主视觉。
- `{colors.brand-poster}` 只用于需要大面积铺底的品牌模块，不作第二行动色。

引用：`{colors.<key>}` `{typography.<key>}` `{rounded.<key>}` `{spacing.<key>}` `{shadow.<key>}` `{components.<key>}` `{icons.<key>}`。

| YAML | CSS | 例 |
|------|-----|-----|
| `colors.*` | `--<key>` | `--brand-primary` |
| `spacing.*` | `--space-<key>` | `--space-md` |
| `rounded.*` | `--radius-<key>` | `--radius-sm` |
| `shadow.*` | `--shadow-<key>` | `--shadow-card-soft` |
| `icons.sizes.*` | `--icon-size-<key>` | `--icon-size-md` |
| 字体栈 | `--font-sans` / `--font-number` / `--font-mono` | 见 `tokens.yaml` `typography.font-*` |

完整 `:root` 已写在 `app-shell.html`，复制即用。

## 组件速查

细节与必填字段 → [`references/components.md`](references/components.md)。

| Token | 用法 |
|------|------|
| `button-primary` | 唯一主操作，高 44px |
| `button-secondary` / `text-link` | 次操作 / 协议链接 |
| `tag-primary` / `warning` / `risk` | 2–6 字胶囊 |
| `summary-card` | 结论先行 |
| `metric-card` | 名 + 数字 + 单位 + 口径；一组 ≤ 4 |
| `chart-card` | 图 + 解释 + 来源；实现叠 chart skill |
| `portfolio-card` | 风险等级、仓位、口径 |
| `content-card` | 解释与明细 |
| `disclosure-card` | 风险与来源，必须可读 |
| `input-field` | 高 44px；错误写原因 |
| `nav-bar` / `tab-item` / `tab-bar` | 顶栏 44px；页内 Tab；底栏 56px+safe |
| `toast` | 短反馈 1.5–2s；不承载风险确认 |

## 实现硬约束

- 单文件 HTML；语义化结构；金融披露不可 `display:none` / 过浅灰。
- 中文 `PingFang SC / MiSans`；数字 `MiSans / DIN Alternate`；不输出字体文件。
- 风险文字 ≥ 11px。核心数字必须有单位与时间口径。
- 不承诺收益；不模拟真实交易；原型敏感信息脱敏或占位。禁用词与风险披露对照 foundation `references/compliance/`。
- 图标：Remix CDN；未选 `-line`，底栏选中可用 `-fill`；热区 40–44px。
- Logo / AI 小顾只调用 `assets/logos/` 正式文件（见 [`references/logos.md`](references/logos.md)），不重绘。OAP 主色保持橙/深蓝，不要改成且慢蓝。
- 默认浅色；无暗色规范。

## 缺口

复杂多步表单、交易组件、AI 组件：读 foundation `references/components/`，落地仍用本层 token。挽留弹窗走 `qieman-sell-popup-design`。真实投顾页须合规复核。
