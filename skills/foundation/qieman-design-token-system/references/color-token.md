# Color Token｜色彩变量规范

## 1. 定位

`color-token.md` 负责定义且慢设计体系的**基础色阶 Token** 与**语义色 Token**。  
基础色阶用于建立色彩资产库，语义色用于 App UI、H5、Web 官网、AI 产品、营销页面、PPT 视觉、数据报告中的实际调用。

## 2. Token 分层

```text
Primitive Color / 色阶
    ↓
Semantic Color / 语义色
    ↓
Component Token / 组件变量
    ↓
UI 场景调用
```

使用原则：

1. 业务界面优先调用 `semantic color`，不要直接硬编码色值。
2. `primitive color` 只作为基础色阶库，主要服务主题映射和视觉资产扩展。
3. Light / Dark mode 必须通过同一语义变量切换，不要为暗色模式另起一套组件命名。
4. 金融涨跌色、风险色、警告色、成功色必须使用语义 Token，避免各业务随意定义。

## 3. 基础色阶 Token

来源：`色阶.json`。该集合包含 Light mode 与 Dark mode 两套模式。

| Token | Light mode | Dark mode | Scope |
| --- | --- | --- | --- |
| brand/brand 100 | #F0F6FF | #051B30 | ALL_FILLS, STROKE_COLOR |
| brand/brand 200 | #DBEBFF | #0B365F | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| brand/brand 300 | #9CCBF8 | #10528F | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| brand/brand 400 | #69B1F4 | #166DBE | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| brand/brand 500 | #3C99F0 | #1B88EE | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| purple/purple 100 | #F1F2FB | #0C0C16 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| brand/brand 600 | #1B88EE | #3C99F0 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| brand/brand 700 | #166DBE | #69B1F4 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| brand/brand 800 | #10528F | #9CCBF8 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| brand/brand 900 | #0B365F | #DBEBFF | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| brand/brand 1000 | #051B30 | #F5F9FF | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| purple/purple 200 | #D6D7F3 | #232541 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| purple/purple 300 | #C8CAEF | #2F3156 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| purple/purple 400 | #ADAFE8 | #474982 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| purple/purple 500 | #9195E0 | #767AD8 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| purple/purple 600 | #767AD8 | #9195E0 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| purple/purple 700 | #5E62AD | #9195E0 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| purple/purple 800 | #474982 | #ADAFE8 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| purple/purple 900 | #2F3156 | #C8CAEF | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| purple/purple 1000 | #18182B | #E4E4F7 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| red/red 100 | #FEEDE9 | #370D03 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| red/red 200 | #FDDBD3 | #5E1705 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| red/red 300 | #FAB6A5 | #872107 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| red/red 400 | #F88D72 | #B22B0A | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| red/red 500 | #FB5D2D | #FA440C | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| red/red 600 | #FA440C | #FB5D2D | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| red/red 700 | #B22B0A | #F88D72 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| red/red 800 | #872107 | #FAB6A5 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| red/red 900 | #5E1705 | #FDDBD3 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| red/red 1000 | #370D03 | #FEEDE9 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| yellow/yellow 100 | #FFFAEF | #2E1D00 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| green/green 100 | #E6F7F4 | #01231D | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| gold/gold 100 | #FCF8F1 | #382C15 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| blue/darkblue 100 | #ECF2F8 | #031B32 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cyan/teal 100 | #E2FAFE | #031F23 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cool gray/cool gray 100 | #FCFDFD | #040506 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| solid/neutral 0 | #FFFFFF | #000000 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| persistent/black | #000000 | #FFFFFF | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| opacity/brack 60 | rgba(0, 0, 0, 0.60) | rgba(0, 0, 0, 0.80) | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| yellow/yellow 200 | #FFF0D6 | #613E00 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| yellow/yellow 300 | #FFDC9E | #8A5800 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| yellow/yellow 400 | #FBCA74 | #C77F00 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| yellow/yellow 500 | #FFB92E | #FFAA00 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| yellow/yellow 600 | #EA9500 | #FFB92E | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| yellow/yellow 700 | #C77F00 | #FFB83D | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| yellow/yellow 800 | #8A5800 | #FFD285 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| yellow/yellow 900 | #613E00 | #FFF0D6 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| yellow/yellow 1000 | #2E1D00 | #FFFAEF | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| green/green 200 | #CDEFE9 | #034539 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| green/green 300 | #ABE3D8 | #046856 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| green/green 400 | #7DD4C4 | #068A72 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| green/green 500 | #3DB8A2 | #07AD8F | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| green/green 600 | #07AD8F | #3DB8A2 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| green/green 700 | #068A72 | #7DD4C4 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| green/green 800 | #046856 | #ABE3D8 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| green/green 900 | #034539 | #CDEFE9 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| green/green 1000 | #01231D | #E6F7F4 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| gold/gold 200 | #F6EBD4 | #564320 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| gold/gold 300 | #F3E4C6 | #7B602D | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| gold/gold 400 | #E8C98D | #AB853F | ALL_FILLS, STROKE_COLOR |
| gold/gold 500 | #EDC273 | #DEB15E | ALL_FILLS, STROKE_COLOR |
| gold/gold 600 | #DEB15E | #EDC273 | ALL_FILLS, STROKE_COLOR |
| gold/gold 700 | #AB853F | #E8C98D | ALL_FILLS, STROKE_COLOR |
| gold/gold 800 | #7B602D | #F3E4C6 | ALL_FILLS, STROKE_COLOR |
| gold/gold 900 | #564320 | #F6EBD4 | ALL_FILLS, STROKE_COLOR |
| gold/gold 1000 | #382C15 | #FCF8F1 | ALL_FILLS, STROKE_COLOR |
| blue/darkblue 200 | #CEDEED | #042442 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| blue/darkblue 300 | #6B9CCA | #06325B | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| blue/darkblue 400 | #3A7BB8 | #063C70 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| blue/darkblue 500 | #095AA6 | #074885 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| blue/darkblue 600 | #074885 | #095AA6 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| blue/darkblue 700 | #063C70 | #3A7BB8 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| blue/darkblue 800 | #06325B | #6B9CCA | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| blue/darkblue 900 | #042442 | #CEDEED | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| blue/darkblue 1000 | #031B32 | #ECF2F8 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cyan/teal 200 | #BDF1FA | #05353C | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cyan/teal 300 | #89E7F6 | #074A55 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cyan/teal 400 | #68E0F3 | #0D94AA | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cyan/teal 500 | #2FD4EF | #12C9E7 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cyan/teal 600 | #12C9E7 | #2FD4EF | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cyan/teal 700 | #0D94AA | #68E0F3 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cyan/teal 800 | #074A55 | #89E7F6 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cyan/teal 900 | #05353C | #BDF1FA | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cyan/teal 1000 | #031F23 | #E2FAFE | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cool gray/cool gray 200 | #F2F5F7 | #101419 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cool gray/cool gray 300 | #EDF0F2 | #222A34 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cool gray/cool gray 400 | #D4D9DF | #717F8E | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cool gray/cool gray 500 | #BBC4CE | #94A1AD | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cool gray/cool gray 600 | #94A1AD | #BBC4CE | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cool gray/cool gray 700 | #717F8E | #D4D9DF | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cool gray/cool gray 800 | #222A34 | #EDF0F2 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cool gray/cool gray 900 | #101419 | #F2F5F7 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| cool gray/cool gray 1000 | #040506 | #FCFDFD | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| solid/neutral 100 | #F9FAFB | #2C2C2E | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| solid/neutral 200 | #F7F7F7 | #333333 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| solid/neutral 300 | #F0F0F0 | #3A3A3C | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| solid/neutral 400 | #E6E6E6 | #606060 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| solid/neutral 500 | #D8D8D8 | #7A7A7A | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| solid/neutral 600 | #CCCCCC | #999999 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| solid/neutral 700 | #999999 | #CCCCCC | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| solid/neutral 800 | #7A7A7A | #D8D8D8 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| solid/neutral 900 | #606060 | #E6E6E6 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| solid/neutral 1000 | #3D3D3D | #F0F0F0 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| solid/neutral 1100 | #333333 | #F7F7F7 | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| solid/neutral 1200 | #2C2C2E | #F9FAFB | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| persistent/white | #FFFFFF | #FFFFFF | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| solid/neutral 1300 | #1C1C1E | #FFFFFF | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| opacity/white 60 | rgba(255, 255, 255, 0.60) | rgba(255, 255, 255, 0.60) | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| opacity/brack 80 | rgba(0, 0, 0, 0.80) | rgba(0, 0, 0, 0.80) | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |
| opacity/white 61 | rgba(255, 255, 255, 0.60) | rgba(0, 0, 0, 0.60) | FRAME_FILL, SHAPE_FILL, STROKE_COLOR |


## 4. 语义色 Token

来源：`色彩 .json`。语义色通过 alias 绑定基础色阶，用于页面背景、文字、边框、状态、图表和特殊场景。


### 4.1 `foreground`

| Token | 说明 | Light value | Light alias | Dark value | Dark alias |
| --- | --- | --- | --- | --- | --- |
| foreground/neutral subtlest | 更弱（正文、描述文字） | #CCCCCC | solid/neutral 600 | #7A7A7A | solid/neutral 800 |
| foreground/neutral subtler | 减弱（正文、描述文字） | #999999 | solid/neutral 700 | #999999 | solid/neutral 700 |
| foreground/neutral subtle | 正文、描述文字 | #606060 | solid/neutral 900 | #E6E6E6 | solid/neutral 400 |
| foreground/neutral | 标题、正文 | #333333 | solid/neutral 1100 | #F0F0F0 | solid/neutral 300 |
| foreground/error | 警告 | #FA440C | red/red 600 | #FB5D2D | red/red 500 |
| foreground/warning | 文本提醒 | #EA9500 | yellow/yellow 600 | #FFB92E | yellow/yellow 500 |
| foreground/success | 文本成功 | #07AD8F | green/green 600 | #3DB8A2 | green/green 500 |
| foreground/inverse | 反白 | #FFFFFF | solid/neutral 0 | #2C2C2E | solid/neutral 1200 |
| foreground/buy | 卖出/上涨 | #FA440C | red/red 600 | #FB5D2D | red/red 500 |
| foreground/sell | 卖出/上涨 | #07AD8F | green/green 600 | #3DB8A2 | green/green 500 |
| foreground/primary |  | #1B88EE | brand/brand 600 | #3C99F0 | brand/brand 500 |
| foreground/fall |  | #07AD8F | green/green 600 | #3DB8A2 | green/green 500 |
| foreground/rise |  | #FA440C | red/red 600 | #FB5D2D | red/red 500 |
| foreground/primary faded |  | #F0F6FF | brand/brand 100 | #051B30 | brand/brand 1000 |
| foreground/error faded |  | #FEEDE9 | red/red 100 | #370D03 | red/red 1000 |
| foreground/warning faded |  | #FFFAEF | yellow/yellow 100 | #2E1D00 | yellow/yellow 1000 |
| foreground/success faded | 文本成功 | #E6F7F4 | green/green 100 | #01231D | green/green 1000 |
| foreground/special 1 |  | #767AD8 | purple/purple 600 | #9195E0 | purple/purple 500 |
| foreground/special 2 |  | #074885 | blue/darkblue 600 | #6B9CCA | blue/darkblue 300 |
| foreground/vip |  | #DEB15E | gold/gold 600 | #E8C98D | gold/gold 400 |
| foreground/describe |  | #AB853F | gold/gold 700 | #E8C98D | gold/gold 400 |
| foreground/yingmi 1 |  | #123180 |  | #243797 |  |
| foreground/yingmi 2 |  | #FF5000 |  | #FF5000 |  |

### 4.2 `background`

| Token | 说明 | Light value | Light alias | Dark value | Dark alias |
| --- | --- | --- | --- | --- | --- |
| background/page/deeper | 中灰 | #F7F7F7 | solid/neutral 200 | #1C1C1E | solid/neutral 1300 |
| background/page/deep | 浅灰 | #F9FAFB | solid/neutral 100 | #1C1C1E | solid/neutral 1300 |
| background/page/default | 白色背景 | #FFFFFF | solid/neutral 0 | #1C1C1E | solid/neutral 1300 |
| background/page/deepest | 深灰 | #F0F0F0 | solid/neutral 300 | #1C1C1E | solid/neutral 1300 |
| background/card/default |  | #FFFFFF | solid/neutral 0 | #2C2C2E | solid/neutral 1200 |
| background/card/deep |  | #F9FAFB | solid/neutral 100 | #3D3D3D | solid/neutral 1000 |
| background/card/deeper |  | #F7F7F7 | solid/neutral 200 | #3D3D3D | solid/neutral 1000 |
| background/primary |  | #1B88EE | brand/brand 600 | #3C99F0 | brand/brand 500 |
| background/primary faded |  | #F0F6FF | brand/brand 100 | #051B30 | brand/brand 1000 |
| background/success |  | #07AD8F | green/green 600 | #07AD8F | green/green 600 |
| background/success faded |  | #E6F7F4 | green/green 100 | #01231D | green/green 1000 |
| background/error |  | #FA440C | red/red 600 | #FB5D2D | red/red 500 |
| background/error faded |  | #FEEDE9 | red/red 100 | #370D03 | red/red 1000 |
| background/warning |  | #EA9500 | yellow/yellow 600 | #FFB92E | yellow/yellow 500 |
| background/warning faded |  | #FFFAEF | yellow/yellow 100 | #2E1D00 | yellow/yellow 1000 |
| background/neutral |  | #999999 | solid/neutral 700 | #7A7A7A | solid/neutral 800 |
| background/neutral faded |  | #E6E6E6 | solid/neutral 400 | #3D3D3D | solid/neutral 1000 |
| background/neutral disabled |  | #F0F0F0 | solid/neutral 300 | #333333 | solid/neutral 1100 |
| background/white |  | #FFFFFF | solid/neutral 0 | #3D3D3D | solid/neutral 1000 |
| background/card/deepest | 深灰 | #F0F0F0 | solid/neutral 300 | #333333 | solid/neutral 1100 |
| background/page/white |  | #FFFFFF | persistent/white | #000000 | persistent/black |
| background/mistery |  | #767AD8 | purple/purple 600 | #9195E0 | purple/purple 500 |
| background/mistery faded |  | #F1F2FB | purple/purple 100 | #18182B | purple/purple 1000 |
| background/blue |  | #074885 | blue/darkblue 600 | #6B9CCA | blue/darkblue 300 |
| background/blue faded |  | #ECF2F8 | blue/darkblue 100 | #031B32 | blue/darkblue 1000 |
| background/card/system |  | #D4D9DF | cool gray/cool gray 400 | #1C1C1E | solid/neutral 1300 |
| background/describe faded |  | #F8F3E8 |  | #382C15 | gold/gold 1000 |
| background/describe |  | #AB853F | gold/gold 700 | #EDC273 | gold/gold 500 |

### 4.3 `border`

| Token | 说明 | Light value | Light alias | Dark value | Dark alias |
| --- | --- | --- | --- | --- | --- |
| border/default |  | #E6E6E6 | solid/neutral 400 | #606060 | solid/neutral 900 |
| border/primary |  | #1B88EE | brand/brand 600 | #3C99F0 | brand/brand 500 |
| border/error |  | #FA440C | red/red 600 | #FB5D2D | red/red 500 |
| border/primary faded |  | #DBEBFF | brand/brand 200 | #0B365F | brand/brand 900 |
| border/neutral |  | #999999 | solid/neutral 700 | #CCCCCC | solid/neutral 600 |
| border/error faded |  | #FDDBD3 | red/red 200 | #5E1705 | red/red 900 |
| border/neutral faded |  | #D8D8D8 | solid/neutral 500 | #606060 | solid/neutral 900 |
| border/warning |  | #EA9500 | yellow/yellow 600 | #FFB92E | yellow/yellow 500 |
| border/warning faded |  | #FFF0D6 | yellow/yellow 200 | #613E00 | yellow/yellow 900 |
| border/success |  | #07AD8F | green/green 600 | #3DB8A2 | green/green 500 |
| border/success faded |  | #CDEFE9 | green/green 200 | #034539 | green/green 900 |
| border/special 1 |  | #767AD8 | purple/purple 600 | #9195E0 | purple/purple 500 |
| border/special 2 |  | #074885 | blue/darkblue 600 | #6B9CCA | blue/darkblue 300 |
| border/inverse |  | #FFFFFF | persistent/white | #000000 | persistent/black |

### 4.4 `unusual`

| Token | 说明 | Light value | Light alias | Dark value | Dark alias |
| --- | --- | --- | --- | --- | --- |
| unusual/mask |  | rgba(0, 0, 0, 0.60) | opacity/brack 60 | rgba(0, 0, 0, 0.80) | opacity/brack 80 |
| unusual/inverse |  | rgba(255, 255, 255, 0.60) | opacity/white 60 | rgba(0, 0, 0, 0.60) | opacity/brack 60 |
| unusual/primary faded |  | #F0F6FF | brand/brand 100 | #9CCBF8 | brand/brand 300 |
| unusual/primary |  | #1B88EE | brand/brand 600 | #F0F0F0 | solid/neutral 300 |

### 4.5 `chart`

| Token | 说明 | Light value | Light alias | Dark value | Dark alias |
| --- | --- | --- | --- | --- | --- |
| chart/neutral |  | #D8D8D8 | solid/neutral 500 | #999999 | solid/neutral 700 |
| chart/01 | 货币型、海外市场 | #69B1F4 | brand/brand 400 | #1B88EE | brand/brand 600 |
| chart/cash |  | #DBEBFF | brand/brand 200 | #69B1F4 | brand/brand 400 |
| chart/02 | 股票型、A股 | #F88D72 | red/red 400 | #B22B0A | red/red 700 |
| chart/03 | 债券型、黄金 | #FBCA74 | yellow/yellow 400 | #C77F00 | yellow/yellow 700 |
| chart/04 | 保本型、海外新兴 | #7DD4C4 | green/green 400 | #068A72 | green/green 700 |
| chart/05 | 混合型、境内债券型 | #ADAFE8 | purple/purple 400 | #5E62AD | purple/purple 700 |
| chart/06 | 商品型、原油 | #68E0F3 | cyan/teal 400 | #0D94AA | cyan/teal 700 |
| chart/07 | 指数型、海外债券 | #3A7BB8 | blue/darkblue 400 | #3A7BB8 | blue/darkblue 400 |
| chart/08 | 盈米宝、现金 | #FAB6A5 | red/red 300 | #B22B0A | red/red 700 |
| chart/09 | 另类型 | #EDC273 | gold/gold 500 | #AB853F | gold/gold 700 |
| chart/10 | QD | #9CCBF8 | brand/brand 300 | #166DBE | brand/brand 700 |
| chart/11 | FOF | #C8CAEF | purple/purple 300 | #474982 | purple/purple 800 |
| chart/12 | 保险 | #6B9CCA | blue/darkblue 300 | #074885 | blue/darkblue 600 |
| chart/wallet |  | #EA9500 | yellow/yellow 600 | #EA9500 | yellow/yellow 600 |
| chart/13 |  | #BBC4CE | cool gray/cool gray 500 | #94A1AD | cool gray/cool gray 600 |
| chart/14 |  | #ABE3D8 | green/green 300 | #068A72 | green/green 700 |

### 4.6 `onbackground`

| Token | 说明 | Light value | Light alias | Dark value | Dark alias |
| --- | --- | --- | --- | --- | --- |
| onbackground/default |  | #333333 | solid/neutral 1100 | #333333 | solid/neutral 1100 |
| onbackground/subtler |  | #999999 | solid/neutral 700 | #7A7A7A | solid/neutral 800 |
| onbackground/inverse |  | #FFFFFF | solid/neutral 0 | #F0F0F0 | solid/neutral 300 |
| onbackground/subtle |  | #606060 | solid/neutral 900 | #606060 | solid/neutral 900 |
| onbackground/primary |  | #1B88EE | brand/brand 600 | #1B88EE | brand/brand 600 |
| onbackground/rise |  | #FA440C | red/red 600 | #FA440C | red/red 600 |
| onbackground/fall |  | #07AD8F | green/green 600 | #07AD8F | green/green 600 |

### 4.7 `Keyboard`

| Token | 说明 | Light value | Light alias | Dark value | Dark alias |
| --- | --- | --- | --- | --- | --- |
| Keyboard/neutral |  | #000000 |  | #FFFFFF |  |
| Keyboard/neutral subtle |  | #50555C |  | #E7E7E7 |  |
| Keyboard/card default |  | #FCFCFE |  | #434343 |  |
| Keyboard/background |  | #D1D5DB |  | rgba(32, 32, 32, 0.92) |  |
| Keyboard/card defaulter |  | #ADB3BC |  | #242424 |  |

## 5. CSS 命名建议

```css
--qdm-scale-brand-brand-600
--qdm-color-foreground-primary
--qdm-color-background-page-default
--qdm-color-border-default
```

## 6. 使用禁区

- 不要在页面代码中直接写 `#1B88EE`、`#333333` 等硬编码颜色。
- 不要在组件内部自行定义涨跌色、风险色、成功色。
- 不要把基础色阶 Token 当作业务语义直接使用，例如 `brand/brand 600` 不应直接写进业务说明，而应映射为 `foreground/primary` 或 `background/primary`。
- 高净值、营销、AI 场景可以扩展特殊语义色，但必须从现有色阶映射，不能随意新增高饱和颜色。
