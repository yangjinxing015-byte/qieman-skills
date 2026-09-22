# qieman-report-swipe-design · 质量检查清单

## P0（必须通过）

- [ ] 使用 `assets/template-report-swipe.html` 种子，未从零写翻页 JS
- [ ] 画布为 **100vw × 100vh** 全屏横向翻页（非 720pt 固定画布）
- [ ] `#deck` 宽度 = `页数 × 100vw`；`transform: translateX(-N * 100vw)`
- [ ] 交互：← →、空格、滚轮、触屏滑动、底部圆点、**ESC 索引**
- [ ] 每页 `<section class="slide" data-layout="Rxx">` 已登记
- [ ] 白卡片 `border: none`，无 `#EDEDED` 灰色描边
- [ ] 页眉 `.page-title` 字重 600，视觉等价 18pt
- [ ] 页脚 `.disclaimer` 单行不折行
- [ ] 无外链 Web Font（PingFang / 微软雅黑系统栈）
- [ ] `grep "[必填]"` 无残留

## P1（报告视觉）

- [ ] 内页背景 `#E3EFFE`（或所选主题 `--bg-page`）
- [ ] 封面/章节 `#1875D1`（`--brand-deep`）
- [ ] 主强调色 `#1B88EE`
- [ ] 每页最多一个 `.blue-summary-bar`
- [ ] KPI 每页 ≤ 4 个
- [ ] 图表/条形图序列 ≤ 4 项

## P2（节奏）

- [ ] 10 页以上 deck 使用 ≥ 8 个不同 R 版式
- [ ] 不连续 4 页相同 `data-theme="page"` 且无结构变化
- [ ] 有封面 + 目录或章节扉页 + 封底

## P3（导出说明）

- 本 skill 优先**浏览器演示**；导出 PDF 需浏览器打印（每页 16:9 全屏）
- 需要原生 **PPT** → 使用 `qieman-ppt-design`

## 校验命令

```bash
node <SKILL_ROOT>/scripts/validate-report-swipe-deck.mjs path/to/index.html
```
