# references

本目录用于存放 `qieman-ip-visual-design` 的参考资料、历史说明、需求截图、比例参考图和补充规范。

这些内容主要用于帮助理解 Skill 的设计背景、视觉来源、IP 形态边界和使用规则，**不作为正式生成素材直接调用**。

正式生成素材请统一放入 `assets/` 目录。

---

## 目录定位

`references/` 是参考资料目录，主要面向设计师、产品同学和维护 Skill 的同学，用于保存：

- 需求背景
- 设计说明
- 历史截图
- 视觉参考
- IP 比例参考
- IP 形态归档
- 临时补充规范
- 版本迭代记录

正式设计规范以 `SKILL.md` 为准。  
正式素材以 `assets/` 目录为准。

---

## assets 与 references 的区别

| 目录 | 作用 | 是否作为正式生成素材 |
|---|---|---|
| `assets/` | 存放 Logo、背景、正式 IP、模板示例等可直接调用素材 | 是 |
| `references/` | 存放需求说明、参考截图、历史资料、比例参考和归档素材 | 否 |

简单理解：

    assets = 正式调用素材
    references = 参考说明资料

---

## 当前 references 目录结构

    references/
    ├── README.md
    └── ip/
        ├── core-legacy/
        │   ├── xiaogu-celebration.png
        │   ├── xiaogu-cute-hands.png
        │   ├── xiaogu-data-card.png
        │   ├── xiaogu-data-laptop.png
        │   ├── xiaogu-happy-confetti.png
        │   ├── xiaogu-idea-bulb.png
        │   ├── xiaogu-question.png
        │   └── xiaogu-thinking.png
        │
        └── humanoid-reference/
            └── xiaogu-humanoid-ratio-and-pose-reference.png

---

## 子目录说明

| 目录 | 内容 | 作用 | 是否默认调用 |
|---|---|---|---|
| `ip/core-legacy/` | 原版小顾 IP 历史素材 | 作为历史归档和特殊场景参考 | 否 |
| `ip/humanoid-reference/` | 拟人版小顾比例、动作、姿态参考图 | 用于约束拟人版小顾的比例、形态和动作边界 | 否 |

---

## 适合放入本目录的内容

| 类型 | 说明 |
|---|---|
| 需求说明 | 小顾 IP 视觉设计需求、业务背景、应用场景说明 |
| 参考截图 | 历史封面截图、设计稿截图、对比参考图 |
| 视觉说明 | 模板结构说明、字号层级说明、IP 摆放说明 |
| IP 参考 | IP 比例参考、动作合集图、形态对比图 |
| 历史归档 | 原版小顾素材、旧版方案、历史方案归档 |
| 补充规范 | 临时补充规则、设计注意事项、命名说明 |
| 版本记录 | 旧版方案、迭代记录、历史方案归档 |

---

## 不建议放入本目录的内容

以下内容应放入 `assets/`，不要放在 `references/`：

| 内容 | 推荐位置 |
|---|---|
| 且慢 Logo 原图 | `assets/logo/` |
| 统一蓝色背景图 | `assets/background/` |
| 拟人版小顾正式 PNG 素材 | `assets/ip/humanoid/` |
| 视觉模板结构参考图 | `assets/examples/` |

---

## 正式资产目录

当前 Skill 的正式资产目录结构如下：

    qieman-ip-visual-design/
    ├── SKILL.md
    ├── README.md
    ├── assets/
    │   ├── background/
    │   ├── examples/
    │   ├── ip/
    │   │   └── humanoid/
    │   └── logo/
    └── references/
        └── ip/
            ├── core-legacy/
            └── humanoid-reference/

---

## 当前 Skill 关键参考内容

`qieman-ip-visual-design` 当前主要围绕小红书封面、营销内容封面和小顾 IP 内容封面展开。

参考内容可包含以下方向：

### 1. 应用场景

- 小红书封面
- 小顾 IP 内容封面
- 今日小 Tips 封面
- 社群运营图
- 加群引导图
- 策略介绍封面
- 投前测评封面
- 观点型标题封面
- 活动运营图
- 金融知识内容封面

### 2. IP 形态

当前默认正式调用的 IP 形态为：

    assets/ip/humanoid/

即拟人版小顾。

原版小顾素材已归档至：

    references/ip/core-legacy/

原版小顾仅作为历史归档和特殊场景参考，不进入默认调用池。

### 3. 视觉模板

当前包含四类模板：

| 模板 | 结构 | 适用场景 |
|---|---|---|
| 视觉一 | Logo + 主标题 + 内容 + IP | 小红书封面、Tips、问答合集、加群说明、列表类内容 |
| 视觉二 | Logo + 策略名称 + IP + 风险提示 | 策略介绍、产品认知、资产管理类封面 |
| 视觉三 | Logo + 标题文本 + 副文本 + 风险提示，不包含 IP | 投前测评、知识判断题、一问一答 |
| 视觉四 | Logo + 标题文本 + 风险提示 + IP | 观点型标题、市场认知、情绪型标题 |

### 4. 设计约束

参考资料中如涉及设计约束，应重点说明：

- 背景是否固定
- Logo 位置是否固定
- 小顾 IP 位置是否固定
- IP 是否允许变形、改色、改脸
- IP 是否为拟人版 `humanoid`
- 标题是否需要自然断句
- 风险提示是否固定出现
- 字体和字号是否参考样图
- IP 在画面中的比例是否参考结构基准图

---

## 推荐文件命名

参考文档建议使用英文小写和短横线命名。

### 文档类

    visual-template-notes.md
    title-line-break-rules.md
    ip-placement-reference.md
    historical-cover-examples.md
    design-requirement-notes.md

### 截图类

    reference-visual-01.png
    reference-visual-02.png
    reference-layout-comparison.png
    reference-ip-placement.png
    reference-title-break.png

### IP 参考类

    xiaogu-humanoid-ratio-and-pose-reference.png
    xiaogu-humanoid-pose-reference.png
    xiaogu-core-legacy-reference.png

### 历史版本类

    archive-visual-v1.png
    archive-visual-v2.png
    old-template-reference.md

---

## 使用说明

- 本目录内容仅作为参考资料。
- 正式设计规范以 `SKILL.md` 为准。
- 正式素材以 `assets/` 下文件为准。
- 默认正式调用 IP 为 `assets/ip/humanoid/` 下的拟人版小顾。
- `references/ip/core-legacy/` 中的原版小顾不进入默认调用池。
- 新增参考文件时，建议使用英文小写和短横线命名。
- 如参考内容已经沉淀为正式规则，需要同步更新 `SKILL.md`。

---

## 维护说明

新增参考资料时，请确保：

- 文件命名清晰。
- 内容和本 Skill 相关。
- 不上传无关截图。
- 不重复存放正式素材。
- 不提交 `.DS_Store` 等系统文件。
- 如果参考资料影响正式生成规则，应同步更新 `SKILL.md`。
- 如果新增了新的模板方向，应同步更新 `assets/examples/` 与主 README。
- 如果新增了正式可调用 IP 素材，应放入 `assets/ip/humanoid/`，不要放入 `references/`。

---

## 更新记录

| 日期 | 更新内容 |
|---|---|
| 2026-07-02 | 新增 `qieman-ip-visual-design` references 说明 |
| 2026-07-02 | 新增原版小顾归档目录 `references/ip/core-legacy/` |
| 2026-07-02 | 新增拟人版小顾参考目录 `references/ip/humanoid-reference/` |
