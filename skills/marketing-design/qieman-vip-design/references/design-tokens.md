# Design Tokens

仅在需要精确页面、HTML/CSS或设计规范时读取。

## Colors

```yaml
colors:
  brand-primary: "#1B88EE"
  brand-blue: "#1B88EE"
  navy-deep: "#0A1F3D"
  black-blue: "#0D1526"
  navy-rational: "#1A3A5C"
  light-blue: "#69B1F4"
  light-blue-white: "#E8F2FA"
  cream: "#F5F0E8"
  white: "#FFFFFF"
  champagne-gold: "#C9A962"
  soft-gold: "#E8D5A3"
  gold-accent: "#D4AF37"
  gold-line: "#B8956A"
  text-primary: "#FFFFFF"
  text-secondary: "#B8C5D6"
  text-on-light: "#1A3A5C"
  risk-disclosure: "#999999"
  semantic-error: "#FA440C"
  semantic-warning: "#EA9500"
```

推荐比例：

- 深蓝/黑蓝：75%–88%
- 白/浅色：8%–18%
- 金色：3%–8%

## Palette Presets

```yaml
palette-a:
  background: "#0A1F3D"
  title: "#E8D5A3"
  accent: "#C9A962"
palette-b:
  background: "#0D1526"
  title: "#C9A962"
  accent: "#D4AF37"
palette-c:
  background: "#E8F2FA"
  title: "#1A3A5C"
  accent: "#C9A962"
```

## Typography

```yaml
typography:
  title-heavy:
    fontFamily: "Source Han Serif CN, Noto Serif SC, serif"
    fontWeight: 900
    lineHeight: 1.22
  title-bold:
    fontFamily: "Source Han Serif CN, Noto Serif SC, serif"
    fontWeight: 700
    lineHeight: 1.25
  title-medium:
    fontFamily: "Source Han Serif CN, Noto Serif SC, serif"
    fontWeight: 500
    lineHeight: 1.35
  title-regular:
    fontFamily: "Source Han Serif CN, Noto Serif SC, serif"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Source Han Sans CN, PingFang SC, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.5
  body-medium:
    fontFamily: "Source Han Sans CN, PingFang SC, system-ui, sans-serif"
    fontWeight: 500
    lineHeight: 1.5
  legal:
    fontFamily: "Source Han Sans CN, PingFang SC, system-ui, sans-serif"
    fontSize: 11px
    lineHeight: 1.45
```

## Canvas

| 场景 | 尺寸 |
|---|---|
| 单张竖版海报 | 1080×1920 |
| 默认比例 | 9:16 |
| 九宫格预览 | 1080×1080 |
| 九宫格高清总图 | 3240×3240 |
| 九格单图 | 1080×1080 |

用户明确给出1125×2436或其他尺寸时，以用户尺寸为准。

## Poster Zones

- 品牌区：7%–10%
- 标题区：20%–28%
- 卖点区：12%–20%
- 主视觉区：38%–48%
- 底部区：8%–12%
- 页面留白：55%–65%

## Components

```yaml
components:
  footer-curve:
    color: "#1B88EE"
    shape: "blue curved closure"
  divider:
    color: "#B8956A"
    width: 1px
  data-card:
    border: "1px solid rgba(201,169,98,.3)"
    radius: "8px–12px"
  brand-copy:
    logo: "盈米基金｜且慢"
    slogan: "安放财富 · 静待花开"
    risk: "市场有风险，投资需谨慎"
```

## Shadows

```yaml
shadow:
  gold-glow: "0 0 24px rgba(201,169,98,.15)"
  card-soft: "0 4px 16px rgba(10,31,61,.12)"
  cinematic: "0 8px 32px rgba(13,21,38,.25)"
```

## Nine-grid Spacing

1080×1080预览建议：

- 外边距：24px
- 格间距：12px
- 单格：336×336px
- 单格内边距：24–28px
- 圆角：0–12px

## Nine-grid Text Scale

- 主标题：28–40px
- 中心格主标题：38–52px
- 副标题：18–24px
- 标签：12–16px
- 风险提示：11–13px
