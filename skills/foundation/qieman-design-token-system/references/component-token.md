# Component Token｜组件通用变量规范

## 1. 定位

`component-token.md` 定义组件级 Token 的组合方式，用于将 color / typography / spacing / radius / shadow 等基础变量转化为按钮、卡片、输入框、Tab、弹窗、列表等可复用组件规则。

## 2. 组件 Token 组成

```text
Primitive Token
    ↓
Semantic Token
    ↓
Component Token
    ↓
Component Variant / State
```

组件 Token 不应直接依赖具体色值，而应引用语义变量，例如：

```css
--button-primary-bg: var(--qdm-color-background-primary);
--button-primary-text: var(--qdm-color-foreground-inverse);
--card-bg: var(--qdm-color-background-card-default);
--card-border: var(--qdm-color-border-default);
```

## 3. Button Token

| Token | 推荐映射 | 说明 |
|---|---|---|
| `button/primary/bg` | `background/primary` | 主按钮背景 |
| `button/primary/text` | `foreground/inverse` | 主按钮文字 |
| `button/secondary/bg` | `background/primary faded` | 次按钮背景 |
| `button/secondary/text` | `foreground/primary` | 次按钮文字 |
| `button/disabled/bg` | `background/neutral disabled` | 禁用背景 |
| `button/disabled/text` | `foreground/neutral subtlest` | 禁用文字 |
| `button/radius` | `Radius/Circular` 或 `Radius/Large 1` | 按钮圆角 |
| `button/height/default` | `accent/48px` | App 主按钮高度 |

## 4. Card Token

| Token | 推荐映射 | 说明 |
|---|---|---|
| `card/default/bg` | `background/card/default` | 白色卡片 |
| `card/deep/bg` | `background/card/deep` | 浅灰卡片 |
| `card/border` | `border/default` | 默认描边 |
| `card/radius` | `Radius/Large 1` | 默认卡片 12px |
| `card/padding` | `Layout/x4` / `Layout/x5` | 卡片内边距 |
| `card/gap` | `Layout/x3` | 卡片内部信息间距 |

## 5. Input Token

| Token | 推荐映射 | 说明 |
|---|---|---|
| `input/bg` | `background/card/default` | 输入框背景 |
| `input/border/default` | `border/default` | 默认边框 |
| `input/border/focus` | `border/primary` | 聚焦边框 |
| `input/border/error` | `border/error` | 错误边框 |
| `input/text` | `foreground/neutral` | 输入内容 |
| `input/placeholder` | `foreground/neutral subtlest` | 占位符 |
| `input/radius` | `Radius/Medium` | 输入框圆角 |

## 6. Popup / Sheet Token

| Token | 推荐映射 | 说明 |
|---|---|---|
| `popup/bg` | `background/card/default` | 弹窗背景 |
| `popup/mask` | `unusual/mask` | 遮罩 |
| `popup/radius` | `Radius/Large 2` | 弹窗圆角 |
| `sheet/radius-top` | `Radius/Large 3` | 底部弹层顶部圆角 |
| `popup/padding` | `Layout/x6` | 弹窗内边距 |

## 7. 状态 Token

| 状态 | 前景色 | 背景色 | 边框色 |
|---|---|---|---|
| 成功 | `foreground/success` | `background/success faded` | `border/success faded` |
| 警告 | `foreground/warning` | `background/warning faded` | `border/warning faded` |
| 错误 | `foreground/error` | `background/error faded` | `border/error faded` |
| 品牌强调 | `foreground/primary` | `background/primary faded` | `border/primary faded` |

## 8. 使用原则

- 组件 Token 是稳定接口，业务页面不应直接操作基础色阶。
- 组件状态必须覆盖 default、hover/pressed、disabled、loading、error。
- 交易、风险、费用相关组件必须使用明确状态色，并保留可读风险说明。
