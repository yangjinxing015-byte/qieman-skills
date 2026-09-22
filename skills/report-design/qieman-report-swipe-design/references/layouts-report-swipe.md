# qieman-report-swipe-design · 版式库 R01–R12

报告视觉（且慢报告 token）+ guizang 横向翻页（`100vw × 100vh`）。

每个 `<section>` 必须写 `data-layout="Rxx"` 与 `data-theme`（`cover` / `section` / `toc` / `page` / `summary`）。

## Pre-flight

生成前 Read `assets/template-report-swipe.html` 的 `<style>`，确认下列类已定义：

`header` / `title-wrap` / `title-bar` / `page-title` / `logo` / `chrome` / `footer` / `disclaimer` / `meta` / `main` / `blue-summary-bar` / `kpi-row` / `kpi-card` / `kpi-label` / `kpi-value` / `kpi-desc` / `two-col` / `panel` / `panel-title` / `panel-body` / `bullet-list` / `bar-chart` / `bar-row` / `layer-grid` / `layer-card` / `efficiency-grid` / `eff-card` / `rec-grid` / `rec-card` / `cover-*` / `toc-*` / `section-*` / `back-thanks`

## 主题节奏

| 类 | 背景 | data-theme |
|----|------|------------|
| `slide cover` | `#1875D1` 封面 | `cover` |
| `slide section` | `#1875D1` 章节 | `section` |
| `slide toc` | `#FFFFFF` 目录 | `light` |
| `slide` | `#E3EFFE` 内页 | `page` |
| `slide summary` | `#EFF7FF` 摘要 | `light` |

规则：不能连续 4 页以上同为 `page`；10 页以上须有 cover/section/toc 呼吸页。

---

## R01 · Cover 封面

```html
<section class="slide cover" data-layout="R01" data-theme="cover">
  <img class="cover-waves" src="assets/cover-bg-pattern.svg" alt="" aria-hidden="true">
  <div class="cover-inner">
    <div class="chrome">
      <img class="logo" src="assets/logos/qieman-logo-white.svg" alt="且慢">
      <div class="tag">[栏目]</div>
      <div>01 / [总页数]</div>
    </div>
    <div class="cover-hero">
      <h1 class="cover-title">[主标题]</h1>
      <p class="cover-sub">[副标题]</p>
    </div>
    <div class="cover-bottom">
      <div class="cover-meta"><p>[客户/部门]</p><p>[周期]</p></div>
      <p class="cover-confidential">[保密说明]</p>
    </div>
  </div>
</section>
```

## R02 · TOC 目录

```html
<section class="slide toc" data-layout="R02" data-theme="light">
  <header class="toc-head">
    <h1 class="toc-head__title">目录</h1>
    <span class="toc-head__en">CONTENTS</span>
  </header>
  <ol class="toc-list main">
    <li class="toc-item"><span class="toc-num">01</span><span class="toc-title">[章节名]</span></li>
  </ol>
  <footer class="footer">
    <p class="disclaimer">[页脚声明]</p>
    <div class="meta"><span>[团队]</span><span>[页码]</span></div>
  </footer>
</section>
```

## R03 · Section 章节扉页

```html
<section class="slide section" data-layout="R03" data-theme="section">
  <img class="cover-waves" src="assets/cover-bg-pattern.svg" alt="" aria-hidden="true">
  <div class="chrome"><div class="tag">[章节标签]</div><div>[页码]</div></div>
  <div class="section-hero main">
    <p class="section-num-lg">[01]</p>
    <h1 class="section-title">[章节标题]</h1>
    <div class="section-line" aria-hidden="true"></div>
    <p class="section-en">[ENGLISH SUBTITLE]</p>
  </div>
</section>
```

## R04 · Inner 标准内页（页眉 + 双栏）

```html
<section class="slide" data-layout="R04" data-theme="page">
  <header class="header">
    <div class="title-wrap">
      <span class="title-bar" aria-hidden="true"></span>
      <h1 class="page-title">[18pt 等价页眉标题]</h1>
    </div>
    <a class="logo" href="https://qieman.com"><img src="assets/logos/qieman-logo-regular.svg" alt="且慢"></a>
  </header>
  <div class="main">
    <div class="blue-summary-bar">[一句话核心结论，≤28 字]</div>
    <div class="two-col">
      <section class="panel"><h2 class="panel-title">[左栏标题]</h2><div class="panel-body"><ul class="bullet-list"><li>[要点]</li></ul></div></section>
      <section class="panel"><h2 class="panel-title">[右栏标题]</h2><div class="panel-body"><ul class="bullet-list"><li>[要点]</li></ul></div></section>
    </div>
  </div>
  <footer class="footer">
    <p class="disclaimer">[风险提示/数据来源]</p>
    <div class="meta"><span>[客户]</span><span>[页码]</span></div>
  </footer>
</section>
```

## R05 · KPI Hero 四格指标

```html
<section class="slide" data-layout="R05" data-theme="page">
  <header class="header">…</header>
  <div class="main">
    <div class="kpi-row">
      <div class="kpi-card"><div class="kpi-label">[标签]</div><div class="kpi-value">[数]</div><div class="kpi-desc">[说明]</div></div>
      <!-- ×4 -->
    </div>
    <div class="two-col">…</div>
  </div>
  <footer class="footer">…</footer>
</section>
```

## R06 · Bar Chart 横向条形

## R07 · Layer Grid 三层架构

## R08 · Efficiency 提效四格

## R09 · Reflection 不足 vs 改进

## R10 · Back Cover 封底

```html
<section class="slide cover" data-layout="R10" data-theme="cover">
  <img class="cover-waves" src="assets/cover-bg-pattern.svg" alt="" aria-hidden="true">
  <div class="cover-inner">
    <div class="chrome"><img class="logo" src="assets/logos/qieman-logo-white.svg" alt="且慢"><div>[页码]</div></div>
    <div class="back-thanks main">
      <h1>THANKS!</h1>
      <p class="back-slogan">安放财富 · 静待花开</p>
    </div>
    <footer class="footer"><p class="disclaimer">[页脚]</p></footer>
  </div>
</section>
```

R06–R09 骨架为报告组件，容器为全屏 `.slide` + `.main`，禁止 `720pt` 固定宽。
