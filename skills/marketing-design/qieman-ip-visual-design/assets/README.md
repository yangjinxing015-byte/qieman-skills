# assets

本目录用于存放 `qieman-ip-visual-design` 的正式调用素材。

这些素材会直接参与且慢小顾 IP 相关视觉物料的生成，包括固定背景、品牌 Logo、拟人版小顾 IP 素材和视觉模板参考图。

与 `references/` 的区别：

| 目录 | 作用 | 是否作为正式生成素材 |
|---|---|---|
| `assets/` | 存放 Logo、IP、背景、模板示例等正式素材 | 是 |
| `references/` | 存放需求说明、参考截图、补充规范、历史资料 | 否 |

简单理解：

    assets = 正式调用素材
    references = 参考说明资料

---

## 目录定位

`assets/` 是正式素材目录。  
当需要生成、复刻、还原、延展 `qieman-ip-visual-design` 相关视觉时，应优先调用本目录中的素材。

正式设计规范以 `SKILL.md` 为准。  
正式素材以 `assets/` 目录为准。

---

## 当前目录结构

    assets/
    ├── README.md
    ├── background/
    │   └── qieman-blue-cover-bg.png
    ├── examples/
    │   └── visual-01-xiaohongshu-cover-layout-reference.png
    ├── ip/
    │   └── humanoid/
    │       ├── xiaogu-humanoid-01-standing-front.png
    │       ├── xiaogu-humanoid-02-walking-side.png
    │       ├── xiaogu-humanoid-03-holding-report-chart.png
    │       ├── xiaogu-humanoid-04-holding-star.png
    │       ├── xiaogu-humanoid-05-holding-trophy.png
    │       ├── xiaogu-humanoid-06-waving.png
    │       ├── xiaogu-humanoid-07-pointing.png
    │       ├── xiaogu-humanoid-08-holding-laptop.png
    │       ├── xiaogu-humanoid-09-cheering.png
    │       └── xiaogu-humanoid-10-walking-front.png
    └── logo/
        ├── qieman-logo.png
        └── qieman-logo.svg

---

## 子目录说明

| 目录 | 内容 | 作用 | 是否默认调用 |
|---|---|---|---|
| `background/` | 统一蓝色背景图 | 作为封面固定背景使用 | 是 |
| `examples/` | 视觉模板、结构参考图 | 用于参考版式、字号、比例、信息层级 | 作为参考 |
| `ip/humanoid/` | 拟人版小顾 IP 单个 PNG 素材 | 用于小红书封面、营销封面、运营传播图的右下角 IP 展示 | 是 |
| `logo/` | 且慢 Logo PNG / SVG | 用于封面左上角品牌标识 | 是 |

---

## background/

### 目录作用

`background/` 用于存放封面固定背景图。

当前默认背景素材为：

    assets/background/qieman-blue-cover-bg.png

### 使用规则

- 生成 3:4 内容封面时，默认直接调用该背景素材。
- 背景不得重新生成。
- 背景不得改色。
- 背景不得重绘。
- 背景不得叠加复杂装饰。
- 背景波纹形态不得随意改变。
- 背景需保持与参考封面一致的蓝色渐变质感。

### 命名规范

推荐命名：

    qieman-blue-cover-bg.png

不建议使用：

    background.png
    bg.png
    blue.png
    qieman-blue-cover-bg.png.png

---

## examples/

### 目录作用

`examples/` 用于存放视觉模板、结构参考图和版式参考图。

当前关键结构参考图：

    assets/examples/visual-01-xiaohongshu-cover-layout-reference.png

### 使用规则

该图用于约束视觉一封面的基础结构，包括：

- Logo 位置
- 内容区位置
- 主标题与正文层级
- IP 右下角位置
- IP 大小比例
- IP 底部基线
- 3:4 封面整体结构

`examples/` 中的文件主要作为结构参考，不一定作为最终画面图层直接调用。

---

## ip/humanoid/

### 目录作用

`ip/humanoid/` 是当前 Skill 默认正式调用的 IP 素材目录。

该目录仅存放 **拟人版小顾 IP 的单个透明 PNG 素材**，用于：

- 小红书封面
- 营销内容封面
- 运营传播图
- 社群引导图
- 今日小 Tips 封面
- 金融知识内容封面
- 活动运营图

### 默认调用规则

当前默认正式调用目录为：

    assets/ip/humanoid/

生成小红书封面、营销封面、运营传播图时，默认从该目录中选择拟人版小顾 IP 素材。

原版小顾素材不放在本目录中，已归档至：

    references/ip/core-legacy/

原版小顾仅作为历史归档和特殊场景参考，不进入默认调用池。

---

## 拟人版小顾 IP 素材命名

`assets/ip/humanoid/` 下推荐使用以下命名：

    xiaogu-humanoid-01-standing-front.png
    xiaogu-humanoid-02-walking-side.png
    xiaogu-humanoid-03-holding-report-chart.png
    xiaogu-humanoid-04-holding-star.png
    xiaogu-humanoid-05-holding-trophy.png
    xiaogu-humanoid-06-waving.png
    xiaogu-humanoid-07-pointing.png
    xiaogu-humanoid-08-holding-laptop.png
    xiaogu-humanoid-09-cheering.png
    xiaogu-humanoid-10-walking-front.png

### 素材说明

| 文件名 | 中文说明 | 适用场景 |
|---|---|---|
| `xiaogu-humanoid-01-standing-front.png` | 正面站立 | 通用封面、稳重信息 |
| `xiaogu-humanoid-02-walking-side.png` | 侧身行走 | 流程、行动、引导 |
| `xiaogu-humanoid-03-holding-report-chart.png` | 手持数据报告 / 图表 | 金融数据、收益说明、策略分析 |
| `xiaogu-humanoid-04-holding-star.png` | 手持星星 | 亮点、权益、推荐 |
| `xiaogu-humanoid-05-holding-trophy.png` | 手持奖杯 | 成就、榜单、活动奖励 |
| `xiaogu-humanoid-06-waving.png` | 挥手欢迎 | 加群、欢迎、入口引导 |
| `xiaogu-humanoid-07-pointing.png` | 指向说明 | 步骤说明、重点提示 |
| `xiaogu-humanoid-08-holding-laptop.png` | 手持电脑 / 屏幕 | 工具、数据看板、智能分析 |
| `xiaogu-humanoid-09-cheering.png` | 开心欢呼 | 活动、福利、正向反馈 |
| `xiaogu-humanoid-10-walking-front.png` | 正向行走 | 引导、陪伴、行动入口 |

### 场景推荐

社群 / 加群 / 欢迎类优先调用：

    xiaogu-humanoid-06-waving.png
    xiaogu-humanoid-07-pointing.png
    xiaogu-humanoid-01-standing-front.png
    xiaogu-humanoid-09-cheering.png

金融知识 / 策略 / 收益说明类优先调用：

    xiaogu-humanoid-03-holding-report-chart.png
    xiaogu-humanoid-08-holding-laptop.png
    xiaogu-humanoid-07-pointing.png
    xiaogu-humanoid-01-standing-front.png

活动 / 权益 / 榜单类优先调用：

    xiaogu-humanoid-04-holding-star.png
    xiaogu-humanoid-05-holding-trophy.png
    xiaogu-humanoid-09-cheering.png
    xiaogu-humanoid-06-waving.png

---

## IP 使用约束

使用 `assets/ip/humanoid/` 下的拟人版小顾素材时，必须遵守：

- 必须等比缩放。
- 不得横向压扁。
- 不得纵向拉伸。
- 不得改变头身比例。
- 不得改变五官比例。
- 不得改色。
- 不得低幼化。
- 不得夸张化。
- 不得变成其他机器人、动物、真人或泛卡通形象。
- 不得遮挡标题和正文。
- 不得在同一组候选图中忽大忽小、忽高忽低。
- 同一组 4 张候选图中，IP 的视觉高度和底部基线应保持一致。
- IP 默认固定在画面右下角。
- IP 大小比例应参考 `assets/examples/visual-01-xiaohongshu-cover-layout-reference.png`。

---

## logo/

### 目录作用

`logo/` 用于存放且慢 Logo 正式素材。

推荐文件：

    assets/logo/qieman-logo.png
    assets/logo/qieman-logo.svg

### 使用规则

- Logo 固定放置在画面左上角。
- Logo 必须直接调用本目录中的正式素材。
- 不得重新生成 Logo。
- 不得改色。
- 不得拉伸变形。
- 不得加描边。
- 不得加复杂阴影。
- 不得替换为非官方 Logo。

---

## 不建议放入 assets 的内容

以下内容不建议放在 `assets/` 中，应放入 `references/`：

| 内容 | 推荐位置 |
|---|---|
| 需求说明文档 | `references/` |
| 历史封面截图 | `references/` |
| 原版小顾归档素材 | `references/ip/core-legacy/` |
| 拟人版小顾合集参考图 | `references/ip/humanoid-reference/` |
| 临时补充规则 | `references/` |
| 设计讨论截图 | `references/` |

---

## 与 references/ 的关系

当前 references 目录主要用于保存：

    references/ip/core-legacy/
    references/ip/humanoid-reference/

其中：

- `references/ip/core-legacy/`：原版小顾历史归档，不进入默认调用池。
- `references/ip/humanoid-reference/`：拟人版小顾比例、动作、姿态参考图，不作为正式拼版素材直接调用。

正式生成时，应优先调用 `assets/` 中的素材，而不是 `references/` 中的参考图。

---

## 维护说明

新增或调整 assets 素材时，请确保：

- 文件命名清晰。
- 文件名使用英文小写、数字和短横线。
- 不使用中文文件名。
- 不使用空格。
- 不使用重复后缀，如 `.png.png`。
- 不提交 `.DS_Store` 等系统文件。
- 正式可调用 IP 素材放入 `assets/ip/humanoid/`。
- 原版小顾归档素材放入 `references/ip/core-legacy/`。
- 拟人版小顾合集参考图放入 `references/ip/humanoid-reference/`。
- 新增素材后，如影响正式生成规则，需要同步更新 `SKILL.md`。
- 新增结构参考图后，需要同步更新 `SKILL.md` 中的路径说明。

---

## 更新记录

| 日期 | 更新内容 |
|---|---|
| 2026-07-02 | 新增 `qieman-ip-visual-design` assets 说明 |
| 2026-07-02 | 明确正式背景目录为 `assets/background/` |
| 2026-07-02 | 明确默认正式 IP 调用目录为 `assets/ip/humanoid/` |
| 2026-07-02 | 明确原版小顾归档至 `references/ip/core-legacy/` |
| 2026-07-02 | 新增视觉一结构参考图目录 `assets/examples/` |
