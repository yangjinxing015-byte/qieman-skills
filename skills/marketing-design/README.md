# marketing-design

且慢营销设计类 Skills，用于沉淀品牌营销传播、顾问类 H5、保险产品 UI / H5、高净值私域与 IP 视觉等场景的设计规范。

---

## Skills

| Skill | 中文名 | 层级 | 适用场景 | 状态 |
|---|---|---:|---|---|
| `qieman-advisor-h5-design` | 且慢顾问类 H5 设计 | L2 | 顾问服务、策略介绍、投资教育、账户分析、资产配置类 H5 | 可用 |
| `qieman-insurance-design` | 且慢保险设计 | L2 | 保险产品 UI / H5、Hero、保险 Icon、插画、人物、信息可视化与内容审核 | 可用 |
| `qieman-vip-design` | 且慢 VIP 设计 | L2 | 高净值私域、VIP 圈层、专属权益、九宫格（Style 0 / 1 / 2）、私域海报 | 可用 |
| `qieman-ip-visual-design` | 且慢 IP 视觉设计 | L2 | 小顾 IP 内容封面、运营图、社群图、活动物料 | 可用 |


---

## 场景拆分说明

原 `qieman-h5-design` 已按业务场景拆分为：

```text
qieman-advisor-h5-design
qieman-insurance-design
```

拆分原因：

- 顾问类 H5 强调专业、克制、可信、策略逻辑与顾问陪伴
- 保险设计强调保险产品信息架构、Hero、保障图标、人物/插画、保额保费、赔付金额与保险合规
- 顾问类与保险类在视觉语言、图标、插画、人物、信息层级与合规要求上差异明显
- 拆分后可以减少规则冲突，提高调用准确率和页面风格一致性

`qieman-vip-design` 继续负责高净值私域和 VIP 营销，不并入普通 H5 Skill。

---

## 调用路由

| 用户意图 / 触发词 | 推荐调用 |
|---|---|
| 顾问服务、策略介绍、投资教育、账户分析、资产配置 H5 | `qieman-advisor-h5-design` |
| 医疗险、重疾险、意外险、保险产品、保障方案、投保引导、保险 Hero / Icon / 插画 / 人物 | `qieman-insurance-design` |
| 高净值私域、VIP 圈层、专属权益、私域海报、3×3 九宫格、一大三小独立图、一大三小连续图 | `qieman-vip-design` |
| 小顾 IP、内容封面、社群图、运营图、活动物料 | `qieman-ip-visual-design` |

---

## qieman-advisor-h5-design

### 适用场景

- 顾问服务介绍
- 策略介绍页
- 投资教育内容
- 账户诊断
- 资产配置建议
- 市场陪伴
- 顾问沟通类 H5

### 视觉关键词

```text
专业
克制
可信
清晰
理性
陪伴感
```

### 常用视觉元素

- 金融图表
- 数据卡片
- 顾问服务卡片
- 策略逻辑图
- 流程图
- 资产配置图
- 轻量金融图标
- 简洁说明模块

### 不建议使用

- 与内容无关的强营销主视觉
- 过度夸张的促销元素
- 保险类保障图标作为主视觉
- 高饱和、强刺激的活动视觉

### 调用示例

```text
调用 qieman-advisor-h5-design，
根据业务需求生成一份顾问类 H5 页面。
主题：低利率时代如何安放闲钱。
强调专业、克制、可信和清晰的信息表达。
```

---

## qieman-insurance-design

> 状态：**可用**。当前基础版已完成真实保险产品页面验证。

### 适用场景

- 医疗险
- 重疾险
- 意外险
- 寿险
- 年金险 / 储蓄型保险
- 少儿保障
- 家庭保障
- 保险产品介绍页
- 投保引导
- 保障场景营销页
- 保险 Hero / 头图
- 保险专业 Icon
- 保险轻量插画 / 医疗场景插画 / 信息插画
- 保险顾问、家庭、长辈人物
- 保险信息可视化
- 保险设计稿 / HTML 局部优化
- 保险文案、数据与责任范围审核

### 视觉关键词

```text
专业
可信
亲和
保障感
家庭感
健康感
清晰易懂
克制
通透
```

### 基础规则

1. 默认继承 `qieman-ui-design`，不另起一套基础 UI Token。
2. 用户提供的标准文案、官方产品材料优先于营销表达。
3. 保额、保费、免赔额、报销比例、等待期、保障责任、免责、续保条件等关键事实不得擅自修改。
4. 保险页面优先表达“这是什么、适合谁、保什么、怎么用、有什么限制”。
5. 不使用股票、K 线、收益曲线、交易盘面作为保险页面默认主视觉。

### Hero 规则

当前已验证通过的基础 Hero 规范：

- 默认采用 **左侧文案 + 右侧人物 / 插画**。
- 左侧文字与右侧人物不得互相遮挡。
- 文案块与人物块建议 **垂直居中对齐**，两侧视觉重量接近。
- 避免人物过小、偏角落或出现大面积无效留白。
- 人物优先使用 **透明底资产**，直接叠加在 Hero 主背景之上。
- 禁止人物图自带独立矩形底色，造成明显“贴图感”。
- Hero 人物、盾牌/守护氛围与主蓝色背景需要自然融合。
- Hero 底部与正文需通过渐变、柔光或雾化自然衔接，避免硬切断层。
- 如果用户提供已有设计稿 / HTML，只优化指定问题，不因为头图调整而擅自改变页面尺寸、结构和节奏。

### Icon 规则

保险设计采用两层 Icon：

#### 基础 UI Icon

- 统一参考 Remix Icon v4.6.0。
- 用于返回、提示、问号、文件、用户、箭头、步骤、状态等基础操作。

#### 保险专业视觉 Icon

- 用于产品卖点、保障责任、健康告知、药品、保单、理赔、保费测算等保险业务语义。
- 默认采用蓝白主色 + 少量暖橙的轻 3D / 柔和渐变风格。

关键模块优先需要明确 Icon 引导：

- 产品核心卖点
- 适合谁买 / 用户痛点
- 保障责任摘要
- 投保 / 理赔流程
- 服务权益 / 增值服务

如果输出 HTML 且需要本地 `file://` 预览：

- 不应完全依赖在线 CDN 才能显示图标。
- 优先使用 **内嵌 SVG** 或其它稳定的离线图标方案。

### 人物资产

当前标准人物方向包括：

```text
保险顾问：许安 / 林知暖
年轻家庭：一家三口
多代家庭：一家五口 / 全家人
长辈：老年夫妻 / 单个老人
```

人物默认使用轻 3D / 柔和 C4D 风格，强调健康、安心、陪伴和专业服务感，避免病弱、夸张销售或低幼表现。

### 信息可视化

| 信息 | 默认表现 |
|---|---|
| 等待期 / 投保 / 理赔流程 | 时间轴 / Step Flow |
| 院内 vs 院外 | 双栏对比 |
| 保障责任差异 | 对比卡 / 对比表 |
| 过去 vs 现在 | 双场景插画 + 对比信息 |
| 3–4 个产品优势 | 3 项卡片 / 2×2 卡片 |
| 保额 / 免赔额 / 保费 | 大数字 + 简洁关系图 |
| 年龄 / 保障期限 | 区间轴 / 时间范围 |
| 多阶段机制 | 时间线叙事 |
| 单一核心数据 | 数字卡 |

原则：**一图一义、移动端优先，不为了可视化而可视化。**

### 调用示例

```text
调用 qieman-insurance-design，
根据保险产品标准文案生成 App/H5 产品介绍页。
默认继承 qieman-ui-design，
不得新增、删减或改写保障责任和关键数据。
Hero 采用左侧文案、右侧人物的结构，
人物与背景自然融合，关键卖点和流程补充明确 Icon。
```

---

## qieman-vip-design

### 适用场景

- 高净值私域
- VIP 用户圈层
- 专属权益
- 系列海报
- 私域邀请页
- 高端金融营销视觉
- 基础 3×3 九宫格
- 一大三小独立图
- 一大三小连续图

### 九宫格 Style

`qieman-vip-design` 当前支持三种九宫格 / 朋友圈组合视觉 Style：

| Style | 名称 | 输出结构 |
|---|---|---|
| Style 0 | 基础 3×3 九宫格 | 9 张独立 1:1 方图 |
| Style 1 | 一大三小独立图 | 1 张 `1280×720` 横图 + 3 张独立 `800×800` 小图 |
| Style 2 | 一大三小连续图 | 1 张 `1280×720` 横图 + 1 张连续 `2400×800` 长图 |

#### Style 0 — 基础 3×3 九宫格

用于传统朋友圈九宫格 Campaign。

默认输出：

```text
9 张独立 1:1 方图
3 × 3 排列
```

如果用户只说“九宫格”且未提供其它足够信息判断 Style，默认使用 Style 0，以保持旧调用兼容。

#### Style 1 — 一大三小独立图

用于：

```text
1 张横版主视觉
+
3 张独立小图
```

固定尺寸：

```text
横图：1280 × 720
小图：800 × 800 × 3
```

核心要求：

- 横图必须严格为 `1280×720`
- 横图标题位于左侧
- 核心视觉主体主要位于右侧
- 下方 3 张小图彼此独立
- 三张小图均需能够单独成立
- 三张保持统一色调、材质、光影与 Campaign 感
- 不得把三张设计成同一张连续长图
- 不得只复制同一构图后更换 icon

#### Style 2 — 一大三小连续图

用于：

```text
1 张横版主视觉
+
1 张完整连续长图
```

固定尺寸：

```text
横图：1280 × 720
长图：2400 × 800
```

长图后续可等分切成：

```text
800 × 800
+
800 × 800
+
800 × 800
```

核心要求：

- 下方必须从一开始按完整 `2400×800` 构图
- 必须是一张完整连续场景 / 连续空间 / 连续视觉母题
- 禁止提前设计成三栏
- 禁止三张独立卡片
- 禁止三个独立场景
- 禁止明显分割线
- 禁止三个不同底色区域
- 左、中、右三段只是后续裁切安全区，不是视觉结构
- 即使后续切成 3 张，整体仍应保持统一背景、统一光影和连续关系

### Style 自动识别

以下表达默认识别为 Style 1：

```text
一大三小独立图
横图 + 三张独立小图
1 张横图 + 3 张 icon 图
三张小图分别生成
四张独立图片
```

以下表达默认识别为 Style 2：

```text
一大三小连续图
下方是一整张横图
2400×800
后续自己切成三张
连续场景
三张拼起来是一张完整画面
不要三栏
不要三个独立卡片
```

用户明确指定 Style 时，必须优先执行指定 Style。

### 视觉关键词

```text
高净值
克制
圈层感
专业
尊享感
稀缺感
金融属性
高品质
```

### 色彩方向

不固定为单一“深蓝黑金”。

根据任务在以下方向中轮换：

```text
品牌蓝
浅蓝金
暖金蓝
明亮蓝金
米白浅金
浅蓝白
```

高净值视觉应保持：

- 明亮或克制
- 通透
- 专业
- 高品质
- 金色低占比
- 避免低幼和廉价营销感

### 高频禁用方向

除非用户明确指定，否则不主动使用：

- 城市天际线
- 沙发
- 高端会所空间
- 会议室
- 地球仪
- 书本
- 邀请卡
- 会员卡
- 腕表
- 钢笔
- 花瓶
- 普通桌面静物
- 大型玻璃装置
- 巨型圆环
- 放大镜
- 钻石
- 巨型上涨箭头
- 上涨柱状图
- 人物群组
- 商务握手
- 多人会议
- 豪车
- 豪宅

金融视觉不得依赖：

- 金币
- 金条
- 元宝
- 红绿 K 线
- 密集交易盘面
- 廉价科技 HUD
- 暴富符号

### 去同质化原则

系列保持统一，但不得重复。

```text
统一
≠
重复
```

每一轮新方案至少需要改变以下两项：

```text
核心主体
视觉隐喻
空间关系
```

不得只通过换颜色、换人物、换角度或换 icon 制造“新方案”。

### 调用示例

#### Style 0

```text
调用 GitHub main 分支最新版本的 qieman-vip-design，
本次九宫格使用 Style 0 — 基础 3×3 九宫格。
```

#### Style 1

```text
调用 GitHub main 分支最新版本的 qieman-vip-design，
本次九宫格明确使用 Style 1 — 一大三小独立图：
上方横图 1280×720，
下方 3 张独立小图，每张 800×800，
非连续长图。
```

#### Style 2

```text
调用 GitHub main 分支最新版本的 qieman-vip-design，
本次九宫格明确使用 Style 2 — 一大三小连续图：
上方横图 1280×720，
下方生成一张完整连续的 2400×800 长图，
后续等分切成 3 张 800×800，
不得设计成三个独立模块。
```

---

## qieman-ip-visual-design

### 适用场景

- 小顾 IP 内容封面
- 社群图
- 运营图
- 活动物料
- IP 使用场景
- IP 与 Logo 组合视觉

### 调用示例

```text
调用 qieman-ip-visual-design，
生成一组小顾 IP 内容封面。
使用 Logo + 主标题 + 内容 + IP 的视觉结构。
```

---

## 目录结构

```text
marketing-design/
├── qieman-advisor-h5-design/
│   ├── SKILL.md
│   ├── README.md
│   ├── references/
│   └── assets/
│
├── qieman-insurance-design/
│   ├── SKILL.md
│   ├── README.md
│   ├── references/        # 可按后续需要补充
│   └── assets/            # 可按后续需要补充
│
├── qieman-vip-design/
│   ├── SKILL.md
│   ├── README.md
│   ├── references/
│   └── assets/
│
├── qieman-ip-visual-design/
│   ├── SKILL.md
│   ├── README.md
│   ├── references/
│   └── assets/
│
└── README.md
```

---

## WIP Skill 管理

仅对**尚未完成、尚未提供 `SKILL.md` 的新 Skill**使用 WIP 占位规则。

WIP Skill 建议只保留：

```text
<skill-name>/
└── README.md
```

占位 README 需要明确：

- 当前状态为 WIP / 整理中
- 计划覆盖的业务场景
- 暂不可调用
- 完成后再补充 `SKILL.md`

> `qieman-insurance-design` 已具备正式 `SKILL.md`，当前状态为**可用**，不再属于 WIP。

---

## 命名规范

所有 Skill 必须满足：

- 文件夹名与 `SKILL.md` 中的 `name` 完全一致
- `name` 只能使用小写字母、数字和连字符
- 不以连字符开头或结尾
- 不出现连续连字符
- 长度为 1–64 个字符

示例：

```yaml
name: qieman-advisor-h5-design
```

```yaml
name: qieman-insurance-design
```

```yaml
name: qieman-design-vip
```

> 注意：如果 VIP Skill 的 `SKILL.md` 已正式使用 `name: qieman-design-vip`，
> 则建议后续同步评估目录名 `qieman-vip-design` 是否需要迁移，
> 以满足“文件夹名与 SKILL.md 中的 name 完全一致”的仓库规范。
> 在未完成迁移前，不要只改目录名或只改 `name`，避免引用路径失效。

---

## 改名与迁移检查

原 `qieman-h5-design` 改名后，需要同步更新：

- 文件夹名称
- `SKILL.md` 中的 `name`
- references 内部路径
- assets 内部路径
- 本 README
- `skills/README.md`
- 团队 Skill 索引表
- 调用示例与历史提示词

建议确保仓库中不再残留旧名称：

```text
qieman-h5-design
qieman-insurance-h5-design
```

保险 Skill 当前正式名称统一为：

```text
qieman-insurance-design
```

需要同步检查：

- `marketing-design/README.md`
- `skills/README.md`
- 团队 Skill 索引表
- 历史 Prompt / 调用示例
- 自动调用配置
- references / assets 内部旧路径

如果后续决定将：

```text
qieman-vip-design
```

迁移为：

```text
qieman-design-vip
```

同样需要同步检查：

- 文件夹名称
- `SKILL.md` 的 `name`
- README 中的调用名称
- references / assets 引用路径
- 仓库索引
- 历史 Prompt
- 自动调用配置

迁移应一次性完成，不建议长期保留目录名与 Skill name 不一致的状态。

---

## Git 提交建议

本次 VIP Style 更新推荐提交信息：

```text
Summary:
Update qieman VIP visual skill routing

Description:
- Add Style 0 / Style 1 / Style 2 documentation
- Add one-hero-three-independent layout rules
- Add one-hero-continuous-triptych layout rules
- Update VIP routing keywords and usage examples
- Update VIP visual and de-duplication guidance
```

如与 H5 拆分一起提交，可使用：

```text
Summary:
Update marketing design skill routing

Description:
- Keep qieman-advisor-h5-design for advisor H5 scenarios
- Rename qieman-insurance-h5-design to qieman-insurance-design
- Mark qieman-insurance-design as available
- Update insurance Hero, Icon, persona and content-protection routing
- Update VIP Style 0 / 1 / 2 routing
- Update marketing-design README and skill routing
```

不要提交：

```text
.DS_Store
**/.DS_Store
```
