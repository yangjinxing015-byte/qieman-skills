# qieman-marketing-visual-design

且慢业务页面的视觉总控 Skill。

## 定位

`qieman-marketing-visual-design` 负责决定页面是否具备成熟、专业、克制、可上线的视觉完成度。

主要负责：

- KV / Hero 视觉方向
- 页面整体视觉气质
- 主视觉成熟度
- 色彩、材质、光影、比例
- Hero → 正文承接
- 营销氛围与品牌完成度
- 视觉减法与冗余控制
- Regression Lock / 防回归

不负责：

- 改业务文案
- 改模块顺序
- 改业务逻辑
- 改 CTA 逻辑
- 改风险提示
- 改数据真实性

这些由 `qieman-business-content-design` 等上游 / 主 Skill 负责。

---

## 文件结构

```text
qieman-marketing-visual-design/
├── SKILL.md
├── VALIDATION.md
└── README.md
```

### SKILL.md

AI 在正式生成页面时必须执行的视觉规则。

包括：

- Visual Craft & Refinement
- Hero / KV
- Theme First
- Typography
- Hero Asset Quality
- Density / Material / Lighting / Color
- Hero Handoff & Transition
- Regression Lock
- Whole-page Visual Consistency

### VALIDATION.md

用于反复验证和迭代此 Skill。

包括：

- 固定验证场景池
- Pass / Weak / Fail 验收方式
- 常见失败模式
- Hero / Transition 专项检查
- 问题归属判断
- Stable 冻结条件

> `VALIDATION.md` 是验证规范，不是页面模板。

### README.md

用于快速理解 Skill 定位、文件职责和使用关系。

---

## 与其他 Skill 的关系

```text
业务 HTML / PRD / 原型
↓
qieman-business-content-design
  - 锁内容
  - 锁框架
  - 锁模块顺序 / CTA / 风险提示
↓
qieman-marketing-visual-design
  - 定义视觉主题
  - KV / Hero
  - 视觉成熟度
  - 色彩 / 材质 / 光影 / 比例
  - Transition / Handoff
↓
qieman-chart-design / 垂类 Skill
↓
最终 HTML
↓
qieman-design-content-audit
```

---

## 核心原则

> 固定的是设计判断标准，不是视觉模板。

> 减少冗余，不降低完成度。

> 增强营销感，不牺牲专业感。

> 视觉重建，不破坏业务框架。

> 局部修复，不制造回归。
