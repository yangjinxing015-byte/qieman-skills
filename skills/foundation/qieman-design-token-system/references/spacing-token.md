# Spacing Token｜间距变量规范

## 1. 定位

`spacing-token.md` 定义且慢跨端页面的间距体系，用于 App UI、H5、Web、PPT 页面中的模块间距、组件间距、卡片内边距与布局栅格。

## 2. 基础原则

1. 采用 4px 递进体系。
2. 移动端内容区常用 16px / 20px / 24px。
3. 卡片内边距优先使用 16px / 20px / 24px。
4. 页面边距和组件间距要优先使用 `Layout/x*` 语义变量。
5. `accent/*px` 是基础数值池，通常不直接用于业务命名。

## 3. Layout Token

来源：`单元 .json`。

| Token | Value(px) | Alias | Scope |
| --- | --- | --- | --- |
| Layout/x1 | 4 | accent/4px | GAP |
| Layout/x2 | 8 | accent/8px | GAP |
| Layout/x3 | 12 | accent/12px | GAP |
| Layout/x4 | 16 | accent/16px | GAP |
| Layout/x5 | 20 | accent/20px | GAP |
| Layout/x6 | 24 | accent/24px | GAP |
| Layout/x7 | 28 | accent/28px | GAP |
| Layout/x8 | 32 | accent/32px | GAP |
| Layout/x9 | 36 | accent/36px | GAP |
| Layout/x10 | 40 | accent/40px | GAP |


## 4. Accent 基础数值池

| Token | Value(px) | Scope |
| --- | --- | --- |
| accent/4px | 4 |  |
| accent/8px | 8 |  |
| accent/12px | 12 |  |
| accent/16px | 16 |  |
| accent/24px | 24 |  |
| accent/28px | 28 |  |
| accent/32px | 32 |  |
| accent/36px | 36 |  |
| accent/40px | 40 |  |
| accent/48px | 48 |  |
| accent/56px | 56 |  |
| accent/64px | 64 |  |
| accent/72px | 72 |  |
| accent/80px | 80 |  |
| accent/0px | 0 |  |
| accent/120px | 120 |  |
| accent/20px | 20 |  |
| accent/999px | 999 | ALL_SCOPES |
| accent/2px | 2 | ALL_SCOPES |


## 5. 推荐场景映射

| 场景 | 推荐 Token | 说明 |
|---|---:|---|
| 极小元素间距 | `Layout/x1` | 图标与文字、标签内部 |
| 小组件间距 | `Layout/x2` | 表单项内部、按钮图标间距 |
| 卡片内部紧凑间距 | `Layout/x3` | 标题与正文、列表单元 |
| 常规组件间距 | `Layout/x4` | 模块内部默认间距 |
| 卡片内边距 | `Layout/x5` / `Layout/x6` | App 卡片、弹窗内容 |
| 页面左右边距 | `Layout/x6` | H5 / App 常用 24px |
| 模块分组间距 | `Layout/x8` | 页面模块上下分区 |
| 首屏 / 章节留白 | `Layout/x10` 及以上 | Web / PPT / H5 大留白 |

## 6. 禁用规则

- 不要出现 5px、7px、13px 这类非体系化间距。
- 不要同一页面同时混用 15px、16px、17px 近似值。
- 不要为了视觉“差不多”手动微调，优先复用 Token。
