# qieman skills

> **包更新日期**：2026-07-02（各文件以头部信息栏「更新日期」为准，由 `scripts/sync-updated-at.py` 同步）

且慢设计 skill 集合。官方约定：**文件夹名 = `SKILL.md` 的 `name` 字段**；完整规范均内嵌于各目录 `SKILL.md`。

## 框架结构

```
qieman-skills/
├── app-design/                  App 界面与组件
│   ├── qieman-ui-design         L0
│   ├── qieman-sell-popup-design L1
│   └── qieman-chart-design      L2
├── marketing-design/              营销传播
│   ├── qieman-h5-design         L2
│   └── qieman-vip-design        L2
└── report-design/               报告与演示
    ├── qieman-ppt-design        L2
    └── qieman-report-design     L1
```

分层说明见 `app-design/qieman-ui-design/SKILL.md` → **Skill Layering**；**app-design 调用路由**见 [`app-design/README.md`](app-design/README.md)；**marketing-design 调用路由**见 [`marketing-design/README.md`](marketing-design/README.md)；**report-design 调用路由**见 [`report-design/README.md`](report-design/README.md)。

## app-design 调用路由（摘要）

| 用户意图 / 触发词 | 调用 skill |
|------------------|------------|
| UI 界面、UI 设计、且慢 App 设计 | `qieman-ui-design` |
| 弹窗设计、营销类弹窗、卖出挽留弹窗 | `qieman-ui-design` + `qieman-sell-popup-design` |
| 上述 UI 类 + 图表设计、曲线、走势图、饼图等 | `qieman-ui-design` + `qieman-chart-design` |

完整路由表与组合场景见 [`app-design/README.md`](app-design/README.md)。

## marketing-design 调用路由（摘要）

| 用户意图 / 触发词 | 调用 skill |
|------------------|------------|
| H5 页面设计、活动页设计、营销页设计 | `qieman-ui-design` + `qieman-h5-design` |
| 且慢高净值私域宣传海报、VIP 视觉设计、高客营销设计、顾问设计 | `qieman-ui-design` + `qieman-vip-design` |

完整路由表见 [`marketing-design/README.md`](marketing-design/README.md)。

## report-design 调用路由（摘要）

| 用户意图 / 触发词 | 调用 skill |
|------------------|------------|
| PPT、幻灯片设计 | `qieman-ui-design` + `qieman-ppt-design` |
| 家庭财富报告、财富报告书 | `qieman-ui-design` + `qieman-ppt-design` + `qieman-report-design` |

完整路由表见 [`report-design/README.md`](report-design/README.md)。

## 目录

| 分类 | 文件夹 | `name` | 层级 | 完整规范 | 更新日期 |
|------|--------|--------|------|----------|----------|
| `app-design` | `qieman-ui-design` | `qieman-ui-design` | L0 | `SKILL.md` | 2026-07-02 |
| `app-design` | `qieman-sell-popup-design` | `qieman-sell-popup-design` | L1 | `SKILL.md` | 2026-07-02 |
| `app-design` | `qieman-chart-design` | `qieman-chart-design` | L2 | `SKILL.md` | 2026-07-02 |
| `marketing-design` | `qieman-h5-design` | `qieman-h5-design` | L2 | `SKILL.md` | 2026-07-02 |
| `marketing-design` | `qieman-vip-design` | `qieman-vip-design` | L2 | `SKILL.md` | 2026-07-02 |
| `report-design` | `qieman-ppt-design` | `qieman-ppt-design` | L2 | `SKILL.md` | 2026-07-02 |
| `report-design` | `qieman-report-design` | `qieman-report-design` | L1 | `SKILL.md` | 2026-07-02 |

## 统一布局

### Frontmatter

**L0 / L2 `SKILL.md`：**

```yaml
---
name: <与文件夹同名>
layer: L0 | L2
license: Complete terms in LICENSE.txt
description: >-
  ...
extends: qieman-ui-design   # L2 必填；L0 省略
---
```

**L1 `SKILL.md`：**

```yaml
---
name: <与文件夹同名>
layer: L1
extends: <父级 skill name>
license: Complete terms in LICENSE.txt
description: >-
  ...
---
```

### 头部信息栏

**L0 / L2：**

```markdown
# <name>

| 字段 | 值 |
|------|-----|
| **ID** | `<name>` |
| **层级** | L0 / L2 |
| **分类** | app-design / marketing-design / report-design |
| **规范** | 本文件 `SKILL.md` |
| **依赖** | …（L2） |
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

## 调用示例

```bash
npx openskills read qieman-ui-design
npx openskills read qieman-sell-popup-design
npx openskills read qieman-h5-design
npx openskills read qieman-ppt-design
npx openskills read qieman-report-design
```

Cursor 报告幻灯片快捷入口：`.cursor/skills/qieman-report-design/SKILL.md`。

> 历史 skill `qieman-pdf-design` 已移至 `_legacy/`，不在当前分类框架内。
