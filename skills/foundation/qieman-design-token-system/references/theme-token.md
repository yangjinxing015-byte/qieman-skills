# Theme Token｜主题变量规范

## 1. 定位

`theme-token.md` 定义 Light / Dark mode 下的主题切换方式，确保 App UI、H5、Web 官网、AI 产品和数据报告可以在不同主题下复用同一套语义变量。

## 2. 主题来源

当前 Token 源包括：

| 文件 | 作用 |
|---|---|
| `色阶.json` | 基础色阶，包含 Light mode / Dark mode |
| `色彩 .json` | 语义色，包含 Light mode / Dark mode |
| `单元 .json` | 间距、圆角、行高等单位变量 |

## 3. 主题切换原则

1. 页面和组件只调用语义 Token。
2. 主题切换只改变 Token 值，不改变组件结构。
3. 暗色模式下不直接反转全部颜色，应保持品牌蓝识别与金融信息可读性。
4. 重要状态色在暗色模式下需要保证对比度和可读性。

## 4. CSS 主题结构

```css
:root[data-theme="light"] {
  --qdm-color-background-page-default: #FFFFFF;
  --qdm-color-foreground-neutral: #333333;
}

:root[data-theme="dark"] {
  --qdm-color-background-page-default: #1C1C1E;
  --qdm-color-foreground-neutral: #F0F0F0;
}
```

完整变量已生成在：

```text
assets/css-variable/qieman-tokens.css
assets/css-variable/qieman-tokens-light.css
assets/css-variable/qieman-tokens-dark.css
```

## 5. 核心语义变量

| 语义类别 | 代表 Token | 使用场景 |
|---|---|---|
| 页面背景 | `background/page/default` | 页面主体背景 |
| 卡片背景 | `background/card/default` | 内容卡片、弹窗、浮层 |
| 主文字 | `foreground/neutral` | 标题、正文 |
| 次文字 | `foreground/neutral subtle` | 正文、说明 |
| 弱文字 | `foreground/neutral subtler` | 辅助描述 |
| 品牌色 | `foreground/primary` / `background/primary` | CTA、重点信息 |
| 边框 | `border/default` | 卡片、输入框、分割线 |
| 遮罩 | `unusual/mask` | 弹窗遮罩 |
| 图表 | `chart/01` - `chart/13` | 数据可视化 |

## 6. 场景主题建议

| 场景 | 主题策略 |
|---|---|
| App 默认页面 | Light mode 为主，清爽低压 |
| AI 产品 / 开放平台 | 可支持 Light / Dark 双主题，突出科技感 |
| 营销 H5 | Light mode 优先，允许局部渐变或品牌蓝背景 |
| 高净值页面 | 可使用深蓝 / 蓝金视觉，但仍应映射到语义 Token |
| 数据报告 | 以 Light mode 为主，保证打印与阅读友好 |

## 7. 禁用规则

- 不要为暗色模式重写一套组件命名。
- 不要让组件直接判断主题后写死色值。
- 不要把营销场景的特殊背景色污染到全局主题 Token。
- 不要在主题 Token 中混入具体业务文案或功能状态。
