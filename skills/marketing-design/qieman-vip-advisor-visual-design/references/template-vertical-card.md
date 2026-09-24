# Template B — VIP 顾问竖版名牌

## Status

已按 Figma 竖版节点落地 HTML 模板。

设计稿：`且慢高净值用户` · node `4977:4843`（竖版）

实现文件：

- `html/template-vertical-card.html`
- `html/顾问名片-张宏第-竖版.html`
- 预览：`生成的界面/figma-design/顾问竖版海报-张宏第.html`

## Canvas

- Width: `414px`
- Height: `721px`
- Radius: `2px`
- Background: `linear-gradient(231.44deg, #0B7AE0 7.52%, #006CCB 93.13%)`

## Structure

1. 左上：盈米基金｜且慢组合 Logo
2. 页面中上：圆形人物胸像
3. 人物下方：姓名
4. 姓名下：分隔线
5. 底部：联系电话
6. 底部：执业编号

## Layout

内容区：`left 28px` / `top 40.16px` / `width 358px` / `gap 44px`

| 模块 | 尺寸 / 规则 |
|------|-------------|
| 盈米 Logo | `81.011 × 16.834` |
| 品牌分隔线 | `1 × 13.449`，白色 |
| 且慢 Logo | `53.38 × 20.389` |
| Logo 间距 | `12px` |
| 人物容器 | `358 × 358` |
| 圆形头像 | `323 × 323`，描边 `2.335px #35B8F9` |
| 外环 | `346 × 346`，渐变描边 `#84CAFF → transparent` |
| 姓名 | `51px / 600`，行高 `71px`，白色，居中 |
| 分隔线 | `298.945 × 1px`，`rgba(255,255,255,0.28)` |
| 电话 / 编号 | `18.702px / 400`，行高 `34.287px`，白色，居中 |

## Background Pattern

`assets/backgrounds/bg-vip-card-vertical.svg`

定位：`left -265.7px` / `top -173.95px` / 容器 `1288.023 × 1242.132`  
内层：`1025.035 × 948.089`，旋转 `-20.06deg`，透明度约 `0.38`

## Portrait

- 居中圆形胸像
- 使用统一圆形容器，系列卡片统一脸部视觉尺寸
- 尽量保留完整肩部
- 不硬裁人物头顶和下巴
- 人像导出后需圆形遮罩，避免方形底角压在渐变背景上

核心原则：

> 统一脸，不强行统一身体。

## Content

必填字段：

- name
- portrait
- phone
- license_id

不在本模板中加入履历长文、服务数据或二维码。

## HTML

`html/template-vertical-card.html`
