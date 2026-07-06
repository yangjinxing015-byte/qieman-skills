# qieman skills

> 包更新日期：2026-07-02  
> 各文件以头部信息栏「更新日期」为准，后续可由 `scripts/sync-updated-at.py` 同步。

且慢设计 skill 集合。官方约定：**文件夹名 = `SKILL.md` 的 `name` 字段**；完整规范均内嵌于各目录 `SKILL.md`。

---

## 框架结构

```text
qieman-skills/
├── app-design/                         App 界面与组件
│   ├── qieman-ui-design                L0
│   ├── qieman-sell-popup-design        L1
│   └── qieman-chart-design             L2
│
├── marketing-design/                   营销传播
│   ├── qieman-h5-design                L2
│   ├── qieman-vip-design               L2
│   └── qieman-ip-visual-design         L2
│
├── report-design/                      报告与演示
│   ├── qieman-ppt-design               L2
│   └── qieman-report-design            L1
│
├── workflow-design/                    AI 设计工作流
│   └── qieman-ai-workflow-design       L1
│
└── README.md
```

分层说明见：

```text
app-design/qieman-ui-design/SKILL.md
```

各分类调用路由：

```text
app-design/README.md
marketing-design/README.md
report-design/README.md
```

---

## app-design 调用路由（摘要）

| 用户意图 / 触发词 | 调用 skill |
|---|---|
| UI 界面、UI 设计、且慢 App 设计、Web 页面、组件、交互规范 | `qieman-ui-design` |
| 弹窗设计、营销弹窗、交易确认弹窗、风险提示弹窗、卖出挽留弹窗 | `qieman-ui-design` + `qieman-sell-popup-design` |
| 图表设计、曲线、走势图、饼图、数据卡片、App 内数据可视化 | `qieman-ui-design` + `qieman-chart-design` |

完整路由表与组合场景见：

```text
app-design/README.md
```

---

## marketing-design 调用路由（摘要）

| 用户意图 / 触发词 | 调用 skill |
|---|---|
| H5 页面设计、活动页设计、营销页设计、长图设计 | `qieman-ui-design` + `qieman-h5-design` |
| 且慢高净值私域宣传海报、VIP 视觉设计、高客营销设计、顾问设计 | `qieman-ui-design` + `qieman-vip-design` |
| 小顾 IP、IP 视觉设计、内容封面、社群物料、运营图、IP 活动图 | `qieman-ui-design` + `qieman-ip-visual-design` |

完整路由表见：

```text
marketing-design/README.md
```

---

## report-design 调用路由（摘要）

| 用户意图 / 触发词 | 调用 skill |
|---|---|
| PPT、幻灯片设计、汇报页、方案页、路演材料 | `qieman-ui-design` + `qieman-ppt-design` |
| 家庭财富报告、财富报告书、客户报告、资产报告、PDF 报告 | `qieman-ui-design` + `qieman-ppt-design` + `qieman-report-design` |

完整路由表见：

```text
report-design/README.md
```

---

## workflow-design 调用路由（摘要）

| 用户意图 / 触发词 | 调用 skill |
|---|---|
| AI 工作流、Prompt、Claude、Cursor、Figma、HTML 生成、自动化流程、设计提效、工具链 | `qieman-ai-workflow-design` |

---

## 目录

| 分类 | 文件夹 | `name` | 层级 | 完整规范 | 更新日期 |
|---|---|---|---|---|---|
| `app-design` | `qieman-ui-design` | `qieman-ui-design` | L0 | `SKILL.md` | 2026-07-02 |
| `app-design` | `qieman-sell-popup-design` | `qieman-sell-popup-design` | L1 | `SKILL.md` | 2026-07-02 |
| `app-design` | `qieman-chart-design` | `qieman-chart-design` | L2 | `SKILL.md` | 2026-07-02 |
| `marketing-design` | `qieman-h5-design` | `qieman-h5-design` | L2 | `SKILL.md` | 2026-07-02 |
| `marketing-design` | `qieman-vip-design` | `qieman-vip-design` | L2 | `SKILL.md` | 2026-07-02 |
| `marketing-design` | `qieman-ip-visual-design` | `qieman-ip-visual-design` | L2 | `SKILL.md` | 2026-07-02 |
| `report-design` | `qieman-ppt-design` | `qieman-ppt-design` | L2 | `SKILL.md` | 2026-07-02 |
| `report-design` | `qieman-report-design` | `qieman-report-design` | L1 | `SKILL.md` | 2026-07-02 |
| `workflow-design` | `qieman-ai-workflow-design` | `qieman-ai-workflow-design` | L1 | `SKILL.md` | 2026-07-02 |

---

## 统一布局

### Frontmatter

#### L0 / L2 `SKILL.md`

```yaml
---
name: <与文件夹同名>
layer: L0 | L2
license: Complete terms in LICENSE.txt
description: >
  ...
extends: qieman-ui-design   # L2 必填；L0 省略
---
```

#### L1 `SKILL.md`

```yaml
---
name: <与文件夹同名>
layer: L1
extends: <父级 skill name>
license: Complete terms in LICENSE.txt
description: >
  ...
---
```

---

## 头部信息栏

### L0 / L2

```md
# <name>

| 字段 | 值 |
|---|---|
| **ID** | `<name>` |
| **层级** | L0 / L2 |
| **分类** | app-design / marketing-design / report-design / workflow-design |
| **规范** | 本文件 `SKILL.md` |
| **依赖** | ... |
| **更新日期** | YYYY-MM-DD |

## 调用

```bash
npx openskills read <name>
```
```

---

## 更新日期维护

```bash
python3 scripts/sync-updated-at.py
```

---

## 调用示例

```bash
npx openskills read qieman-ui-design
npx openskills read qieman-sell-popup-design
npx openskills read qieman-chart-design
npx openskills read qieman-h5-design
npx openskills read qieman-vip-design
npx openskills read qieman-ip-visual-design
npx openskills read qieman-ppt-design
npx openskills read qieman-report-design
npx openskills read qieman-ai-workflow-design
```

Cursor 报告幻灯片快捷入口：

```text
.cursor/skills/qieman-report-design/SKILL.md
```

---

## 当前重点 Skill

### `qieman-ip-visual-design`

路径：

```text
marketing-design/qieman-ip-visual-design/
```

用途：

```text
用于生成且慢小顾 IP 相关视觉物料。当前版本主要支持 3:4 内容封面，固定使用且慢 Logo、统一蓝色背景、小顾 IP 与四类封面模板，后续可扩展至社群图、运营图、活动图、App 内 IP 引导等场景。
```

资产结构：

```text
qieman-ip-visual-design/
├── SKILL.md
├── README.md
├── references/
└── assets/
    ├── background/
    ├── examples/
    ├── ip/
    └── logo/
```

---

## 维护说明

### 新增 Skill

新增 Skill 时，需要同步检查：

- 是否归入正确分类。
- 文件夹名是否符合 `qieman-{scene}-design`。
- `SKILL.md` 中的 `name` 是否与文件夹名一致。
- 是否需要补充 `assets/`。
- 是否需要补充 `references/`。
- 是否需要更新本 README 的目录与调用路由。

---

### 修改 Skill

修改 Skill 时，需要同步检查：

- `SKILL.md` 是否更新。
- README 是否需要同步入口说明。
- `assets/` 路径是否仍然有效。
- 文件夹名是否与 `name` 字段一致。
- 示例图、资产图是否命名清晰、可复用。
- 是否误上传 `.DS_Store` 等系统文件。

---

## 不建议提交的文件

```text
.DS_Store
Thumbs.db
node_modules/
.env
```

如后续频繁出现 `.DS_Store`，建议在仓库根目录新增 `.gitignore`：

```text
.DS_Store
```

---

## 历史说明

历史 skill `qieman-pdf-design` 已移至 `_legacy/`，不在当前分类框架内。

---

## 更新记录

| 日期 | 更新内容 |
|---|---|
| 2026-07-02 | 调整 Skills 分层结构，新增 `app-design`、`marketing-design`、`report-design`、`workflow-design` 分类 |
| 2026-07-02 | 将 `qieman-ip-visual-design` 归入 `marketing-design` |
| 2026-07-02 | 更新 Skill index 与调用路由 |
