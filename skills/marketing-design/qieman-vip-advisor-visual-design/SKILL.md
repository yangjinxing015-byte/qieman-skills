---
name: qieman-vip-advisor-visual-design
description: Create standardized Yingmi Fund and Qieman VIP advisor visual materials, including horizontal advisor cards, vertical advisor cards, and advisor profile posters. Use when generating advisor name cards, advisor identity cards, financial planner introduction posters, consultant profile materials, or batch advisor visual assets.
---

# qieman-vip-advisor-visual-design

## Purpose

用于生成盈米基金 / 且慢品牌体系下的 VIP 顾问标准化视觉物料。

本 Skill 重点解决：

- 顾问人物视觉不统一
- 顾问信息层级不统一
- 多人批量制作效率低
- 人物、姓名、执业编号、电话等信息容易出错
- 同一系列顾问物料版式容易漂移
- 后续模板和素材难以统一维护

本 Skill 采用：

> 1 个母 Skill + 3 个固定模板类型 + 统一人物规则 + 统一数据协议 + 统一 QA

---

## When to Use

当用户提出以下需求时使用：

- VIP 顾问名片
- VIP 顾问名牌
- 顾问横版人物卡
- 顾问竖版人物卡
- 顾问人物介绍海报
- 理财规划师人物海报
- 顾问专业履历海报
- 批量生成顾问视觉
- 根据顾问照片和资料生成标准化顾问物料

---

## Do Not Use When

以下需求不使用本 Skill：

- 普通金融营销海报
- 产品营销海报
- 高净值圈层营销海报
- 活动 KV
- App UI 页面
- H5 页面
- 单纯人物精修
- 单纯证件照生成
- 非顾问身份介绍类视觉

---

## Dependencies

如团队已有以下 Skills，优先遵循：

- qieman-foundation（品牌 + 合规分册）
- yingmi-brand-guidelines

如果依赖 Skill 不存在，则以本 Skill 内规则为最低执行标准。

---

# Supported Templates

## Template A — VIP 顾问横版名牌

适用：

- 横版名片
- 横版顾问卡
- 培训顾问展示
- 顾问列表
- 社群顾问介绍

规则文件：

`references/template-horizontal-card.md`

模板文件后续放置：

`html/template-horizontal-card.html`

背景素材后续放置：

`assets/backgrounds/bg-vip-card-horizontal.*`

---

## Template B — VIP 顾问竖版名牌

适用：

- 竖版名牌
- 手机端顾问卡
- 顾问联系方式卡
- 一人一张人物介绍卡

规则文件：

`references/template-vertical-card.md`

模板文件后续放置：

`html/template-vertical-card.html`

背景素材后续放置：

`assets/backgrounds/bg-vip-card-vertical.*`

---

## Template C — 顾问人物介绍海报

适用：

- 顾问专业介绍
- 资深理财规划师介绍
- 顾问履历海报
- 包含从业年限、服务数据、学历、资质、电话、二维码等完整信息

规则文件：

`references/template-advisor-poster.md`

模板文件后续放置：

`html/template-advisor-poster.html`

背景素材后续放置：

`assets/backgrounds/bg-vip-advisor-poster.*`

---

# Template Router

用户明确指定模板时，优先使用用户指定模板。

用户未指定时：

- 基础身份 + 服务能力 → Template A
- 单人联系方式 + 身份展示 → Template B
- 完整专业履历 + 服务数据 → Template C

如果三类信息同时存在，但没有明确用途，优先询问用途，不要自行混合三套版式。

---

# Common Design Principles

所有模板统一遵循：

- 专业
- 可信赖
- 稳定
- 简洁
- 金融属性明确
- 品牌统一
- 人物真实
- 信息准确
- 易批量生产

避免：

- 过度营销
- 夸张视觉
- 花哨装饰
- 无意义 3D 元素
- 影响人物识别的背景效果
- 版式因单个顾问资料变化而大幅漂移

---

# Brand Rules

整体视觉以品牌蓝和白色体系为主。

推荐基础色：

- Primary Blue: `#1B88EE`
- Secondary Blue: `#2679EE`
- Deep Blue: `#1667C8`
- White: `#FFFFFF`

顾问介绍海报可少量使用暖金色强调关键数据：

- Highlight Gold: `#F6D37A`

规则：

- 暖色只用于关键数字或局部强调
- 不大面积使用暖色
- 不使用绿色作为主视觉色
- 不使用彩虹渐变或高饱和多色混搭

---

# Typography Rules

推荐：

- 中文：阿里巴巴普惠体
- 数字：MiSans

层级原则：

- 姓名必须清晰醒目
- 执业编号、电话保持高可读性
- 关键数字允许加强
- 长姓名优先适配字号与字距
- 不因单个人名长度破坏整套模板
- 执业编号优先保持单行
- 不自行改写用户提供的字段内容

具体模板字号和位置由对应 template reference / HTML 模板定义。

---

# Portrait Rules

人物属于核心身份资产。

必须：

- 保留真实面部特征
- 保持人物真实比例
- 不改变性别
- 不擅自改变发型
- 不擅自更换服装
- 不自动生成“相似人物”替代原人像
- 不过度磨皮
- 不通过拉伸实现适配

允许：

- 抠图
- 去背景
- 曝光修正
- 色温微调
- 对比度调整
- 清晰度增强
- 轻度肤色优化
- 人物裁切

推荐使用透明 PNG 人物图。

具体执行读取：

`references/portrait-guidelines.md`

---

# Content Rules

所有顾问信息必须来自用户提供的数据。

禁止自动编造：

- 姓名
- 联系电话
- 执业编号
- 从业年限
- 服务人数
- 服务资产规模
- 学历
- 曾任职机构
- 资格证书
- 擅长方向
- 二维码

缺失字段处理：

1. 非必填字段缺失 → 隐藏对应模块
2. 必填字段缺失 → 提示补充
3. 不为了填满版式而创造内容

字段定义读取：

`references/content-schema.md`

---

# Input Data

推荐使用统一 JSON 数据结构。

示例：

`examples/input-example.json`

核心字段：

- template
- name
- portrait
- phone
- license_id
- services
- title
- experience_years
- service_label
- service_value
- experience_description
- education
- certifications
- qr_code

---

# Generation Workflow

## Step 1 — Validate Input

检查：

- 模板类型
- 姓名
- 人物照片
- 执业编号
- 电话
- 模板所需的额外信息

禁止跳过数据检查直接生成最终物料。

---

## Step 2 — Select Template

根据用户明确要求或 Template Router 选择模板。

---

## Step 3 — Prepare Portrait

执行：

1. 检查图片分辨率
2. 抠图 / 去背景
3. 清理边缘
4. 统一人物亮度
5. 统一人物色调
6. 按模板人物锚点放置

---

## Step 4 — Load Fixed Assets

优先调用固定素材：

- 背景
- Logo
- 二维码
- 顾问人物 PNG

除非用户明确要求重新设计，否则不要每次重新生成背景。

---

## Step 5 — Populate Content

将结构化数据映射到对应模板。

不得：

- 修改姓名
- 修改电话
- 修改编号
- 改写真实履历数据
- 自行生成不存在的专业资质

---

## Step 6 — Visual QA

输出前读取：

`references/checklist.md`

完成：

- 品牌检查
- 人物检查
- 内容检查
- 版式检查
- 可读性检查
- 导出检查

---

## Step 7 — Export

必须同时交付两份最终物料，缺一不可：

1. **HTML 文件**（1× 画布，可预览、可改字段）
2. **3× JPG**（RGB，按画布边长 ×3 导出）

| 模板 | 1× 画布 | 3× JPG |
|------|---------|--------|
| A 横版名牌 | `733 × 403` | `2199 × 1209` |
| B 竖版名牌 | `414 × 721` | `1242 × 2163` |
| C 介绍海报 | `750 × 1000` | `2250 × 3000` |

规则：

- 从 HTML 按 3× 渲染导出，或按 3× 画布直接输出
- 禁止把 1× 截图拉伸成 3×
- JPG 使用高质量（建议质量 ≥ 90）
- 源人物图仍用透明 PNG，不作为最终交付格式

建议路径：

- `html/顾问名片-{姓名}.html` 或对应模板 HTML
- `html/export/顾问名片-{姓名}@3x.jpg`

---

# Output Requirements

每次生成顾问视觉，**最终交付物固定为**：

- HTML 文件
- 3× JPG 文件

二者都要给出，并完成 QA。

过程产物（校验未完成时）仍可先输出：

- 模板选择结果
- 数据校验结果
- 顾问信息结构化 JSON
- 版式执行说明
- 素材缺失清单
- QA 检查结果

不得把过程产物当成最终交付。

---

# File Responsibilities

## SKILL.md

负责：

- Skill 触发条件
- 模板路由
- 公共设计规范
- 工作流
- 内容与人物底线

## references/

负责：

- 三套模板版式规则
- 人物规则
- 内容字段定义
- 最终 QA

## assets/

负责：

- 固定背景
- Logo
- 人像
- 二维码

## html/

负责：

- 三套最终可渲染模板
- 顾问成品 HTML
- 3× JPG（`html/export/`）

## examples/

负责：

- 输入数据示例
- 后续可补充输出案例

## scripts/

负责：

- 数据校验
- 模板渲染
- 图片导出

---

# Maintenance Principle

这套 Skill 的核心目标是：

> 不为每个顾问重新设计，而是让同一套品牌规则稳定复用。

后续新增视觉形式时，优先判断：

1. 是否只是现有模板的变体
2. 是否可以新增 reference
3. 是否确实需要增加新 Template

避免因为单次需求不断新增独立 Skill。
