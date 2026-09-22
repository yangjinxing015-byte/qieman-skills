# qieman-ui-design-system

产品 UI 组件体系 Skill。

## 定义

该 Skill 用于沉淀且慢产品 UI 组件规范，回答组件长什么样、什么时候使用、状态如何变化、交互如何反馈、如何组合成页面。

## 覆盖范围

- App UI
- H5
- Web 官网
- AI 产品
- 营销页面
- PPT 视觉
- 数据报告
- 交易流程
- 弹窗 / 底部弹层

## 目录结构

```text
qieman-ui-design-system/
├── references/
│   ├── component-principles.md
│   ├── button-system.md
│   ├── card-system.md
│   ├── form-system.md
│   ├── navigation-system.md
│   ├── feedback-system.md
│   ├── transaction-components.md
│   ├── ai-components.md
│   ├── icon-library.md
│   ├── accessibility.md
│   └── token-mapping-summary.md
├── assets/
│   ├── figma-library/
│   ├── component-example/
│   ├── icon-library/
│   └── prototype/
├── SKILL.md
└── README.md
```

## 与其他 Skills 的关系

```text
qieman-brand-guidelines
        ↓
qieman-design-token-system
        ↓
qieman-ui-design-system
        ↓
qieman-app-ui-design / qieman-popup-design / qieman-trading-flow-design / qieman-ai-assistant-ui-design
```

## 使用方式

当你需要生成或审查且慢组件时，先调用该 Skill，并根据具体场景读取对应 references：

- 按钮：`references/button-system.md`
- 卡片：`references/card-system.md`
- 表单：`references/form-system.md`
- 导航：`references/navigation-system.md`
- 反馈：`references/feedback-system.md`
- 交易组件：`references/transaction-components.md`
- AI 组件：`references/ai-components.md`
- 图标：`references/icon-library.md`
- 无障碍：`references/accessibility.md`

## 设计底线

- 组件必须继承 Design Token。
- 金融数据必须清晰、准确、可解释。
- 风险提示不可隐藏。
- 主操作与次操作必须明确区分。
- AI 建议必须说明边界。
- 交易类组件必须降低误触风险。

## 资产说明

- `assets/figma-library/`：Figma 组件库源文件、缩略图与索引说明。
- `assets/component-example/`：组件样例。
- `assets/icon-library/`：图标资源索引。图标库统一调用 Remix Icon：`https://remixicon.com/`。
- `assets/prototype/`：交互原型文件。
