---
name: qieman-insurance-design
layer: L2
extends:
  - qieman-ui-design
integrates_with:
  - qieman-business-content-design
description: >-
  Use this skill for 且慢/盈米保险产品 UI、保险 H5、保险产品介绍页、
  保险头图、保险场景插画、保险专业图标、保险顾问/家庭人物、保险信息可视化、
  保险设计稿优化或保险文案校对。This skill adds insurance-specific visual language,
  information expression, hero rules, icon/illustration/persona systems and insurance compliance.
icon_library:
  name: Remix Icon
  version: 4.6.0
  default_style: line
visual_defaults:
  primary_style: light-insurance-illustration
  primary_colors: ["#1B88EE", "#FFFFFF"]
  accent_colors: ["warm coral", "warm orange", "soft lavender"]
  mood: ["专业", "可信", "亲和", "克制", "通透", "安心"]
transition_default:
  mode: soft-gradient
validation_baseline:
  direction: 众民保百万医疗险2026_用户确认设计稿方向
version: V3 Insurance Visual Calibration
updated_at: 2026-09-11
---

# qieman-insurance-design

## 1. Positioning

`qieman-insurance-design` 是且慢保险业务的垂直设计 Skill。

它不负责重新定义整套页面基础 UI，也不负责取代 `qieman-business-content-design` 的页面编排规则；它主要负责保险业务专属的：

- 保险 Hero / KV 视觉语言
- 保险页面卡片密度与视觉节奏
- 保险专业 Icon / 插画 / 人物资产
- 医疗、保障、理赔、服务、FAQ 等模块的保险化表达
- 保险关键利益点与限制说明的视觉层级
- 保险内容保护与合规边界

### 1.1 分层关系

```text
qieman-ui-design
        ↓ 基础 UI / Token / Component
qieman-business-content-design
        ↓ 页面结构 / 内容锁定 / 承接 / Sticky CTA / Regression Guard
qieman-insurance-design
        ↓ 保险专项视觉 / 保险模块表达 / 人物与图标 / soft-gradient 具体表现
保险产品页 / 医疗险 / 重疾险 / 意外险 / 年金险 / 家庭保障页
```

**核心原则：**

> 主 Skill 管结构，保险 Skill 管“保险页面应该长什么样”。

---

## 2. Source Mode & Design Intent

当输入为 HTML / 原型 / PRD / 设计稿时，必须先判断任务模式。

### 2.1 requirement-only（默认）

适用于：
- “重新设计”
- “视觉重做”
- “不要沿用原型表现”
- “根据需求重新设计”

规则：

- 原型是 Requirement Source，不是 Visual Template。
- 保留业务内容、数据、模块关系与 CTA 动作。
- 不继承原 HTML 的卡片数量、DOM 视觉结构、Hero 形式、背景切分、图标摆位。
- 重新判断保险信息如何组织和表达。

### 2.2 visual-continuation

仅当用户明确说：
- 沿用当前样式
- 保持这个布局
- 基于现有设计优化
- 只改我指出的部分
- 不要改结构

规则：

- 当前已确认页面进入 Locked Layout / Locked Component。
- 只改用户指出的问题。
- 不为了“优化”重新设计整个长页。

### 2.3 与主 Skill 的一致性

若与 `qieman-business-content-design` 联合调用，Source Mode 以主 Skill 的判断为准。

---

## 3. Content Protection & Insurance Compliance

这是最高优先级。

### 3.1 严格锁定

若用户提供标准文案 / 产品材料，以下内容必须原样保护：

- 产品名称
- 承保公司
- 保额
- 保费
- 免赔额
- 报销比例
- 等待期
- 保障期限
- 投保年龄
- 医院范围
- 药品范围
- 健康告知
- 既往症规则
- 免责条款
- 续保条件
- 保障责任
- 理赔条件
- 疾病名称 / 数量
- 服务范围
- 风险说明
- 数据来源与时间口径
- 页面内原有 CTA 动作和文案

### 3.2 禁止行为

- 不增加用户未提供的保障责任。
- 不扩大承保范围。
- 不把“可能 / 符合条件可”改成“可以 / 一定”。
- 不把演示数据表达成保证结果。
- 不为了营销标题改变保险事实。
- 不隐藏免责、限制、风险说明。
- 不擅自新增 Hero CTA。
- 不因为存在 Sticky CTA 而删除产品卡 / 报价卡 / 权益卡已有 CTA。

---

## 4. Insurance Page Visual Language

用户已确认的保险页面方向：

### 4.1 页面基础气质

- 专业
- 安心
- 可信
- 亲和
- 清爽
- 通透
- 克制

### 4.2 页面底色与卡片

默认：

- 页面背景：极浅蓝 / 浅灰蓝，而不是纯白通篇。
- 正文卡片：白色。
- 白卡圆角：默认 `12–16px`。
- 阴影：轻，优先通过背景差异 + 间距建立层级。
- 不让每一张卡都有明显描边。
- 不使用厚重玻璃态作为正文常规组件。

### 4.3 标题与强调

正文标题：

- 主标题以 `#333333` / 深色为主。
- 关键利益点、风险重点、关键短语允许使用暖珊瑚 / 暖橙强调。
- 蓝色主要承担品牌、结构、Icon、链接和辅助信息。
- 不要整页所有 Section Title 都做成蓝色。

推荐：

```text
身体有异常，也能有医疗险选择
           ↑ 关键利益点可暖色强调
```

而不是整行全部蓝色。

### 4.4 暖色使用

暖橙 / 暖珊瑚适合：

- 关键金额
- 价格
- 折扣
- 重要利益点
- 需要用户注意的限制或提示
- 局部强调

默认不做大面积橙色铺底。

---

## 5. Hero / KV System

保险 Hero 必须兼顾：

**信息清晰 + 人物融合 + 左右平衡 + 保险语义 + 自然承接**

### 5.1 默认构图

优先：

```text
左：标题 / 卖点 / 标签
右：人物 / 家庭 / 保险场景 / 专业保险主视觉
```

规则：

- 左右分区明确。
- 文案与人物垂直重心接近。
- 人物不可过小。
- 不出现大面积无效留白。
- 文案不遮挡人物。
- 人物优先透明底资产。

### 5.2 Hero 视觉主体路由

家庭医疗 / 少儿：
- 一家三口 / 家庭人物
- 透明盾牌 / 对勾作为辅助

父母 / 长辈：
- 老年夫妻或单个长辈
- 健康、自然、安心，不病弱

精准人群 / 免健告：
- 单人 / 家庭 + 保单 / 医疗守护语义
- 不用恐惧、生病、痛苦视觉刺激

服务型：
- 顾问 / 医生 / 陪诊 / 服务陪伴场景

### 5.3 Hero CTA

Hero / KV **不得擅自新增 CTA**。

只有：
1. Requirement Source 明确存在 Hero CTA；
2. 用户明确要求；
3. 当前版本已确认 Hero CTA 为 Locked Component；

才允许出现。

---

## 6. Hero → Content Transition

默认：

```text
transition_mode = soft-gradient
```

最终页面结构由 `qieman-business-content-design` 决定，本 Skill 负责保险场景下的具体视觉表现。

### 6.1 soft-gradient 默认规则

- Hero 底部通过浅蓝 → 浅白 / 极浅灰蓝自然过渡。
- 过渡区建议约 `48–72px`。
- 第一张产品摘要卡可以轻压入过渡区。
- 不做营销页那种明显“大白卡切口”。
- 不出现脏灰色带、重边线、硬切。
- Hero 底部高权重人物 / 面部不得被首卡遮挡。

### 6.2 首卡关系

推荐：

```text
Hero
↓
柔和渐变
↓
产品摘要卡轻压接
↓
浅蓝页面底 + 白色内容卡
```

首卡是“被 Hero 托住”，不是“悬空浮在 Hero 上”。

### 6.3 Locked Transition

用户确认衔接样式后，后续局部迭代不得随机切换。

---

## 7. Product Summary Card

保险产品页首卡承担：

- 产品名称
- 承保公司
- 关键服务能力
- 核心卖点
- 价格 / 示例保费
- 家庭折扣 / 活动信息
- Requirement Source 中已有的产品卡 CTA

### 7.1 视觉规则

- 白卡。
- 圆角 `12–16px`。
- 信息密度可以高，但必须有清晰分组。
- 产品名称优先深色。
- 承保公司可使用暖珊瑚 / 暖色标签。
- 服务能力可使用低饱和浅青 / 浅蓝标签。
- 专业视觉 Icon 用于卖点，不要一行纯文字堆满。

### 7.2 产品卡 CTA

若 Requirement Source 已存在：

```text
价格 / 卖点
立即投保
```

则必须保留。

**产品卡 CTA 与 Sticky CTA 不冲突。**

- Product Card CTA = In-flow / Contextual CTA
- Sticky CTA = Persistent CTA

二者可以使用相同业务动作。

---

## 8. Long-page Module Rhythm

保险长页不能全页复制同一种“大白卡”。

### 8.1 必须允许多种表达方式

根据语义轮换：

- Icon + 文案列表
- 双栏 / 三栏信息
- 插画 + 说明
- 场景对比
- Step Flow
- 时间轴
- FAQ Accordion
- 保障摘要
- 服务能力
- 规则说明
- 蓝色提示块
- 暖色提示块
- 轻量信息插画

### 8.2 Anti-Homogeneity

禁止：

- 每个 Section 都是“标题 + 1张大白卡”。
- 每张卡都使用同样的 Icon + 标题 + 两行字。
- 连续多个模块完全同构。
- 所有内容都变成 2×2 宫格。
- 所有模块都塞插画。

### 8.3 页面节奏

默认：

- 同级卡片之间：`12–16px`
- 模块组之间：`24px`
- 一级标题与核心内容之间：约 `12px`

优先遵循 `qieman-business-content-design` 的间距系统。

---

## 9. Icon System

### 9.1 基础 UI Icon

统一使用 Remix Icon v4.6.0 或等价内嵌 SVG。

适用：

- 返回
- 展开
- FAQ
- 提示
- 电话
- 客服
- 文档
- 日历
- 箭头
- 表单操作

### 9.2 保险专业视觉 Icon

适用：

- 医疗垫付
- 重疾绿通
- 住院护工
- 就医陪诊
- 健康告知
- 院外特药
- 保单
- 理赔
- 保障责任
- 医疗场景

默认视觉：

- 蓝 + 少量暖橙
- 轻 3D / 半扁平
- 白底 / 透明底
- 正面或轻 3/4 视角
- 柔和渐变
- 轻软阴影
- 清晰、专业、移动端识别度高

### 9.3 Icon 数量控制

Icon 是信息识别工具，不是装饰。

- 核心卖点优先 Icon。
- 服务权益优先 Icon。
- 流程步骤可使用基础 Icon。
- 长段规则说明不强行配 Icon。
- 不在一屏堆过多 3D Icon。

---

## 10. Illustration System

### 10.1 轻量保险插画

默认：

- 蓝白主调
- 少量暖橙
- 半扁平 + 柔和渐变 / 轻 3D
- 白底或透明底
- 简洁
- 不厚重
- 不高饱和

### 10.2 医疗场景插画

适合：

- 住院
- 病床
- 院外药
- 就医
- 陪诊
- 医疗垫付
- 理赔流程

规则：

- 一个主场景
- 1–3 个辅助元素
- 不做复杂医院环境
- 不画病弱恐惧氛围

### 10.3 信息插画

适合：

- 多项保障关系
- 复杂保障结构
- 服务网络
- 理赔机制

中心主体可为：

- 保单
- 盾牌
- 医疗档案
- 家庭人物

外围最多 3–4 个信息节点。

---

## 11. Persona System

### 11.1 保险顾问

许安：
- 男，约 30 岁
- 蓝色西装
- 专业、温和、理性可靠

林知暖：
- 女，约 28 岁
- 蓝色职业装
- 知性、亲和、专业沉稳

定位：服务陪伴者，不是强销售。

### 11.2 家庭人物

Family-3：
- 年轻父母 + 1 名儿童

Multi-generation：
- 年轻父母 + 儿童 + 2 位老人
- 可根据业务扩展

Senior：
- 长辈 / 老年夫妻

人物要求：

- 健康
- 自然
- 亲和
- 轻互动
- 不病弱
- 不过度摆拍

---

## 12. Insurance Information Visualization

| 内容 | 默认表现 |
|---|---|
| 等待期 / 投保 / 理赔流程 | Step Flow / 时间轴 |
| 院内 vs 院外 | 双栏对比 |
| 保障责任差异 | 对比卡 / 对比表 |
| 过去 vs 现在 | 双场景插画 + 对比 |
| 3–4 个产品优势 | 信息卡 / 图标组 |
| 保额 / 免赔额 / 保费 | 大数字 + 关系图 |
| 年龄 / 保障期限 | 区间轴 |
| 保障组成 | 环图 / 分层结构 |
| 多阶段机制 | 时间线叙事 |
| 单一核心数据 | 数字卡 |

规则：

- 一图一义。
- 移动端优先。
- 不为了视觉而创造额外数据。
- 数据口径、来源、时间范围不得遗漏。

---

## 13. CTA Role System

保险页必须区分三类 CTA。

### 13.1 Hero CTA

- 默认不出现。
- 原需求有 → 保留。
- 原需求没有 → 不新增。

### 13.2 In-flow / Contextual CTA

例如：

- 产品卡「立即投保」
- 报价卡「查看方案」
- 权益卡「领取」
- 顾问卡「咨询顾问」

原需求已有 → 必须保留。

### 13.3 Sticky CTA

由 `qieman-business-content-design` 统一控制：

- 单一整行主按钮
- 50px 高
- 999px 胶囊圆角
- 17px / 25px / Regular
- `#1B88EE`

Sticky CTA 的存在，不允许成为删除正文 CTA 的理由。

---

## 14. Insurance Visual Avoidances

除非用户明确要求，否则避免：

- 满屏盾牌
- 满屏医疗十字
- 大量 3D Icon 堆积
- 低幼卡通
- 手绘线稿
- 高饱和糖果质感
- 强塑料玩具感
- 复杂医院背景
- 现金 / 金币作为保险主视觉
- K线 / 交易屏 / 上涨箭头
- 恐惧、病弱、痛苦人物
- 全页同一种卡片模板
- 深色重营销金融风

**优先表达具体保障场景，而不是抽象“保险感”。**

---

## 15. Output Rules

### 15.1 HTML / H5

- 移动优先。
- 320 / 360 / 375 / 390 / 414px 下保持稳定。
- 正文不可出现单字竖排式塌缩。
- 本地预览若要求稳定，Icon 优先内嵌 SVG。
- 页面内容不得因视觉实现被截断。

### 15.2 视觉资产

输出前先判断属于：

- UI Icon
- 保险专业 Icon
- 轻量保险插画
- 医疗场景插画
- 信息插画
- 人物主视觉

---

## 16. Final Audit Checklist

### 内容

- [ ] 产品名称是否一致？
- [ ] 关键数字是否一致？
- [ ] 保障责任是否一致？
- [ ] 风险、限制、免责是否完整？
- [ ] 原有 CTA 是否保留？

### Hero

- [ ] 左文右图是否清晰？
- [ ] 人物与背景是否融合？
- [ ] 是否自然过渡到正文？
- [ ] 是否避免擅自新增 Hero CTA？
- [ ] 人物是否避开过渡区与首卡遮挡？

### 正文视觉

- [ ] 页面是否为浅蓝底 + 白卡为主？
- [ ] 黑色标题 + 暖色关键强调是否合理？
- [ ] 是否避免整页 Section 标题全部蓝色？
- [ ] 是否避免全页同一种卡片模板？
- [ ] 是否根据内容关系使用多种模块表达？
- [ ] 同级卡片与模块组间距是否稳定？

### CTA

- [ ] 产品卡原有 CTA 是否保留？
- [ ] Sticky CTA 是否执行主 Skill 强约束？
- [ ] Hero 是否未擅自增加 CTA？
- [ ] In-flow CTA 与 Sticky CTA 是否职责清晰？

### Icon / Illustration

- [ ] 专业 Icon 是否统一？
- [ ] 是否控制 Icon 密度？
- [ ] 插画是否服务具体保险语义？
- [ ] 是否避免装饰性过度？

---

## 17. Recommended Invocation

### 联合主 Skill

```text
调用 qieman-business-content-design，
基于附件重新设计保险业务页面。
内容不变，视觉重做，不沿用原型表现。
保险专项视觉遵循 qieman-insurance-design。
输出完整移动端 HTML。
```

### 单独调用保险 Skill

```text
调用 qieman-insurance-design，
根据附件重新设计保险产品介绍页。
严格保护产品事实与业务内容，
重新设计保险视觉表达，输出移动端 HTML。
```

### 局部优化

```text
调用 qieman-insurance-design，
沿用当前已确认页面，
只优化我指出的保险视觉问题，其余保持不变。
```
