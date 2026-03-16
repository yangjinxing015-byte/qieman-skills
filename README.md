## Project structure

```text
qieman-skills/
├── .claude-plugin/                         # Claude/Agent 插件元信息
│   └── plugin.json
├── skills/                                # Skills 主目录（每个子目录 = 一个技能域）
│   ├── ui-ux/                             # App UI/UX（组件/版式/交互/交付）
│   │   ├── SKILL.md
│   │   ├── references/                    # 规范长文/清单/模板/示例（source of truth）
│   │   └── assets/                        # UI/UX 小素材（logos/snippets，避免大文件）
│   │
│   ├── marketing-design/                  # 营销设计（KV/H5/海报/活动视觉）
│   │   ├── SKILL.md
│   │   ├── references/                    # 营销规范/模块/配色/导出标准等（source of truth）
│   │   │   ├── README.md
│   │   │   └── h5/                        # H5 专项规范
│   │   │       ├── color-guidelines_zh.md
│   │   │       ├── card-styles_zh.md
│   │   │       ├── header-hero-guidelines_zh.md
│   │   │       └── marketing-design-spec_zh.md
│   │   └── assets/                        # 营销素材库（library/* + fonts）
│   │
│   ├── data-visualization/                # 数据图表（ECharts/配色/图表规范）
│   │   ├── SKILL.md
│   │   └── references/
│   │
│   ├── ppt/                               # PPT 规范（模板结构/排版/交付）
│   │   ├── SKILL.md
│   │   └── references/
│   │
│   ├── motion/                            # 动效规范（节奏/转场/导出）
│   │   ├── SKILL.md
│   │   └── references/
│   │
│   ├── xiaogu-ip/                         # 小顾 IP（角色设定/表情/姿态/风格）
│   │   ├── SKILL.md
│   │   └── references/
│   │
│   └── ai-workflow/                       # AI 工作流（SOP/提示词/质量门槛/交付流程）
│       ├── SKILL.md
│       └── references/
│
├── CONTRIBUTING.md                        # 贡献指南（可选）
└── README.md                              # 本文件（入口与导航）
