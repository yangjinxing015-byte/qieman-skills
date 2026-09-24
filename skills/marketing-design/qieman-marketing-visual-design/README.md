# qieman-marketing-visual-design

且慢 `marketing-design` 应用线的视觉成熟度与营销视觉能力 Skill。

当前版本：**V1.13 Visual Maturity Gate**  
状态：**Candidate / Validation**

---

## 定位

它不是 Foundation，也不是完整业务页面母 Skill。

```text
Foundation
  ↓
qieman-business-content-design
  ↓
qieman-marketing-visual-design
  + Domain Skills
  ↓
Final HTML
```

### 负责

- Visual Foundation
- Visual Routing
- Hero / KV
- Illustration / Asset Direction
- Composition
- Material / Lighting / Color Depth
- Visual Density
- Hero → Content Transition
- Anti-Childish / Anti-AI Draft
- Regression Lock

### 不负责

- 改业务文案
- 改真实数据
- 改模块顺序
- 改 CTA 行为
- 重定义 Foundation Token / UI Component
- 改金融合规规则

---

## Foundation 关系

本 Skill 单向继承：

```text
qieman-brand-guidelines
qieman-design-token-system
qieman-ui-design-system
qieman-financial-compliance-guidelines
```

原则：

> **继承 Foundation，不修改 Foundation。**

---

## 文件结构

```text
qieman-marketing-visual-design/
├── SKILL.md
├── VALIDATION.md
└── README.md
```

### `SKILL.md`

正式执行规则。

内部结构：

```text
Foundation Inheritance
→ Responsibility Boundary
→ Source of Truth
→ Visual Foundation
→ Visual Routing
→ Hero / KV
→ Illustration & Asset
→ Composition
→ Color / Material / Lighting
→ Hero → Content Handoff
→ Anti-pattern
→ Regression Lock
→ Domain Handoff
→ HTML Contract
→ Final QA
```

### `VALIDATION.md`

用于持续回归验证，不是模板。

重点验证：

- Foundation Compatibility
- Visual Routing
- Hero Maturity
- Landscape Illustration
- Asset Quality
- Transition
- Regression Lock

---

## V1.13 重点变化


### 0. 重新约束 Visual Maturity

V1.13 不改变 Visual Routing 架构，重点把“成熟度”从软判断升级为 **Blocking Gate**。

新增：

- Theme Presence
- Visual Weight
- Color Atmosphere
- Focus & Contrast
- Spatial Depth
- Craft Quality
- Page Continuity
- Mobile Presence
- Atmosphere Strength by Scene
- Anti-Weak Hero

重点解决：

> **结构正确、内容完整，但 Hero 太浅、太弱、像普通内容页或 AI 初稿。**

同时明确：

> **Clean ≠ Mature。浅色方案可以成立，但必须用主体、层次、对比或材质补足视觉重量。**

### 1. 不再继续堆 Gate

旧版本大量规则按迭代时间追加，存在职责重复和查找成本。

V1.12 改为按设计决策流程组织。

### 2. 增加 Visual Routing

正式支持：

```text
Abstract Financial
Landscape Illustration
Human / Service
Data-led Visual
Product / Object
IP-led Visual
```

其中：

> **Abstract Financial 不再作为金融页面默认 Hero。**

### 3. 增加 Landscape Illustration

策略、长期投资、稳健、陪伴、进阶等语义，可以使用成熟简洁的：

- 高山
- 山脊
- 攀登
- 路径
- 晨光
- 云层
- 湖面
- 远景
- 地平线

但不把这些元素固化成策略页模板。

### 4. Foundation Compatibility Contract

明确：

- 不复制 Foundation；
- 不覆盖 Foundation；
- 不修改 Foundation；
- 只补充 Marketing Visual 能力。

### 5. Hero 成熟度继续保持高优先级

核心：

> **减少元素数量，不减少视觉完成度。**

> **Visual Simplification ≠ Asset Quality Reduction.**

> **功能 Icon 不承担品牌级 Hero。**

---

## 当前验证状态

V1.13 暂不标记 Stable。

建议继续用以下类型回归：

1. 活动营销页
2. 策略介绍页
3. 保险产品页
4. 顾问 / 服务页
5. 内容 / 报告页

全部稳定后再冻结。
