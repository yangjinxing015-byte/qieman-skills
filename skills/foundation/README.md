# foundation · 且慢设计基础层

> **包定位**：且慢 Design Skills 体系的 **Foundation 基础层**，为上层 App / H5 / 报告 / 营销等场景 Skill 提供统一的品牌、Token、组件与金融合规规范。  
> **约定**：文件夹名 = 各目录 `SKILL.md` 的 `name` 字段。

---

## 分层架构

Foundation 由 **视觉基座（三层）** 与 **合规横切层** 构成：

```text
┌─────────────────────────────────────────────────────────────┐
│  qieman-financial-compliance-guidelines  （合规横切层）      │
│  收益展示 · 风险披露 · 营销合规 · 私募 · AI 投顾 · 禁用词    │
└───────────────────────────┬─────────────────────────────────┘
                            │ 叠加于所有金融产出
                            ▼
qieman-brand-guidelines          品牌基座（What feels like Qieman）
        ↓
qieman-design-token-system       变量基座（How values are named & mapped）
        ↓
qieman-ui-design-system          组件基座（How components look & behave）
        ↓
上层场景 Skill（app-ui / popup / h5 / report / chart …）
```

| 层级 | `name` | 职责 | 典型问题 |
|------|--------|------|----------|
| **L-F0 品牌** | `qieman-brand-guidelines` | 品牌定位、视觉语言、色彩/字体/摄影/插画/文案调性、禁用风格 | 「这个方案像不像且慢？」 |
| **L-F1 Token** | `qieman-design-token-system` | 色阶、语义色、间距、圆角、阴影、组件 Token、Light/Dark 主题 | 「变量怎么命名？CSS 怎么映射？」 |
| **L-F2 组件** | `qieman-ui-design-system` | Button / Card / Form / Nav / Feedback / 交易 / AI 组件及无障碍 | 「按钮有几种状态？弹窗怎么组合？」 |
| **L-F× 合规** | `qieman-financial-compliance-guidelines` | 收益展示、风险披露、营销合规、私募规则、AI 投顾、禁用词 | 「这句文案能不能用？风险提示放哪？」 |

> **合规层** 不替代法务审核，作为设计与文案生成的前置校验；凡涉及收益、交易、投顾、营销、AI 建议的产出，**必须叠加**本 Skill。

---

## Skill 清单

| `name` | 路径 | 规范入口 | references 数 | assets 类型 |
|--------|------|----------|---------------|-------------|
| `qieman-brand-guidelines` | `qieman-brand-guidelines/` | `SKILL.md` | 8 | logo SVG |
| `qieman-design-token-system` | `qieman-design-token-system/` | `SKILL.md` | 7 | CSS / JSON / HTML 示例 |
| `qieman-ui-design-system` | `qieman-ui-design-system/` | `SKILL.md` | 11 | Figma 索引 / 组件样例 / 原型 |
| `qieman-financial-compliance-guidelines` | `qieman-financial-compliance-guidelines/` | `SKILL.md` | 7 | 合规正反例 / 示例索引 |

---

## 调用路由（Agent 必读）

按用户意图 **自下而上叠加**；品牌与 Token 冲突时，以语义 Token 为准；组件几何与状态以 UI Design System 为准；**金融内容必须叠加合规层**。

### 1. 品牌方向 / 风格审查 → `qieman-brand-guidelines`

**触发词：**

- 且慢品牌、品牌调性、品牌定位、视觉方向
- 是否像且慢、品牌审查、禁用风格
- 摄影风格、插画风格、文案语气、Tone of Voice
- Logo 使用、品牌色、品牌字体

```bash
npx openskills read qieman-brand-guidelines
```

### 2. Design Token / 变量体系 → `qieman-brand-guidelines` + `qieman-design-token-system`

**触发词：**

- 设计 Token、Figma Variables、CSS Variables
- 语义色、色阶、间距变量、圆角变量
- Light / Dark 主题、Token 命名、JSON Token
- `--qdm-*` 变量映射

```bash
npx openskills read qieman-brand-guidelines
npx openskills read qieman-design-token-system
```

### 3. 组件规范 / UI 体系 → 品牌 + Token + 组件

**触发词：**

- UI 组件规范、设计系统、Button / Card / Form / Toast / Popup
- 导航栏、Tab、底部弹层、交易组件、AI 组件
- 无障碍、Remix Icon、组件状态
- Figma 组件库梳理

```bash
npx openskills read qieman-brand-guidelines
npx openskills read qieman-design-token-system
npx openskills read qieman-ui-design-system
```

### 4. 金融合规 / 文案审查 → `qieman-financial-compliance-guidelines`（+ 场景 Skill）

**触发词：**

- 金融合规、合规审查、风险披露、禁用词
- 收益展示、业绩排名、回撤、年化、历史表现
- 买入 / 卖出 / 调仓 / 定投、交易流程文案
- 基金介绍、投顾策略、账户诊断、财富报告
- 私募、高净值、300 万+、专属圈层
- AI 小顾、AI 投顾、AI 投资建议
- 营销 H5、海报、Banner、私域文案

```bash
npx openskills read qieman-financial-compliance-guidelines
```

**按场景叠加 references：**

| 场景 | 必读 references |
|------|-----------------|
| 营销物料 / H5 / 海报 | `marketing-compliance.md` + `risk-disclosure.md` + `forbidden-words.md` |
| 收益 / 业绩 / 图表 | `performance-display.md` + `risk-disclosure.md` + `forbidden-words.md` |
| 投资建议 / 投顾话术 | `investment-expression.md` + `risk-disclosure.md` |
| AI 投资助手 | 上述 + `ai-investment-guidelines.md` |
| 高净值 / 私募 | `private-fund-rules.md` + `marketing-compliance.md` + `risk-disclosure.md` + `forbidden-words.md` |

### 5. 完整金融 UI 产出 → 视觉基座 + 合规

```bash
npx openskills read qieman-brand-guidelines
npx openskills read qieman-design-token-system
npx openskills read qieman-ui-design-system
npx openskills read qieman-financial-compliance-guidelines
```

### 6. 与 `qieman-skills/` 生产包的关系

| Foundation（本包） | 生产包 `qieman-skills/` | 关系 |
|--------------------|-------------------------|------|
| `qieman-brand-guidelines` | — | 品牌真源；L0 `qieman-ui-design` 内嵌精简 token |
| `qieman-design-token-system` | `qieman-ui-design` (L0) | Token 全量版 vs L0 执行型 YAML token |
| `qieman-ui-design-system` | `qieman-sell-popup-design` 等 | 组件全量版 vs 场景 L1/L2 扩展 |
| `qieman-financial-compliance-guidelines` | 全部生产 Skill | 合规横切；生成金融 HTML / H5 / 报告时必须叠加 |

生成 **可运行 HTML 原型** 时，优先读生产包 `qieman-skills/app-design/qieman-ui-design`，**并叠加合规层**；做 **设计系统建设、Token 重构、品牌审计** 时，优先读本 foundation 包。

---

## 目录结构

```text
foundation/
├── README.md                                    ← 本文件
├── qieman-brand-guidelines/
│   ├── SKILL.md
│   ├── README.md
│   ├── references/
│   │   ├── brand-personality.md                 品牌人格
│   │   ├── visual-language.md                   视觉语言
│   │   ├── color-system.md                      色彩系统
│   │   ├── typography.md                        字体规范
│   │   ├── photography-style.md                 摄影风格
│   │   ├── illustration-style.md                插画风格
│   │   ├── tone-of-voice.md                     文案语气
│   │   └── forbidden-style.md                   禁用风格
│   └── assets/logo/                             且慢 / 盈米 Logo SVG
├── qieman-design-token-system/
│   ├── SKILL.md
│   ├── README.md
│   ├── references/
│   │   ├── color-token.md
│   │   ├── typography-token.md
│   │   ├── spacing-token.md
│   │   ├── radius-token.md
│   │   ├── shadow-token.md
│   │   ├── component-token.md
│   │   └── theme-token.md
│   └── assets/
│       ├── json-token/                          标准化 / 原始 JSON
│       ├── css-variable/                        Light + Dark CSS
│       ├── figma-variable/                      Figma 导入指南
│       └── example/                             Token 使用示例
├── qieman-ui-design-system/
│   ├── SKILL.md
│   ├── README.md
│   ├── references/
│   │   ├── component-principles.md              组件原则
│   │   ├── button-system.md                     按钮体系
│   │   ├── card-system.md                       卡片体系
│   │   ├── form-system.md                       表单体系
│   │   ├── navigation-system.md                 导航系统
│   │   ├── feedback-system.md                   反馈组件
│   │   ├── transaction-components.md            交易组件
│   │   ├── ai-components.md                     AI 组件
│   │   ├── icon-library.md                      Remix Icon 规范
│   │   ├── accessibility.md                     无障碍
│   │   └── token-mapping-summary.md             Token 映射摘要
│   └── assets/
│       ├── figma-library/                       Figma 组件库索引
│       ├── component-example/                   组件 HTML 样例
│       ├── icon-library/                        图标资源索引
│       └── prototype/                           交互原型
└── qieman-financial-compliance-guidelines/
    ├── SKILL.md
    ├── README.md
    ├── references/
    │   ├── marketing-compliance.md              营销合规规范
    │   ├── investment-expression.md             投资话术规范
    │   ├── risk-disclosure.md                   风险披露规范
    │   ├── performance-display.md               收益展示规范
    │   ├── private-fund-rules.md                私募基金合规规则
    │   ├── ai-investment-guidelines.md          AI 投顾使用指引
    │   └── forbidden-words.md                   禁用词汇清单
    └── assets/
        ├── compliance-example/                  合规示例索引
        ├── good-case/                           合规文案正例
        └── bad-case/                            合规文案反例
```

---

## 各 Skill 说明

### qieman-brand-guidelines

**一句话定位：** 定义「什么是且慢」，保证 AI 生成内容、设计方案、页面体验保持统一品牌感。

**品牌关键词：** 专业可信 · 温和克制 · 长期陪伴 · 买方投顾 · 安放财富

**主色基准：** `#1B88EE`（品牌蓝）

**核心原则：**

1. 不刺激交易 — 避免 FOMO、紧迫话术
2. 让金融易懂 — 结论先行、口径清晰
3. 克制表达专业 — 不靠厚重视觉堆砌
4. 温暖但不低幼 — 严肃金融场景拒绝 Cartoon 化

**输出物：** 品牌审查清单、视觉方向约束、文案语气规范、禁用元素列表

→ 详见 [`qieman-brand-guidelines/README.md`](qieman-brand-guidelines/README.md)

---

### qieman-design-token-system

**一句话定位：** 把品牌与 UI 决策沉淀为可复用的 Design Token，支撑 App / H5 / Web / AI / 营销 / PPT / 报告跨端一致。

**Token 架构：**

```text
Primitive Token（色阶.json）
    ↓
Semantic Token（色彩.json）
    ↓
Component Token
    ↓
Scene / Product UI
```

**数据来源（Figma Variables 导出）：**

| 源文件 | 路径 | 作用 |
|--------|------|------|
| `色阶.json` | `assets/json-token/raw/` | 基础色阶，含 Light / Dark |
| `色彩 .json` | `assets/json-token/raw/` | 语义色：文字、背景、边框、状态、图表 |
| `单元 .json` | `assets/json-token/raw/` | 圆角、间距、行高 |

**生成资产：**

| 文件 | 说明 |
|------|------|
| `qieman-design-tokens.normalized.json` | 标准化 Token JSON |
| `qieman-tokens.css` | Light + Dark 双主题 CSS Variables |
| `qieman-tokens-light.css` / `-dark.css` | 单主题 CSS |
| `app-ui-token-example.html` | App UI Token 使用示例 |

**CSS 变量前缀：**

| 前缀 | 含义 |
|------|------|
| `--qdm-scale-*` | Primitive 色阶 |
| `--qdm-color-*` | 语义色 |
| `--qdm-unit-*` | 间距 / 圆角 / 行高 |
| `--qdm-shadow-*` | 阴影 |
| `--qdm-component-*` | 组件 Token |

→ 详见 [`qieman-design-token-system/README.md`](qieman-design-token-system/README.md)

---

### qieman-ui-design-system

**一句话定位：** 沉淀且慢产品 UI 组件规范 — 组件长什么样、何时使用、状态如何变化、如何组合成页面。

**覆盖组件域：**

| 域 | reference 文件 |
|----|----------------|
| 原则 | `component-principles.md` |
| 按钮 | `button-system.md` |
| 卡片 | `card-system.md` |
| 表单 | `form-system.md` |
| 导航 | `navigation-system.md` |
| 反馈 | `feedback-system.md` |
| 交易 | `transaction-components.md` |
| AI | `ai-components.md` |
| 图标 | `icon-library.md`（Remix Icon） |
| 无障碍 | `accessibility.md` |
| Token 映射 | `token-mapping-summary.md` |

**组件生成流程：**

1. 明确组件目的与场景
2. 选择类型与 variant
3. 引用 `qieman-design-token-system` 语义 Token
4. 定义完整状态（default / pressed / focused / disabled / loading / error …）
5. 补充交互规则与无障碍要求
6. 金融场景叠加 `qieman-financial-compliance-guidelines`

**设计底线：**

- 组件必须继承 Design Token，禁止硬编码色值
- 金融数据清晰、准确、可解释
- 风险提示不可隐藏
- 主/次操作层级明确
- AI 建议须说明边界与数据来源

→ 详见 [`qieman-ui-design-system/README.md`](qieman-ui-design-system/README.md)

---

### qieman-financial-compliance-guidelines

**一句话定位：** 定义且慢设计与内容生成的金融合规边界，避免 AI 产出不合规表达。

**合规立场：** 真实 · 准确 · 完整 · 克制 · 可解释 · 风险充分 · 适配用户

**覆盖场景：**

```text
基金产品介绍 · 投顾服务说明 · 买入/卖出/调仓/转换
策略页 / 组合页 · 财富报告 / 账户诊断
高净值营销 · 私募专区 · AI 投资助手
营销 H5 · 海报 / Banner / 社群文案
```

**references 索引：**

| 文件 | 用途 |
|------|------|
| `marketing-compliance.md` | 营销活动、H5、海报合规 |
| `investment-expression.md` | 投资建议、投顾话术 |
| `risk-disclosure.md` | 风险披露位置与写法 |
| `performance-display.md` | 收益、业绩、排名、回撤展示 |
| `private-fund-rules.md` | 私募、高净值专区 |
| `ai-investment-guidelines.md` | AI 小顾 / AI 投顾边界 |
| `forbidden-words.md` | 禁用词与高风险话术 |

**输出要求（生成金融内容时必须包含）：**

1. 合规风险判断
2. 可用表达 / 需避免表达
3. 风险提示位置建议
4. 送审前检查清单（必要时）

**核心原则：**

```text
不承诺收益 · 不暗示保本 · 不制造过度紧迫感
不片面展示历史业绩 · 不隐藏风险提示
不模糊销售主体 · 不把 AI 辅助包装成确定性投资建议
```

> 本 Skill **不替代** 法务、合规与业务负责人正式审核；上线前须人工复核。

→ 详见 [`qieman-financial-compliance-guidelines/README.md`](qieman-financial-compliance-guidelines/README.md)

---

## 快速引用

### 品牌色与文本（常用）

| 用途 | Token / 色值 |
|------|-------------|
| 品牌主色 | `#1B88EE` · `foreground/primary` |
| 页面背景 | `#F9FAFB` · `background/page/deep` |
| 卡片背景 | `#FFFFFF` · `background/card/default` |
| 标题文字 | `#333333` · `foreground/neutral` |
| 正文 | `#606060` · `foreground/neutral subtle` |
| 辅助说明 | `#999999` · `foreground/neutral subtler` |
| 错误/风险 | `#FA440C` · `foreground/error` |
| 提醒 | `#EA9500` · `foreground/warning` |
| 成功 | `#07AD8F` · `foreground/success` |

### 圆角与间距（常用）

| Token | 值 | 用途 |
|-------|-----|------|
| `Radius/Medium` | 8px | 按钮、输入框 |
| `Radius/Large 1` | 12px | 标准卡片 |
| `Radius/Large 2` | 16px | 大卡片、弹窗 |
| `Radius/Large 3` | 24px | 底部 Sheet 顶圆角 |
| `Radius/Circular` | 999px | 胶囊按钮 |
| `Layout/x4` ~ `x6` | 16–24px | 模块间距 |

### HTML 引入 Token

```html
<link rel="stylesheet" href="qieman-design-token-system/assets/css-variable/qieman-tokens.css" />
```

```css
.card {
  background: var(--qdm-color-background-card-default);
  border-radius: var(--qdm-unit-radius-large-1);
  padding: var(--qdm-unit-layout-x5);
}
.primary-button {
  background: var(--qdm-color-background-primary);
  color: var(--qdm-color-foreground-inverse);
  border-radius: var(--qdm-unit-radius-circular);
  min-height: 48px;
}
```

---

## 金融合规检查（送审前）

凡涉及金融内容的产出，除品牌/Token/组件检查外，须通过合规层 checklist：

- [ ] 未承诺收益、保本、无风险、固定回报
- [ ] 未预测未来业绩或宣传预期收益率
- [ ] 未片面选取历史业绩或客户个案
- [ ] 业绩口径、数据来源、统计区间完整
- [ ] 风险提示可见、可读、未弱化或隐藏
- [ ] 未引导购买与风险承受能力不匹配的产品
- [ ] 未用「限时 / 席位 / 错过」制造过度紧迫感
- [ ] 私募内容未面向不特定公众宣传
- [ ] AI 回复为解释型辅助，非确定性投顾结论
- [ ] 未使用 `forbidden-words.md` 禁用词

完整规则见 `qieman-financial-compliance-guidelines/references/`。

---

## 质量检查清单（视觉 + 合规）

交付前逐项核对：

- [ ] 品牌气质： calm · trustworthy · professional
- [ ] 主色 `#1B88EE` 作为唯一行动色
- [ ] 语义 Token 优先，无硬编码 hex
- [ ] Light / Dark 共用同一 Token 名
- [ ] 组件状态完整（含 disabled / loading / error）
- [ ] 触控目标 ≥ 44px（App）
- [ ] 风险提示 ≥ 11px 且对比度可读
- [ ] 禁用风格未出现（纯黑、低幼卡通、金币堆、握手楼）
- [ ] 金融合规 checklist 已通过（见上节）

---

## 相关路径

| 资源 | 路径 |
|------|------|
| 原始 Figma 变量包 | `../资源包/`（色阶 / 色彩 / 单元 JSON） |
| 生产场景 Skill | `../../qieman-skills/` |
| Agent 路由规则 | 项目根 `AGENTS.md` |

---

## 更新维护

- 各 Skill 规范以目录内 `SKILL.md` 为真源
- Token JSON 变更后需同步：`assets/json-token/` → `assets/css-variable/`
- 组件 Token 映射变更后需同步：`token-mapping-summary.md`
- 合规 references 变更后需同步：`good-case/` / `bad-case/` 正反例

## 发布到 GitHub

同步至 [yanzichloe/skills](https://github.com/yanzichloe/skills) 仓库路径 `qieman-skills/foundation/`：

```bash
export GITHUB_TOKEN=ghp_xxx   # 或 GITHUB_PERSONAL_ACCESS_TOKEN
bash "../scripts/publish-foundation-to-github.sh"
```

脚本位置：`qieman skills/scripts/publish-foundation-to-github.py`（无需 git clone，REST API 直传）。
