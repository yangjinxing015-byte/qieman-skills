# Logo 与 AI 小顾图表元素

需要页眉标、开放平台标、AI 小顾头像 / 入口图时读本文件。直接复制 `assets/logos/` 正式文件，不要重绘、不要改路径文件名。

数据图表走 `qieman-chart-design`，不要用本目录素材当走势图 / 饼图。营销拟人小顾走 `qieman-ip-visual-design`，不要和本层头像混用。

```
assets/logos/
├── 且慢logo/                 且慢主品牌
├── 盈米logo/                 盈米主品牌
├── 组合logo/                 盈米+且慢联合标
├── 盈米AI开放平台logo/       OAP
└── AI小顾 logo/              组合标 + 图表元素
```

产出不在本 skill 目录时，把选用文件拷到可访问路径或内联 SVG，并改 `src`。优先 SVG；小顾图表元素目前只有 PNG。

## 且慢 / 盈米 / 联合

| 文件 | 场景 |
|------|------|
| `且慢logo/且慢logo-Regular.svg` | 浅色页眉（默认） |
| `且慢logo/且慢logo-white.svg` | 蓝 / 深底 |
| `且慢logo/且慢logo-Graphic.svg` | 小尺寸图形标 |
| `且慢logo/logo-slogn.svg` | Slogan 陪伴页（历史文件名，勿改） |
| `盈米logo/盈米logo-Regular.svg` | 盈米浅底 |
| `盈米logo/盈米logo-white.svg` | 盈米深底 |
| `组合logo/盈米且慢logo-Regular.svg` | 联合品牌浅底 |
| `组合logo/盈米且慢logo-white.svg` | 联合品牌深底 |

且慢 App 页眉只用且慢标。不要用开放平台标或小顾组合标替代且慢主 logo。

## 盈米 AI 开放平台（OAP）

目录：`盈米AI开放平台logo/`。图形为「YM」字标 + 人形剪影，主色 `#FF5000` / `#123180`，**不要改成且慢蓝 `#1B88EE`**。

| 文件 | 场景 |
|------|------|
| `OAP-默认.svg` | 透明图形标，叠在已有底色上 |
| `OAP-圆形-白色背景.svg` | 圆形应用图标 / 浅底头像 |
| `OAP-圆形-彩色背景.svg` | 圆形图标，已带品牌底 |
| `OAP-方形-白色背景.svg` | 圆角方标，浅底 |
| `OAP-方形-彩色背景.svg` | 圆角方标，已带品牌底 |
| `OAP-组合-light.svg` | 浅底横版：图形 +「盈米AI开放平台」 |
| `OAP-组合-Dark.svg` | 深蓝底横版组合标 |

- 官网、开放平台、MCP / Skills 对外物料用 OAP。
- 且慢 App 投资页、复盘页不用 OAP 当页眉。
- 已带底的圆形 / 方形切图不要再套第二层底。

## AI 小顾

目录：`AI小顾 logo/`。识别：圆角胶囊头、两点眼、青色领结。保持克制亲和，不低幼、不拟人成真人、不改五官。

### 组合标

| 文件 | 场景 |
|------|------|
| `AI 小顾-Combination.svg` | 浅底产品名 lockup（图形 +「AI小顾」字） |

用于 AI 小顾功能名、启动页、介绍页标题旁。不要拆开改字重或重描字标。

### 图表元素（头像 / 入口图）

| 系列 | 文件 | 形态 | 用法 |
|------|------|------|------|
| Style1 | `AI小顾-Style1-01.png` | 扁平 2D | App 默认头像、对话气泡、入口 |
| Style1 | `AI小顾-Style1-02.png` | 哑光 3D | 需要体积、仍要简洁时 |
| Style1 | `AI小顾-Style1-03.png` | 玻璃 3D | 强调智能 / 科技 |
| Style1 | `AI小顾-Style1-04.png` | 白头 + 彩晕 | 浅底点缀，勿再加发光 |
| Style1 | `AI小顾-Style1-05.png` | 扁平 + 蓝晕 | 空状态、轻强调 |
| Style1 | `AI小顾-Style1-06.png` | 玻璃 3D + 光晕 | 首屏 / 宣传模块 |
| Style2 | `AI小顾-Style2-01.png` | 扁平耳机 | 客服 / 对话助手 |
| Style2 | `AI小顾-Style2-02.png` | 哑光 3D 耳机 | 同上，要体积时 |
| Style2 | `AI小顾-Style2-03.png` | 玻璃 3D 耳机 | 同上，要科技感时 |
| line | `AI小顾-line-01.png` | 线稿无耳机 | 列表小图标，可 CSS 着色 |
| line | `AI小顾-line-02.png` | 线稿描边头 | 线性图标体系 |
| line | `AI小顾-line-03.png` | 线稿耳机 | 对话 / 客服线性图标 |
| Background | `AI 小顾-Background – Circle01.png` | 3D 无耳机 + 圆底 | 头像位、宫格入口 |
| Background | `AI 小顾-Background – Circle02.png` | 3D 耳机 + 圆底 | 对话入口头像 |
| Background | `AI 小顾-Background – Square01.png` | 3D 无耳机 + 方底 | 卡片 / 瓷片 |
| Background | `AI 小顾-Background – Square02.png` | 3D 耳机 + 方底 | 对话入口瓷片 |

默认：App 内 AI 入口 / 对话头像用 **Style1-01**；客服用 **Style2-01**；列表 20–24px 用 **line-01**；已有圆形或方形底的入口用 **Background**，不要再套底。

同一屏只选一个系列，不要扁平 + 3D + 线稿混排。

## 硬约束

- 只调用本目录正式文件，禁止手绘小顾、换表情、加四肢、改成真人 / 动物 / 其他机器人。
- 不拉伸、不改配色、不加描边滤镜；线稿除外，可用当前图标色。
- 金融 AI 页仍须 foundation `references/compliance/ai-investment-guidelines.md`，图形不能暗示收益确定。
- 文件名含空格和 en dash（`Background – Circle01`），引用时保持原名。
