# Radius Token｜圆角变量规范

## 1. 定位

`radius-token.md` 定义且慢设计系统中的圆角层级，保证 App UI、H5、Web 官网、AI 产品卡片、弹窗、按钮和标签的视觉一致性。

## 2. Radius Token

来源：`单元 .json`。

| Token | Value(px) | Alias | Scope |
| --- | --- | --- | --- |
| Radius/Small | 4 | accent/4px | CORNER_RADIUS |
| Radius/Medium | 8 | accent/8px | CORNER_RADIUS |
| Radius/Large 1 | 12 | accent/12px | CORNER_RADIUS |
| Radius/Circular | 999 | accent/999px | CORNER_RADIUS |
| Radius/None | 0 | accent/0px | CORNER_RADIUS |
| Radius/Large 2 | 16 | accent/16px | CORNER_RADIUS |
| Radius/Large 3 | 24 | accent/24px | CORNER_RADIUS |


## 3. 推荐场景映射

| 场景 | 推荐 Token | 说明 |
|---|---:|---|
| 无圆角 | `Radius/None` | 表格、分割线、特殊容器 |
| 小标签 / 输入框局部 | `Radius/Small` | 轻量控件 |
| 常规按钮 / 输入框 | `Radius/Medium` | 默认表单与操作组件 |
| App 卡片 / 信息模块 | `Radius/Large 1` | 12px，且慢最常用卡片圆角 |
| 弹窗 / 大卡片 | `Radius/Large 2` | 16px，强调柔和与容器感 |
| H5 主视觉卡片 / 营销大卡 | `Radius/Large 3` | 24px，大面积容器 |
| 胶囊按钮 / 头像 | `Radius/Circular` | 999px |

## 4. 使用原则

1. 卡片圆角优先使用 `Radius/Large 1` 或 `Radius/Large 2`。
2. 弹窗圆角要明显大于普通卡片，避免压迫感。
3. 不建议在一个页面内出现过多圆角层级。
4. 金融交易确认、风险提示类组件可以保持柔和，但不要过度可爱化。
