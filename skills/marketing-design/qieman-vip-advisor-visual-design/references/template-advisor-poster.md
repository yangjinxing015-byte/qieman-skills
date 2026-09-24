# Template C — 顾问人物介绍海报

## Status

已按 Figma 节点 `4977:4910`（26）落地 HTML。

实现文件：

- `html/template-advisor-poster.html`
- `html/顾问介绍海报-汤楚然.html`
- 预览：`生成的界面/figma-design/顾问介绍海报-汤楚然.html`

## Canvas

- Width: `973px`
- Height: `1280px`
- Background: `#2887E3`

最终如需 3× JPG，按此画布放大导出：`2919 × 3840px`。

## Information Hierarchy

1. 品牌主标题：资深理财规划师（矢量字）
2. 核心专业数据：金融从业经验 / 累计服务高净值用户
3. 从业经历 / 擅长方向
4. 人物半身像（右侧）
5. 身份信息卡：姓名、学历资质、编号、电话、二维码
6. 底部波浪收口 + 盈米基金 Logo

## Layout

| 模块 | 位置 / 规则 |
|------|-------------|
| 主标题 | 水平居中，`top 154.9px`，`772.86 × 101.975` |
| KPI 区 | `left 90px` / `top 335px` / `width 564` |
| 从业年限数字 | `80px`，MiSans Semibold，金色渐变 |
| 服务用户数字 | `70px`，同上 |
| 标签 | `38px`，`#FFF6E3` |
| 经历条目 | `28px` 白字，左圆点 `10px` |
| 人物 | `left 407px` / `top 245px` / 容器 `729 × 965` |
| 信息卡 | `left 95px` / `top 815px` / `813 × 502`，圆角 `40px`，`rgba(21,98,164,0.6)` + `blur(17px)` |
| 姓名 | `60px / 600` 白色 |
| 资质 / 电话 | `28px` |
| 二维码 | `100 × 100`，白底 |
| 底部 Logo | 居中，`top 1153px`，`260 × 54` |

## Key Data Highlight

金色仅用于数字：

- `#FFE2A7` → `#F0C56A`
- 对应技能规范 Highlight Gold `#F6D37A` 的邻近色

## Assets

- `assets/backgrounds/bg-vip-advisor-poster.svg`
- `assets/backgrounds/title-senior-planner.svg`
- `assets/backgrounds/wave-cyan.png`
- `assets/backgrounds/wave-blue.png`
- `assets/portraits/`
- `assets/qr/`

## Content

必填：name、portrait、title、experience_years、service_label、service_value、phone、license_id

选填：experience_description、education、certifications、qr_code

不得编造履历、年限、服务数据或二维码。
