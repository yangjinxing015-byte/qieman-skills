# report-design

且慢 **报告与演示** skill 分类。文件夹名 = 各目录 `SKILL.md` 的 `name` 字段。

## Skill 清单

| `name` | 层级 | 路径 | 职责 |
|--------|------|------|------|
| `qieman-ppt-design` | L2 | `qieman-ppt-design/SKILL.md` | 原生 PowerPoint、演示母版、品牌演示规范 |
| `qieman-report-design` | L1 | `qieman-report-design/SKILL.md` | HTML 16:9 投顾/家庭财富报告幻灯片 deck |

- `qieman-ppt-design` `extends: qieman-ui-design`
- `qieman-report-design` `extends: qieman-ppt-design`

生成时按层级 **先 L0 → 再 L2 → 再 L1（若需要）**。

## 调用路由（Agent 必读）

### 1. PPT / 幻灯片 → `qieman-ui-design` + `qieman-ppt-design`

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

### 2. 家庭财富报告 / 报告书 → `qieman-ui-design` + `qieman-ppt-design` + `qieman-report-design`

**触发词（含同义表述）：**

- **家庭财富报告、财富报告书、财富报告**
- 投顾报告、资产配置报告、账户复盘报告
- HTML 报告幻灯片、16:9 报告 deck、合并报告页
- 客户提案幻灯片、财富规划报告书

**调用：**

```bash
npx openskills read qieman-ui-design
npx openskills read qieman-ppt-design
npx openskills read qieman-report-design
```

> L1 必须在 L2 之上叠加；画布尺寸、页眉页脚、白卡片无描边等以 L1 为准；品牌色与风险表达对齐 L0。

### 3. 组合场景

| 场景 | 调用 skill |
|------|------------|
| 原生 `.pptx` / 品牌演示 PPT | `qieman-ui-design` + `qieman-ppt-design` |
| HTML 16:9 财富报告 deck | `qieman-ui-design` + `qieman-ppt-design` + `qieman-report-design` |
| 家庭财富报告（合并 HTML 幻灯片） | 同上（走 `qieman-report-design`） |

Cursor 快捷入口：`.cursor/skills/qieman-report-design/SKILL.md`（规范真源为本目录 `qieman-report-design/SKILL.md`）。

## 分层关系

```
qieman-ui-design (L0, app-design)
└── qieman-ppt-design (L2, report-design)
    └── qieman-report-design (L1, report-design)
```

详细 token 与 Pattern 见各 skill 目录下的 `SKILL.md`；全局分层说明见 `../app-design/qieman-ui-design/SKILL.md` → **Skill Layering**。
