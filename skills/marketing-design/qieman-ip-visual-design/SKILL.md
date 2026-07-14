---
name: qieman-ip-visual-design
layer: L2
extends: qieman-ui-design
license: Complete terms in LICENSE.txt
description: >
  且慢 IP 视觉设计 Skill。用于生成且慢品牌小顾 IP 相关视觉物料。
  当前版本主要服务小红书封面、营销内容封面、运营传播图等 3:4 内容封面场景。
  默认使用拟人版小顾 humanoid IP，背景与 Logo 必须直接调用 assets 中的正式素材。
  默认每次输出 4 张候选图，4 张保持同一结构与品牌基调，仅切换不同 IP 动作或轻微排版细节。
---

# qieman-ip-visual-design

| 字段 | 值 |
|---|---|
| **ID** | `qieman-ip-visual-design` |
| **中文名** | 且慢 IP 视觉设计 |
| **层级** | L2 |
| **分类** | `marketing-design` |
| **依赖** | `qieman-ui-design` |
| **入口文件** | `SKILL.md` |
| **当前主场景** | 小红书封面 / 营销内容封面 / 小顾 IP 运营视觉 |
| **设计基准尺寸** | 300 × 400 |
| **最终输出尺寸** | 900 × 1200 |
| **比例** | 3:4 |
| **默认输出数量** | 4 张候选图 |
| **默认 IP 形态** | `humanoid` 拟人版小顾 |
| **更新日期** | 2026-07-02 |

---

## 1. Skill 定位

`qieman-ip-visual-design` 用于生成且慢品牌小顾 IP 相关视觉物料。

当前阶段主要服务 **3:4 内容封面场景**，尤其适用于：

- 小红书封面
- 营销内容封面
- 运营传播图
- 今日小 Tips 封面
- 社群运营图
- 策略介绍封面
- 投前测评封面
- 观点型标题封面
- 金融知识内容封面

本 Skill 的默认执行方式是 **素材拼版 / 图层合成**，不是重新生成背景或 Logo。  
背景、Logo、IP 应优先直接调用 `assets/` 中的正式素材。

---

## 2. 适用场景

适合以下需求：

- 小红书封面
- 营销封面
- 运营传播图
- 小顾 IP 内容封面
- 今日小 Tips 封面
- 加群引导封面
- 策略介绍封面
- 投前测评封面
- 观点型标题封面
- 活动运营图
- 社群运营图

当用户需求中出现以下关键词时，可优先调用本 Skill：

```text
小顾 IP、拟人小顾、IP 视觉、小红书封面、内容封面、营销封面、运营图、社群物料、Tips 封面、加群、策略介绍封面、观点型标题
```

推荐组合调用：

```text
qieman-ui-design + qieman-ip-visual-design
```

---

## 3. 输出规格

```text
设计基准尺寸：300 × 400 px
最终输出尺寸：900 × 1200 px
导出倍率：3x
比例：3:4
```

导出后需保证：

- 文字清晰
- Logo 清晰
- IP 边缘清晰
- 背景无模糊、无锯齿、无错误裁切
- 画面比例不变形
- 文案没有压扁、拉伸或明显挤压

---

## 4. 目录结构

推荐目录结构如下：

```text
qieman-ip-visual-design/
├── SKILL.md
├── README.md
├── assets/
│   ├── background/
│   │   └── qieman-blue-cover-bg.png
│   ├── examples/
│   │   └── visual-01-xiaohongshu-cover-layout-reference.png
│   ├── ip/
│   │   └── humanoid/
│   │       ├── xiaogu-humanoid-01-standing-front.png
│   │       ├── xiaogu-humanoid-02-walking-side.png
│   │       ├── xiaogu-humanoid-03-holding-report-chart.png
│   │       ├── xiaogu-humanoid-04-holding-star.png
│   │       ├── xiaogu-humanoid-05-holding-trophy.png
│   │       ├── xiaogu-humanoid-06-waving.png
│   │       ├── xiaogu-humanoid-07-pointing.png
│   │       ├── xiaogu-humanoid-08-holding-laptop.png
│   │       ├── xiaogu-humanoid-09-cheering.png
│   │       └── xiaogu-humanoid-10-walking-front.png
│   └── logo/
│       ├── qieman-logo.png
│       └── qieman-logo.svg
└── references/
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
        └── humanoid-reference/
            └── xiaogu-humanoid-ratio-and-pose-reference.png
```

---

## 5. 资产调用规则

| 目录 | 内容 | 是否默认调用 |
|---|---|---|
| `assets/background/` | 统一蓝色背景图 | 是 |
| `assets/logo/` | 且慢 Logo PNG / SVG | 是 |
| `assets/ip/humanoid/` | 拟人版小顾 IP 单个 PNG 素材 | 是 |
| `assets/examples/` | 视觉模板、结构参考图 | 作为版式参考 |
| `references/ip/core-legacy/` | 原版小顾归档参考 | 否 |
| `references/ip/humanoid-reference/` | 拟人版小顾比例 / 姿态合集参考 | 否 |

必须直接调用 `assets/` 中已有正式素材作为图层使用：

```text
assets/background/qieman-blue-cover-bg.png
assets/logo/qieman-logo.png
assets/logo/qieman-logo.svg
assets/ip/humanoid/*.png
```

强约束：

- 背景必须直接使用 `assets/background/` 中的原图。
- Logo 必须直接使用 `assets/logo/` 中的原图。
- 小红书封面、营销封面、运营传播图默认只调用 `assets/ip/humanoid/` 下的拟人版小顾。
- 原版小顾素材仅保留在 `references/ip/core-legacy/`，不进入默认调用池。
- 不得重新生成背景。
- 不得重新绘制 Logo。
- 不得把小顾 IP 改成真人、动物、其他卡通形象或新的机器人。
- 不得改变 IP 的头身比例、五官气质、品牌蓝色体系和整体材质。
- 既有 IP 素材允许的操作仅限：等比缩放、移动、图层叠放、必要的画布边界裁切。
- 不允许非等比拉伸、风格化、滤镜化、重新上色、加描边、加重阴影或局部重绘背景与 Logo。

---

## 6. IP 形态调用规则

### 6.1 默认 IP 形态

当前默认 IP 形态为：

```text
humanoid
```

即 **拟人版小顾**。

拟人版小顾主要用于：

- 小红书封面
- 营销内容封面
- 运营传播图
- 活动封面
- 金融知识内容封面
- 策略说明类封面
- 社群引导封面
- 年度账单延展风格相关内容

生成封面时，默认只调用：

```text
assets/ip/humanoid/
```

### 6.2 原版小顾 core-legacy

原版小顾素材如保留，应放入：

```text
references/ip/core-legacy/
```

原版小顾仅作为历史归档和参考，不进入默认调用池。

除非用户明确要求：

```text
原版小顾、经典小顾、core 小顾、旧版小顾
```

否则不要调用原版小顾素材。

### 6.3 同一组图不得混用

默认一次输出 4 张候选图时：

- 4 张必须使用同一种 IP 形态。
- 小红书封面、营销封面默认全部使用 `humanoid`。
- 不得在同一组 4 张中混用 `core-legacy` 和 `humanoid`。
- 只有当用户明确要求“两个状态都出一版”或“对比两个形态”时，才允许混合使用。

---

## 7. 拟人版小顾素材命名

`assets/ip/humanoid/` 下推荐使用以下命名：

```text
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
```

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

### 7.1 场景推荐

社群 / 加群 / 欢迎类优先调用：

```text
xiaogu-humanoid-06-waving.png
xiaogu-humanoid-07-pointing.png
xiaogu-humanoid-01-standing-front.png
xiaogu-humanoid-09-cheering.png
```

金融知识 / 策略 / 收益说明类优先调用：

```text
xiaogu-humanoid-03-holding-report-chart.png
xiaogu-humanoid-08-holding-laptop.png
xiaogu-humanoid-07-pointing.png
xiaogu-humanoid-01-standing-front.png
```

活动 / 权益 / 榜单类优先调用：

```text
xiaogu-humanoid-04-holding-star.png
xiaogu-humanoid-05-holding-trophy.png
xiaogu-humanoid-09-cheering.png
xiaogu-humanoid-06-waving.png
```

---

## 8. 默认输出数量与候选方案约束

### 8.1 默认输出策略

- 默认每次输出 **4 张候选图**，用于让用户自行选择更合适的方案。
- 若用户没有明确指定输出数量，统一按 **4 张** 执行。
- 仅当用户明确要求“只出 1 张 / 2 张 / 指定张数”时，才按用户要求调整输出数量。

### 8.2 多张输出一致性要求

同一轮输出的 4 张图，需保持以下内容一致：

- 同一背景素材
- 同一 Logo 素材
- 同一主题
- 同一文案内容
- 同一主视觉结构
- 同一品牌基调
- 同一基础模板规则
- 同一输出比例与尺寸规范
- 同一 IP 形态，即默认均为 `humanoid`

4 张图的差异应主要体现在：

- 选择不同的 `assets/ip/humanoid/` 官方拟人小顾 PNG 素材
- IP 动作 / 表情 / 金融属性道具的轻微差异
- 内容区排版细节的轻微变化
- 留白与图层关系的轻微变化

不允许 4 张图之间差异过大，避免偏离同一组候选方案的比较目的。

### 8.3 IP 素材轮换规则

- 当一次输出 4 张时，必须从 `assets/ip/humanoid/` 中选择 **4 个不同的拟人小顾 PNG 素材**。
- 同一批次内，IP 素材不可重复。
- 默认情况下，4 张图优先切换 IP 官方素材，不重新生成 IP 动作。
- 若用户明确要求更多动作或新增动作，应先参考 `references/ip/humanoid-reference/` 中的比例与动作规范。
- 新动作不得低幼化、夸张化、娱乐化。
- 新动作可以带有轻量金融属性，如数据卡、趋势图、配置卡、基金卡、债券卡等。
- 若使用新动作，4 张图的 IP 视觉高度、底部基线和右下位置必须保持一致。

---

## 9. 背景规范

背景必须统一使用官方提供的蓝色渐变波纹背景图。

推荐资产：

```text
assets/background/qieman-blue-cover-bg.png
```

强约束：

- 不得替换背景。
- 不得改色。
- 不得改变波纹形态。
- 不得重绘为其他渐变。
- 不得增加复杂金融元素。
- 不得叠加杂乱装饰。
- 不得裁切导致背景比例异常。
- 不得生成新的蓝色背景替代原图。

---

## 10. Logo 使用规范

Logo 固定放置在画面左上角，使用且慢官方 Logo。

推荐资产：

```text
assets/logo/qieman-logo.png
assets/logo/qieman-logo.svg
```

规则：

- 固定左上。
- 尺寸参考样图。
- 不拉伸、不变形。
- 不改色。
- 不加描边。
- 不加额外阴影。
- 不替换为其他图形。
- 不重新生成 Logo。

---

## 11. 视觉一封面结构基准

视觉一封面以以下参考图为结构基准：

```text
assets/examples/visual-01-xiaohongshu-cover-layout-reference.png
```

该参考图用于约束：

- Logo 位置
- 内容区位置
- IP 位置
- IP 大小比例
- 主标题与正文的层级关系
- 右下角 IP 展示区域
- 3:4 封面整体结构

### 11.1 画面结构

视觉一画面结构固定为：

```text
Logo：左上固定
主标题：左侧主体内容区上方
正文内容：主标题下方
IP：右下固定辅助视觉
背景：固定蓝色背景素材
比例：900 × 1200
```

### 11.2 内容区域

内容区是主要信息承载区域。

- 主标题和正文必须优先保证可读。
- 主标题不得为了适配 IP 而被压扁、拉伸或变形。
- 正文不得为了适配 IP 而被压缩字形。
- 主标题与正文之间的间距应参考结构基准图，不要过大导致版面松散。
- 内容区与 IP 之间需要保持安全距离。
- 如果 IP 与内容冲突，应优先调整 IP 位置或尺寸，而不是压缩文字。

### 11.3 IP 尺寸与位置

IP 的大小、位置和视觉占比必须参考：

```text
assets/examples/visual-01-xiaohongshu-cover-layout-reference.png
```

强约束：

- IP 固定在画面右下角。
- IP 作为辅助视觉，不得成为主视觉主体。
- IP 不得过大，不得压缩正文内容区。
- IP 不得过小，需保持品牌识别。
- IP 底部基线保持稳定。
- 同一组 4 张候选图中，不同动作的 IP 视觉高度必须一致。
- 不同 IP 动作只能在右下角区域内切换，不得忽高忽低。
- IP 必须等比缩放，不得横向压扁或纵向拉伸。
- IP 不得过于靠上，避免影响正文阅读。
- IP 不得遮挡标题和正文。

---

## 12. IP 动作延展与固定展示比例规范

### 12.1 默认优先级

IP 使用遵循以下优先级：

```text
1. 优先直接调用 assets/ip/humanoid/ 中已有官方 PNG 素材
2. 当用户明确要求“更多动作 / 新动作 / 金融属性动作 / 延展形象”时，允许基于小顾 IP 延展形象比例生成新动作
3. 新动作必须严格保持小顾 IP 的头身比例、五官气质、材质、蓝色体系和品牌识别
4. 无论使用已有素材还是生成延展动作，画面中的 IP 展示尺寸、底部基线和右下位置都必须保持稳定
```

### 12.2 允许的动作方向

IP 动作可以更多元化，但必须保持专业、友好、可信，不得低幼化、夸张化或娱乐化。

允许优先使用以下动作方向：

- 挥手欢迎
- 站立微笑
- 思考 / 提问
- 查看平板 / 屏幕
- 手持透明数据卡
- 手持金融图表 / 趋势面板
- 指向图表 / 信息卡
- 讲解配置卡 / 策略卡 / 基金卡
- 轻度点赞 / 点头认可
- 自然陪伴站立

### 12.3 金融属性表达

IP 可以带有轻量金融属性，但金融元素必须作为辅助信息，不得抢占主视觉。

允许出现：

- 透明玻璃质感数据卡
- 折线图 / 趋势图 / 柱状图
- 配置卡 / 基金卡 / 债券卡
- 简洁数据面板
- 小型问号、灯泡、箭头等认知提示元素

禁止出现：

- 复杂大面积金融场景
- 过多图表堆叠
- 强营销感道具
- 与金融无关的大面积装饰
- 玩具化、低幼化、表情包化动作

### 12.4 宽高比例与形象约束

- IP 必须等比缩放。
- 禁止横向或纵向压缩。
- 禁止拉伸导致头身比例变化。
- 禁止改变五官比例。
- 禁止低幼化。
- 禁止变成其他机器人、动物、真人或泛卡通形象。
- 禁止改色、重绘材质或改变品牌蓝色质感。
- 禁止为适配画面而裁掉头部、脸部、主体识别区域。
- 如需裁切，只允许轻微裁切脚部或底部阴影，且不得影响主体识别。

---

## 13. 字体规范

统一使用：

```text
阿里巴巴普惠体 / Alibaba PuHuiTi
```

说明：字体文件不随本包分发。使用时请在本地设计环境或生成环境中安装并确认授权。

字号不机械固定，应根据 300 × 400 的设计基准和文案长度自适应调整，但必须保持参考图中的视觉层级关系。

层级要求：

- 主标题为第一视觉重点。
- 副标题 / 内容区为第二层级。
- 风险提示为最低视觉权重。
- 所有文字优先保证清晰可读。
- 不允许文字过满、过密、挤压 IP。
- 不允许文字横向压扁或纵向拉伸。

---

## 14. 风险提示规范

当前默认风险提示：

```text
投资有风险 风险自担
```

位置规则：

- 固定左下角。
- 小字号。
- 低透明度白色。
- 弱化处理。
- 不抢主视觉。

风险提示适用于视觉二、视觉三、视觉四。  
视觉一是否出现风险提示，可根据内容类型决定；如用户未明确要求，视觉一默认不添加风险提示。

---

## 15. 视觉模板

### 15.1 视觉一：Logo + 主标题 + 内容 + IP

适合：

- 小红书封面
- 今日小 Tips
- 问答合集
- 加群说明
- 列表类内容
- 常见问题说明
- 社群运营图

结构：

```text
左上 Logo
左侧主标题
标题下方内容区
右下拟人版小顾 IP
固定蓝色背景
```

参考图：

```text
assets/examples/visual-01-xiaohongshu-cover-layout-reference.png
```

规则：

- 主标题大字号、白色粗体。
- 内容区左对齐。
- 可使用 bullet 或编号。
- IP 默认固定右下，不露脚或仅轻微贴近底部安全区。
- 内容区不得压到 IP。
- 默认不添加风险提示，除非用户明确要求。
- 默认一次生成 4 张候选图。
- 4 张均从 `assets/ip/humanoid/` 中选择不同拟人版小顾素材。

### 15.2 视觉一内容区换行规则

视觉一中的内容文案应优先保持自然阅读完整性。

当内容为单句，且长度不超过 18 个中文字符时，应优先完整展示为一行。

推荐：

```text
【7】买入多少天开始有收益？
```

不推荐：

```text
【7】买入多少天
开始有收益？
```

编号与正文之间不加多余空格。

推荐：

```text
【7】买入多少天开始有收益？
```

不推荐：

```text
【7】 买入多少天开始有收益？
```

如果内容一行展示空间不足，应按以下优先级处理：

```text
1. 适当缩小内容字号
2. 适当增加内容区宽度
3. 调整内容区位置
4. 最后才考虑换行
```

不得为了平均排版或视觉居中，强行拆断完整句子。

### 15.3 视觉二：Logo + 策略名称 + IP + 风险提示

适合：

- 策略介绍
- 产品认知
- 资产管理类封面

结构：

```text
左上 Logo
左侧策略名称
策略定位 / 副标题
左下风险提示
右下拟人版小顾 IP
固定蓝色背景
```

规则：

- 策略名称是第一视觉重点。
- 策略定位位于名称下方。
- 风险提示固定左下。
- 不放大段正文。
- 不放复杂列表。
- 默认一次生成 4 张候选图。
- 4 张均从 `assets/ip/humanoid/` 中选择不同拟人版小顾素材。

### 15.4 视觉三：Logo + 标题文本 + 副文本 + 风险提示，不包含 IP

适合：

- 投前测评
- 知识判断题
- 一问一答
- 认知教育内容

结构：

```text
左上 Logo
左侧标题文本
标题下方副文本
左下风险提示
不出现 IP
固定蓝色背景
```

规则：

- 不包含 IP。
- 不加入 bullet 列表。
- 副文本允许 1–3 行。
- 保持画面纯净、信息集中。
- 默认一次生成 4 张候选图。
- 因视觉三不含 IP，4 张候选图差异主要体现在标题排版、留白、内容区位置和背景裁切关系。

### 15.5 视觉四：Logo + 标题文本 + 风险提示 + IP

适合：

- 观点型标题
- 市场认知
- 情绪型标题
- 一句话洞察

结构：

```text
左上 Logo
左侧大标题
左下风险提示
右下拟人版小顾 IP
固定蓝色背景
```

规则：

- 标题是唯一主信息。
- 不加副标题。
- 不加正文说明。
- IP 默认固定右下。
- 标题断句必须符合阅读习惯。
- 默认一次生成 4 张候选图。
- 4 张均从 `assets/ip/humanoid/` 中选择不同拟人版小顾素材。

---

## 16. 标题断句规则

标题文本必须按自然阅读习惯断句，优先依据语义结构、固定搭配和完整概念进行换行，不得为了平均字数而生硬拆分文案。

推荐：

```text
不要让波动打败
你的投资计划
```

不推荐：

```text
不要让波动打败你的
投资计划
```

不打断引号内完整表达。

推荐：

```text
什么叫
“黎明前的黑暗”？
```

不推荐：

```text
什么叫“黎明前的
黑暗”？
```

不要拆散固定搭配：

```text
投资计划
市场波动
资产配置
持有收益
短期稳健
活钱管理
```

标点必须跟随句尾，不允许标点单独成行。

---

## 17. Prompt 模板

### 17.1 视觉一 Prompt

```text
请基于 qieman-ip-visual-design 生成一组 3:4 内容封面候选图。
默认输出 4 张，最终输出尺寸均为 900×1200。

使用视觉一：Logo + 主标题 + 内容 + IP。

主标题为：{主标题}
内容为：{内容}

必须直接调用以下素材：
- 背景：assets/background/qieman-blue-cover-bg.png
- Logo：assets/logo/qieman-logo.png 或 assets/logo/qieman-logo.svg
- IP：assets/ip/humanoid/ 下的拟人版小顾 PNG

版式结构参考：
assets/examples/visual-01-xiaohongshu-cover-layout-reference.png

要求：
1. 背景不重新生成、不改色、不重绘。
2. Logo 固定左上，不重新生成、不改色、不变形。
3. IP 固定右下，参考结构基准图控制大小、位置和底部基线。
4. IP 使用拟人版小顾 humanoid，不调用 core-legacy 原版小顾。
5. 默认生成 4 张候选图，4 张从 assets/ip/humanoid/ 中选择 4 个不同动作素材。
6. 4 张图保持同一主题、同一文案、同一背景、同一 Logo、同一模板结构。
7. 4 张图中的 IP 视觉高度、底部基线、右下展示区域保持一致。
8. IP 不得过大，不得压过主标题与正文内容。
9. 文字使用阿里巴巴普惠体，主标题是第一视觉重点，内容区是第二视觉层级。
10. 文字不得横向压扁、纵向拉伸或明显挤压。
11. 内容文案如为单句，且长度不超过 18 个中文字符，必须优先完整展示为一行。
12. 不要在编号与正文之间加入多余空格。
13. 不要为了排版平均而强行换行。
14. 不添加风险提示，除非用户明确要求。
15. 不添加无关文字。
```

### 17.2 视觉二 Prompt

```text
请基于 qieman-ip-visual-design 生成一组 3:4 策略介绍封面候选图。
默认输出 4 张，最终输出尺寸均为 900×1200。

使用视觉二：Logo + 策略名称 + IP + 风险提示。

策略名称为：{策略名称}
策略定位为：{策略定位}
风险提示为：投资有风险 风险自担

必须直接调用以下素材：
- 背景：assets/background/qieman-blue-cover-bg.png
- Logo：assets/logo/qieman-logo.png 或 assets/logo/qieman-logo.svg
- IP：assets/ip/humanoid/ 下的拟人版小顾 PNG

要求：
1. 背景不重新生成、不改色、不重绘。
2. Logo 固定左上，不重新生成、不改色、不变形。
3. IP 固定右下，视觉高度和底部基线保持一致。
4. 默认生成 4 张候选图，4 张从 assets/ip/humanoid/ 中选择 4 个不同动作素材。
5. 策略名称是第一视觉重点，策略定位为第二视觉层级。
6. 文字不得横向压扁、纵向拉伸或明显挤压。
7. 不得新增无关文字。
```

### 17.3 视觉三 Prompt

```text
请基于 qieman-ip-visual-design 生成一组 3:4 投前测评封面候选图。
默认输出 4 张，最终输出尺寸均为 900×1200。

使用视觉三：Logo + 标题文本 + 副文本 + 风险提示。
不出现小顾 IP。

标题文本为：{标题文本}
副文本为：{副文本}
风险提示为：投资有风险 风险自担

必须直接调用以下素材：
- 背景：assets/background/qieman-blue-cover-bg.png
- Logo：assets/logo/qieman-logo.png 或 assets/logo/qieman-logo.svg

要求：
1. 背景不重新生成、不改色、不重绘。
2. Logo 固定左上，不重新生成、不改色、不变形。
3. 画面保持简洁、留白、纯净。
4. 文字不得横向压扁、纵向拉伸或明显挤压。
5. 不得新增无关文字。
```

### 17.4 视觉四 Prompt

```text
请基于 qieman-ip-visual-design 生成一组 3:4 观点型标题封面候选图。
默认输出 4 张，最终输出尺寸均为 900×1200。

使用视觉四：Logo + 标题文本 + 风险提示 + IP。

标题为：{标题文本}
风险提示为：投资有风险 风险自担

必须直接调用以下素材：
- 背景：assets/background/qieman-blue-cover-bg.png
- Logo：assets/logo/qieman-logo.png 或 assets/logo/qieman-logo.svg
- IP：assets/ip/humanoid/ 下的拟人版小顾 PNG

要求：
1. 背景不重新生成、不改色、不重绘。
2. Logo 固定左上，不重新生成、不改色、不变形。
3. IP 固定右下，视觉高度和底部基线保持一致。
4. 默认生成 4 张候选图，4 张从 assets/ip/humanoid/ 中选择 4 个不同动作素材。
5. 标题断句必须符合自然阅读习惯。
6. 不得打断引号内完整表达，不得拆散固定词组，标点不得单独成行。
7. 文字不得横向压扁、纵向拉伸或明显挤压。
8. 不得新增无关文字。
```

---

## 18. 禁止项

### 18.1 背景

- 禁止更换背景。
- 禁止改色。
- 禁止重绘背景。
- 禁止新增复杂装饰。
- 禁止生成新的背景替代 `assets/background/qieman-blue-cover-bg.png`。

### 18.2 Logo

- 禁止变形。
- 禁止改色。
- 禁止替换为非官方 Logo。
- 禁止重新生成 Logo。

### 18.3 IP

- 禁止变形。
- 禁止改脸。
- 禁止改色。
- 禁止低幼化。
- 禁止夸张表情。
- 禁止变成其他机器人、动物、真人或泛卡通形象。
- 禁止同一批 4 张候选图全部使用同一个 IP 动作。
- 禁止默认调用 `references/ip/core-legacy/` 中的原版小顾。
- 禁止不同候选图中的 IP 忽大忽小、忽高忽低。
- 禁止 IP 过大压缩文字内容。
- 禁止非等比缩放。

### 18.4 文案

- 禁止文字过满。
- 禁止标题断句不自然。
- 禁止打断引号内完整表达。
- 禁止标点单独成行。
- 禁止风险提示抢主视觉。
- 禁止在编号与正文之间加入多余空格。
- 禁止将短句内容强行拆成两行。
- 禁止文字横向压扁、纵向拉伸或明显挤压。

### 18.5 画面

- 禁止复杂金融图表。
- 禁止杂乱装饰。
- 禁止过度营销感。
- 禁止背景、IP、Logo 与参考图风格不一致。
- 禁止 4 张候选图之间风格差异过大。
- 禁止为了展示 IP 而削弱主标题和正文阅读效率。

---

## 19. 质量检查清单

生成或交付前必须检查：

- [ ] 默认输出 4 张候选图，除非用户明确指定其他数量。
- [ ] 4 张候选图主题一致。
- [ ] 4 张候选图文案一致。
- [ ] 4 张候选图品牌基调一致。
- [ ] 4 张候选图模板结构一致。
- [ ] 4 张候选图均调用 `assets/ip/humanoid/` 下的拟人版小顾素材。
- [ ] 4 张候选图调用 4 个不同的拟人版小顾动作素材。
- [ ] 4 张候选图中的 IP 视觉高度和底部基线保持一致。
- [ ] 每张图都可作为独立候选成品。
- [ ] 输出尺寸为 900 × 1200。
- [ ] 比例为 3:4。
- [ ] 背景直接调用 `assets/background/` 原图，未被重新生成或重绘。
- [ ] 背景未被改色、重绘或错误裁切。
- [ ] Logo 直接调用 `assets/logo/` 原图，未被重新生成或重绘。
- [ ] Logo 固定左上。
- [ ] Logo 未变形、未改色。
- [ ] 小顾 IP 固定右下，未过于靠上。
- [ ] 小顾 IP 未遮挡标题和正文。
- [ ] IP 展示区域严格参考结构基准图，没有过大占用画面。
- [ ] IP 保持头身比例、五官气质和品牌蓝色体系。
- [ ] IP 如有金融属性，仅使用轻量数据卡 / 趋势图 / 配置卡等辅助元素。
- [ ] 文字保持正常字形比例，没有横向压扁、纵向拉伸或明显挤压。
- [ ] 字体使用阿里巴巴普惠体。
- [ ] 主标题为第一视觉重点。
- [ ] 内容区清晰可读。
- [ ] 风险提示位置正确且弱化。
- [ ] 标题断句自然。
- [ ] 引号内完整表达未被拆开。
- [ ] 标点未单独成行。
- [ ] 编号与正文之间没有多余空格。
- [ ] 视觉一短句内容优先单行展示。
- [ ] 画面无杂乱装饰。
- [ ] 整体风格与参考图一致。

---

## 20. 维护说明

- 正式规范以本 `SKILL.md` 为准。
- 新增模板时，需要同步更新 `assets/examples/`。
- 新增拟人版 IP 动作素材时，放入 `assets/ip/humanoid/`。
- 原版小顾素材如需保留，放入 `references/ip/core-legacy/`，不进入默认调用池。
- 新增拟人版 IP 合集参考图时，放入 `references/ip/humanoid-reference/`。
- 新增背景素材时，放入 `assets/background/`。
- 新增 Logo 版本时，放入 `assets/logo/`。
- 更新素材命名时，需要同步更新本文件中的资产路径。
- 若新增默认输出数量、素材调用规则、IP 新动作生成规则或模板规则，需要同步更新 Prompt 模板和质量检查清单。
- 不要提交 `.DS_Store` 等系统文件。
- 不要使用 `.png.png` 这类重复后缀命名。

---

## 21. 当前版本更新记录

| 日期 | 更新内容 |
|---|---|
| 2026-07-02 | 新增 `qieman-ip-visual-design`，归入 `marketing-design` |
| 2026-07-02 | 明确 3:4 内容封面输出规格：300×400 设计基准，900×1200 最终输出 |
| 2026-07-02 | 新增四类视觉模板：视觉一、视觉二、视觉三、视觉四 |
| 2026-07-02 | 新增视觉一内容区换行规则，短句内容优先单行展示 |
| 2026-07-02 | 新增默认输出 4 张候选图规则 |
| 2026-07-02 | 明确默认执行方式为素材拼版 / 图层合成：背景、Logo、小顾 IP 均直接调用 assets 正式素材 |
| 2026-07-02 | 将小红书封面、营销封面、运营传播图默认 IP 形态调整为 `humanoid` 拟人版小顾 |
| 2026-07-02 | 将原版小顾素材归档至 `references/ip/core-legacy/`，不进入默认调用池 |
| 2026-07-02 | 新增 `assets/ip/humanoid/` 拟人版小顾正式调用目录 |
| 2026-07-02 | 新增视觉一封面结构基准图路径：`assets/examples/visual-01-xiaohongshu-cover-layout-reference.png` |
| 2026-07-02 | 新增 IP 展示比例、右下固定位置、统一底部基线、不压缩文字、不低幼化等约束 |
