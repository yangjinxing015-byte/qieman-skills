# Card System 卡片组件体系

## 1. 定义

卡片是且慢 UI 的主要信息容器，用于承载账户、策略、交易、AI 分析、风险说明、权益等模块。

## 2. 卡片类型

| 类型 | 用途 |
|---|---|
| Basic Card | 普通内容承载 |
| Summary Card | 账户总览、策略摘要、核心数据 |
| Action Card | 可点击入口、计划卡片、设置项 |
| Financial Data Card | 金额、收益、回撤、净值等金融数据 |
| Risk Card | 风险提示、风险不匹配、测评过期 |
| AI Insight Card | AI 分析结论、原因、建议、来源 |
| Empty Card | 空状态说明与下一步引导 |

## 3. 结构

推荐 Anatomy：

```text
[Card Container]
  [Header: 标题 / 状态 / 操作]
  [Primary Content: 核心数据或结论]
  [Secondary Content: 说明、明细、标签]
  [Divider]
  [Action / Risk / Footnote]
```

## 4. Token Mapping

| 属性 | 推荐 Token |
|---|---|
| 卡片背景 | `background/card/default` |
| 次级卡片背景 | `background/card/deep` |
| 页面背景 | `background/page/deep` |
| 分割线 | `border/default` / `border/neutral faded` |
| 主标题 | `foreground/neutral` |
| 正文说明 | `foreground/neutral subtle` |
| 辅助说明 | `foreground/neutral subtler` |
| 圆角 | `Radius/Large 1` / `Radius/Large 2` |
| 间距 | `Layout/x4` - `Layout/x6` |

## 5. 样式规则

### 5.1 圆角

- 普通卡片：12px；
- 重点卡片：16px；
- 弹窗卡片：16px - 24px；
- 标签或胶囊：999px。

### 5.2 内边距

| 场景 | Padding |
|---|---:|
| App 普通卡片 | 16px |
| 信息密集卡片 | 12px - 16px |
| 首页 / 账户摘要 | 20px |
| H5 / 活动页重点卡片 | 20px - 24px |

### 5.3 阴影

金融产品卡片阴影应轻，不要强烈浮起。

推荐：

```css
box-shadow: 0 8px 24px rgba(15, 61, 115, 0.06);
```

## 6. 金融数据卡片

金融数据卡片必须明确：

- 数据名称；
- 数据值；
- 时间口径；
- 是否预估；
- 是否存在风险或波动；
- 可解释入口。

推荐结构：

```text
[数据名称]
[核心数值]
[时间 / 口径]
[对比 / 状态]
[风险或说明]
```

## 7. AI 分析卡片

AI 分析卡片必须包含边界说明：

```text
[结论]
[原因]
[数据来源]
[风险边界]
[下一步建议]
```

不得只输出“建议买入 / 建议卖出”这种确定性结论。

## 8. 点击规则

- 可点击卡片右侧使用箭头或明确操作；
- 不可点击卡片不应出现强暗示箭头；
- 卡片内多个点击区域应保持足够间距；
- 金额、收益、风险提示不应被误认为按钮。
