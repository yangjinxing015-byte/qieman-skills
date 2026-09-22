# qieman-business-content-design

且慢通用业务内容设计 Skill。

## V10 Framework-Locked Redesign

本版本针对真实生产流程调整：

顾问、市场、内容、产品运营等团队提供的需求稿通常已经是 HTML，
其**内容、框架、模块顺序与业务逻辑已经确认**。

因此默认生产模式不再是“重新做信息架构”，而是：

```text
业务 HTML
↓
锁定 Content + Framework
↓
识别页面目标
↓
建立整页 Visual Strategy
↓
保持模块顺序与业务逻辑
↓
重做每个模块的视觉表达
↓
输出成熟移动端 HTML
```

## 默认 Source Mode

### `framework-locked-redesign`
用于已确认业务 HTML。

锁定：
- 文案
- 数据
- 模块数量
- 模块顺序
- 业务关系
- CTA
- 交互
- 风险 / 合规

允许重做：
- Hero / KV
- 页面背景
- Hero → 正文承接
- 标题体系
- 卡片视觉系统
- 模块内部排版
- 数据可视化
- Icon / Illustration
- 信息层级
- spacing / radius / shadow

核心：

> **框架锁定，视觉自由。**

### `requirement-only`
仅用于 PRD、粗线框或用户明确允许结构重组的任务。

### `visual-continuation`
用于用户已经确认设计后，只做局部迭代。

## 通用成熟设计目标

这个 Skill 不针对某一种模板。

无论需求来自：

- 顾问
- 市场
- 内容
- 产品运营
- 保险
- VIP
- AI / 开放平台

都应自动判断：

- 页面目标
- Hero 强弱
- 信息密度
- 页面背景关系
- 标题体系
- 卡片系统
- 数据可视化
- 插画 / Icon 需求
- transition_mode
- CTA 与风险说明

统一的是**设计质量**，不是页面长相。

## 基础依赖

- `qieman-ui-design`：基础 UI Token / Component
- `qieman-chart-design`：数据可视化
- `qieman-marketing-visual-design`：Hero / KV / Background / Illustration
- `qieman-insurance-design`：保险专项
- `qieman-vip-design`：高净值专项
- `qieman-design-content-audit`：最终验收

## 稳定规则继续保留

- 页面背景 `#F9FAFB`
- 同级白卡间距 16px
- 模块组间距 24px
- 涨红 `#FA440C`
- 跌 / 回撤绿 `#07AD8F`
- 同级 KPI 等权
- Sticky CTA：50px / 999px / 17px Regular
- In-flow CTA 与 Sticky CTA 可以同时存在
- Hero 不擅自新增 CTA
- `overlay-card / soft-gradient / flat-spacing`
- Regression Guard
- Risk / Footer Locked Content

## 推荐调用

```text
调用 qieman-business-content-design，
根据附件重新设计业务页面。
内容、框架、模块顺序及业务逻辑保持不变，只重新设计视觉表达。
根据页面业务目标自动选择合适的视觉方式，输出完整移动端 HTML。
```

上下文明确时：

```text
调用 qieman-business-content-design，
根据附件重新设计。
内容和框架不变，视觉重做，输出 HTML。
```
