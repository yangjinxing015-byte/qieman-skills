---
title: Qieman Tag 标签组件规范
component: tag
version: 1.0.0
status: draft
depends_on:
  - qieman-design-token-system
  - qieman-ui-design-system
platforms:
  - app
  - h5
  - web
---

# Qieman Tag 标签组件规范

## 1. 组件定位

Tag 用于展示对象的**分类、属性、状态或短说明**，帮助用户快速识别信息，不承担主要操作。

参考图中的 Tag 体系由以下维度组合而成：

```text
2 种形态 × 3 种尺寸 × 3 种视觉层级 × 8 组语义色
```

- 形态：矩形 `Rect`、胶囊 `Pill`
- 尺寸：小 `S`、中 `M`、大 `L`
- 层级：浅底 `Soft`、实底 `Solid`、描边 `Outline`
- 色彩：品牌蓝、成功青、警示橙、风险红、扩展紫、专业深蓝、尊享金、中性灰

> Tag 默认是只读信息组件。需要点击、选择、删除或筛选时，应使用 `Filter Tag`、`Chip` 或按钮类组件，不要直接给普通 Tag 增加操作语义。

---

## 2. 使用场景

### 适合使用

- 产品、策略、文章或内容分类
- 订单、计划、服务或任务状态
- 风险等级、服务属性、账户属性
- 会员、私募、专属权益等身份标识
- 卡片、列表、表格中的轻量辅助信息

### 不适合使用

- 代替按钮或 Tab
- 展示长句、完整说明或风险条款
- 同一区域堆叠过多标签
- 仅依赖颜色表达关键信息
- 用绿色或红色直接表达投资收益涨跌

---

## 3. 组件结构

```text
┌─────────────────┐
│  [Text label]   │
└─────────────────┘
```

基础结构只包含文本：

1. 容器：背景、描边、圆角、内边距
2. 标签文字：单行、居中、不可换行

默认不包含图标。若业务需要前置图标、关闭图标或计数，应扩展为 `Chip`，避免 Tag 组件无限膨胀。

---

## 4. 形态规范

### 4.1 Rect 矩形标签

用于列表、卡片、表格和紧凑信息区域，视觉更克制，适合作为默认形态。

```text
border-radius: 4px
```

### 4.2 Pill 胶囊标签

用于身份、权益、主题分类及需要更友好表达的场景，视觉更柔和。

```text
border-radius: 999px
```

### 形态选择原则

| 场景 | 推荐形态 |
|---|---|
| 表格、数据列表、状态列 | Rect |
| 内容分类、兴趣、身份、权益 | Pill |
| 同一组并列标签 | 必须统一形态 |
| 同一业务状态体系 | 不允许 Rect 与 Pill 混用 |

---

## 5. 尺寸规范

宽度由文本内容与水平内边距共同决定，不设置固定宽度。

| 尺寸 | 高度 | 字号 / 行高 | Rect 水平内边距 | Pill 水平内边距 | 推荐场景 |
|---|---:|---:|---:|---:|---|
| S | 20px | 12px / 18px | 6px | 10px | 表格、密集列表、辅助属性 |
| M | 22px | 14px / 20px | 6px | 10px | App、H5、普通卡片，默认尺寸 |
| L | 26px | 16px / 22px | 8px | 12px | 重点状态、权益、营销内容 |

### 尺寸约束

- 默认使用 `M`。
- 同一区域只使用一种尺寸。
- 标签文字过长时优先精简文案，不优先缩小字号。
- App 与 H5 中最小可读字号为 12px。
- Tag 不单独承担触控操作；可点击组件的触控热区不得低于 44×44px。

---

## 6. 视觉层级

### 6.1 Soft 浅底标签

用于默认展示和弱强调，是最常用的标签样式。

```text
background: semantic soft color
text: semantic main color
border: none
```

适用：分类、普通状态、辅助信息。

### 6.2 Solid 实底标签

用于当前选中、重点状态或需要快速识别的信息。一组内容中应控制数量。

```text
background: semantic main color
text: on-color
border: none
```

适用：重点状态、当前项、核心身份。

### 6.3 Outline 描边标签

用于低权重状态、未选中筛选项或需要减少色块面积的场景。

```text
background: transparent
text: semantic main color
border: 1px solid semantic main color
```

适用：次级分类、未选中状态、轻量分组。

### 层级优先级

```text
Solid > Soft > Outline
```

同一区域最多保留一个主层级；若必须混用，使用 `1 个 Solid + 若干 Soft/Outline`，避免多个实底色相互争抢。

---

## 7. 色彩 Token 映射

Tag 颜色应从 `qieman-design-token-system` 中引用，不在组件内部创建孤立色值。以下命名为组件层建议别名；若项目已有 Token 名称，以项目现有名称为准。

### 7.1 基础语义色

| 语义 | Component Token | 基础 Token 建议映射 | 主色参考 | 浅底参考 | 典型用途 |
|---|---|---|---|---|---|
| 品牌蓝 | `tag.color.primary` | `color.brand.primary` | `#1B88EE` | `#F0F6FF` | 默认、品牌、已选择 |
| 成功青 | `tag.color.success` | `color.semantic.success` | `#09AD8F` | `#E6F8F4` | 已完成、正常、已生效 |
| 警示橙 | `tag.color.warning` | `color.semantic.warning` | `#EA9500` | `#FFFAEF` | 待处理、提醒、临近到期 |
| 风险红 | `tag.color.danger` | `color.semantic.danger` | `#FA450D` | `#FEEDE9` | 异常、失败、高风险、受限 |
| 扩展紫 | `tag.color.purple` | `color.extension.purple` | `#767AD8` | `#F1F2FB` | AI、功能、主题分类 |
| 专业深蓝 | `tag.color.navy` | `color.brand.navy` | `#064885` | `#ECF2F8` | 投顾、策略、专业服务 |
| 尊享金 | `tag.color.gold` | `color.extension.gold` | `#DEB15E` | `#FFFAEF` | VIP、私募、专属权益 |
| 中性灰 | `tag.color.neutral` | `color.neutral.500` | `#999999` | `#F7F7F7` | 未开始、已失效、归档 |

> 表内色值用于对齐参考图和设计验收；研发实现应优先引用基础 Token，不直接复制 Hex。

### 7.2 组件颜色组合

```text
Soft
  background = tag.color.{semantic}.soft
  foreground = tag.color.{semantic}.main

Solid
  background = tag.color.{semantic}.main
  foreground = tag.color.{semantic}.on-color

Outline
  background = transparent
  foreground = tag.color.{semantic}.main
  border     = tag.color.{semantic}.main
```

### 7.3 金融场景色彩限制

- 成功青只表示流程或系统状态，不表示收益上涨。
- 风险红只表示风险、异常或限制，不与营销利益点混用。
- 尊享金仅用于会员、私募、专属权益，不用于普通促销。
- 页面中大面积颜色仍以且慢品牌蓝为主，其他颜色仅作语义辅助。
- 同一语义必须长期保持同色，不因页面主题随意更换。

---

## 8. 文字规范

### 字体

```text
中文：Alibaba PuHuiTi / 系统无衬线字体
数字：MiSans
字重：Regular 400；重点标签可使用 Medium 500
```

### 文案要求

- 单行展示，不换行。
- 推荐 2–6 个中文字符，最多 8 个中文字符。
- 英文首字母大小写保持产品内一致。
- 不使用句号、感叹号等句末标点。
- 避免“稳赚”“保本”“必涨”等金融不当表达。
- 关键状态不能只靠颜色区分，文字必须明确，例如“已失效”“待确认”。

### 超长处理

优先级：

```text
精简文案 > 更换布局 > 限宽省略
```

确需限宽时：

```text
max-width: 120px
white-space: nowrap
overflow: hidden
text-overflow: ellipsis
```

不建议对风险等级、交易状态等关键标签使用省略号。

---

## 9. 状态与交互

### 9.1 只读 Tag

普通 Tag 不提供 Hover、Pressed、Focus 状态，不设置点击手势。

### 9.2 可选择 Filter Tag

当标签承担筛选或选择行为时，应转为独立组件 `Filter Tag`：

| 状态 | 推荐样式 |
|---|---|
| Default | Outline 或 Soft |
| Hover（Web） | Soft 背景加深一级 |
| Selected | Solid |
| Pressed | 主色加深一级 |
| Focus | 外侧 2px Focus Ring |
| Disabled | Neutral Soft，文字降低层级，不可点击 |

交互组件必须具有明确的键盘焦点、语义角色与选中状态，不可只改变颜色。

---

## 10. Component Token 建议

```text
component.tag.height.s                 = 20px
component.tag.height.m                 = 22px
component.tag.height.l                 = 26px

component.tag.font-size.s              = 12px
component.tag.font-size.m              = 14px
component.tag.font-size.l              = 16px

component.tag.line-height.s            = 18px
component.tag.line-height.m            = 20px
component.tag.line-height.l            = 22px

component.tag.padding-x.rect.s         = 6px
component.tag.padding-x.rect.m         = 6px
component.tag.padding-x.rect.l         = 8px

component.tag.padding-x.pill.s         = 10px
component.tag.padding-x.pill.m         = 10px
component.tag.padding-x.pill.l         = 12px

component.tag.radius.rect              = 4px
component.tag.radius.pill              = 999px
component.tag.border-width             = 1px
component.tag.font-weight              = 400
component.tag.font-weight.emphasis     = 500
```

### 颜色别名示例

```text
component.tag.primary.main             → color.brand.primary
component.tag.primary.soft             → color.brand.primary.050
component.tag.primary.on-color         → color.text.inverse

component.tag.success.main             → color.semantic.success
component.tag.success.soft             → color.semantic.success.050
component.tag.success.on-color         → color.text.inverse

component.tag.warning.main             → color.semantic.warning
component.tag.warning.soft             → color.semantic.warning.050
component.tag.warning.on-color         → color.text.inverse
```

其余语义色按同一规则映射。

---

## 11. Figma 组件命名

推荐组件集：

```text
Tag
├── Shape = Rect / Pill
├── Size = S / M / L
├── Variant = Soft / Solid / Outline
├── Color = Primary / Success / Warning / Danger / Purple / Navy / Gold / Neutral
└── Content = Text
```

组件属性命名：

```text
Tag / Shape=Rect / Size=M / Variant=Soft / Color=Primary
Tag / Shape=Pill / Size=L / Variant=Solid / Color=Gold
```

避免创建大量独立组件文件；应通过 Variant 统一管理。

---

## 12. 前端实现参考

```css
.qm-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  box-sizing: border-box;
  white-space: nowrap;
  font-family: var(--qm-font-sans);
  font-weight: var(--qm-font-weight-regular, 400);
  vertical-align: middle;
}

.qm-tag--s {
  height: 20px;
  padding-inline: 6px;
  font-size: 12px;
  line-height: 18px;
}

.qm-tag--m {
  height: 22px;
  padding-inline: 6px;
  font-size: 14px;
  line-height: 20px;
}

.qm-tag--l {
  height: 26px;
  padding-inline: 8px;
  font-size: 16px;
  line-height: 22px;
}

.qm-tag--rect { border-radius: 4px; }
.qm-tag--pill { border-radius: 999px; }

.qm-tag--soft {
  color: var(--qm-tag-color-main);
  background: var(--qm-tag-color-soft);
  border: 1px solid transparent;
}

.qm-tag--solid {
  color: var(--qm-tag-color-on);
  background: var(--qm-tag-color-main);
  border: 1px solid transparent;
}

.qm-tag--outline {
  color: var(--qm-tag-color-main);
  background: transparent;
  border: 1px solid var(--qm-tag-color-main);
}

.qm-tag--pill.qm-tag--s,
.qm-tag--pill.qm-tag--m { padding-inline: 10px; }

.qm-tag--pill.qm-tag--l { padding-inline: 12px; }
```

颜色由外层语义类注入：

```css
.qm-tag--primary {
  --qm-tag-color-main: var(--qm-color-brand-primary, #1B88EE);
  --qm-tag-color-soft: var(--qm-color-brand-primary-050, #F0F6FF);
  --qm-tag-color-on: var(--qm-color-text-inverse, #FFFFFF);
}
```

---

## 13. 无障碍要求

- 标签的文本和背景需满足可读性要求；浅橙、浅金、浅灰等低对比组合不可用于关键状态。
- 实底标签若使用白字，需要在真实字号下验证对比度；不满足时应调用更深一级语义色，而不是加粗文字替代。
- 不使用颜色作为唯一信息渠道。
- 可交互标签必须提供 `role`、选中状态和键盘焦点。
- 不通过降低透明度制造禁用状态，优先使用专门的 Neutral Token。

---

## 14. 组合与间距

| 场景 | 水平间距 | 垂直间距 |
|---|---:|---:|
| 同一行连续标签 | 8px | — |
| 多行自动换行 | 8px | 8px |
| 标签与标题 | 8px | — |
| 标签与正文 | 8px | 8px |

规则：

- 同一行建议不超过 4 个标签。
- 超过 4 个时优先折行或收起为“更多”。
- 同一组颜色不超过 3 种，避免产生“彩虹标签墙”。
- 重点标签靠近对象名称，辅助标签放在信息末端。

---

## 15. 使用示例

### 策略状态

```text
[监测中]  Primary / Soft / Rect / M
[已执行]  Success / Soft / Rect / M
[已失效]  Neutral / Soft / Rect / M
```

### 风险与提醒

```text
[待确认]  Warning / Soft / Rect / M
[高风险]  Danger / Soft / Rect / M
[受限制]  Danger / Outline / Rect / M
```

### 专属权益

```text
[私募专区] Gold / Soft / Pill / M
[专属顾问] Navy / Soft / Pill / M
[AI 分析]  Purple / Soft / Pill / M
```

### 筛选选中态

```text
未选中：Primary / Outline / Pill / M
已选中：Primary / Solid / Pill / M
```

---

## 16. 禁止项

- 禁止同一状态在不同页面使用不同颜色。
- 禁止将 Solid Tag 大面积连续排列。
- 禁止在单个 Tag 内放两行文字。
- 禁止用 Tag 代替主按钮、文字链接或 Tab。
- 禁止叠加渐变、阴影、描边与实底等多重装饰。
- 禁止同时使用多种圆角形态破坏组件一致性。
- 禁止用绿色表达收益上涨或“稳赚”暗示。
- 禁止对重要风险信息使用低对比灰色标签。

---

## 17. 设计验收清单

- [ ] 是否明确使用 Rect 或 Pill，并与同组组件一致？
- [ ] 是否使用 S / M / L 标准尺寸？
- [ ] 是否使用 Soft / Solid / Outline 标准层级？
- [ ] 是否引用 qieman Design Token，而非新增孤立色值？
- [ ] 同一语义是否保持同色？
- [ ] 标签文字是否简短、单行、无歧义？
- [ ] 是否避免仅靠颜色传递状态？
- [ ] 是否避免把 Tag 当作按钮使用？
- [ ] 金融风险与收益表达是否合规、克制？
- [ ] 实际字号下的文字对比度是否可读？
- [ ] 同一区域是否避免过多颜色与实底标签？

---

## 18. 版本记录

| 版本 | 日期 | 说明 |
|---|---|---|
| 1.0.0 | 2026-07-10 | 基于参考图建立 Rect / Pill、S / M / L、Soft / Solid / Outline 与 8 组语义色规范 |
