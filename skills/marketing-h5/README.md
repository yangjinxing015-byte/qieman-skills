# 且慢营销 H5 Skill（正式版）

本目录为 **marketing-h5** 的唯一正式版本目录，用于且慢营销 H5 设计相关任务的规范管理、参考文档沉淀与素材组织。

## 目录说明

- `SKILL.md`：主 Skill 定义与使用说明，包含适用任务、输出预期、参考文档加载方式、素材调用规则等
- `references/`：参考规范目录，包含首屏 Hero、卡片、配色、营销页面结构等设计规范
- `assets/`：本地素材目录，包含 icons、characters、decorations、scenes、fonts 等资源

## 正式维护范围

本目录中纳入正式版本控制的内容包括：

- `SKILL.md`
- `README.md`
- `references/` 下全部规范文件
- `assets/` 下需共享的正式素材

## 不纳入正式仓库的内容

以下内容不应纳入 `skills/marketing-h5` 的正式版本控制：

- `output/`
- HTML demo
- 页面规划草稿
- 原型草稿
- 临时预览文件
- 测试文件
- `.DS_Store`

## 使用与维护

- 后续仅维护本目录 `skills/marketing-h5`
- 不再将 `.cursor/skills/marketing-h5` 作为独立正式版本目录
- 若本地为了预览需要使用 `output/` 或 HTML demo，应保留在本地工作目录中，不同步到正式仓库
- 所有 references 与 assets 的正式更新，均以本目录为准

## 推荐目录结构

```text
skills/marketing-h5/
├── README.md
├── SKILL.md
├── assets/
│   ├── fonts/
│   └── library/
└── references/
    ├── README.md
    ├── card-styles_zh.md
    ├── color-guidelines_zh.md
    ├── header-hero-guidelines_zh.md
    └── marketing-design-spec_zh.md
