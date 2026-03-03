# 且慢营销规范 Skill 官方规范梳理说明

> 依据 [Anthropic Skills 规范](https://github.com/anthropics/skills) 与 Cursor create-skill 指南，对且慢营销规范相关文档进行梳理与重构。

**已执行**：主 SKILL.md 入口、frontmatter 优化、description 补全 When/触发词、移除非标准 license 字段。

---

## 一、Skill 官方规范要点

### 1.1 基本结构

- **必须字段**：`name`（≤64 字符、小写字母数字连字符）、`description`（≤1024 字符、非空）
- **目录结构**：每个 skill 为独立文件夹，内含 `SKILL.md` 主文件；可选 `reference.md`、`examples.md`、`scripts/`

### 1.2 Description 撰写规范

- **第三人称**：描述技能能力，而非「我能帮你…」
- **包含 WHAT 与 WHEN**：说明做什么 + 在什么场景触发
- **含触发词**：便于 agent 检索匹配

### 1.3 内容原则

- **简洁优先**：SKILL.md 建议 ≤500 行，避免冗长
- **渐进式披露**：核心指引放 SKILL.md，详细内容放 reference 引用
- **引用深度**：仅一层引用（SKILL.md → reference.md），避免多级嵌套
- **术语一致**：全文统一术语

### 1.4 文档结构建议

```markdown
---
name: skill-name
description: [WHAT] + [WHEN/触发场景]
---

# 技能标题

## Quick Start / Instructions
核心指引

## Examples
使用示例

## Guidelines
规范要点

## Additional Resources
- 详见 [reference.md](reference.md)
```

---

## 二、现有文档与规范对照

| 文档 | 当前状态 | 符合度 | 建议调整 |
|------|----------|--------|----------|
| **卡片风格设计样式.md** | 已是 SKILL 格式（qieman-card-style-design） | ✅ 较高 | 1. 移除非标准 frontmatter 字段（如 license）<br>2. 部分长内容可拆到 reference<br>3. description 已包含 WHAT+WHEN |
| **且慢营销配色规范.md** | 已是 SKILL 格式（qieman-marketing-colors） | ✅ 较高 | description 可更明确触发词 |
| **且慢营销设计规范.md** | 已是 SKILL 格式（qieman-marketing-design） | ✅ 较高 | 可拆出附录到 reference.md |
| **营销头部氛围图设计SKILL.md** | 已是 SKILL 格式（qieman-header-atmosphere） | ⚠️ 偏长 | 1. 移除 license（非标准）<br>2. 主 SKILL 压缩核心流程<br>3. 详细规格移入 reference |

### 命名规范

- `name` 已统一为小写连字符格式
- 文件名建议：`SKILL.md` 作为主入口；若保留多个主题，可拆为 `qieman-marketing-design/SKILL.md` 等子目录

---

## 三、推荐目录结构（重构后）

```
且慢营销规范/
├── SKILL.md                           # 主入口：整体营销规范索引（新建）
├── 且慢营销规范-Skill梳理说明.md       # 本文档
├── qieman-marketing-design/           # 设计规范 skill
│   ├── SKILL.md
│   └── reference.md                   # 详细附录（可选）
├── qieman-marketing-colors/           # 配色规范 skill
│   └── SKILL.md
├── qieman-card-style-design/          # 卡片风格 skill
│   └── SKILL.md
├── qieman-header-atmosphere/          # 头部氛围图 skill
│   ├── SKILL.md
│   └── reference.md                   # 资产规格、质检等详情
├── fonts/
├── logo/
├── assets/
└── 麦穗/
```

**或保持扁平结构**（便于现有项目引用）：

```
且慢营销规范/
├── SKILL.md                    # 主入口：聚合索引
├── 且慢营销设计规范-SKILL.md    # 重命名，统一 SKILL 后缀
├── 且慢营销配色规范-SKILL.md
├── 卡片风格设计样式-SKILL.md
├── 营销头部氛围图设计-SKILL.md
├── reference/
│   ├── 设计规范-reference.md
│   └── 氛围图-reference.md
├── fonts/
├── logo/
└── assets/
```

---

## 四、各文档 description 优化建议

### 4.1 qieman-marketing-design

**当前**：且慢品牌营销设计规范。指导 H5、落地页、运营位、海报、信息流、战报等营销物料的视觉设计……

**建议**：在末尾补触发词，如：
> Use when designing or implementing Qieman H5, landing pages, banners, posters, or when user mentions Qieman marketing materials, brand consistency, fonts, spacing, or CTA design.

### 4.2 qieman-marketing-colors

**当前**：已含场景与 CTA 说明。

**建议**：补英文触发词以增强检索：
> Use when selecting colors for Qieman H5, campaign pages, high-net-worth or AI/innovation themes, or when user asks for brand blue, CTA color, or color palette.

### 4.3 qieman-card-style-design

**当前**：已较完整。

**建议**：保持，可微调「与 XX 配合使用」为更直接的 When 表述。

### 4.4 qieman-header-atmosphere

**当前**：已含配合说明。

**建议**：移除 `license` 字段（非标准）；description 可补：
> Use when designing header/hero atmosphere images for Qieman H5, or when user mentions 3D icons, flat characters, background gradient, or data-bg.

---

## 五、渐进式披露拆分建议

| Skill | 保留在 SKILL.md | 可移至 reference.md |
|-------|-----------------|---------------------|
| 设计规范 | 原则、色彩/字体/排版/间距、Logo、主 CTA、模块 01–04 | @font-face、Logo HTML、模块 05–11 概要 |
| 配色规范 | 选色流程、主 CTA、基调表、A/B/C/红金/Neutral 色板 | 完整 CSS 变量、100–1000 色阶 |
| 卡片风格 | 页面结构、卡片规范、形态选择、主 CTA、Component 摘要 | 详细结构图、柱状图子类型、CSS 参考 |
| 氛围图 | 布局规则、资产分类与规格、拼装顺序、色彩约定、技术规格摘要 | 人物上衣-bgTheme 映射表、完整质检清单、HTML 示例 |

---

## 六、实施检查清单

- [ ] 移除所有非标准 frontmatter（如 `license`）
- [ ] 统一 `name` 为小写连字符
- [ ] 确保 `description` 含 WHAT + WHEN + 触发词
- [ ] SKILL.md 主体控制在 500 行以内（超出的拆分到 reference）
- [ ] 引用路径仅一层（SKILL.md → reference.md）
- [ ] 术语统一（如「主 CTA」「品牌蓝」等）
- [ ] 每个 skill 可独立加载使用

---

## 七、参考资料

- [anthropics/skills](https://github.com/anthropics/skills) - 官方仓库
- [create-skill SKILL](/Users/yangjinxing/.cursor/skills-cursor/create-skill/SKILL.md) - Cursor skill 创建指南
- [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills) - Anthropic 官方文档
