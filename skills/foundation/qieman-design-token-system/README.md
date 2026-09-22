# qieman-design-token-system

颜色、字号、间距变量，数字化设计变量。

## 1. 核心定位

`qieman-design-token-system` 是且慢设计 Skills 体系中的基础规范层，负责把品牌视觉、UI 规则、跨端组件语言沉淀为可复用的 Design Token。

它解决的问题是：

> 如何让 AI、设计师、开发在不同产品和场景中使用统一的设计语言。

覆盖范围：

- App UI
- H5
- Web 官网
- AI 产品
- 营销页面
- PPT 视觉
- 数据报告

## 2. 文件结构

```text
qieman-design-token-system/
├── references/
│   ├── color-token.md
│   ├── typography-token.md
│   ├── spacing-token.md
│   ├── radius-token.md
│   ├── shadow-token.md
│   ├── component-token.md
│   └── theme-token.md
├── assets/
│   ├── figma-variable/
│   ├── css-variable/
│   ├── json-token/
│   └── example/
├── SKILL.md
└── README.md
```

## 3. 数据来源

本文件包根据上传的 Figma Variables JSON 生成：

| 源文件 | 作用 |
|---|---|
| `色阶.json` | 基础色阶，含 Light / Dark mode |
| `色彩 .json` | 语义色，含文字、背景、边框、状态、图表等 |
| `单元 .json` | 圆角、间距、行高等单位变量 |

## 4. 生成资产

| 路径 | 内容 |
|---|---|
| `assets/json-token/raw/` | 原始上传 JSON |
| `assets/json-token/qieman-design-tokens.normalized.json` | 标准化后的 Token JSON |
| `assets/json-token/qieman-design-tokens.raw-combined.json` | 合并后的原始 Token JSON |
| `assets/css-variable/qieman-tokens.css` | Light / Dark 双主题 CSS Variables |
| `assets/css-variable/qieman-tokens-light.css` | Light 单主题 CSS Variables |
| `assets/css-variable/qieman-tokens-dark.css` | Dark 单主题 CSS Variables |
| `assets/example/app-ui-token-example.html` | App UI Token 使用示例 |

## 5. 使用原则

1. 页面和组件优先调用语义 Token。
2. 基础色阶 Token 主要用于主题映射，不直接进入业务页面。
3. 组件 Token 作为 UI 实现接口，减少设计与开发之间的解释成本。
4. Light / Dark mode 通过同一变量切换，不重写组件结构。
5. 金融状态色、涨跌色、风险色必须统一调用语义 Token。

## 6. 与其他 Skills 的关系

```text
qieman-brand-guidelines
        ↓
qieman-design-token-system
        ↓
qieman-ui-design-system
        ↓
qieman-app-ui-design / qieman-marketing-h5-design / yingmi-ai-platform-design
```
