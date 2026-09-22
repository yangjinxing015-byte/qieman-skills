# report-design

且慢 **报告与演示** skill 分类。文件夹名 = 各目录 `SKILL.md` 的 `name` 字段。

## Skill 清单

| `name` | 层级 | 路径 | 职责 |
|--------|------|------|------|
| `qieman-ppt-design` | L2 | `qieman-ppt-design/SKILL.md` | 原生 PowerPoint、演示母版、品牌演示规范 |
| `qieman-report-swipe-design` | L1 | `qieman-report-swipe-design/SKILL.md` | 报告视觉 + guizang 横向翻页演示（100vw 全屏） |

- `qieman-ppt-design` `extends: qieman-ui-design`
- `qieman-report-swipe-design` `extends: qieman-ppt-design`

生成时按层级 **先 L0 → 再 L2 → 再 L1（若需要）**。

## 调用路由（Agent 必读）

### 1. PPT / 幻灯片（原生 .pptx）→ `qieman-ui-design` + `qieman-ppt-design`

**触发词（含同义表述）：**

- **PPT、ppt、PowerPoint、演示文稿**
- **幻灯片设计、幻灯片、演示页、汇报 PPT**
- 且慢品牌 PPT、金融演示文稿、投顾汇报材料
- 原生 `.pptx` 创建/编辑、PPT 母版

**调用：**

```bash
npx openskills read qieman-ui-design
npx openskills read qieman-ppt-design
```

### 2. 报告横向翻页演示 → `qieman-ui-design` + `qieman-ppt-design` + `qieman-report-swipe-design`

**触发词：**

- 家庭财富报告、财富报告书、财富报告
- 报告翻页、报告演示稿、swipe 报告 deck
- guizang 交互 + 且慢报告视觉
- 浏览器全屏报告演示

**调用：**

```bash
npx openskills read qieman-ui-design
npx openskills read qieman-ppt-design
npx openskills read qieman-report-swipe-design
```

> L1 必须在 L2 之上叠加；品牌色与风险表达对齐 L0。

### 3. 组合场景

| 场景 | 调用 skill |
|------|------------|
| 原生 `.pptx` / 品牌演示 PPT | `qieman-ui-design` + `qieman-ppt-design` |
| 家庭财富报告 / 全屏横向翻页演示 | 上两者 + `qieman-report-swipe-design` |

Cursor 快捷入口：`.cursor/skills/qieman-report-swipe-design/SKILL.md`。

## 分层关系

```
qieman-ui-design (L0, app-design)
└── qieman-ppt-design (L2, report-design)
    └── qieman-report-swipe-design (L1, report-design)
```

详细 token 与 Pattern 见各 skill 目录下的 `SKILL.md`。L0 基座：`../app-design/qieman-ui-design/`。全库目录见 [`../README.md`](../README.md)。
