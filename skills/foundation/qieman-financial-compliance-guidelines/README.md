# qieman-financial-compliance-guidelines

## 定位

`qieman-financial-compliance-guidelines` 是且慢设计 Skills 体系中的金融合规边界 Skill。

它用于约束基金产品介绍、投顾服务、交易流程、策略页、财富报告、高净值营销、私募专区、AI 投资助手、H5 活动页、海报文案等金融内容，避免 AI 生成内容、设计方案和页面体验出现不合规表达。

## 覆盖场景

```text
基金产品介绍
投顾服务说明
买入 / 卖出 / 转换 / 调仓
策略页 / 组合页
财富报告 / 账户诊断报告
高净值营销
私募专区
AI 投资助手
营销 H5
海报 / Banner / 社群文案
```

## 目录结构

```text
qieman-financial-compliance-guidelines/
├── references/
│   ├── marketing-compliance.md
│   ├── investment-expression.md
│   ├── risk-disclosure.md
│   ├── performance-display.md
│   ├── private-fund-rules.md
│   ├── ai-investment-guidelines.md
│   └── forbidden-words.md
├── assets/
│   ├── compliance-example/
│   ├── good-case/
│   └── bad-case/
├── SKILL.md
└── README.md
```

## 使用方式

### 1. 生成金融营销物料时

必须同时检查：

- `marketing-compliance.md`
- `risk-disclosure.md`
- `forbidden-words.md`

### 2. 生成收益、业绩、图表展示时

必须同时检查：

- `performance-display.md`
- `risk-disclosure.md`
- `forbidden-words.md`

### 3. 生成投资建议 / 投顾话术时

必须同时检查：

- `investment-expression.md`
- `risk-disclosure.md`
- `ai-investment-guidelines.md`（如涉及 AI）

### 4. 生成高净值 / 私募相关内容时

必须同时检查：

- `private-fund-rules.md`
- `marketing-compliance.md`
- `risk-disclosure.md`
- `forbidden-words.md`

## 与其他 Skill 的关系

```text
qieman-brand-guidelines
        ↓
qieman-ui-design-system
        ↓
qieman-app-ui-design / qieman-marketing-h5-design
        ↓
qieman-financial-compliance-guidelines
        ↓
最终 UI / 文案 / 视觉物料
```

## 核心原则

```text
不承诺收益
不暗示保本
不制造过度紧迫感
不片面展示历史业绩
不隐藏风险提示
不模糊销售主体和产品主体
不把 AI 辅助解释包装成确定性投资建议
```

## 注意

本 Skill 只用于设计和文案生成前置校验，不替代公司法务、合规和业务负责人的正式审核。
