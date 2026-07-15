# qieman-design-content-audit V1.0.0

且慢需求稿—设计稿—实现稿内容一致性核查 Skill。

## 核查优先级

### P0 必须修正

- 文案完整性
- 文字内容
- 数据与数字
- 单位与符号
- 时间周期表述
- 合规文案

### P1 建议修正

- 标点符号
- 大小写与全半角
- 排版顺序

### P2 可选优化

- 语气偏差
- 需求文档本身问题
- 装饰性文字

## 适用范围

- H5
- 策略介绍页
- 产品详情页
- 专题页与营销落地页
- App 页面
- PC 官网
- 海报、Banner、弹窗和九宫格
- 客户报告、财富报告和组合报告
- 研发实现页与生产页面

## 可视化 HTML 标注报告

页面类核查可直接输出一个独立 HTML 报告：

- 原页面直接展示
- 错误位置红色标注
- 页面标记与问题清单双向跳转
- 同一错误字段出现多次时全部标记
- 分别统计问题项和实际出现次数
- 无需再次打开 Figma 或重新导出查找

## 调用方式

```text
调用 qieman-design-content-audit，
以业务需求文档为准，
核对设计稿中的文案完整性、文字内容、数据与数字、
单位与符号、时间周期表述、合规文案和格式规范，
详细列出错误位置。
```


### 要求输出可视化 HTML

```text
调用 qieman-design-content-audit，
以需求文档为准核对设计页面。
除文字清单外，输出一个可独立打开的 HTML 核查报告，
在原页面错误位置用红色框和编号标注。
同一错误字段出现多次时全部标出，并支持点击问题跳转到对应位置。
```

## 仓库位置

```text
skills/design-audit/qieman-design-content-audit/
```

## Agent Skills 官方结构

```text
qieman-design-content-audit/
├── SKILL.md
├── LICENSE.txt
├── README.md
├── CHANGELOG.md
├── references/
│   ├── audit-dimensions.md
│   ├── audit-rules.md
│   ├── document-workflow.md
│   ├── figma-workflow.md
│   ├── issue-taxonomy.md
│   ├── output-format.md
│   ├── page-type-checklists.md
│   ├── source-of-truth.md
│   └── visual-html-report.md
└── assets/
    ├── audit-report-template.md
    ├── audit-result-schema.json
    └── visual-audit-report.html
```

## 验证命令

在仓库根目录运行：

```bash
skills-ref validate ./skills/design-audit/qieman-design-content-audit
```
