---
name: qieman-design-vip
description: >-
  Create Qieman high-net-worth private-domain visuals, including complete 9:16
  VIP posters, poster backgrounds, H5 hero sections, multi-poster campaigns,
  investment-circle invitations, research-viewpoint visuals, and nine-grid
  social campaigns. Preserve Qieman blue-gold / black-gold brand rules while
  routing each task to a small, task-specific reference file. Image generation
  handles backgrounds and symbolic visuals; deterministic layout handles exact
  Chinese copy, logo placement, grid structure, slogan, and risk disclosure.
version: "0.2.1"
layer: L2
---

# qieman-design-vip

且慢高净值私域视觉 Skill。覆盖：

- 9:16 单张完整海报
- 单张无字背景图
- H5 头图 / 页面主视觉
- 多张系列海报
- 300万+ 门槛、席位、圈层邀请
- 信息源、投研观点、全球视野、长期陪伴
- 朋友圈九宫格与九格拆分
- 主流 AI 生图工具提示词

本版只精简运行时读取，不削减非九宫格能力。详细规则移动到 `references/`，按任务读取。

---

## 1. 全局规则优先级

```txt
1. 用户明确指令
2. 用户提供的文案、顺序、尺寸和参考图
3. 当前任务模式
4. 品牌与金融合规
5. 默认版式和视觉建议
```

不得用默认模板覆盖用户已明确给出的内容。

## 2. 统一生成原则

### 2.1 文案与视觉解耦

生图模型优先负责：

- 场景、背景、主符号
- 光影、材质、氛围
- 无字视觉资产

排版工具或设计软件负责：

- 准确中文
- 官方 Logo
- 标题与副标题
- 九格结构
- Slogan 和风险提示

只有用户明确要求“生图模型直接带字”时，才使用低稳定性的直接带字模式。

### 2.2 低复杂度构图

```txt
1 个主题判断
+
1 个隐喻家族
+
1 个主视觉
+
0–2 个辅助物
+
0–1 个轻金融暗示
```

高级感来自深蓝黑基底、香槟金局部高光、留白、尺度和光线，不来自元素堆叠。

---

## 3. 任务模式路由

收到任务后，只选择一个主模式，不混用流程。

### Mode A — 单张完整 VIP 海报

触发：用户要求“海报、宣传图、完整成稿、竖版视觉”，且没有说明只要背景。

默认规格：1080×1920，9:16。

流程：

```txt
确定主题与页面模式
→ 生成无字主视觉背景
→ 使用准确排版叠加 Logo、标题、Slogan、风险提示
→ 输出完整成稿
```

必须读取：

- `references/vip-poster-page-rules.md`
- `references/design-tokens.md`
- `references/visual-language.md`
- `references/compliance.md`

### Mode B — VIP 无字背景 / H5 主视觉

触发：用户明确要求“背景图、不要文字、不要 Logo、H5头图背景”。

输出：

- 按用户尺寸；未指定时竖版默认1080×1920
- 预留 Logo、标题和底部安全区
- 不生成文字、Logo、风险提示
- 只使用一个主场景和一个主视觉

必须读取：

- `references/vip-poster-page-rules.md`
- `references/visual-language.md`
- `references/prompt-templates.md`

### Mode C — 多张 VIP 系列海报

触发：用户要求生成2张及以上同主题海报或一组视觉方案。

要求：

- 品牌色、字体、Logo、底部收口统一
- 每张使用不同隐喻家族，不是只换角度
- 每张仍遵循低复杂度构图
- 用户要求完整成稿时走模板排版；要求背景时只出无字视觉

必须读取：

- `references/vip-poster-page-rules.md`
- `references/visual-language.md`
- `references/prompt-templates.md`

### Mode D — 九宫格策划

触发：用户只给主题、文案不足9条，或明确要求先看分镜/方案/提示词。

输出：九格观点、视觉家族、主符号、标题位置、品牌与风险提示安排。

必须读取：

- `references/nine-grid-rules.md`
- `references/visual-language.md`

### Mode E — 九宫格完整成稿

触发：用户提供完整9条文案，并要求直接生成九宫格。

默认流程：

```txt
锁定文案顺序
→ 生成无字背景或CSS符号
→ 使用 assets/nine-grid-template.html 排版准确中文
→ 输出完整3×3总图
```

默认：1080×1080预览；3240×3240高清导出。

必须读取：

- `references/nine-grid-rules.md`
- `references/design-tokens.md`
- `assets/nine-grid-template.html`
- `references/compliance.md`

### Mode F — 九格拆分输出

触发：用户明确要求“拆成9张、每格单独输出、逐张出图”。

保持文案顺序、视觉系统和完整九宫格一致。单格建议1080×1080。

### Mode G — 提示词输出

触发：用户要求用于即梦、Midjourney、SDXL、ChatGPT Image、Firefly等工具的提示词。

必须读取：

- `references/prompt-templates.md`
- `references/visual-language.md`
- 用户任务对应的页面或九宫格规则

输出中文提示词；仅在用户需要时补英文提示词和 Negative Prompt。

---

## 4. 品牌核心规则

### 色彩

- 品牌蓝：`#1B88EE`
- 深蓝：`#0A1F3D`
- 黑蓝：`#0D1526`
- 理性蓝：`#1A3A5C`
- 浅蓝白：`#E8F2FA`
- 香槟金：`#C9A962`
- 浅金：`#E8D5A3`
- 风险提示灰：`#999999`

推荐比例：蓝/黑蓝75%–88%，白/浅色8%–18%，金色3%–8%。

避免绿色主调、红色促销、大面积土豪金和彩虹霓虹。

### 字体

- 中文标题：Source Han Serif CN / Noto Serif SC / 思源宋体
- 正文：Source Han Sans CN / PingFang SC / 思源黑体
- 数字：MiSans（排版工具可用时）

### 品牌文字

- Logo：`盈米基金｜且慢`
- Slogan：`安放财富 · 静待花开`
- 风险提示：`市场有风险，投资需谨慎`

真实 Logo 和准确文字由设计软件或确定性模板叠加，不要求生图模型绘制。

---

## 5. 视觉语言摘要

| 主题 | 推荐主符号 |
|---|---|
| 门槛、席位 | 半开门、唯一空席、邀请函、门缝光 |
| 信息源、认知 | 灯塔、透镜、海平线、指南针投影 |
| 同频、圈层 | 同心圆、轨道、圆桌光、连接节点 |
| 布局、先手 | 一枚棋子、已点亮路径、分割光影 |
| 筛选、价值 | 点阵筛选、少量亮点、聚焦节点 |
| 投研、判断 | 棱镜、观测台、星图、结构光路 |
| 全球视野 | 星盘、航线、世界轮廓压纹 |
| 长期主义 | 山脊、年轮、远方微光、缓慢光轨 |
| 私享机会 | 窄光束、封缄信封、隐约路径、暗流 |

详细规则见 `references/visual-language.md`。

---

## 6. 禁止事项

- 绿色主调、红色大促、土豪金
- 金币堆、金条、钞票、豪车、豪宅、香槟、名表
- 密集K线、红绿涨跌盘、交易软件界面
- 多层金融大屏、复杂仪表盘、满屏透明卡片
- 多人会议、商务握手群像
- 低幼、Q版、廉价广告、赛博霓虹
- 生图模型生成真实 Logo 或长中文风险提示
- 收益承诺、保本暗示、稳赚必涨

---

## 7. 按需读取表

| 任务 | 读取文件 |
|---|---|
| 单张完整海报、H5、页面结构 | `references/vip-poster-page-rules.md` |
| 多海报系列 | `references/vip-poster-page-rules.md` + `references/visual-language.md` |
| 九宫格 | `references/nine-grid-rules.md` |
| 色彩、字体、尺寸、组件Token | `references/design-tokens.md` |
| 隐喻、场景和元素选择 | `references/visual-language.md` |
| 文案语气和标题库 | `references/copywriting.md` |
| 生图提示词 | `references/prompt-templates.md` |
| 金融合规 | `references/compliance.md` |
| 九格准确排版 | `assets/nine-grid-template.html` |

不要在一次任务中加载所有 references。

---

## 8. 输出检查

### 内容

- 用户文案是否完整、顺序正确
- 是否擅自重写或遗漏核心语义
- 完整成稿的 Logo、Slogan、风险提示是否准确

### 结构

- 单张海报是否符合指定尺寸和页面安全区
- 九宫格是否完整3×3、边缘不裁切
- 多张系列是否统一但不重复

### 视觉

- 是否只有一个主要焦点
- 留白是否足够
- 金色是否克制
- 是否符合高净值、专业、宁静、长期主义

### 合规

- 不承诺收益、不暗示保本
- 涉及产品、策略或历史表现时保留风险提示

---

## 9. 最终原则

```txt
不删除原有VIP场景能力
只压缩主文件和重复规则
按任务加载对应reference
AI负责视觉，模板负责准确文字
```
