# marketing-design

且慢 Design Skills 体系中的 **Marketing Design 应用线**。

它与 `app-design`、`report-design` 平级，统一继承上游 `foundation`，但不修改 Foundation。

---

## 架构定位

```text
Foundation（共享基础层）
├── qieman-brand-guidelines
├── qieman-design-token-system
├── qieman-ui-design-system
└── qieman-financial-compliance-guidelines
        ↓
Marketing Design（本应用线）
├── Core / 通用能力
│   ├── qieman-business-content-design
│   └── qieman-marketing-visual-design
└── Domain / 专项能力
    ├── qieman-insurance-design
    ├── qieman-vip-design
    ├── qieman-vip-advisor-visual-design
    └── qieman-ip-visual-design
```

核心原则：

> **Foundation 定规则，Marketing Design 继承基础规则并补充营销与业务页面能力。**

> **本应用线不反向修改 Foundation。**

---

## Core / 通用能力

### `qieman-business-content-design`

定位：**Business Content Orchestrator｜业务内容页母 Skill / 最终编排层**

负责：

- Requirement Source
- Content Lock
- Framework Contract
- 模块数量 / 顺序
- 业务关系
- 页面 IA
- CTA / Interaction
- 最终 HTML

### `qieman-marketing-visual-design`

定位：**Visual Capability Layer｜营销视觉能力层**

负责：

- Visual Foundation
- Visual Routing
- Hero / KV
- Illustration / Asset Direction
- Composition
- Material / Lighting / Color Depth
- Hero → Content Transition
- Visual Maturity
- Regression Lock

二者不是互相替代关系：

```text
业务内容与框架
↓
qieman-business-content-design
↓
qieman-marketing-visual-design 提供视觉能力
↓
最终 HTML
```

---

## Domain / 专项能力

### `qieman-insurance-design`

保险专项：家庭、医疗、保障、保险人物与保险语境。

### `qieman-vip-design`

高净值专项：私享、稀缺、高净值私域、朋友圈特殊规格，以及私募专区、高净值产品与服务页面。

### `qieman-vip-advisor-visual-design`

VIP 顾问视觉专项：高净值顾问运营、私域传播、顾问营销物料及标准化顾问视觉资产。

职责边界：

- `qieman-vip-design`：私募专区、高净值产品、高客服务页面及 VIP 业务页面表达；
- `qieman-vip-advisor-visual-design`：VIP 顾问名片、人物卡、顾问介绍海报、理财规划师人物物料及批量顾问视觉资产。

`qieman-vip-advisor-visual-design` 作为独立 Domain Skill 使用，不与 `qieman-vip-design` 合并。

### `qieman-ip-visual-design`

IP 专项：小顾 IP 比例、动作、资产与视觉使用规则。

Domain Skill 只补充垂类差异，不重复定义 Foundation。

---

## Domain Routing｜专项路由

```text
保险产品 / 医疗 / 家庭保障 / 理赔服务
→ qieman-insurance-design

私募专区 / 高净值产品 / 高客服务页面
→ qieman-vip-design

VIP 顾问运营 / 高客私域传播 / 顾问营销物料
→ qieman-vip-advisor-visual-design

小顾 IP / IP 场景 / IP 资产视觉
→ qieman-ip-visual-design
```

如果一个业务页面同时需要通用页面编排与专项视觉，则由 `qieman-business-content-design` 锁定业务框架，`qieman-marketing-visual-design` 提供通用视觉成熟度，再按需叠加对应 Domain Skill。

---

## 页面执行关系

```text
业务需求 / HTML / PRD / 原型
        ↓
qieman-business-content-design
        ↓
继承 Foundation
        ↓
qieman-marketing-visual-design
        +
需要的 Domain Skill
        ↓
Final HTML / H5
```

说明：

- `business-content-design` 锁定业务与最终编排；
- `marketing-visual-design` 决定视觉成熟度与视觉路线；
- Domain Skill 决定专项语境；
- Foundation 是共同底座，不在本目录内重建。

---

## 当前目录

```text
marketing-design/
├── README.md
├── qieman-business-content-design/
├── qieman-marketing-visual-design/
├── qieman-insurance-design/
├── qieman-vip-design/
├── qieman-vip-advisor-visual-design/
└── qieman-ip-visual-design/
```

---

## 维护边界

### 可以在本应用线持续迭代

- Business Content 页面能力
- Marketing Visual
- 保险专项
- VIP 专项
- VIP 顾问视觉专项
- IP 专项

### 不应在本应用线修改

- Foundation 真源
- App Design 的组件与交互规则
- Report Design 的报告专项规则

如发现 Foundation 问题，应单独反馈其维护者，不在 Marketing Skill 中覆盖。
