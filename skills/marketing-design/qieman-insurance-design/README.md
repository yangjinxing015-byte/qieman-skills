# qieman-insurance-design

且慢 / 盈米保险垂直设计 Skill，基于 `qieman-ui-design` 扩展。

## Layer
- `qieman-ui-design`: L0 基础品牌/UI Token
- `qieman-insurance-design`: L2 保险完整垂直场景

## 当前基础验证标准
以 **众民保百万医疗险2026｜保险Skill验证版 V8（内嵌Icon）** 为当前基础版参考。

已验证通过的关键规则：
- 保留原版移动端长页结构与节奏
- Hero 左文右图，文案与人物垂直居中、视觉重量接近
- 人物使用透明底资产，与 Hero 主蓝背景自然融合
- Hero 底部与正文自然渐变过渡
- 避免大面积无效留白
- 基础 Icon 采用可离线显示的内嵌 SVG 方案
- 不因为视觉优化擅自改保险事实

## 能力范围
- 保险产品介绍 H5 / App 详情页
- 保险 Hero
- 基础 UI Icon（Remix Icon v4.6.0）
- 蓝橙轻 3D 保险专业图标
- 轻量保险插画 / 医疗场景 / 信息插画
- 保险顾问、家庭、老人角色
- 保险信息可视化
- 保险文案与数据审核
- 现有保险页面/HTML 的局部优化

## 调用示例
```text
调用 qieman-insurance-design，基于以下保险产品文案生成 App H5。
严格遵循 qieman-ui-design；不得新增、删减或改写保障责任和数据。
若已有标准设计稿，仅优化指定问题，不改变原尺寸与整体结构。
```

## Icon Source
基础 UI 图标统一参考 Remix Icon v4.6.0：
https://github.com/Remix-Design/RemixIcon/releases/tag/v4.6.0

## 设计原则
1. 信息理解优先于视觉包装。
2. 用户标准文案优先于营销表达。
3. 基础 UI Icon 与保险专业视觉 Icon 分层使用。
4. 默认轻量保险插画，只有明确场景才升级为医疗 3D/C4D。
5. Hero 必须左文右图、自然融合、上下过渡自然。
6. 本地 HTML 预览优先保证 Icon 可见性与稳定性。
7. 不为了画面好看修改保险事实。
