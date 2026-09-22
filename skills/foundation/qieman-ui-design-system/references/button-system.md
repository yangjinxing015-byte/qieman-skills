# Button System 按钮组件体系

## 1. 定义

按钮用于承载用户的明确操作。且慢按钮体系必须强调操作层级、风险等级和金融决策边界。

## 2. 类型

| 类型 | 用途 | 视觉 |
|---|---|---|
| Primary Button | 页面主操作、交易确认、提交 | 品牌蓝实底 |
| Secondary Button | 次级操作、辅助选择 | 浅蓝 / 白底描边 |
| Ghost Button | 弱操作、卡片内操作 | 透明背景，品牌色文字 |
| Text Button | 说明、查看更多、规则入口 | 文本样式 |
| Destructive Button | 危险操作确认 | 风险色或二次确认中使用 |
| Disabled Button | 条件不满足 | 低对比，不可点击 |

## 3. 尺寸

| 场景 | 高度 | 圆角 | 字号 |
|---|---:|---:|---:|
| App 页面主按钮 | 48px | 24px / Circular | 16px |
| 表单中按钮 | 44px | 22px | 15px |
| 卡片内按钮 | 36px - 40px | 18px - 20px | 14px |
| 小型标签按钮 | 28px - 32px | 14px - 16px | 12px - 13px |

## 4. Token Mapping

| 属性 | 推荐 Token |
|---|---|
| Primary 背景 | `background/primary` |
| Primary 文本 | `foreground/inverse` |
| Secondary 背景 | `background/primary faded` |
| Secondary 描边 | `border/primary faded` |
| Disabled 背景 | `background/neutral disabled` |
| Disabled 文本 | `foreground/neutral subtlest` |
| 错误 / 危险操作 | `background/error` / `foreground/error` |
| 圆角 | `Radius/Circular` 或 `Radius/Large 2` |

## 5. 使用规则

### 5.1 单主按钮原则

移动端底部吸底操作区只保留一个主按钮。需要两个操作时：

```text
[弱化次操作]    [主操作]
```

或者使用上下结构：

```text
[主操作]
[次操作文字按钮]
```

### 5.2 金融交易按钮

交易类按钮必须配合交易信息卡、费用说明、风险提示使用，不应孤立出现。

推荐结构：

```text
[交易预览]
[费用 / 时间 / 支付方式]
[风险提示]
[协议勾选]
[确认按钮]
```

### 5.3 危险操作

卖出、赎回、关闭计划、取消自动跟车等操作不得直接使用强刺激红色大按钮诱导点击。应先提供信息说明，再进入确认。

## 6. 状态

| 状态 | 规则 |
|---|---|
| Default | 可点击，品牌蓝或对应层级样式 |
| Pressed | 透明度降低或背景加深 |
| Loading | 按钮文案替换为“提交中…”并禁止重复点击 |
| Disabled | 同时说明不可用原因，例如“请先勾选协议” |
| Error | 不直接把按钮变成错误态，应在按钮上方显示错误原因 |

## 7. 文案规则

按钮文案应使用动词 + 对象，避免含糊。

| 推荐 | 不推荐 |
|---|---|
| 确认买入 | 好的 |
| 生成且慢画像 | 开始 |
| 查看调仓原因 | 详情 |
| 继续风险测评 | 下一步 |
| 我知道了 | OK |

## 8. 禁用

- 不使用“稳赚”“马上赚钱”“立即抄底”等暗示收益的按钮。
- 不使用大面积红色制造焦虑。
- 不在同一区域放多个同等级强按钮。
- 不隐藏取消 / 返回路径。
