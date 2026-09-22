# Remix Icon 调用规范

且慢 App 统一使用 [Remix Icon](https://remixicon.com/) **`-line`** 线性风格。图标只辅助识别，不替代文字。禁止混用 Font Awesome / Material / emoji 充当正式 UI 图标。

## 引入

```html
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css" rel="stylesheet" />
```

CDN 以 `{icons.cdn}` 为准。类名：`ri-{name}-{style}`。

| 风格 | 后缀 | 用法 |
|---|---|---|
| 线性 | `-line` | 默认：导航、列表、卡片、按钮、标签 |
| 填充 | `-fill` | 仅选中 / 成功 / 强调（已勾选、已完成） |

```html
<i class="ri-information-line"></i>
<i class="ri-arrow-right-s-line icon-primary"></i>
<i class="ri-checkbox-circle-fill icon-success"></i>
```

## 尺寸（icon font = font-size）

| Token | 尺寸 | 用途 |
|---|---:|---|
| `{icons.sizes.sm}` | 16px | 标签内、脚注、表格次要操作 |
| `{icons.sizes.md}` | 20px | **默认**（`{components.icon-standard}`） |
| `{icons.sizes.lg}` | 24px | 价值卡、步骤、Toast |
| `{icons.sizes.xl}` | 32px | 首屏利益点、空状态 |

图标按钮触控区域 **40–44px**，即使图标为 20px。内联图标 `vertical-align: -0.15em` 或与文字 flex 居中。

```css
.icon-sm { font-size: var(--icon-size-sm); line-height: 1; vertical-align: -0.15em; }
.icon-md { font-size: var(--icon-size-md); line-height: 1; vertical-align: -0.15em; }
.icon-lg { font-size: var(--icon-size-lg); line-height: 1; }
.icon-xl { font-size: var(--icon-size-xl); line-height: 1; }
```

## 颜色

禁止硬编码。带底色容器：`{colors.brand-primary-faded}` 底 + `{colors.brand-primary}` 图标，圆角 `{rounded.sm}`。

| 类名 | Token | 用途 |
|---|---|---|
| `.icon-standard` | `{colors.text-tertiary}` | 默认辅助 |
| `.icon-primary` | `{colors.brand-primary}` | 主操作、当前步骤 |
| `.icon-secondary` | `{colors.text-secondary}` | 正文旁说明 |
| `.icon-inverse` | `{colors.text-inverse}` | 蓝底 / 海报反白 |
| `.icon-success` | `{colors.semantic-success}` | 完成（须业务语义明确） |
| `.icon-warning` | `{colors.semantic-warning}` | 提醒 |
| `.icon-error` | `{colors.semantic-error}` | 风险、异常 |

## 金融场景映射

同一页面相同语义复用同一图标。名称以 remixicon.com 为准。

| 场景 | 类名 |
|---|---|
| 收益/趋势 | `ri-line-chart-line` |
| 基金/资产 | `ri-exchange-funds-line` |
| 礼物/权益 | `ri-gift-line` |
| 时间/限时 | `ri-time-line` |
| 规则/协议 | `ri-file-list-3-line` |
| 信息说明 | `ri-information-line` |
| 成功/完成 | `ri-check-line` / `ri-checkbox-circle-line` |
| 警告/风险 | `ri-error-warning-line` |
| 箭头/跳转 | `ri-arrow-right-s-line` |
| 关闭 | `ri-close-line` |
| 搜索 | `ri-search-line` |
| 设置 | `ri-settings-3-line` |
| 首页 | `ri-home-5-line` / 选中 `ri-home-5-fill` |
| 圈子 | `ri-group-line` |
| 返回 | `ri-arrow-left-s-line` |
| 用户/账户 | `ri-user-line` |
| 分享 | `ri-share-line` |
| 下载/导出 | `ri-download-line` |

## 原则

- Line 优先；仅选中/成功/强调用 fill。
- 图文并存：关键金融信息不可只用图标；补文字或 `aria-label`。
- 不抢层级：装饰性图标每屏不超过 3–5 处。
- 禁止混库。
