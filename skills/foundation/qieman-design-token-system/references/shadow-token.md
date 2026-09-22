# Shadow Token｜阴影变量规范

## 1. 定位

`shadow-token.md` 用于约束且慢设计体系中的阴影与层级关系。当前上传的 Token 源文件未包含正式阴影变量，因此本文件提供**命名框架与建议值**，用于后续补充 Figma Variables / CSS Variables。

## 2. 阴影设计原则

且慢的视觉语言应保持轻量、干净、可信，阴影不应过重：

1. 阴影用于表达层级，不用于制造强烈装饰感。
2. App 卡片以极轻阴影或无阴影为主，依靠背景色和边框分层。
3. 弹窗、底部弹层可以使用更明确的浮层阴影。
4. Web / 官网可以适当增强卡片阴影，但要避免 SaaS 模板化的厚重投影。

## 3. 推荐 Shadow Token

| Token | 建议值 | 使用场景 |
|---|---|---|
| `shadow/none` | `none` | 扁平卡片、列表、表格 |
| `shadow/xs` | `0 1px 2px rgba(15, 23, 42, 0.04)` | 小标签、轻量悬浮 |
| `shadow/sm` | `0 4px 12px rgba(15, 23, 42, 0.06)` | App 卡片、H5 卡片 |
| `shadow/md` | `0 8px 24px rgba(15, 23, 42, 0.08)` | 弹窗、底部弹层 |
| `shadow/lg` | `0 16px 40px rgba(15, 23, 42, 0.10)` | Web 大卡片、营销主视觉容器 |
| `shadow/blue-soft` | `0 12px 32px rgba(27, 136, 238, 0.12)` | 品牌蓝强调卡片、AI 场景 |

## 4. CSS 建议

```css
--qdm-shadow-none: none;
--qdm-shadow-xs: 0 1px 2px rgba(15, 23, 42, 0.04);
--qdm-shadow-sm: 0 4px 12px rgba(15, 23, 42, 0.06);
--qdm-shadow-md: 0 8px 24px rgba(15, 23, 42, 0.08);
--qdm-shadow-lg: 0 16px 40px rgba(15, 23, 42, 0.10);
--qdm-shadow-blue-soft: 0 12px 32px rgba(27, 136, 238, 0.12);
```

## 5. 禁用规则

- 不要使用大面积黑色重阴影。
- 不要在同一张页面叠加 3 层以上阴影。
- 不要用阴影掩盖信息层级混乱的问题。
- 金融交易与风险确认场景应保持清晰克制，不做夸张浮层效果。
