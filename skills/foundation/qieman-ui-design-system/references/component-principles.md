# Component Principles 组件设计原则

## 1. 定位

`qieman-ui-design-system` 是且慢产品 UI 组件体系 Skill，负责定义组件长什么样、什么时候使用、状态如何变化、交互如何反馈，以及如何组合成 App / H5 / Web 页面。

它不是单个页面设计 Skill，而是所有产品界面 Skill 的底层组件规范。

## 2. 组件设计目标

| 目标 | 说明 |
|---|---|
| 专业可信 | 信息结构清晰，金融数据、风险提示、交易状态表达准确 |
| 简洁好用 | 组件减少装饰噪音，优先让用户理解当前状态和下一步操作 |
| 跨端一致 | App、H5、Web 共用一套 Token 和组件语义 |
| 金融合规 | 收益、风险、交易、AI 建议不得造成确定性误导 |
| 可复用 | 组件可组合、可扩展、可迁移到 Cursor / 前端实现 |

## 3. 依赖关系

```text
qieman-brand-guidelines
        ↓
qieman-design-token-system
        ↓
qieman-ui-design-system
        ↓
qieman-app-ui-design / qieman-popup-design / qieman-trading-flow-design / qieman-ai-assistant-ui-design
```

## 4. 组件分层

| 层级 | 内容 | 示例 |
|---|---|---|
| Foundation | Token 与基础样式 | 颜色、字号、间距、圆角、阴影 |
| Basic Components | 基础组件 | Button、Card、Input、Tab、Toast |
| Business Components | 金融业务组件 | 金额输入、交易确认、风险提示、费用说明 |
| AI Components | AI 场景组件 | AI 分析卡片、小顾记忆、画像说明、建议来源 |
| Page Patterns | 页面组合模式 | 交易页、账户页、策略页、AI 对话页 |

## 5. 组件 Anatomy 标准

每个组件文档必须说明：

```text
Component Name
Purpose
When to Use
Do Not Use When
Anatomy
Variants
States
Interaction
Token Mapping
Accessibility
Financial Compliance Notes
Example
```

## 6. 状态矩阵

组件状态必须至少覆盖：

| 状态 | 说明 |
|---|---|
| Default | 默认可用状态 |
| Hover / Pressed | Web / App 触控反馈 |
| Focus | 键盘或辅助设备聚焦状态 |
| Disabled | 不可用状态，必须说明原因 |
| Loading | 请求中，避免重复提交 |
| Error | 表单、交易、网络异常 |
| Success | 成功反馈 |
| Warning | 风险、注意事项、合规提示 |

## 7. 设计原则

### 7.1 先信息，后装饰

金融产品组件应优先表达：金额、时间、状态、费用、风险、来源。视觉装饰不得压过核心信息。

### 7.2 先结论，后解释

涉及诊断、分析、AI 建议、交易预览时，组件结构建议采用：

```text
[结论]
[关键数据]
[原因解释]
[风险提示]
[下一步操作]
```

### 7.3 主操作单一明确

一个视图内只能有一个最强主操作。次操作使用弱按钮、文字按钮或更多菜单承载。

### 7.4 危险操作必须二次确认

卖出、赎回、调仓、关闭自动跟车、风险不匹配继续操作等场景，必须出现确认机制与风险说明。

### 7.5 AI 组件必须表达边界

AI 小顾相关组件必须说明数据来源、适用边界和不确定性，不能把建议包装成确定结论。

## 8. Token 使用基线

组件不得硬编码颜色、圆角、间距，应引用 Design Token。

```text
color: semantic token > palette token > hard code
spacing: layout token > custom value
radius: radius token > custom value
```

### 常用 Token 摘要

- 主色：`background/primary`、`foreground/primary`、`border/primary`
- 页面：`background/page/default`、`background/page/deep`
- 卡片：`background/card/default`、`background/card/deep`
- 文本：`foreground/neutral`、`foreground/neutral subtle`、`foreground/neutral subtler`
- 状态：`foreground/error`、`foreground/warning`、`foreground/success`
- 圆角：`Radius/Medium`、`Radius/Large 1`、`Radius/Large 2`、`Radius/Circular`
- 间距：`Layout/x1` 至 `Layout/x10`

## 9. 组件验收清单

- 是否继承品牌蓝和语义 Token？
- 信息层级是否清晰？
- 主次按钮是否明确？
- 风险提示是否可见？
- 空状态、错误状态、加载状态是否完整？
- 触控区域是否 ≥ 44px？
- 金融数据是否标注口径或说明？
- AI 建议是否说明边界？
