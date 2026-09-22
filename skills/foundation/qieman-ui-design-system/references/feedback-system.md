# Feedback System 反馈类组件体系

## 1. 定义

反馈组件用于告知用户操作结果、系统状态、风险提醒和异常处理。

## 2. 类型

| 类型 | 用途 |
|---|---|
| Toast | 短反馈，如保存成功 |
| Alert Dialog | 重要提醒、二次确认 |
| Bottom Sheet | 规则说明、选择器、风险说明 |
| Inline Notice | 页面内提示、风险提示 |
| Empty State | 暂无数据、暂无记忆、暂无持仓 |
| Loading | 请求中、生成中、计算中 |
| Error State | 网络失败、交易失败、数据异常 |
| Success Result | 交易提交成功、计划创建成功 |

## 3. Toast

适用于轻量反馈，不承载复杂金融信息。

示例：

```text
已保存
已复制
计划已创建
```

不适合用于：

- 风险提示；
- 交易确认；
- 费用说明；
- 协议授权。

## 4. Dialog / Popup

适用于高关注信息。

推荐结构：

```text
[图标 / 插画]
[标题]
[说明]
[关键信息卡片]
[风险说明]
[主按钮]
[次按钮]
```

规则：

- 标题不要恐吓用户；
- 风险说明不可隐藏；
- 主次按钮视觉层级必须明确；
- 破坏性操作要二次确认。

## 5. Bottom Sheet

适用于规则说明、支付方式选择、服务费说明、风险说明、画像数据说明。

推荐结构：

```text
[Drag Indicator]
[标题]
[正文分组]
[必要风险或规则]
[确认按钮]
```

## 6. Inline Notice

适用于在页面中持续展示风险、状态、说明。

| 类型 | Token |
|---|---|
| 普通说明 | `background/neutral faded` + `foreground/neutral subtle` |
| 风险提示 | `background/error faded` + `foreground/error` |
| 警告提示 | `background/warning faded` + `foreground/warning` |
| 成功提示 | `background/success faded` + `foreground/success` |
| 品牌提示 | `background/primary faded` + `foreground/primary` |

## 7. Empty State

空状态需要说明：

- 当前为什么为空；
- 用户可以做什么；
- 不要造成焦虑；
- 可提供主操作。

示例：

```text
暂无记忆
你可以通过对话告诉小顾，或手动添加。
[添加记忆]
```

## 8. Loading

AI 生成、交易提交、报告生成都必须有明确加载反馈。

建议文案：

```text
正在生成分析…
正在提交交易…
正在读取账户状态…
```

## 9. Error State

错误反馈必须包含：

```text
[出了什么问题]
[可能原因]
[用户可以怎么做]
[重试 / 返回 / 联系客服]
```

## 10. 禁用

- 不用 Toast 替代风险确认；
- 不用红色弹窗制造恐慌；
- 不把错误原因写成系统术语；
- 不让用户在失败状态中没有下一步。
