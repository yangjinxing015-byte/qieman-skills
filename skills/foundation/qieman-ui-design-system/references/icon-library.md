# Icon Library｜App 端图标设计规范

## 1. 定位

`icon-library.md` 用于规范且慢 App 端图标的选择、绘制、调用、状态、尺寸与落地方式。

且慢 App 图标体系应服务于产品信息识别和操作理解，不追求装饰复杂度。图标需要保持 **轻量、清晰、克制、可信、统一**，并与且慢品牌蓝、圆角卡片、轻金融产品气质保持一致。

---

## 2. 图标库来源

### 统一调用

且慢 App 端通用图标库统一调用：

```text
https://remixicon.com/
```

### 使用原则

1. 默认优先使用 Remix Icon 的 `line` 风格。
2. `fill` 风格只用于强选中、强状态、品牌重点入口或特殊运营场景。
3. 同一页面内不得混用多个第三方图标库。
4. 不得随意修改 Remix Icon 的基础结构和视觉比例。
5. 当 Remix Icon 无法满足业务语义时，才允许定制图标，但定制图标必须与 Remix Icon 的线性风格、圆角和视觉重量保持一致。

---

## 3. 适用范围

该规范适用于且慢 App 内以下图标场景：

| 场景 | 说明 |
|---|---|
| 顶部导航图标 | 返回、关闭、搜索、更多、分享 |
| 底部 Tab 图标 | 首页、发现、理财、账户、我的等一级入口 |
| 功能入口图标 | 买入、卖出、定投、调仓、自动跟车、智能买入 |
| 列表辅助图标 | 银行卡、基金、策略、报告、提醒、设置 |
| 状态反馈图标 | 成功、失败、警告、提示、空状态 |
| 金融交易图标 | 支付方式、手续费、到账时间、风险提示 |
| AI 组件图标 | 小顾、AI 分析、记忆、画像、主动提醒 |
| 营销权益图标 | 优惠券、会员权益、专属服务、高净值权益 |

---

## 4. 图标风格原则

### 4.1 视觉关键词

```text
轻量 / 清晰 / 圆润 / 克制 / 可解释 / 金融可信 / 品牌一致
```

### 4.2 造型规则

1. **线性为主**：App 基础 UI 图标优先使用线性图标。
2. **圆角处理**：避免过于尖锐、机械、攻击性的图形。
3. **结构简洁**：图标不要承载过多细节，一个图标只表达一个核心语义。
4. **视觉重量统一**：同一区域图标线粗、尺寸、留白需要一致。
5. **避免过度金融符号化**：少用金币、钞票、暴涨箭头等强营销符号。
6. **保持中性可信**：图标不制造收益确定性暗示，不强化焦虑感。

---

## 5. 图标尺寸规范

### 5.1 基础尺寸

| 尺寸 | 使用场景 | 说明 |
|---:|---|---|
| 16px | 辅助说明、标签、弱提示 | 用于低层级信息，不建议单独点击 |
| 20px | 列表辅助、表单说明、小按钮 | 常用于文字前置辅助图标 |
| 24px | App 默认图标尺寸 | 导航、按钮、列表、功能入口的基础尺寸 |
| 28px | 强入口、卡片重点信息 | 用于较强视觉识别 |
| 32px | 功能宫格、业务模块入口 | 适合搭配图标容器使用 |
| 40px | 空状态、运营卡片、轻插画图标 | 不建议用于普通列表 |
| 48px+ | 营销、权益、空状态插画化场景 | 需要弱化 UI 图标属性 |

### 5.2 推荐规则

- App 普通 UI 图标默认使用 **24px**。
- 图标按钮的可点击热区不小于 **44×44px**。
- 图标容器常用尺寸为 **40×40px / 48×48px / 56×56px**。
- 图标尺寸和容器尺寸应保持 1:1.6 到 1:2 的比例关系。

---

## 6. 图标容器规范

### 6.1 无容器图标

适用于：顶部导航、列表右侧、输入框内、轻量操作。

```text
icon-size: 20px / 24px
color: foreground/neutral subtle 或 foreground/neutral subtler
background: none
```

### 6.2 圆角方形容器

适用于：功能入口、交易能力、账户模块、设置模块。

```text
container: 40×40px / 48×48px
radius: Radius/Large 1 或 Radius/Large 2
background: background/primary faded 或 background/card/deep
icon: foreground/primary 或 foreground/neutral
```

### 6.3 圆形容器

适用于：头像类、AI 助手入口、强状态反馈。

```text
container-radius: Radius/Circular
icon-align: center
```

### 6.4 插画化图标容器

适用于：空状态、营销卡片、权益页、高净值场景。

```text
container: 56×56px / 64×64px / 80×80px
background: light blue / light purple / light gold
icon-style: line + soft fill
```

---

## 7. 色彩使用规范

图标颜色必须优先使用语义 Token，不直接写死颜色。

| 场景 | 推荐 Token | 用法 |
|---|---|---|
| 默认图标 | `foreground/neutral subtle` | 正文级图标 |
| 弱图标 | `foreground/neutral subtler` | 辅助说明、弱提示 |
| 更弱图标 | `foreground/neutral subtlest` | 占位、禁用前的低层级辅助 |
| 主品牌图标 | `foreground/primary` | 重要入口、主操作 |
| 主品牌浅底 | `background/primary faded` | 图标容器背景 |
| 成功状态 | `foreground/success` | 成功、已完成、确认状态 |
| 警告状态 | `foreground/warning` | 风险提醒、注意事项 |
| 错误状态 | `foreground/error` | 错误、失败、高风险阻断 |
| VIP / 高净值 | `foreground/vip` | 高净值、权益、徽章 |
| 禁用状态 | `background/neutral disabled` + `foreground/neutral subtlest` | 不可操作状态 |

### 7.1 金融场景特殊规则

1. 红色用于上涨、买入、错误、高风险提示时，需要结合具体业务语义，不得滥用。
2. 绿色在交易场景中容易产生涨跌联想，默认避免大面积使用。
3. 黄色 / 橙色用于提示和警告，不用于收益承诺。
4. 金色只用于权益、VIP、高净值和徽章场景，不能营造“稳赚”“特权收益”暗示。

---

## 8. 状态规范

### 8.1 基础状态

| 状态 | 视觉规则 |
|---|---|
| Default | 使用默认中性色或品牌色 |
| Active | 使用 `foreground/primary`，必要时使用 `fill` 图标 |
| Pressed | 降低透明度或加浅色背景反馈 |
| Disabled | 使用低对比中性色，不可点击 |
| Loading | 图标可替换为 loading spinner，不保留原操作图标 |
| Error | 使用错误色，同时配合文案说明 |
| Success | 使用成功色，同时配合确认反馈 |

### 8.2 Tab 图标状态

```text
未选中：line icon + neutral color
选中：fill icon 或 line icon + primary color
文字：与图标状态同步
```

### 8.3 图标按钮状态

```text
normal: icon only / icon + transparent background
pressed: background/card/deep 或 background/primary faded
disabled: foreground/neutral subtlest
loading: spinner + disabled interaction
```

---

## 9. App 常见场景规范

### 9.1 顶部导航图标

适用于返回、关闭、搜索、更多、分享。

```text
icon-size: 24px
hit-area: 44×44px
color: foreground/neutral
style: Remix Icon line
```

规则：

- 返回和关闭不要同时出现，除非页面层级明确不同。
- “更多”图标需要搭配底部弹层或菜单。
- 分享图标只在内容可传播场景出现。

### 9.2 列表图标

适用于账户、银行卡、基金、策略、报告等列表项。

```text
icon-size: 20px / 24px
container: optional
text-gap: Layout/x2 或 Layout/x3
```

规则：

- 列表图标只辅助识别，不抢正文信息层级。
- 同一列表中图标应统一是否带容器。

### 9.3 功能宫格图标

适用于首页快捷入口、账户功能、服务入口。

```text
container: 40×40px 或 48×48px
icon-size: 24px / 28px
radius: Radius/Large 1 或 Radius/Large 2
```

规则：

- 每屏入口图标数量不宜过多。
- 图标语义必须和标题一致。
- 同一宫格内不混用线性、面性、3D 图标。

### 9.4 交易图标

适用于买入、卖出、转换、调仓、自动跟车、智能买入、智能回购。

规则：

- 交易图标应强调“操作类型”，不暗示收益结果。
- 买入 / 卖出不使用过度上涨或暴跌视觉。
- 风险、手续费、到账时间等说明图标必须清晰、低干扰。
- 高风险操作图标要配合文案和二次确认，不单靠颜色表达风险。

### 9.5 AI 图标

适用于小顾、AI 分析、记忆、画像、主动提醒。

规则：

- AI 图标可使用浅紫、浅蓝辅助色，但整体仍以品牌蓝为主。
- 避免过度科幻、复杂芯片、强拟人机器人。
- AI 输出相关图标需表达“辅助分析”，不能暗示确定性建议。

### 9.6 空状态图标

适用于暂无数据、暂无记忆、暂无持仓、加载失败。

规则：

- 空状态图标可以比普通 UI 图标更柔和、更插画化。
- 图标下方必须有说明文案和下一步行动。
- 不使用失败感过强、焦虑感过重的图形。

---

## 10. Remix Icon 调用规范

### 10.1 命名选择

优先选择语义清晰、用户容易理解的图标。

示例：

```text
search-line      搜索
arrow-left-line  返回
close-line       关闭
more-2-line      更多
settings-3-line  设置
bank-card-line   银行卡
file-list-line   报告 / 清单
alarm-line       提醒
question-line    帮助 / 说明
information-line 信息提示
shield-check-line 安全 / 风险保护
robot-2-line     AI 助手
sparkling-line   智能 / AI 增强
```

### 10.2 前端调用示例

```html
<i class="ri-search-line" aria-hidden="true"></i>
<i class="ri-arrow-left-line" aria-hidden="true"></i>
<i class="ri-bank-card-line" aria-hidden="true"></i>
```

### 10.3 Figma 使用方式

```text
1. 从 Remix Icon 选择图标
2. 导入 Figma 图标组件库
3. 统一放入 icon-library 分类
4. 命名为 app-icon/{domain}/{name}/{style}
5. 绑定颜色 Token，不使用手动颜色
6. 设置尺寸变体：16 / 20 / 24 / 32 / 40
```

---

## 11. 命名规范

### 11.1 Figma 组件命名

```text
app-icon/{domain}/{semantic-name}/{style}
```

示例：

```text
app-icon/common/search/line
app-icon/common/close/line
app-icon/trading/buy/line
app-icon/trading/sell/line
app-icon/account/bank-card/line
app-icon/ai/assistant/line
app-icon/risk/shield-check/line
```

### 11.2 前端 Class 命名

前端优先保留 Remix Icon 原始 class，外层容器使用业务类名。

```html
<button class="qm-icon-button" aria-label="搜索">
  <i class="ri-search-line"></i>
</button>
```

### 11.3 业务域分类

```text
common       通用操作
navigation   导航
trading      交易
account      账户
portfolio    组合 / 策略
risk         风险
ai           AI 小顾
service      服务 / 权益
marketing    营销活动
```

---

## 12. 可访问性规范

1. 单独作为按钮使用的图标必须有 `aria-label`。
2. 图标与文字组合时，图标可设置 `aria-hidden="true"`。
3. 图标按钮点击热区不小于 **44×44px**。
4. 风险、错误、成功状态不能只依赖颜色，需要配合文字说明。
5. 图标与背景需要满足足够对比度。
6. 禁用状态必须同时有视觉弱化和交互禁用。

---

## 13. 禁用规则

不得出现以下情况：

```text
1. 同一页面混用多个图标库
2. 线性图标、面性图标、3D 图标混排
3. 图标视觉粗细不一致
4. 图标颜色脱离 Design Token
5. 用金币、火箭、暴涨箭头暗示高收益
6. 用红色/绿色制造交易误导
7. 图标没有文字说明但承担关键金融决策含义
8. 直接拉伸图标造成比例变形
9. 使用像素模糊的 PNG 图标替代 SVG 矢量图标
10. AI 图标过度拟人化或承诺确定性判断
```

---

## 14. 设计验收清单

交付前检查：

```text
[ ] 是否来自 Remix Icon 或与其风格一致
[ ] 是否使用统一尺寸体系
[ ] 是否绑定 Design Token
[ ] 是否符合当前组件状态
[ ] 是否与文字语义一致
[ ] 是否保持视觉重量统一
[ ] 是否避免收益暗示和金融误导
[ ] 是否满足点击热区要求
[ ] 是否具备必要的 aria-label
[ ] 是否在 Light / Dark 模式下可读
```

---

## 15. 与其他 references 的关系

```text
icon-library.md
├── 遵循 component-principles.md 的组件设计原则
├── 调用 button-system.md 中的图标按钮规则
├── 调用 navigation-system.md 中的导航图标规则
├── 调用 feedback-system.md 中的状态反馈规则
├── 调用 transaction-components.md 中的交易图标规则
├── 调用 ai-components.md 中的 AI 图标规则
└── 调用 accessibility.md 中的无障碍规则
```
