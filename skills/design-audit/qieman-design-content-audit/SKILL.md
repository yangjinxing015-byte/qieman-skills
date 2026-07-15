---
name: qieman-design-content-audit
description: >-
  Use this skill to audit Qieman requirement documents, approved copy sheets, HTML drafts, Figma designs, screenshots, PDFs, strategy pages, product pages, reports, posters, and production implementations for content consistency. Trigger it when checking missing or extra copy, AI rewrites, stale copied-component text, numbers, units, symbols, time periods, CTA labels, chart wording, compliance copy, punctuation, full-width/half-width formatting, cross-page consistency, or when a visual HTML report with in-page error annotations is needed.
license: Proprietary. See LICENSE.txt
compatibility: >-
  Requires an agent that can read the supplied requirement sources and design or production
  targets. Visual HTML reports require local file creation and access to HTML, screenshots,
  PDFs, or image exports.
metadata:
  qieman-version: "1.0.0"
  qieman-updated-at: "2026-07-15"
  qieman-layer: "L1"
  qieman-category: "design-audit"
---


# qieman-design-content-audit

且慢需求稿—设计稿—实现稿内容一致性核查 Skill。

本 Skill 面向设计交付流程中的内容校验，不限定页面类型。它用于核对业务需求文档、文案表、HTML 初稿、生产页面等准确信息源，与 Figma 设计稿、截图、PDF、海报、报告页、策略介绍页、产品详情页、活动页或研发实现页面之间是否一致。

核心目标：

> 找出设计与实现过程中因 AI 改写、组件复制、多轮迭代、版本遗漏造成的文案、数字、单位、时间、合规和格式错误。

---

## 适用业务场景

- H5 活动页
- 策略介绍页
- 产品介绍页、产品详情页
- 专题页、营销落地页
- 私募专区、组合介绍页
- 投顾服务页、账户诊断页
- 客户报告、财富报告、组合报告
- 海报、长图、九宫格、Banner、弹窗、运营卡片
- App 页面、PC 官网页面
- 生产实现页面
- 其他以业务内容准确性为核心的设计交付物

---

## 不适用场景

本 Skill 默认不负责：

- 纯视觉审美评价
- 色彩、间距、圆角、栅格、字体大小等 UI 规范验收
- 交互可用性与流程体验评审
- 研发代码质量检查
- 性能、无障碍和兼容性测试
- 正式法律或金融合规审批
- 在没有准确信息源时凭模型判断哪版内容正确
- 未经用户授权直接修改 Figma、HTML、PDF 或设计文件

---

## 推荐调用语境

```text
调用 qieman-design-content-audit，
以业务需求文档为准，
核对设计稿中的文案完整性、文字内容、数据与数字、单位与符号、
时间周期表述、合规文案、标点格式和排版顺序，
详细列出所有不一致的位置，不要直接修改原文件。
```

```text
调用 qieman-design-content-audit，
以策略需求文档为准，
核对策略介绍页中的策略名、核心观点、历史数据、时间区间、
单位、图表说明、风险提示和按钮文案。
```

```text
调用 qieman-design-content-audit，
以生产页面为准确版本，
只核对设计稿中的错别字、漏字、数字、单位、标点和排版顺序。
```

---

## 输入角色

### Source of Truth — 准确信息源

可能是：

- 业务需求 PDF
- Word / 飞书文档导出稿
- 文案表或 Excel
- 业务确认过的 HTML 初稿
- 用户明确指定的生产页面
- 产品或策略数据表
- 用户明确指定的最终确认版本
- 已确认设计稿

### Audit Target — 待核查目标

可能是：

- Figma 页面或节点
- Figma 导出图片
- 设计稿截图
- 设计稿 PDF
- AI 生成 HTML
- 研发实现页面
- 海报、长图、九宫格
- 报告页面
- 多个设计版本

没有明确 Source of Truth 时，不得自行认定某份文件为准确版本。

详细规则见：

```text
references/source-of-truth.md
```

---

## 核查模式

### Mode A — 文案精确核对

检查：

- 缺字、多字、错字
- AI 改写
- 标题、正文、按钮、标签、角标
- 占位符、注释、脚注
- 标点、空格、全半角
- 英文大小写

### Mode B — 完整内容核对

默认模式。

检查：

- 文案完整性
- 文字内容
- 数据与数字
- 单位与符号
- 时间周期表述
- 合规文案
- 页面模块、顺序、按钮、图表
- 组件复制残留
- 跨页面一致性

### Mode C — 多版本核对

适用于：

- 需求 PDF + HTML 初稿 + Figma
- 需求稿 + 生产页 + 设计稿
- 多份业务材料存在冲突

### Mode D — 生产验收核对

用于设计稿与生产页面核对。必须明确哪一方为准。

### Mode E — 跨载体一致性核对

同一业务同时包含 H5、策略页、海报、Banner、弹窗、报告和生产页时，检查跨载体一致性。


### Mode F — 可视化 HTML 标注核查

适用于待核查目标是页面、长图、设计截图、Figma 导出图、PDF 页面或 HTML 页面。

除文字问题清单外，额外输出一个可独立打开的 HTML 核查报告：

- 左侧或中间直接展示待核查页面，不需要用户重新导出查找。
- 在原页面错误位置增加醒目的红色描边、半透明底色和编号标记。
- 右侧展示对应问题详情、Source 原文、Target 内容和修改建议。
- 点击问题列表可自动滚动并聚焦到页面中的标记。
- 点击页面标记可定位到右侧对应问题。
- 同一个错误字段在页面中出现多次时，必须全部标记。
- 报告同时统计“问题类型数量”和“实际出现次数”，不得把多次出现合并后漏标。
- 支持 P0、P1、P2 筛选和按页面切换。

详细规则见：

```text
references/visual-html-report.md
assets/visual-audit-report.html
```

---

## 核查维度与优先级

完整维度见：

```text
references/audit-dimensions.md
```

### P0 — 必须修正

确定性内容错误，可能影响业务理解、用户决策、交易或合规：

1. 文案完整性
2. 文字内容
3. 数据与数字
4. 单位与符号
5. 时间周期表述
6. 合规文案
7. 关键模块、CTA、产品名、策略名和图表口径错误

### P1 — 建议修正

不一定改变业务含义，但影响准确性、规范性和专业度：

1. 标点符号
2. 大小写、全半角
3. 排版顺序

### P2 — 可选优化

不属于确定性错误，需结合业务方或设计目标判断：

1. 语气偏差
2. 需求文档本身问题
3. 装饰性文字

**P2 不得写成“设计稿错误”，应写为“建议确认”或“可选优化”。**

---

## 核心执行流程

```text
确认准确信息源
→ 识别页面/载体类型
→ 提取 Source 内容结构
→ 提取 Target 内容结构
→ 建立页面与模块映射
→ 按核查维度逐项比较
→ 扫描复制组件与旧版本残留
→ 做跨页面、跨载体一致性检查
→ 按 P0/P1/P2 分级
→ 统计每项错误在页面中的全部出现位置
→ 输出详细差异清单
→ 页面类目标同步生成可视化 HTML 标注报告
→ 列出已确认无误的关键项
→ 说明无法核查和待确认范围
```

---

## 页面与模块映射

正式核查前建立映射：

| Source 页面/模块 | Target 页面/模块 | 映射状态 |
|---|---|---|
| 首屏 Hero | Figma 第1屏 | 已匹配 |
| 策略核心逻辑 | 第2屏 | 已匹配 |
| 历史表现说明 | 第3屏 | 部分匹配 |
| 风险提示 | 未发现 | 缺失 |

不允许仅凭局部相似文字认定整页一致。

---

## Source Lock

- 不得擅自润色 Source 原文。
- 不得因为 Target 文案更顺就判定正确。
- 不得把同义改写自动视为一致。
- 不得用模型记忆补全缺失内容。
- 不得忽略限定词、括号、脚注和风险说明。
- 不得把 P2 建议伪装成 P0 确定性错误。

---

## 数字与符号精确核对

以下内容必须逐字符核对：

- 金额
- 百分比
- 数量
- 日期
- 小数点精度
- 千分位
- 货币单位
- 时间单位
- 正负号
- 百分号
- 数学符号
- 连接符号
- 序号符号
- 产品代码
- 数据时间区间

---

## 组件复制与旧版本残留扫描

必须全局检查：

- 旧产品名、旧策略名、旧活动名
- 旧日期、旧金额、旧费率、旧门槛
- 旧按钮和旧风险提示
- 示例数据与占位文字
- 重复卡片中唯一异常项
- 标题已更新但正文未更新
- 图片文字与页面正文不一致
- 隐藏图层或备用组件中的旧内容

---

## 输出要求

### 1. 核查概况

```text
准确信息源：
待核查目标：
页面/载体类型：
核查范围：
发现问题：
P0 必须修正：
P1 建议修正：
P2 可选优化：
```

### 2. P0 必须修正

优先输出，不与 P1/P2 混合。

### 3. 完整问题清单

| 编号 | 优先级 | 核查维度 | 页面/位置 | Source 原文 | Target 内容 | 差异说明 | 建议修改 | 置信度 |
|---|---|---|---|---|---|---|---|---|

每项问题必须：

- 定位到页面、模块或组件
- 标明核查维度
- 展示 Source 内容
- 展示 Target 当前内容
- 说明差异
- 提供明确修改建议
- 不把多个独立问题混成一项

### 4. 全局一致性问题

单独列出：

- 同一产品名多种写法
- 同一数据在不同页面不一致
- 同一按钮出现不同文案
- 风险提示版本不统一
- 跨载体信息不一致
- 组件复制残留

### 5. 已确认无误的关键项

至少列出产品名、核心数字、CTA、风险提示等重要项。

### 6. 待确认与可选优化

集中展示：

- Source 自身矛盾
- 语气偏差
- 装饰性文字
- 无法识别的小字
- 缺少页面或最新版本


### 7. 页面类目标的 HTML 可视化报告

当待核查目标是页面时，默认额外交付：

```text
项目名-content-audit.html
```

HTML 报告必须包含：

- 原页面或页面截图
- 页面内红色错误标记
- 标记编号
- 问题列表
- Source / Target 对照
- 修改建议
- 每项问题的出现次数
- 每个出现位置的独立定位入口
- P0/P1/P2 筛选
- 页面切换与搜索

同一字段出现 N 次时：

```text
问题项数量：1
页面标记数量：N
```

不得只标记第一次出现的位置。

---

## 按需读取规则

| 任务 | 必读文件 |
|---|---|
| 判断准确版本 | `references/source-of-truth.md` |
| 核查维度与分级 | `references/audit-dimensions.md` |
| 精确内容核对 | `references/audit-rules.md` |
| Figma / 截图核对 | `references/figma-workflow.md` |
| HTML / PDF / 文档核对 | `references/document-workflow.md` |
| 按页面类型专项检查 | `references/page-type-checklists.md` |
| 输出文字报告 | `references/output-format.md` |
| 页面可视化标注报告 | `references/visual-html-report.md` |
| 生成文字报告文件 | `assets/audit-report-template.md` |
| 生成页面标注 HTML | `assets/visual-audit-report.html` |

不要无条件加载所有 reference。

---

## 最终验收标准

- 明确准确信息源。
- 不受页面类型限制。
- 覆盖用户指定全部页面或载体。
- 按 P0/P1/P2 正确分级。
- 能发现缺失、多出、整段遗漏和组件残留。
- 数字、单位、符号、时间与合规内容逐字符核对。
- 每个问题都有具体位置和 Source/Target 对照。
- 页面类目标能直接输出带原页面预览的 HTML 核查报告。
- 同一错误字段的全部出现位置均被标注，并可逐个定位。
- P2 内容明确标注为建议确认，不冒充确定性错误。
- 不擅自改写需求原文。
- 不猜测无法识别的内容。
