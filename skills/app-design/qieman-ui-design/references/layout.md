# 布局、层级、响应式

## Spacing

4px 基准。常用：8 / 12 / 16 / 24 / 32 / 48 / 64px（`{spacing.*}`）。

- 页面左右安全边距：移动端 `{spacing.h5-safe}` 16px。
- 卡片内边距：标准 16px；信息密集 12px；大模块 24px。
- 模块间距：默认 16px；大区块 32–64px。
- 图表：标题与图 ≥ 12px；图与说明 ≥ 8px。

## Containers

- App / H5 设计稿：375px（iPhone 13 mini）优先；左右 16px。
- 报告页最大宽 960–1120px（报告 skill 再收紧）。
- 看板桌面 1200–1440px；更宽时锁最大宽、外侧留白。
- 长图：顶部和底部留呼吸，避免首屏堆满。

## Elevation

层级优先用背景、边框、间距、字号；不要厚重投影、玻璃拟态、霓虹、3D。

| Level | Token | 用途 |
|---|---|---|
| Flat | `{shadow.none}` | 页底、页头海报、页尾 |
| Hairline | 1px `{colors.border-default}` | 表格、输入框、白底上的嵌套块 |
| Soft Card | `{shadow.card-soft}` | 灰底上的白卡：无描边，靠白底 + 轻阴影浮起 |
| Floating | `{shadow.floating}` | 底栏、浮层、轻量弹窗 |

## Radius

同一页只用 2–3 个圆角层级。

| Token | 值 | 用途 |
|---|---:|---|
| `{rounded.none}` | 0 | 页尾、满版底 |
| `{rounded.xs}` | 4px | 表内小标签 |
| `{rounded.sm}` | 8px | 按钮、输入框、小卡 |
| `{rounded.md}` | 12px | 标准卡、摘要卡 |
| `{rounded.lg}` | 20px | 图表卡、策略卡 |
| `{rounded.xl}` | 24px | 大型模块、手机外壳圆角除外 |
| `{rounded.pill}` | 9999px | 胶囊 |
| `{rounded.full}` | 9999px | 正圆图标按钮、头像 |

## Breakpoints

| Name | 宽度 | 行为 |
|---|---:|---|
| Small phone | ≤ 375px | 单列，减图表标签，16px 边距 |
| Phone | 376–640px | 主布局；指标 1–2 列 |
| Tablet | 641–1024px | 指标 2 列；图表整行或 2 列 |
| Small desktop | 1025–1199px | 报告 960–1120px；看板 3 列指标 |
| Desktop | 1200–1440px | 看板 4 列指标 |
| Wide | ≥ 1441px | 锁最大宽 |

折叠：指标 4→3→2→1；图表移动端单列；表格移动端横滑或卡片化。

## Touch

- 主按钮、输入框最小高度 44px。
- 图标按钮热区 40–44px。
- 筛选标签点击高度 ≥ 32px。
