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
