# qieman-business-content-design

且慢通用业务内容设计 Skill。

## 定位

用于把策略、产品、活动、投教、报告、诊断、权益、功能、指南等业务内容，
转化为清晰、可信、符合且慢品牌规范的移动端业务页面。

HTML / H5 是默认输出方式之一，不是 Skill 的唯一定位。

## 本包只保留最新规则

本包不再包含：
- 旧版 references
- 旧版 PNG 素材库
- 背景图
- 人物 / IP
- 营销插画
- 专项 icon
- 字体二进制

这些视觉能力由独立视觉 Skill 管理。

## 依赖关系

- `qieman-ui-design`：基础 UI Token、颜色、字体、圆角、spacing、通用 icon
- `qieman-chart-design`：按需增强数据可视化
- 独立视觉 Skill：背景图 / KV / 人物 / IP / 专项 icon / 插画
- `qieman-design-content-audit`：最终验收

## 核心已锁定规则

- Requirement Source ≠ Visual Template
- Locked Content
- Locked Button / Locked Component
- qieman-ui-design 作为基础 UI 真源
- 页面背景 `#F9FAFB`
- 白色卡片体系
- 固定 spacing tokens（连续白卡 16px，模块组 24px）
- 金融涨红 `#FA440C` / 跌绿 `#07AD8F`
- 正文可读宽度与对齐规则
- 并列 / 流程关系判断
- Footer / 风险提示稳定
- Regression Gate：局部优化不得破坏已确认区域

## 本轮新增锁定点

- Hero 与首张卡之间保持适度留白，避免无效高空白。
- 分区标题前的独立编号不是必需项，若拉高版面优先去掉。
- 全页白卡默认不统一描边，优先通过浅灰页底、白卡、固定间距、局部分割线建立层级。


## 基础依赖关系（最新版）

`qieman-business-content-design` 是主编排层，默认协调：

- `qieman-ui-design`：基础 UI、颜色、字体、间距、卡片、按钮、基础涨跌色
- `qieman-chart-design`：收益、回撤、比例、趋势、对比、分布等图表表现方式
- `qieman-insurance-design` / `qieman-vip-design` 等：仅在对应垂类业务下按需叠加

### 优先级
- 页面容器与基础组件 → `qieman-ui-design`
- 图表本体与数据可视化样式 → `qieman-chart-design`
- 垂类业务元素 → 对应垂类 Skill


## 本轮新增强约定

### 同层级 KPI 等权
同一组核心数据默认使用统一字号、字重、基线与视觉权重。禁止“一项超大、其余偏小”的主次式排版，除非业务明确指定唯一主指标。

### 吸底 CTA
移动端固定吸底按钮统一为单个整行大按钮。输入原型中的左右信息 + 按钮、双按钮、半宽按钮、小胶囊按钮等样式不得继承。默认左右安全边距 16px、高度 50px、文字 17px/25px Regular、品牌蓝 #1B88EE。


## 2026-09-11：Hero / KV → 正文承接模式升级

顶部承接不再固定为单一圆角样式，统一由 `qieman-business-content-design` 作为 Source of Truth 管理。

支持：
- `rounded-surface`：策略 / 产品 / 普通营销默认
- `soft-gradient`：保险 / 医疗 / 家庭保障默认
- `flat-spacing`：投教 / 报告 / 内容页默认
- `auto`：按 Page Type 自动路由

优先级：用户明确指定 > 当前任务已确认样式 > 垂类默认 > 自动路由。

固定吸底 CTA 规则保持不变：仅 1 个整行大按钮。


## 2026-09-11：V8 Visual Isolation Stable

这版重点解决“根据需求 HTML 生成时，设计结果仍然太像原型”的问题。

### 默认行为

输入 HTML / PM 原型 / Cursor 页面默认：

`source_mode = requirement-only`

执行路径：

```text
Requirement Source
→ 无样式 Requirement Model
→ Semantic Reconstruction
→ Visual Recomposition
→ Visual Divergence Gate
→ Output
```

### 新的硬规则

- 继承需求关系，不继承视觉关系。
- 输入原型第一次进入任务时，不自动成为 Locked Layout。
- 默认不继承 Hero、卡片数量 / 嵌套、DOM、背景分区、图表类型、视觉层级和承接方式。
- `requirement-only` 模式下，最终页面至少 4 个核心视觉维度应明显重新设计。
- 只换色、圆角、shadow、字号、spacing 不算重新设计。
- 用户确认后的局部迭代继续使用 Regression Guard，避免越改越错。

## 推荐日常调用

```text
调用 qieman-business-content-design，
根据附件重新设计移动端业务页面。
内容不变，原型仅作为 Requirement Source，视觉重做。
输出完整可运行 HTML。
```

上下文明确时甚至可以：

```text
调用 qieman-business-content-design，
根据附件重新设计。
内容不变，视觉重做，输出 HTML。
```
