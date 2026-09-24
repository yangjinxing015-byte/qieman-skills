---
name: qieman-marketing-visual-design
description: 且慢 Marketing Design 应用线的视觉成熟度与营销视觉能力 Skill。继承 Foundation，不重定义品牌、Token、基础组件或金融合规；负责 Hero/KV、视觉路由、插画与资产、构图、材质光影、页面视觉节奏、Hero→正文承接与视觉回归控制。
version: V1.13 Visual Maturity Gate
status: candidate / validation
standalone: true
release_note: 在 V1.12 架构基础上重新约束 Visual Maturity；新增视觉成熟度 Blocking Gate、营销氛围强度分级、Weak Hero 检测与首屏完成度门禁，解决“结构正确但视觉偏浅、偏弱、像普通内容页”的问题。
---

# qieman-marketing-visual-design

## 0. Role｜定位

本 Skill 是 `marketing-design` 应用线中的 **Visual Capability Layer｜营销视觉能力层**。

它回答的不是：

> 业务内容是什么？

而是：

> 在业务内容、结构和合规已经确定的前提下，这个页面怎样才能达到成熟、专业、克制、具有主题辨识度的视觉完成度？

核心职责：

- Visual Foundation
- Visual Routing
- Hero / KV
- Illustration & Asset Direction
- Composition
- Material / Lighting / Color Depth
- Visual Density
- Hero → Content Handoff
- Anti-AI / Anti-Childish
- Regression Lock
- Final Visual QA

本 Skill **不修改业务真源**，也不替代 `qieman-business-content-design`。

---

# 1. Foundation Inheritance｜Foundation 继承契约

## 1.1 Upstream Foundation

本 Skill 继承但不修改以下 Foundation：

```text
qieman-brand-guidelines
qieman-design-token-system
qieman-ui-design-system
qieman-financial-compliance-guidelines
```

Foundation 由独立维护者负责。本 Skill 只能在其允许范围内扩展 Marketing Visual 表现。

## 1.2 本 Skill 不得重新定义

- 品牌基础定位与品牌人格
- Logo 基础规则
- Design Token 真源
- 基础 Typography Token
- Spacing / Radius / Shadow Token
- Button / Card / Form / Navigation 等基础组件行为
- Accessibility 基础要求
- 金融合规边界
- Foundation 已定义的品牌禁用项

如果 Foundation 已经给出明确规则：

> **继承，不复制；引用，不覆盖。**

## 1.3 本 Skill 只补充 Marketing Visual 能力

- 页面主题视觉化
- Hero / KV 视觉方向
- 营销视觉强弱控制
- 插画 / 人物 / 产品物件 / 数据视觉的路由判断
- 主视觉资产质量
- 图文比例与视觉密度
- 色彩深度、材质、光影的表现层判断
- Hero 与正文的视觉承接
- 视觉成熟度、反低幼、反 AI 初稿
- 视觉回归保护

## 1.4 冲突优先级

```text
业务事实 / 合规
>
Foundation
>
垂类 Domain Skill
>
qieman-marketing-visual-design
>
案例级视觉偏好
```

说明：

- 视觉不得覆盖业务事实与合规。
- Marketing Visual 不得覆盖 Foundation。
- 保险 / VIP / IP 等垂类语境，由对应 Domain Skill 约束具体业务表达。
- 案例偏好只能在上层规则允许范围内生效。

---

## 1.5 Foundation Token Non-Override｜Foundation Token 不覆盖契约

本 Skill 负责视觉表现，不拥有 Foundation Token 的定义权。

Marketing Visual 可以决定：

- Hero / KV 使用什么视觉路线；
- 插画 / 景观 / 人物 / 产品物件 / 数据视觉的表现方式；
- 图文构图、视觉密度与留白；
- 材质、光影、色彩氛围与视觉完成度；
- Hero → Content 的承接方式。

但不得改变或覆盖：

- 金融涨跌语义色；
- 基础文字语义色；
- Foundation Typography 与风险披露可读性下限；
- Spacing Token；
- Radius / Shadow 基础定义；
- Button / Card / Navigation 等基础组件状态；
- 金融合规规则。

强制示例：

```txt
“页面主视觉希望更加蓝”
≠
“允许把 -4.70% 回撤改成蓝色”
```

金融业务语义色优先于视觉氛围色。若 Marketing Visual 与 Foundation Token 冲突，**Foundation 自动获胜**。

当输入为已有 HTML 时，原页面 CSS 只作为视觉参考；在 `framework-locked-redesign` 中不得用 Source CSS 覆盖当前 Foundation。

---

# 2. Responsibility Boundary｜职责边界

## 2.1 `qieman-business-content-design`

负责：

- Requirement Source
- Content Lock
- Framework Contract
- 模块数量与顺序
- 信息架构
- 业务关系
- CTA / Interaction
- 风险提示与业务必要文本
- 最终 HTML 编排

## 2.2 `qieman-marketing-visual-design`

负责：

- Visual Concept
- Visual Foundation
- Visual Route
- Hero / KV
- Illustration / Asset Direction
- Visual Hierarchy
- Proportion / Density
- Material / Lighting / Color Depth
- Transition / Handoff
- Visual Maturity QA

## 2.3 Domain Skills

如：

```text
qieman-insurance-design
qieman-vip-design
qieman-ip-visual-design
```

负责特定业务语境，不替代 Marketing Visual。

执行关系更接近：

```text
业务需求
  ↓
qieman-business-content-design
  ↓
Foundation
  ↓
qieman-marketing-visual-design
  +
需要的 Domain Skill
  ↓
最终 HTML
```

---

# 3. Source of Truth｜视觉改造输入契约

## 3.1 已确认业务 HTML / PRD / 原型

当输入已经包含真实业务内容时：

```text
业务内容 = Requirement Source
业务结构 = Framework Contract
已有视觉 = Reference, not Visual Truth
```

视觉重做不得：

- 改业务文案
- 改数据
- 改模块顺序
- 合并 / 删除真实业务模块
- 改 CTA 行为
- 弱化风险提示

除非用户明确授权。

## 3.2 Reference Image

参考图只用于提取：

- 视觉成熟度
- 色彩关系
- 材质
- 光影
- 构图方式
- 插画语气
- 空间感

不得因为参考图存在就默认复制构图或复制具体元素。

核心：

> **Reference Level is a quality floor, not a template.**

如果用户已确认一版视觉“更成熟”，后续版本不得退回到明显更低完成度的视觉语言。

---

# 4. Visual Foundation｜营销视觉基础判断

Visual Foundation 只规定“什么样的视觉算合格”，不规定“页面必须长什么样”。

统一使用 8 个质量维度：

```text
Hierarchy
Proportion
Density
Color Depth
Material
Lighting
Detail Quality
Restraint
```

## 4.1 Hierarchy｜主次

同一屏必须有明确第一视觉中心。

检查：

- 页面主题 / 核心利益是否优先；
- 主视觉是否服务主题；
- 核心数据是否获得正确权重；
- 辅助元素是否主动降权；
- 装饰是否低于信息。

如果标题、数字、插画、标签、光圈、Icon 同时抢第一层级：

> **Hierarchy Failed**

## 4.2 Proportion｜比例

优先检查关系，不优先检查单个元素是否“漂亮”。

必须检查：

- Hero 高度与信息量；
- 文字区与视觉区；
- 主视觉与辅助元素；
- 卡片高度与内容密度；
- 标题 / 正文 / 数据的重量；
- 留白与实际内容量。

原则：

> **先调比例，再调细节。**

禁止通过缩小字号解决构图问题。

## 4.3 Density｜密度

简洁不等于固定元素数量。

对每个元素判断：

1. 是否有业务作用？
2. 是否有构图作用？
3. 删除后表达是否下降？
4. 是否与其它元素重复表达？

如果删除后主题更清楚，元素就是冗余。

> **减少冗余，不降低完成度。**

## 4.4 Color Depth｜色彩层次

成熟色彩关系应包含：

```text
主色域
↓
明度层次
↓
辅助色
↓
强调色
```

要求：

- 品牌色负责统一；
- 强调色只用于重要信息；
- 不让多个高饱和色平均竞争；
- 背景 / 卡片 / 主体有清楚的明度关系；
- 金融语义色不能被装饰性滥用。

## 4.5 Material｜材质

允许：

- 扁平
- 半扁平
- 编辑插画
- 轻 3D
- 半拟物
- 透明 / 磨砂
- 纸张 / 金属等受控材质
- 数据 / 信息图形

但同一页面不能无理由混用多个素材库语言。

## 4.6 Lighting｜光影

光影用于建立空间，不用于制造噪声。

要求：

- 主光方向一致；
- 主体与辅助阴影分级；
- 高光集中；
- 背景光效不压文字；
- 不为“高级感”堆辉光。

## 4.7 Detail Quality｜细节完成度

细节用于提升已经存在元素的质量：

- 边缘
- 高光
- 透明边界
- 倒角
- 小比例结构线
- 纹理
- 图标线宽
- 阴影控制
- 对齐

细节必须在移动端尺寸下仍有价值。

## 4.8 Restraint｜克制

克制不等于“什么都没有”。

禁止把以下行为当成成熟度：

- 每张卡片都有重阴影；
- 每个标题都有 Icon；
- 每个数字都有颜色；
- 所有内容都装进卡片；
- 所有背景都有渐变；
- 所有 Hero 都复杂。

核心：

> **成熟设计不是元素更多，而是留下来的元素必要、精致、协调。**

## 4.9 Visual Maturity Gate｜视觉成熟度门禁

视觉成熟度不是一种固定风格，也不等于“更深、更亮、更复杂”。

它要求页面在当前业务语境下，同时达到：

```text
Theme Presence
Visual Weight
Color Atmosphere
Spatial Depth
Craft Quality
Focus & Contrast
Page Continuity
Mobile Presence
```

### 4.9.1 Theme Presence｜主题存在感

首屏必须在第一眼建立业务主题，而不是只有“品牌蓝 + 通用插图”。

检查：

- 视觉母题是否与业务语义直接相关；
- 标题、主视觉、背景是否共同表达同一主题；
- 去掉标题后，视觉是否仍然保留一定主题识别度；
- 不允许依靠大量装饰元素制造“像营销页”的假象。

若主题只能靠文字解释，视觉本身近似通用模板：

> **Theme Presence Failed**

### 4.9.2 Visual Weight｜视觉重量

营销页首屏必须有足够视觉重量，不能退化成普通内容页顶部。

视觉重量可以来自：

- 明确主色域；
- 成熟主视觉资产；
- 场景 / 空间关系；
- 数据或产品主体；
- 高质量排版与留白对比。

不要求 Hero 一定深色，也不要求主视觉一定很大。

但以下组合默认视为高风险：

```text
过浅背景
+ 小尺寸孤立插图
+ 弱对比标题
+ 大面积无效留白
```

若正文首卡比 Hero 更有视觉存在感：

> **Visual Weight Failed**

### 4.9.3 Color Atmosphere｜色彩氛围

Color Depth 之外，营销页还必须判断“氛围强度是否足够”。

要求：

- Hero 至少形成一个可感知的主色域或主题图像色域；
- 背景、主体、强调色之间有明确层次；
- 页面不能整体发灰、发白、发虚；
- 暖色只承担强调，不平均铺满；
- 深色不等于成熟，浅色也不等于弱；浅色方案必须通过空间、主体、对比或材质补足视觉重量。

若 Hero 主要由极浅灰蓝 / 极浅渐变构成，又缺少足够主体与对比：

> **Color Atmosphere Failed**

### 4.9.4 Focus & Contrast｜焦点与对比

首屏必须形成明确的视觉进入顺序：

```text
主题 / 核心利益
→ 主视觉
→ 次级说明
→ 首卡
```

禁止：

- 标题、插图、标签、利益数字同权竞争；
- 主视觉颜色与背景过于接近导致“融掉”；
- 所有元素都轻、浅、细；
- 所有元素都高饱和、高对比。

成熟度来自有控制的对比，不来自平均用力。

### 4.9.5 Spatial Depth｜空间层次

页面无需追求 3D，但 Hero 应具备可感知的前后关系。

可以通过：

- 远 / 中 / 近景；
- 主体与背景层次；
- 轻遮挡；
- 阴影 / 高光分级；
- 景深或材质边界；
- 图文区域的空间关系。

若所有元素都平铺在同一视觉平面，且缺少编辑感或构图张力：

> **Spatial Depth Weak**

### 4.9.6 Craft Quality｜完成度

“能表达业务”只是基础，不代表视觉成熟。

必须检查：

- 主视觉是否像最终资产，而不是草图；
- 边缘、阴影、光照、材质是否干净；
- SVG / CSS 图形是否超过其适用复杂度；
- 插图是否存在明显通用素材感；
- 主视觉是否与页面其它高质量区域处于同一完成度。

如果需要品牌级资产，却用低完成度几何 SVG 勉强替代：

> **Craft Quality Failed**

### 4.9.7 Page Continuity｜整页成熟度

视觉成熟度不只评 Hero。必须联合检查：

```text
Hero
→ Transition Zone
→ First Surface / First Card
→ Subsequent Content Rhythm
```

首屏强、正文突然变弱，或 Hero 很弱、首卡突然很重，都属于成熟度断层。

### 4.9.8 Mobile Presence｜移动端存在感

在 375px 首屏中检查：

- 主视觉仍有识别度；
- 标题仍有重量；
- 视觉不因缩小而退化成“小图标”；
- 首屏不出现大片“什么都没有”的浅色区域；
- 首卡进入视野后仍与 Hero 构成完整关系。

---

## 4.10 Atmosphere Strength by Scene｜场景氛围强度

成熟度不等于所有页面都高营销。不同场景使用不同氛围强度：

### Marketing / Conversion

要求：**Medium–High Atmosphere**

- 主题感明确；
- 首屏视觉重量足；
- 利益点能快速被识别；
- 可以更有颜色张力，但保持专业。

若看起来像普通产品说明页：Fail。

### Strategy / Product

要求：**Medium Atmosphere**

- 稳重、可信；
- 有主题隐喻或产品主体；
- 视觉不能过度促销，也不能过淡。

### Insurance / Service

要求：**Medium Atmosphere**

- 专业、安心、温度；
- 允许浅色，但必须有成熟主体和层次；
- 禁止因“亲和”退化成低幼。

### Content / Report / Education

要求：**Low–Medium Atmosphere**

- 内容优先；
- 可以克制；
- 但仍需有编辑感和完整度。

> **Atmosphere Strength 是相对业务场景的最低完成度，不是统一饱和度模板。**

---

# 5. Visual Routing｜视觉路线选择

先选视觉路线，再实现 Hero。

不得直接从“金融页面”跳到“蓝色 + 点线面 + 圆环”。

## 5.1 Routing Process

```text
Business Theme
↓
User Goal
↓
Emotional / Semantic Intent
↓
Primary Visual Route
↓
Asset Type
↓
Composition
```

每个页面应有一个主要视觉路线；辅助路线只能补充，不能造成风格拼贴。

## 5.2 Route A｜Abstract Financial

适合：

- AI 开放平台
- MCP / Skills / 智能体
- 数据能力
- 科技平台
- 连接关系
- 系统能力
- 抽象资产配置关系

可使用：

- 网格
- 轨迹
- 节点
- 数据流
- 抽象曲面
- 几何空间
- 克制的金融信息结构

强规则：

> **Abstract Financial ≠ Default Hero**

对于策略、长期投资、养老、陪伴、生活化金融主题，不得仅因为“这是金融页面”就默认使用点线面。

## 5.3 Route B｜Landscape Illustration

适合具有以下语义的页面：

- 长期
- 稳步
- 进阶
- 陪伴
- 穿越周期
- 目标感
- 稳健向前
- 全球 / 远方 / 视野

可候选元素：

- 高山
- 山脊
- 攀登
- 缓坡 / 路径
- 晨光 / 日出
- 云层
- 湖面
- 远景
- 地平线
- 开阔空间

这些只是语义母题，不是固定模板。

### Landscape Quality Rules

- 风景必须简洁，不做旅游宣传画；
- 不堆建筑、树木、云朵、人物、飞鸟等无关细节；
- 允许扁平 / 半扁平 / 编辑插画 / 轻空间插画；
- 山、路、光等元素必须服务主题，而不是为了“看起来像插画”；
- 画面需要有留白与视觉呼吸；
- 金融页面仍需保持专业和可信赖；
- 避免儿童绘本、Q 版、童话、游戏地图感。

例如“稳步向前”可以选择山脊与路径，也可以选择平缓地平线，不要求必须出现攀登者。

## 5.4 Route C｜Human / Service

适合：

- 顾问服务
- 家庭保障
- 陪伴服务
- 人与服务关系
- 需要真实情感温度的内容

人物必须：

- 动作自然；
- 比例正常；
- 不低幼；
- 不抢业务信息；
- 与 Domain Skill 的人物规范一致。

## 5.5 Route D｜Data-led Visual

适合：

- 数据结果本身就是核心价值；
- 回撤、收益、配置、结构、对比；
- 诊断、报告、工具。

原则：

> 数据本身承担视觉中心时，不需要额外制造大型装饰 KV。

图表细节由图表 Skill / UI System 负责，本 Skill 只控制整体视觉关系。

## 5.6 Route E｜Product / Object

适合：

- 产品机制
- 支付 / 券 / 账户 / 服务工具
- 有明确业务物件语义的营销页

要求：

- 物件必须具有品牌级完成度；
- 不能把普通系统 Icon 放大成 Hero；
- 不能把多个小物件拼成玩具场景。

## 5.7 Route F｜IP-led Visual

只有当 IP 本身是核心传播资产时使用。

必须叠加 `qieman-ip-visual-design`。

不得为了“增加亲和感”强行把 IP 放进不需要 IP 的页面。

## 5.8 Route Selection Rule

若两个路线都合理：

- 选更能解释业务主题的；
- 选在移动端更稳定的；
- 选更容易保持成熟度的；
- 不因实现方便而自动选简单 SVG。

---

# 6. Hero / KV｜首屏视觉

## 6.1 Hero 的角色

Hero 是页面第一视觉判断，不是独立海报。

它必须同时完成：

- 识别主题；
- 建立视觉气质；
- 保护文案；
- 引导进入正文。

> **Hero 是整页视觉成熟度的上限。**

正文再正确，Hero 低幼或粗糙，整页仍视为视觉失败。

## 6.2 Hero Quality Floor

Hero 至少同时满足：

- Theme
- Maturity
- Craft
- Proportion
- Readability
- Continuity
- Brand Compatibility

若正文第一张卡比 Hero 更精致：

> **Hero Quality Floor Failed**

## 6.3 Hero Proportion

不固定高度或视觉占比，但必须：

- 高度与实际信息量匹配；
- 不为“有氛围”制造大面积无效区域；
- 主视觉不能大到挤压标题；
- 也不能小到退化成右上角 Icon；
- 375px 下标题、副标题、主视觉仍成立；
- 首卡关系自然。

## 6.4 Text Safe Area

必须保证：

- 标题不被主视觉侵入；
- 重要标题不随机碎行；
- 不通过缩字号为图片让位；
- 背景高光不出现在正文文字后；
- 标题与背景对比足够。

## 6.5 Background Complexity

背景优先：

- 干净色域；
- 轻层次渐变；
- 少量空间关系；
- 必要的风景 / 场景元素。

避免：

- 多个大光圈；
- 过多镜头光；
- 多组轨道；
- 装饰球；
- 浮动 Icon；
- 大面积发光雾；
- 为了填满画面添加无意义物件。

> **背景服务主题和文字，不承担“证明设计做了很多”的任务。**

## 6.6 Hero Visual Center

同一 Hero 必须有明确主次。

不规定元素数量，但要求：

- 第一视觉中心清楚；
- 辅助元素有必要性；
- 同权重元素不得散落；
- 不做 Icon collage；
- 不让装饰抢标题。

## 6.7 Hero Maturity Guard

出现以下任一情况即失败：

- 功能 Icon 放大成 KV；
- Sticker / Toy / Candy 感明显；
- 圆润可爱元素成为主导；
- 简单 SVG 代替需要材质 / 空间 / 插画完成度的视觉主体；
- 背景很复杂，但主题不清楚；
- 主视觉与业务语义只有表面联想；
- 视觉质量低于用户已确认的成熟参考；
- 过浅背景 + 小尺寸孤立主视觉 + 弱焦点；
- Hero 整体视觉重量低于首卡；
- 页面属于 Marketing / Conversion，但首屏像普通内容页；
- 首屏只有“干净”，没有主题氛围、视觉记忆或完成度。

> **Clean ≠ Mature. Light ≠ Weak. Mature = controlled visual weight + clear atmosphere + high craft.**

## 6.8 Hero Atmosphere Gate｜Hero 氛围门禁

Hero 输出前必须回答：

1. 当前场景需要 Low / Medium / Medium–High 哪一级氛围？
2. 主色域是否达到该场景的最低氛围强度？
3. 主视觉是否承担足够视觉重量？
4. 标题与主视觉是否形成清晰焦点？
5. 首卡进入视野后，是否仍保持 Hero 为第一视觉层？

任一答案为否，必须先调整再输出。

---

# 7. Illustration & Asset｜插画与视觉资产

## 7.1 Asset Routing

### HTML / CSS / SVG 适合

- 背景色域
- 几何关系
- 轻轨迹
- 数据结构
- 简单图示
- 小型 Icon
- 低权重装饰

### High-quality Independent Asset 适合

当 Hero 需要：

- 明显材质
- 光影
- 人物
- 场景
- 风景
- 空间纵深
- 高级物件质感
- 品牌级插画完成度

应使用高质量独立视觉资产。

如果运行环境支持图像生成，可先生成 **无字主视觉资产**，再嵌入 HTML。

这不等于把整个页面做成一张图。

## 7.2 No Placeholder SVG

如果一个 SVG 可以被描述成：

> “一个时钟 Icon + 一个日历 Icon + 几个圆环”

而页面需要品牌级营销 Hero，则该 SVG 默认不应承担核心主视觉。

## 7.3 No-text Asset

Hero 独立图片资产默认不包含：

- 页面主标题
- CTA
- 复杂数据
- 长文本

文字由 HTML 承担，保证响应式与可读性。

## 7.4 Asset Edge

独立资产嵌入页面必须检查：

- 无明显矩形图片边界；
- 背景色与页面融合；
- 透明边缘干净；
- 不出现硬裁切；
- 主体缩放后仍保持完整；
- 不因适配造成透视异常。

## 7.5 Illustration Maturity

插画成熟度来自：

- 构图
- 比例
- 色彩关系
- 材质
- 光影
- 空间
- 边缘
- 克制

不是来自：

- 元素数量
- 发光数量
- 装饰数量
- 3D 程度

---

# 8. Composition｜构图系统

## 8.1 Composition First

先建立：

```text
信息重心
视觉重心
安全区
留白区
承接区
```

再决定具体元素。

## 8.2 Common Compositions

可用但不固定：

- 左文右图
- 右文左图
- 中心主视觉
- 大留白 + 局部视觉
- 背景场景 + 前景文字
- 数据主视觉

选择依据是内容，而不是模板复用。

## 8.3 White Space

留白必须有作用：

- 文案安全；
- 视觉呼吸；
- 层级分离；
- 过渡。

禁止大面积无目的空区。

## 8.4 Mobile Readability

至少验证：

```text
320px
375px
414px
```

不得通过以下方式“适配”：

- 缩标题到失去层级；
- 压缩正文行高；
- 主视觉覆盖文字；
- 把重要内容移出首屏只是为了保图。

---

# 9. Color / Material / Lighting｜表现层控制

## 9.1 Theme → Color

颜色必须由主题路由决定，而不是页面类型机械决定。

允许：

- 品牌蓝主导；
- 浅蓝 / 蓝灰；
- 适度暖色；
- 节日 / 活动的主题色；
- 高净值的克制深浅组合；
- 保险的蓝 + 少量暖色。

但均不得突破 Foundation 的品牌与语义色规则。

## 9.2 Material Consistency

一屏内有一个主要材质语言。

如果人物、Icon、主视觉、卡片看起来来自不同视觉库：

> **Material Consistency Failed**

## 9.3 Lighting Restraint

默认减少：

- 过多 glow；
- 过重反光；
- 多光源；
- 大面积体积光；
- 每个元素都有阴影。

光影只在需要建立空间与主体质量时使用。

---

# 10. Hero → Content Handoff｜首屏到正文承接

承接不是“加一段渐变”，而是处理 Hero 与第一核心内容之间的关系。

## 10.1 Universal Continuity

必须检查：

- Background Continuity
- Transition Zone
- Text Protection
- Asset Edge Blending
- First Surface Relationship

## 10.2 `overlay-card`

适合：

- Marketing
- Strategy
- Product

特点：

- 首卡可轻微进入 Hero；
- Overlap 只用于建立层级；
- 不得深度压入导致内容像漂浮在图片上；
- Transition Zone 短而自然。

## 10.3 `soft-gradient`

适合：

- Insurance
- Family
- Medical
- 柔和服务页

特点：

- 背景连续；
- 不需要明显卡片侵入；
- 避免雾化区域过长。

## 10.4 `flat-spacing`

适合：

- Education
- Report
- Content

特点：

- Hero 可以直接结束；
- 依靠稳定间距进入正文；
- 不强制制造营销式过渡。

## 10.5 Transition Regression Guard

如果某一版已经确认：

- Hero 比例正确；
- 主视觉成熟；
- 文字安全；

后续仅修 Transition 时：

> **不得重做 Hero 主视觉。**

同理，只修 Hero 时不得无理由重排正文。

---

# 11. Anti-pattern｜强制反模式

## 11.1 Anti-Childish

严肃金融营销默认禁止：

- Q 版比例；
- 儿童绘本感；
- Sticker 贴纸感；
- Toy / Plastic 玩具感；
- Candy 色平均分配；
- 过度圆润软萌；
- Emoji 化；
- “可爱 > 专业”。

亲和场景可以更柔和，但必须保持专业完成度。

## 11.2 Anti-AI Draft

警惕：

- 蓝紫渐变 + 圆球 + 轨迹；
- 玻璃圆环 + 浮动卡片；
- 图标拼贴；
- 过多无语义小物件；
- 所有页面都同一种“科技蓝”；
- 所有 Hero 都用一个构图；
- 大面积虚化发光背景；
- “看起来丰富”但主题不明确。

## 11.3 Anti-Template

禁止将案例级元素固化为所有页面模板。

例如：

- 策略页不等于高山；
- 活动页不等于时钟；
- 保险页不等于盾牌；
- AI 页不等于机器人；
- 高净值不等于深蓝 + 金。

只固定判断标准，不固定具体母题。

## 11.4 Anti-Abstract Default

> **金融属性不是抽象点线面的充分理由。**

如果风景、人物、产品物件、数据本身更能解释业务，应优先选择更有语义的路线。
## 11.5 Anti-Weak Hero｜反弱首屏

以下不是“克制”，而是未完成：

- 极浅背景 + 小图 + 大空白；
- 标题与背景对比不足；
- 插画像附属 Icon，无法承担 Hero；
- 只有轻渐变，没有主题场景 / 主体 / 空间；
- 全屏颜色都处在同一低对比明度区间；
- 为了“简洁”把视觉记忆点全部删掉；
- 为了“品牌蓝”把所有颜色都稀释成浅蓝。

如果页面是营销活动 / 转化场景，出现上述任一组合，应优先提高：

```text
主色域浓度 / 主体比例 / 色彩对比 / 空间层次 / 材质完成度 / 主题氛围
```

但不得用“增加更多元素”作为默认修复方式。

---

# 12. Regression Lock｜已确认视觉保护

当用户明确认可：

- 某个 Hero；
- 某种比例；
- 某种承接；
- 某个主视觉资产；
- 某种色彩 / 材质；

这些关系进入 Regression Lock。

后续局部修改必须遵循：

> **局部问题局部修复，已验证正确的视觉关系不得无理由回退。**

## 12.1 Asset Quality Non-Regression

允许：

- 减少辅助元素；
- 调整主体比例；
- 简化背景；
- 优化承接；
- 调整留白。

禁止：

- 用低完成度 SVG 替换成熟资产；
- 因“简洁”把主视觉变成 Icon；
- 因修过渡破坏已确认 Hero；
- 因修 Hero 改坏正文结构。

核心：

> **Visual Simplification ≠ Asset Quality Reduction**

---

# 13. Domain Handoff｜垂类能力交接

## 13.1 Insurance

触发保险语境时：

- Marketing Visual 负责整体成熟度和 Hero 质量；
- `qieman-insurance-design` 负责人物、家庭、医疗、保障等专项语义。

## 13.2 VIP

- Marketing Visual 负责整体视觉完成度；
- `qieman-vip-design` 负责高净值、私享、稀缺、朋友圈特殊规格。

## 13.3 IP

- Marketing Visual 判断 IP 是否适合作为传播主角；
- `qieman-ip-visual-design` 负责 IP 比例、动作、资产、禁止变形等专项规则。

---

# 14. HTML Implementation Contract｜HTML 实现契约

## 14.1 HTML First

用户要求页面设计 / HTML 时，最终目标仍然是完整可运行 HTML。

独立图像资产只是视觉资源，不替代页面实现。

## 14.2 Image Asset Use

当独立资产更适合 Hero 时：

```text
生成 / 使用高质量无字视觉资产
↓
嵌入 HTML
↓
HTML 承担标题 / 数据 / CTA
↓
完成响应式布局
```

## 14.3 Do Not Fake UI in Hero

Hero 主视觉不要画进：

- 可点击 Button；
- 真实输入框；
- 复杂可交互卡片；
- 会与正文 UI 混淆的控件。

除非该 UI 本身就是产品展示对象。

---

# 15. Visual Decision Output｜给主 Skill 的输出

在正式实现前，本 Skill 应形成一份简洁视觉决策：

```text
Page Goal:
Primary Visual Route:
Hero Tone:
Background Strategy:
Asset Strategy:
Composition:
Material / Lighting:
Transition Mode:
Domain Skill:
Regression Locks:
```

示例：

```text
Page Goal: 策略解释
Primary Visual Route: Landscape Illustration
Hero Tone: 宁静、稳步、专业
Background Strategy: 浅蓝开阔色域，少量远山层次
Asset Strategy: 成熟简洁风景插画，无字
Composition: 左文右景，标题为第一视觉中心
Material / Lighting: 半扁平，柔和晨光，低光效
Transition Mode: overlay-card
Domain Skill: none
Regression Locks: 正文模块顺序 / 首卡数据结构
```

---

# 16. Final Visual QA｜最终视觉验收

交付前必须通过：

## Foundation Compatibility

- [ ] 未覆盖 Foundation Semantic Token
- [ ] 正收益 / 上涨仍使用 `foreground/rise`
- [ ] 负收益 / 下跌 / 回撤仍使用 `foreground/fall`
- [ ] 未因视觉氛围改变基础文字色、Typography 下限或组件状态
- [ ] Source HTML 的旧 CSS 未反向污染 Foundation

## Theme

- [ ] 视觉一眼能解释页面主题
- [ ] 不是“金融页面 = 蓝色抽象图形”
- [ ] 视觉母题与业务语义有真实关系

## Maturity｜Blocking Gate

- [ ] 当前场景的 Atmosphere Strength 已明确
- [ ] Hero 达到该场景最低氛围强度
- [ ] 没有低幼 / 玩具 / Sticker 感
- [ ] Hero 不像放大的功能 Icon
- [ ] 主视觉达到品牌级完成度
- [ ] 背景没有过度光影
- [ ] 页面没有整体发灰 / 发白 / 发虚
- [ ] 不存在“过浅背景 + 小图 + 弱焦点 + 大空白”
- [ ] Hero 的视觉重量不低于首卡
- [ ] 标题 / 主视觉 / 强调信息形成清晰进入顺序
- [ ] 首屏在 375px 下仍有主题存在感和视觉记忆点
- [ ] 简化没有导致氛围或资产质量下降

任一关键项失败：

> **Visual Maturity Failed — 必须修正后再交付。**

## Composition

- [ ] 第一视觉中心明确
- [ ] Hero 高度与信息量匹配
- [ ] 图文比例稳定
- [ ] 留白有作用

## Asset

- [ ] 资产类型选择合理
- [ ] 独立图片无文字污染
- [ ] 图片边缘与背景融合
- [ ] 没有资产质量回退

## Continuity

- [ ] Hero → 正文自然
- [ ] 首卡关系合理
- [ ] Transition Zone 不过长
- [ ] 不因局部修复破坏已确认区域

## Mobile

- [ ] 320–414px 成立
- [ ] 标题不被压缩到失去层级
- [ ] 不依赖桌面宽度才能成立

任一严重项失败：

> **Visual Delivery Failed**

---

# 17. Fixed Principles｜固定原则

> **Foundation 定底线，Marketing Visual 做视觉扩展。**

> **固定判断标准，不固定视觉模板。**

> **视觉路线先于元素选择。**

> **Abstract Financial 不是默认 Hero。**

> **减少元素数量，不减少视觉完成度。**

> **Visual Simplification ≠ Asset Quality Reduction.**

> **成熟感来自比例、材质、光影、色彩层次、空间与克制。**

> **Clean ≠ Mature；营销视觉必须达到当前场景所需的最低氛围强度与视觉重量。**

> **浅色方案允许成立，但必须用主体、层次、对比或材质补足完成度。**

> **视觉重建，不破坏业务框架。**

> **局部修复，不制造回归。**
