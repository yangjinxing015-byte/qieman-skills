# qieman-insurance-design

且慢 / 盈米保险垂直设计 Skill，属于 `marketing-design` 下的 **L2 业务垂类能力**。

## 定位

本 Skill 不再独立维护通用 H5 / UI 规则，而是建立在 `qieman-business-content-design` 之上，只保留保险业务特有能力。

```text
qieman-brand-guidelines
        ↓
qieman-ui-design
        ↓
qieman-business-content-design
        ↓
qieman-insurance-design
```

## 适用场景

- 保险首页
- 保险产品介绍页 / 详情页 / H5
- 医疗险、重疾险、意外险、寿险、年金险、家庭保障
- 保险 Hero
- 保险专业 Icon / 插画 / 顾问与家庭人物
- 保险保障责任、等待期、免赔额、报销比例、投保 / 理赔流程可视化
- 保险设计稿优化与保险内容核对

## 不负责的通用规则

以下能力统一继承 `qieman-business-content-design`：

- 通用业务内容页框架
- 品牌 / UI Token
- Typography / Spacing / Radius / Shadow
- 基础 Button / Card / Tag / Input
- 同层级 KPI 等权展示
- 通用图表与数据卡
- 原型结构保护
- 固定吸底 CTA
- HTML / Responsive 基础规范

因此，本 Skill 中不应重新定义第二套基础 UI / H5 设计系统。

## 保险专属能力

- 险种信息优先级与内容路由
- 保险 Hero 构图与人物融合
- 保险专业 Icon / 插画体系
- 保险顾问、家庭、长辈人物资产
- 保障责任与保险规则信息可视化
- 保险产品事实、限制、免责、风险说明保护
- 保险专项设计验收

## 当前基础验证标准

以 **众民保百万医疗险2026｜保险Skill验证版 V8（内嵌Icon）** 为保险视觉验证参考之一。

已确认的保险专项规则包括：
- Hero 默认左文右图、垂直居中、视觉重量平衡
- 人物优先透明底，与背景自然融合
- Hero 与正文自然过渡
- 基础 UI Icon 与保险专业视觉 Icon 分层
- 保险专业图标保持统一尺寸、朝向、风格与光影
- 不为视觉优化修改保险事实

## 调用示例

```text
调用 qieman-insurance-design，根据以下保险产品原型重新设计 App/H5 产品介绍页。
保持原业务结构、产品事实与标准文案，不照搬原型视觉。
通用业务内容页规则继承 qieman-business-content-design；保险专属 Hero、保障信息、Icon、插画与人物规则使用 qieman-insurance-design。
输出高保真 HTML。
```

## 维护原则

新增规则前先判断：

- 如果适用于所有业务内容页 → 更新 `qieman-business-content-design`
- 如果只适用于保险 → 更新 `qieman-insurance-design`
- 如果属于基础 UI / 品牌 Token → 更新对应基础 Skill

**目标：保险 Skill 只保留“保险为什么特殊”。**
