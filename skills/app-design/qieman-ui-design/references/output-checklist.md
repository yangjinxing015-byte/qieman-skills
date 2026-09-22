# 输出要求与评审清单

## 默认产出

用户要求「生成页面 / HTML / 原型 / App 界面」时：

1. 从 [`../assets/templates/app-shell.html`](../assets/templates/app-shell.html) 复制，按页面改，不要从零手写 `:root`。
2. 单文件 HTML，内嵌 CSS / 必要 JS。
3. YAML token → CSS variables（见 SKILL.md 映射表）。
4. 语义化标签：`header` `main` `section` `article` `footer`。
5. 风险提示与数据来源可见（`{components.disclosure-card}`）。
6. 375px 宽度不溢出。

CSS 顺序：tokens → reset/base → layout → components → charts → responsive。不引入无关 CSS 框架，除非用户明确要求。

JS：仅图表与基础交互。不模拟真实交易，不承诺收益。图表初始化须在 DOM Ready 之后，并在 `resize` 时 `chart.resize()`。详细图表实现读 `qieman-chart-design`。

## Quality bar

- 浅蓝页底 + 白卡 + 唯一行动色 `{colors.brand-primary}`。
- 首屏能看到核心结论或利益点。
- 金融数据有单位、时间口径、数据来源。
- 风险提示 ≥ 11px，对比度可读，不放在不可见区域。
- 单卡片字号层级 ≤ 3。
- 组件可复用，色值不在组件 CSS 里硬编码。

## Do

- 唯一行动色 `{colors.brand-primary}`。
- 先结构与信息层级，再装饰。
- 结论优先放 `{components.summary-card}`。
- 图表色按 `{colors.chart-01}` → `{colors.chart-12}` 顺序，不随机。
- 图标 Remix `-line`，尺寸与颜色走 icon token。
- 移动端 16px 安全边距、44px 触控。
- 强化视觉时改留白、插图位置、卡片层级，不新增主色。

## Don't

- 灰底上的白卡加灰色描边（用轻阴影，不要 1px 边）。
- 多个主行动色；厚重阴影 / 强玻璃拟态 / 霓虹渐变。
- 无业务确认时用红绿暗示涨跌盈亏（且慢营销不以绿色做主视觉）。
- 图标、插画抢走核心数据；移动端单屏堆过多图表表格。
- 硬编码已有 token 的颜色 / 字号 / 间距。
- 「稳赚」「无风险」等误导表达。
- 低幼卡通、杂乱城市背景、高饱和绿主视觉。
- 混用多个 icon 库；用 emoji 替代正式图标。
- 把用户手机号、身份证等敏感数据明文展示；原型用占位数据（如 `133****1564`）。

## 图表（L0 最低要求）

每个金融图表必须有：指标名、时间范围、单位、图例、数据来源、必要风险句（如「历史数据不预示未来表现」）。色板见 `tokens.yaml` `colors.chart-*`。坐标轴 / tooltip / legend 细节 → `qieman-chart-design`。

## 评审清单

- [ ] 颜色 / 字号 / 圆角 / 间距来自 `tokens.yaml`
- [ ] 从 `app-shell.html` 或指定原型改出，`:root` 完整
- [ ] 375px 不溢出；主按钮与输入 44px
- [ ] 关键数字有单位 + 时间口径
- [ ] 风险披露 ≥ 11px 且可读
- [ ] 仅一个主按钮 / 一个主行动色
- [ ] 未承诺收益；敏感数据已脱敏或使用占位
- [ ] 金融页已对照 foundation `references/compliance/forbidden-words.md` 与 `risk-disclosure.md`
- [ ] Logo / AI 小顾来自 `assets/logos/`（见 `references/logos.md`），未手绘、未改 OAP 配色

## Known gaps

- 无暗色模式；默认浅色。
- 底部挽留弹窗 → `qieman-sell-popup-design`，不要在 L0 临时拼弹窗。
- 字体不打包；缺 MiSans / DIN 时走系统 fallback。
- 真实投资决策页须业务 / 合规 / 投顾复核文案与披露。
