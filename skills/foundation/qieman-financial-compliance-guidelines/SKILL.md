---
name: qieman-financial-compliance-guidelines
description: Apply Qieman financial compliance guidelines to fund product introductions, investment advisory service content, buy/sell and transaction flows, strategy pages, wealth reports, high-net-worth marketing, private fund areas, AI investment assistant responses, H5 campaigns, posters, banners, and financial copywriting. Use this skill whenever financial content may involve performance, risk, suitability, private fund access, marketing claims, investment suggestions, or AI-generated investment explanations.
---

# Qieman Financial Compliance Guidelines Skill

## Purpose

This Skill defines the financial compliance boundary for Qieman design and content generation.

It helps AI, designers, product managers, operators, and developers avoid non-compliant expressions when producing:

- 基金产品介绍
- 投顾服务介绍
- 买入 / 卖出 / 转换 / 调仓流程
- 策略详情页
- 财富报告 / 账户诊断报告
- 高净值营销素材
- 私募专区页面
- AI 投资助手回复
- H5 活动页
- 海报 / Banner / 社群文案

The goal is not to replace legal or compliance review. The goal is to provide a reusable first-line checklist so generated design and copy are safer before formal review.

## Core Compliance Position

Qieman should express financial content in a way that is:

```text
真实、准确、完整、克制、可解释、风险充分、适配用户
```

Design and copy should help users make informed decisions, not push users into impulsive transactions.

## When to Use

Use this Skill whenever the task involves any of the following:

- 收益、业绩、排名、回撤、分红、年化、历史表现
- 买入、卖出、调仓、转换、定投、跟车、回购等交易动作
- 基金产品、投顾策略、资产配置方案、账户诊断
- 私募基金、高净值、300 万+、专属圈层、限额席位
- AI 小顾、AI 投顾、AI 账户分析、AI 市场分析
- 营销 H5、海报、Banner、九宫格、小红书封面、私域文案
- 任何可能被用户理解为“投资建议”或“收益承诺”的内容

## Do Not Use Alone When

Do not use this Skill as the only source of truth when:

- 页面即将上线且涉及真实产品销售
- 法律法规、监管口径、公司制度发生变化
- 涉及私募产品、投顾业务、组合策略等高风险场景
- 涉及具体收益、排名、业绩、客户案例或基金经理背书

In these cases, this Skill only provides the first pass. Final output must be reviewed by business owner, legal, and compliance teams.

## Dependencies

This Skill should be used together with:

- `qieman-brand-guidelines`
- `qieman-ui-design-system`
- `qieman-design-token-system`
- `qieman-app-ui-design`
- `qieman-marketing-h5-design`
- `qieman-financial-chart-design`
- `qieman-ai-assistant-ui-design`

## References

Load the files under `references/` according to the scenario:

```text
references/
├── marketing-compliance.md       # 营销合规规范
├── investment-expression.md      # 投资话术规范
├── risk-disclosure.md            # 风险披露规范
├── performance-display.md        # 收益展示规范
├── private-fund-rules.md         # 私募基金合规规则
├── ai-investment-guidelines.md   # AI 投顾使用指引
└── forbidden-words.md            # 禁用词汇清单
```

## Output Rules

When producing UI, copy, image prompts, H5, poster copy, or investment explanation, always include:

1. 合规风险判断
2. 可用表达
3. 需避免表达
4. 风险提示位置建议
5. 必要时给出“送审前检查清单”

## Default Compliance Review Checklist

Before final output, check:

- 是否承诺收益、保本、无风险、固定回报？
- 是否预测基金未来业绩或宣传预期收益率？
- 是否片面选取历史业绩或客户个案？
- 是否缺少业绩口径、数据来源、统计区间？
- 是否把风险提示弱化、隐藏或放在不易阅读的位置？
- 是否引导用户购买与风险承受能力不匹配的产品？
- 是否用“限时、席位、错过”等方式制造过度紧迫感？
- 是否将私募产品面向不特定公众宣传？
- 是否让 AI 回复像确定性投顾结论，而不是解释型辅助？
- 是否使用禁用词或高风险营销话术？

## Important Disclaimer

This Skill is an internal design and copy generation aid. It is not legal advice, regulatory advice, or a substitute for formal compliance review.
