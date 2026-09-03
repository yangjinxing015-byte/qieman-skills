# qieman-skills

且慢设计 Skills 仓库，用于沉淀且慢品牌在 App 设计、营销设计、报告设计、图表设计、AI 工作流等方向的可复用设计规范。

本仓库面向设计团队、产品同学、AI Agent、Cursor、Claude、Figma 等设计工作流使用，帮助团队在不同设计场景下快速调用统一规范、素材和生成规则。

---

## 仓库结构

```text
qieman-skills/
├── .claude-plugin/
├── skills/
│   ├── app-design/
│   ├── marketing-design/
│   ├── report-design/
│   └── workflow-design/
└── README.md
```

---

## Skills 入口

完整的 Skills 分层结构、调用路由、Skill index、Frontmatter 规范和调用示例见：

```text
skills/README.md
```

---

## 当前 Skill 分类

| 分类 | 说明 |
|---|---|
| `app-design` | App 界面、Web 页面、组件、弹窗、图表、数据卡片等产品设计能力 |
| `marketing-design` | H5、活动页、VIP 高净值、IP 视觉、社群运营图等营销设计能力 |
| `report-design` | PPT、汇报页、报告、演示材料等报告与展示设计能力 |
| `workflow-design` | AI 设计流程、Prompt、Cursor、Claude、Figma、HTML 生成等工作流规范 |

---

## 使用说明

每个 Skill 以独立目录组织，正式入口文件为：

```text
SKILL.md
```

推荐目录结构：

```text
skill-name/
├── SKILL.md
├── README.md          可选，用于补充说明
├── assets/            可选，放正式素材
└── references/        可选，放参考资料
```

---

## 文件用途说明

| 文件 / 目录 | 作用 |
|---|---|
| `SKILL.md` | Skill 的正式规范入口，调用时优先读取 |
| `README.md` | 说明文档，用于解释目录结构、调用方式和维护规则 |
| `assets/` | 正式素材目录，如 Logo、IP、背景、模板图 |
| `references/` | 参考资料目录，如需求说明、历史截图、补充规范 |

---

## 维护说明

- 新增 Skill 时，需要同步更新 `skills/README.md`。
- 正式规范以各 Skill 目录下的 `SKILL.md` 为准。
- 素材文件应放入对应 Skill 的 `assets/` 目录。
- 参考资料、历史截图、需求说明应放入对应 Skill 的 `references/` 目录。
- 文件夹命名统一使用英文小写和短横线。
- 不建议提交 `.DS_Store` 等系统文件。

---

## 快速入口

```text
skills/README.md
```

用于查看完整 Skill 分层与调用说明。
