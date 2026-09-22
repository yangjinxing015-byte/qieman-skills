---
name: qieman-report-swipe-design
layer: L1
extends: qieman-ppt-design
license: Complete terms in LICENSE.txt
description: >-
  且慢报告横向翻页 HTML deck（L1，extends qieman-ppt-design）。
  视觉为且慢报告 token；尺寸与交互对齐 guizang-ppt-skill
  （100vw×100vh、键盘/滚轮/触屏/圆点/ESC 索引）。
  触发词：家庭财富报告、报告翻页、报告演示稿、swipe 报告 deck、浏览器报告 PPT。
---

# qieman-report-swipe-design

| 字段 | 值 |
|------|-----|
| **ID** | `qieman-report-swipe-design` |
| **层级** | L1（`extends qieman-ppt-design`） |
| **规范** | 本文件 |
| **依赖** | `qieman-ui-design` → `qieman-ppt-design` → **本 skill** |
| **更新日期** | 2026-07-09 |

## 定位

| Skill | 画布 | 交互 | 何时用 |
|-------|------|------|--------|
| **`qieman-ppt-design`** | 原生 `.pptx` | PowerPoint | 品牌演示、VIP 投顾报告 PPT |
| **`qieman-report-swipe-design`**（本 skill） | **`100vw × 100vh` 全屏** | **guizang 横向翻页** | 家庭财富报告、顾问讲解、浏览器演示 |

## 调用

```bash
npx openskills read qieman-ui-design
npx openskills read qieman-ppt-design
npx openskills read qieman-report-swipe-design
```

---

## Overview

`qieman-report-swipe-design` 将 **且慢报告视觉语言**（浅蓝画布、白卡片无描边、品牌蓝 KPI、页眉页脚声明）与 **guizang-ppt-skill 的演示交互**（单文件 HTML、横向 swipe、键盘 ← →、滚轮、触屏、底部圆点、ESC 缩略图索引）结合。

参考映射：

| guizang-ppt-skill | 且慢报告翻页版 |
|-------------------|----------------|
| `template.html` 翻页 JS | `assets/template-report-swipe.html` |
| `100vw × 100vh` `.slide` | 同左 |
| `themes.md` 预设主题 | `references/themes-report-swipe.md`（3 套且慢报告色） |
| `layouts.md` 版式骨架 | `references/layouts-report-swipe.md`（R01–R12） |
| `checklist.md` | `references/checklist.md` |
| `validate-swiss-deck.mjs` | `scripts/validate-report-swipe-deck.mjs` |

**不引入**：guizang WebGL 流体背景、杂志衬线、瑞士风 IKB 高亮。报告翻页版保持且慢 PingFang + 报告蓝。

## When to Use

**合适：**

- 家庭财富报告 / 投顾报告 / 绩效总结的**浏览器现场演示**
- 用户已有 PDF/文档，要**可翻页、可全屏**的报告 HTML
- 需要 guizang 式交互，但视觉必须是**且慢报告风**（非网页 PPT 灰底）

**不合适：**

- 原生 `.pptx` → 用 **`qieman-ppt-design`**

**触发词：**

- 报告翻页、报告演示稿、swipe 报告 deck
- 财富报告 HTML 演示、横向翻页报告
- guizang 交互 + 且慢报告视觉

---

## 工作流

### Step 1 · 确认形态

若用户未说明，先确认：

| 问题 | 选项 |
|------|------|
| 演示还是导出？ | 浏览器翻页演示 → **本 skill**；原生 PPT → `qieman-ppt-design` |
| 页数/时长？ | 15min≈12页，30min≈18页 |
| 主题色？ | `themes-report-swipe.md` 三选一 |

### Step 2 · 拷贝模板

```bash
mkdir -p "项目/XXX/ppt/assets/logos"
cp "<SKILL_ROOT>/assets/template-report-swipe.html" "项目/XXX/ppt/index.html"
cp "<SKILL_ROOT>/assets/cover-bg-pattern.svg" "项目/XXX/ppt/assets/"
cp "<SKILL_ROOT>/assets/logos/*.svg" "项目/XXX/ppt/assets/logos/"
```

必改：`<title>`、`[必填]` 占位符、`:root` 主题（从 `themes-report-swipe.md`）。

### Step 3 · 预检类名

Read `assets/template-report-swipe.html` 的 `<style>` 全文。`layouts-report-swipe.md` 用到的类必须已定义。**模板是唯一类名来源。**

### Step 4 · 填充 R01–R12 版式

从 `references/layouts-report-swipe.md` 粘贴骨架到 `<!-- SLIDES_HERE -->`。

每页：

```html
<section class="slide" data-layout="R04" data-theme="page">
```

主题类：

- `slide cover` + `data-theme="cover"`
- `slide section` + `data-theme="section"`
- `slide toc` + `data-theme="light"`
- `slide` + `data-theme="page"`
- `slide summary` + `data-theme="light"`

### Step 5 · 校验与预览

```bash
node <SKILL_ROOT>/scripts/validate-report-swipe-deck.mjs 项目/XXX/ppt/index.html
open "项目/XXX/ppt/index.html"
```

对照 `references/checklist.md` P0 逐项检查。

**交互验收（与 guizang 一致）：**

- ← → / 空格：翻页
- 滚轮 / 触屏左右滑：翻页
- 底部圆点：跳转
- **ESC**：缩略图索引，点击跳转
- Home / End：首尾页

---

## 画布与交互规范

### 尺寸（对齐 guizang）

```css
#deck { position: fixed; height: 100vh; display: flex; }
.slide { width: 100vw; height: 100vh; flex: 0 0 100vw; }
/* JS: deck.style.width = total * 100 + 'vw' */
/* JS: deck.style.transform = `translateX(${-idx * 100}vw)` */
```

**禁止**在本 skill 产出中使用 `720pt × 405pt`、`.deck-viewport` + `fitDeck()` 合并预览。

### 视觉（报告 token）

- 内页背景：`#E3EFFE`（`--bg-page`）
- 封面/章节：`#1875D1`（`--brand-deep`）
- 白卡片：`border: none`
- 页眉竖条 + 标题：视觉等价 **18pt / 600**
- 页脚声明：**单行 6.5pt 等价**，含风险提示

### 页脚推荐文案

```text
本报告由且慢基于账户信息、市场数据与投顾模型生成，仅供参考，不构成收益承诺。投资有风险，入市需谨慎。
```

内部汇报可改为：「本材料为且慢设计团队内部汇报，数据截止 YYYY-MM-DD。」

---

## 资源导览

```
qieman-report-swipe-design/
├── SKILL.md
├── README.md
├── assets/
│   ├── template-report-swipe.html   ← 种子（CSS + guizang 式翻页 JS）
│   ├── cover-bg-pattern.svg
│   └── logos/
├── scripts/
│   └── validate-report-swipe-deck.mjs
└── references/
    ├── themes-report-swipe.md
    ├── layouts-report-swipe.md      ← R01–R12
    └── checklist.md
```

## Do's and Don'ts

### Do

- 先读 `qieman-ppt-design` 再读本 skill
- 用 `template-report-swipe.html` 种子
- 保持 guizang 式全屏翻页交互
- 保持报告视觉 token 与白卡片无描边

### Don't

- 不要用 `720pt` 固定画布做本 skill 产出
- 不要加灰色卡片描边、强阴影、外链字体

---

## 示例请求

```text
把这份财富报告做成且慢报告风的横向翻页 HTML，交互像 guizang PPT，主题用经典报告蓝。
```

```text
基于绩效总结 PDF 生成全屏 swipe deck，保留报告页眉页脚，不要 720pt 合并页。
```
