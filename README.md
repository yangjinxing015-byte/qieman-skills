# Qieman Design Skills (且慢设计技能库)

面向且慢（Qieman）设计团队的 **Skill / Spec / Asset** 共享仓库：沉淀 UI/UX、营销设计、数据图表、PPT、动效、小顾 IP、AI 工作流等规范与素材，作为可复用的“技能单元”，便于在 Cursor / Claude / Agent 工作流中按需调用。

> Repo structure inspired by Anthropic Skills-style organization: each skill is self-contained with `SKILL.md` + optional `references/` + optional `assets/`.

---

```md ## Skill index（入口导航） - UI/UX → [skills/ui-ux/SKILL.md](skills/ui-ux/SKILL.md) - Marketing Design → [skills/marketing-design/SKILL.md](skills/marketing-design/SKILL.md) - Data Visualization → [skills/data-visualization/SKILL.md](skills/data-visualization/SKILL.md) - PPT → [skills/ppt/SKILL.md](skills/ppt/SKILL.md) - Motion → [skills/motion/SKILL.md](skills/motion/SKILL.md) - Xiaogu IP → [skills/xiaogu-ip/SKILL.md](skills/xiaogu-ip/SKILL.md) - AI Workflow → [skills/ai-workflow/SKILL.md](skills/ai-workflow/SKILL.md) ```

- UI/UX → `skills/ui-ux/SKILL.md`
- Marketing Design → `skills/marketing-design/SKILL.md`
- Data Visualization → `skills/data-visualization/SKILL.md`
- PPT → `skills/ppt/SKILL.md`
- Motion → `skills/motion/SKILL.md`
- Xiaogu IP → `skills/xiaogu-ip/SKILL.md`
- AI Workflow → `skills/ai-workflow/SKILL.md`

---

## Project structure

```text
qieman-skills/
├─ .claude-plugin/                 # Claude/Agent 插件元信息
│  └─ plugin.json
├─ skills/                         # Skills 主目录（每个子目录 = 一个技能域）
│  ├─ ui-ux/                       # App UI/UX（组件/版式/交互/交付）
│  │  ├─ SKILL.md
│  │  ├─ references/               # 规范长文/清单/模板/示例（source of truth）
│  │  └─ assets/                   # UI/UX 小素材（logos/snippets，避免大文件）
│  ├─ marketing-design/            # 营销设计（KV/H5/海报/活动视觉）
│  │  ├─ SKILL.md
│  │  ├─ references/               # 营销规范/模块/配色/导出标准等（source of truth）
│  │  └─ assets/                   # 营销素材库（library/* + fonts）
│  ├─ data-visualization/          # 数据图表（ECharts/配色/图表规范）
│  │  ├─ SKILL.md
│  │  └─ references/
│  ├─ ppt/                         # PPT 规范（模板结构/排版/交付）
│  │  ├─ SKILL.md
│  │  └─ references/
│  ├─ motion/                      # 动效规范（节奏/转场/导出）
│  │  ├─ SKILL.md
│  │  └─ references/
│  ├─ xiaogu-ip/                   # 小顾 IP（角色设定/表情/姿态/风格）
│  │  ├─ SKILL.md
│  │  └─ references/
│  └─ ai-workflow/                 # AI 工作流（SOP/提示词/质量门槛/交付流程）
│     ├─ SKILL.md
│     └─ references/
├─ CONTRIBUTING.md                 # 贡献指南（可选）
└─ README.md                       # 本文件（入口与导航）

