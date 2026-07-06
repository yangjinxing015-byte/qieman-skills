# assets

本目录用于存放 `qieman-ip-visual-design` 的正式调用素材。

这些素材会直接参与且慢小顾 IP 相关视觉物料的生成，包括固定背景、品牌 Logo、小顾 IP 原图和四类视觉模板参考图。

---

## 目录定位

`assets/` 是正式素材目录。

当需要生成、复刻、还原、延展 `qieman-ip-visual-design` 相关视觉时，应优先调用本目录中的素材。

与 `references/` 的区别：

| 目录 | 作用 | 是否作为正式生成素材 |
|---|---|---|
| `assets/` | 存放 Logo、IP、背景、模板示例等正式素材 | 是 |
| `references/` | 存放需求说明、参考截图、补充规范、历史资料 | 否 |

简单理解：

```text
assets = 正式调用素材
references = 参考说明资料
```

---

## 当前目录结构

```text
assets/
├── background/
├── examples/
├── ip/
└── logo/
```

---

## 子目录说明

| 目录 | 内容 | 作用 |
|---|---|---|
| `background/` | 统一蓝色背景图 | 作为封面固定背景使用 |
| `examples/` | 四类视觉模板参考图 | 用于参考版式、字号、比例、信息层级 |
| `ip/` | 小顾 IP PNG 原图 | 用于封面右下角 IP 形象展示 |
| `logo/` | 且慢 Logo PNG / SVG | 用于封面左上角品牌标识 |

---

# 什么时候调用 assets

## 1. 生成正式视觉物料时，必须调用

当用户要求生成以下内容时，应调用 `assets/` 中的正式素材：

- 小顾 IP 内容封面
- 今日小 Tips 封面
- 策略介绍封面
- 投前测评封面
- 观点型标题封面
- 社群运营图
- 活动运营图
- IP 内容视觉物料
- 与示例图风格一致的 3:4 封面图

典型触发词：

```text
小顾 IP、IP 视觉、内容封面、社群物料、运营图、Tips 封面、投前测评封面、策略介绍封面、观点型标题、按照这个模板生成
```

---

## 2. 生成 3:4 内容封面时，必须调用

当前 Skill 的核心输出是：

```text
设计基准：300 × 400
最终输出：900 × 1200
比例：3:4
```

只要用户要求生成这类封面，应默认调用：

```text
assets/background/
assets/logo/
assets/ip/
assets/examples/
```

其中：

- `background/` 用于固定背景
- `logo/` 用于左上角 Logo
- `ip/` 用于右下角小顾 IP
- `examples/` 用于参考版式和信息层级

---

## 3. 用户要求“保持且慢 IP 风格”时，应调用

当用户说：

```text
保持且慢风格
保持小顾IP一致
按照这组视觉生成
参考小顾封面
不要改变IP
不要改变背景
```

应调用 `assets/` 里的正式素材，而不是重新生成新的背景、Logo 或 IP。

---

## 4. 需要保证品牌一致性时，应调用

只要视觉中包含以下品牌元素，就应调用对应 assets：

| 需要的品牌元素 | 调用目录 |
|---|---|
| 且慢 Logo | `assets/logo/` |
| 小顾 IP | `assets/ip/` |
| 蓝色封面背景 | `assets/background/` |
| 四类模板样式 | `assets/examples/` |

---

# 什么时候不调用 assets

## 1. 只做文字分析时，不需要调用

如果用户只是让你：

- 分析设计思路
- 总结规范
- 整理命名
- 修改 README
- 写 Skill 文档
- 讨论目录结构
- 规划分层结构

则不需要调用 `assets/` 中的图片素材。

这类任务主要参考：

```text
SKILL.md
README.md
references/
```

---

## 2. 用户明确要求不使用现有素材时，不调用

如果用户明确说：

```text
不要用现有IP
重新设计一个新形象
换一个背景
不使用原Logo
做一个完全不同风格
```

则不应强制调用本目录素材。

但需要注意：  
如果任务仍属于且慢正式视觉物料，应提醒用户这会偏离当前 Skill 的规范。

---

## 3. 非小顾 IP 相关场景，不默认调用

以下场景不默认调用本目录：

- 高净值营销海报
- 普通 H5 页面
- App UI 页面
- PPT 页面
- 报告设计
- 交易弹窗
- 图表组件
- 与小顾 IP 无关的营销图

这些场景应优先调用对应 Skill：

```text
marketing-design/qieman-h5-design
marketing-design/qieman-vip-design
app-design/qieman-ui-design
app-design/qieman-chart-design
report-design/qieman-ppt-design
```

---

## 4. 用户已提供新的正式素材时，应优先使用用户素材

如果用户上传了新的 Logo、IP、背景或模板，并明确说明：

```text
以这个为准
用这版素材
替换原来的IP
替换背景
替换Logo
```

则应优先使用用户提供的新素材。

但需要确认：

- 是否仍符合且慢品牌规范
- 是否允许替换原有素材
- 是否会影响 Skill 的统一风格

---

# 各类 assets 的调用规则

---

## 1. background/

### 内容

```text
background/
└── qieman-blue-cover-bg.png
```

### 什么时候调用

生成以下封面时必须调用：

- 视觉一
- 视觉二
- 视觉三
- 视觉四
- 其他基于小顾 IP 的 3:4 内容封面

### 使用规则

- 作为整张画面的固定底图
- 不得替换
- 不得改色
- 不得重绘
- 不得扭曲
- 不得随意裁切
- 不得增加复杂金融元素
- 不得叠加杂乱装饰

### 不调用的情况

- 用户只需要文字规范
- 用户明确要求换背景
- 用户要求做非小顾 IP 场景
- 用户提供了新的官方背景并声明替换

---

## 2. logo/

### 内容

```text
logo/
├── qieman-logo.png
└── qieman-logo.svg
```

### 什么时候调用

当画面中需要出现且慢 Logo 时必须调用。

典型场景：

- 内容封面
- Tips 封面
- 策略封面
- 投前测评封面
- IP 运营物料

### 使用规则

- 固定左上角
- 尺寸参考模板图
- 保持清晰
- 不变形
- 不改色
- 不加描边
- 不加额外阴影
- 不替换为其他图形

### PNG / SVG 使用建议

| 格式 | 适合场景 |
|---|---|
| PNG | 直接排版、快速生成、图片合成 |
| SVG | 需要高清矢量、代码还原、HTML / Figma 重建设计 |

### 不调用的情况

- 用户要求不出现 Logo
- 用户仅需生成无品牌背景
- 用户提供了新的官方 Logo 文件
- 用户任务不是且慢品牌视觉

---

## 3. ip/

### 内容

```text
ip/
├── xiaogu-happy-confetti.png
├── xiaogu-data-card.png
├── xiaogu-question.png
├── xiaogu-thinking.png
├── xiaogu-cute-hands.png
├── xiaogu-data-laptop.png
├── xiaogu-idea-bulb.png
└── xiaogu-celebration.png
```

### 什么时候调用

当视觉中需要出现小顾 IP 时，必须调用 `assets/ip/` 中的官方 PNG 原图。

适用场景：

- 视觉一
- 视觉二
- 视觉四
- 小顾 IP 运营图
- 社群图
- 活动物料
- 带小顾形象的封面图

### 什么时候不调用

视觉三不包含 IP，因此默认不调用 `assets/ip/`。

也就是说：

```text
视觉一：调用 IP
视觉二：调用 IP
视觉三：不调用 IP
视觉四：调用 IP
```

### IP 位置规则

- 固定右下角
- 底部靠右
- 不露脚
- 不遮挡标题
- 不遮挡内容区
- 不遮挡风险提示
- 不放左侧
- 不放顶部
- 不居中

### IP 禁止项

- 不要变形
- 不要改脸
- 不要变低幼
- 不要改颜色
- 不要增加表情夸张度
- 不要重新生成一个类似 IP 替代官方 PNG
- 不要改变小顾的官方气质

### IP 选择建议

| 内容类型 | 推荐素材 |
|---|---|
| 疑问 / 问答类 | `xiaogu-question.png` |
| 投前测评 / 思考类 | `xiaogu-thinking.png` |
| 数据分析 / 收益说明 | `xiaogu-data-card.png` 或 `xiaogu-data-laptop.png` |
| 灵感 / 小知识 | `xiaogu-idea-bulb.png` |
| 轻松提示 / 活动 / 正向反馈 | `xiaogu-happy-confetti.png` 或 `xiaogu-celebration.png` |
| 亲和陪伴 / 内容提醒 | `xiaogu-cute-hands.png` |

---

## 4. examples/

### 内容

```text
examples/
├── visual-01-logo-title-content-ip.png
├── visual-02-logo-strategy-ip-risk.png
├── visual-03-logo-title-subtitle-risk.png
└── visual-04-logo-title-risk-ip.png
```

### 什么时候调用

当需要确定以下内容时，应参考 `examples/`：

- 版式结构
- Logo 位置
- 标题字号
- 内容区位置
- IP 比例
- IP 裁切关系
- 风险提示位置
- 信息层级
- 留白关系
- 标题断句方式

### 重要说明

`examples/` 是**模板参考图**，不是每次都直接复制图中文字。

调用方式是：

```text
参考 examples 的版式、比例、层级和位置关系
使用用户提供的新文案重新排版
```

不要直接复用示例图里的旧文案，除非用户明确要求。

### 四类模板说明

| 文件 | 模板 | 是否调用 IP | 适用场景 |
|---|---|---|---|
| `visual-01-logo-title-content-ip.png` | Logo + 主标题 + 内容 + IP | 是 | Tips、问答合集、加群说明、列表类内容 |
| `visual-02-logo-strategy-ip-risk.png` | Logo + 策略名称 + IP + 风险提示 | 是 | 策略介绍、产品认知、资产管理类封面 |
| `visual-03-logo-title-subtitle-risk.png` | Logo + 标题文本 + 副文本 + 风险提示 | 否 | 投前测评、知识判断题、一问一答 |
| `visual-04-logo-title-risk-ip.png` | Logo + 标题文本 + 风险提示 + IP | 是 | 观点型标题、市场认知、情绪型标题 |

### 不调用 examples 的情况

- 用户只是问素材命名
- 用户只要整理文档
- 用户不需要视觉生成
- 用户明确指定了新的模板
- 用户提供了新的参考图并要求以新图为准

---

# 调用优先级

当用户要求生成正式视觉时，优先级如下：

```text
1. 用户明确指定的素材
2. assets/ 中的正式素材
3. SKILL.md 中的规范
4. README.md 中的说明
5. references/ 中的补充资料
```

如果用户没有指定新素材，则默认使用 `assets/`。

如果用户指定的素材与 `SKILL.md` 冲突，应优先遵循用户明确要求，但需要提醒可能偏离当前 Skill 规范。

---

# 典型调用组合

## 视觉一：Logo + 主标题 + 内容 + IP

调用：

```text
assets/background/
assets/logo/
assets/ip/
assets/examples/visual-01-logo-title-content-ip.png
```

不调用：

```text
assets/examples/visual-03-logo-title-subtitle-risk.png
```

---

## 视觉二：Logo + 策略名称 + IP + 风险提示

调用：

```text
assets/background/
assets/logo/
assets/ip/
assets/examples/visual-02-logo-strategy-ip-risk.png
```

---

## 视觉三：Logo + 标题文本 + 副文本 + 风险提示，不包含 IP

调用：

```text
assets/background/
assets/logo/
assets/examples/visual-03-logo-title-subtitle-risk.png
```

不调用：

```text
assets/ip/
```

---

## 视觉四：Logo + 标题文本 + 风险提示 + IP

调用：

```text
assets/background/
assets/logo/
assets/ip/
assets/examples/visual-04-logo-title-risk-ip.png
```

---

# 使用注意事项

- 生成正式视觉时，优先使用 `assets/`。
- 不要把 `references/` 当作正式素材库。
- 不要把示例图当成最终图直接复用。
- 不要重复上传同一素材。
- 新增素材时使用英文小写和短横线命名。
- 不要提交 `.DS_Store` 等系统文件。
- 如果更新了素材命名，需要同步更新 `SKILL.md` 和相关 README。
