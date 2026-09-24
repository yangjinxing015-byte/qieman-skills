# qieman-marketing-visual-design｜VALIDATION

> 本文用于验证 `qieman-marketing-visual-design` 的通用性、成熟度与回归稳定性。  
> 它不是页面模板，也不定义 Foundation。

---

# 1. Validation Goal

验证目标不是“页面是否生成成功”，而是：

> **同一套规则能否在不同业务场景中稳定生成成熟、专业、主题明确且不模板化的视觉。**

正式冻结前必须同时验证：

- Foundation Compatibility
- Visual Foundation
- Visual Routing
- Hero / KV
- Asset Quality
- Transition
- Regression Lock

---

# 2. Fixed Scene Pool

每次重大版本至少验证 3 类；冻结 Stable 前覆盖全部 5 类。

## A. Marketing / Conversion

例如：

- 充值活动
- 节日活动
- 权益活动
- 新功能转化

重点：

- 营销感是否存在但不过度促销；
- Hero 是否成熟；
- 是否避免低幼物件拼贴；
- Hero → 首卡是否自然。

## B. Strategy / Product

例如：

- 策略介绍
- 固收增强
- 全球配置
- 红利 / 现金流

重点：

- 是否有策略主题；
- 是否只会生成抽象点线面；
- Landscape Illustration 等路线能否正确触发；
- 是否稳重、专业、金融可信。

## C. Advisor / Service

重点：

- 信赖感；
- 服务关系；
- 人物是否成熟；
- 是否避免广告感过重。

## D. Insurance

重点：

- Marketing Visual 与 Insurance Domain 是否职责清楚；
- 人物 / 家庭 / 医疗语义是否专业亲和；
- 是否避免通用金融模板；
- `soft-gradient` 是否自然。

## E. Content / Report / Education

重点：

- 内容优先；
- 信息密度；
- 插图是否辅助理解；
- 是否避免强行 Hero 化；
- `flat-spacing` 是否成立。

---

# 3. Foundation Compatibility Test

检查：

- [ ] 未重新定义 Foundation Token 真源
- [ ] 未覆盖 UI Component 基础行为
- [ ] 未覆盖品牌基础规则
- [ ] 未覆盖金融合规
- [ ] Domain Skill 规则得到保留

失败：

> **Foundation Conflict Failed**

---

# 4. Visual Foundation Test

## 4.1 Hierarchy

- [ ] 第一视觉中心明确
- [ ] 标题 / 核心利益高于装饰
- [ ] 辅助元素降权

## 4.2 Proportion

- [ ] Hero 高度与信息量匹配
- [ ] 图文比例稳定
- [ ] 主视觉不挤压文字
- [ ] 首卡比例自然

## 4.3 Density

- [ ] 没有纯填空元素
- [ ] 没有 Icon collage
- [ ] 删除冗余元素后不会更好

## 4.4 Color Depth

- [ ] 有主色域与明度层次
- [ ] 强调色克制
- [ ] 不多色抢权重

## 4.5 Material

- [ ] 主视觉材质语言统一
- [ ] 不像多个素材库拼接

## 4.6 Lighting

- [ ] 光源逻辑统一
- [ ] 无过度 Glow
- [ ] 背景光效不干扰文字

## 4.7 Detail Quality

- [ ] 细节在移动端仍有价值
- [ ] 边缘、阴影、透明边界干净

## 4.8 Restraint

- [ ] 没有为了“设计感”堆装饰
- [ ] 简化没有降低完成度

---

# 4.9 Visual Maturity Blocking Test

这一项是阻断项，不是建议项。

每个案例必须先标注：

```text
Scene Type:
Atmosphere Strength: Low–Medium / Medium / Medium–High
Primary Visual Weight Source:
```

检查：

- [ ] 第一眼存在明确主题氛围
- [ ] Hero 视觉重量不低于首卡
- [ ] 主色域不发灰、不发虚
- [ ] 浅色方案有主体 / 空间 / 对比 / 材质补偿
- [ ] 不存在“浅底 + 小图 + 大空白 + 弱焦点”
- [ ] 标题、主视觉、利益点进入顺序清楚
- [ ] 375px 下主视觉仍然成立，不退化成 Icon
- [ ] 页面简洁但不显得未完成
- [ ] Marketing / Conversion 场景不应像普通内容页
- [ ] 视觉成熟度不依赖堆元素获得

以下任一情况直接 Fail：

```text
结构正确，但视觉明显偏弱
Hero 比首卡更轻
整体色调过浅且无视觉锚点
主视觉像小装饰而不是 KV
用户已确认成熟参考，但新版本明显降级
```

失败：

> **Visual Maturity Failed**

---

# 5. Visual Routing Test

每个案例必须记录：

```text
Primary Route:
Why:
Rejected Routes:
Why Rejected:
```

检查：

- [ ] 路线来自业务语义而不是页面类型机械匹配
- [ ] Abstract Financial 没有成为无脑默认项
- [ ] Strategy 场景能选择 Landscape / Data-led 等不同路线
- [ ] Route 不会把不同业务都做成同一视觉

失败：

> **Visual Routing Failed**

---

# 6. Hero Maturity Test

Hero 是高优先级专项。

即使正文通过，只要 Hero 明显低幼 / 粗糙 / 像功能 Icon，整页仍为 Fail。

必须检查：

- [ ] Theme 清楚
- [ ] Hero Quality Floor 通过
- [ ] Background Complexity 受控
- [ ] Text Safe Area 稳定
- [ ] 主视觉有明确中心
- [ ] 不存在 Sticker / Toy / Candy 感
- [ ] 不存在功能 Icon 放大承担品牌 Hero
- [ ] 不存在“简洁化导致资产质量回退”
- [ ] 不存在“过浅背景 + 小图 + 弱焦点”
- [ ] Hero 视觉重量不低于首卡
- [ ] 当前场景氛围强度达标

失败：

> **Hero Maturity Failed**

---

# 7. Landscape Illustration Test

当路由选择 Landscape Illustration 时：

- [ ] 风景不是旅游海报
- [ ] 场景足够简洁
- [ ] 山 / 路 / 晨光等有明确语义作用
- [ ] 没有儿童绘本感
- [ ] 没有复杂无关细节
- [ ] 保留金融品牌克制感
- [ ] 文字区有足够安全空间

失败：

> **Landscape Maturity Failed**

---

# 8. Asset Quality Test

## HTML / CSS / SVG

适合低权重背景、结构与图示。

检查：

- [ ] 没有用简单 SVG 冒充需要高质量资产的 Hero
- [ ] SVG 不是“Icon 放大”

## Independent Asset

检查：

- [ ] 资产无页面主标题
- [ ] 边缘融合自然
- [ ] 裁切正确
- [ ] 透视正确
- [ ] 缩放后仍然成熟

失败：

> **Asset Quality Failed**

---

# 9. Transition Test

检查：

- [ ] Background Continuity
- [ ] Transition Zone 长度合理
- [ ] Text Protection
- [ ] Asset Edge Blending
- [ ] First Surface Relationship

### overlay-card

- [ ] 首卡只轻度承接
- [ ] 不形成深度悬浮

### soft-gradient

- [ ] 不形成长雾区
- [ ] 色域连续

### flat-spacing

- [ ] 无需强行加渐变 / overlap

失败：

> **Hero Handoff Failed**

---

# 10. Anti-pattern Regression

每次版本必须主动找以下回归：

- [ ] 蓝紫渐变 + 圆球 + 轨迹泛化
- [ ] 点线面成为所有策略页默认答案
- [ ] 时钟 / 日历 / 金币等 Icon 拼贴
- [ ] Q 版 / 贴纸 / 玩具感
- [ ] 过多光效
- [ ] Hero 过高、空白过大
- [ ] 主视觉缩小后退化为装饰 Icon
- [ ] 修 Transition 导致 Hero 退化
- [ ] 修 Hero 导致正文结构变化

---

# 11. Regression Lock

记录每个已确认案例的 Locked Items：

```text
Case:
Locked Hero:
Locked Proportion:
Locked Transition:
Locked Asset Quality:
Locked Content / Framework:
```

后续局部修改不得破坏这些确认项。

失败：

> **Regression Lock Failed**

---

# 12. Pass / Weak / Fail

## Pass

- 路线正确；
- 主题明确；
- Hero 成熟；
- 资产质量合格；
- 页面不模板化；
- 无明显回归。

## Weak

- 业务正确；
- 基础视觉可用；
- 但路线泛化、比例、材质或视觉完成度仍偏普通。

## Fail

以下任一严重问题：

- Foundation 冲突；
- 业务框架被改变；
- Hero 低幼；
- 功能 Icon 充当品牌 Hero；
- 视觉路线与主题无关；
- 修复一个问题制造明显回归；
- 已确认视觉资产质量下降。

---

# 13. Validation Record Template

```text
Case:
Scene Type:
Primary Route:
Domain Skill:

Foundation Compatibility: Pass / Weak / Fail
Hierarchy: Pass / Weak / Fail
Proportion: Pass / Weak / Fail
Density: Pass / Weak / Fail
Color Depth: Pass / Weak / Fail
Material: Pass / Weak / Fail
Lighting: Pass / Weak / Fail
Detail Quality: Pass / Weak / Fail
Restraint: Pass / Weak / Fail
Hero Maturity: Pass / Weak / Fail
Asset Quality: Pass / Weak / Fail
Transition: Pass / Weak / Fail
Regression: Pass / Weak / Fail

Observed Issue:
Issue Owner:
Local Fix:
Locked Items:
Next Test:
```

---

# 14. Stable Freeze Conditions

只有同时满足以下条件，才能从 `candidate / validation` 升级为 Stable：

- [ ] 5 类场景全部验证
- [ ] 至少连续 3 个不同业务案例无严重视觉回归
- [ ] Abstract Financial 不再泛化为默认 Hero
- [ ] Landscape Illustration 路由验证通过
- [ ] Hero 简化不会导致资产质量下降
- [ ] Transition 修复不会破坏 Hero
- [ ] Domain Skill 与 Marketing Visual 无职责冲突
- [ ] 同一规则不会把不同业务做成同一种视觉

核心冻结标准：

> **减少冗余，不降低完成度。**

> **增强营销感，不牺牲专业感。**

> **视觉重建，不破坏业务框架。**

> **局部修复，不制造回归。**

> **固定判断标准，不固定视觉模板。**
