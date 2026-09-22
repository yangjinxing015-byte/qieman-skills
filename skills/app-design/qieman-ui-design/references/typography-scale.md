# 且慢 App 字号规范

| 字段 | 值 |
|------|-----|
| **所属 Skill** | `qieman-ui-design`（L0） |
| **Token 源** | [`tokens.yaml`](tokens.yaml) → `typography:` |
| **可视化样张** | [`../assets/prototypes/typography-specimen.html`](../assets/prototypes/typography-specimen.html) |
| **PPT 演示稿** | [`../assets/prototypes/且慢App字号规范.pptx`](../assets/prototypes/且慢App字号规范.pptx) |
| **更新日期** | 2026-09-09 |

---

## 1. 规范定位

本文件是且慢 **App / H5 金融界面** 的字号落地规范，统一：

- Token 命名
- 字号 / 字重 / 行高 / 字距
- 使用场景
- 组合原则与禁区

生成或评审界面时：**优先引用本表 token，禁止临时硬编码未登记字号。**

品牌气质原则见 `qieman-foundation`（`references/brand/`）；变量映射原则见其 `references/tokens/`。App 落地以本规范（L0）为准。

---

## 2. 字体栈

| 用途 | CSS Token 建议 | 字体栈 | 说明 |
|---|---|---|---|
| 中文标题 / 正文 / 按钮 | `--font-sans` | `PingFang SC, MiSans, system-ui, -apple-system, sans-serif` | 默认正文字体 |
| 金融数字 | `--font-number` | `MiSans, DIN Alternate, PingFang SC, system-ui, sans-serif` | 收益率、金额、百分比、仓位 |
| 等宽 / 调试 | `--font-mono` | `Courier New, ui-monospace, monospace` | 代码、原始数据，不用于营销正文 |

**注意：**

- 不随界面引入第二套展示字体（如随意混用衬线大标题）。
- 不输出字体文件；仅声明字体族与系统 fallback。
- 高净值海报等物料的宋体大标题，走 `qieman-vip-design` / 品牌物料规范，不混入标准 App 页。

---

## 3. 字号色阶总表

单位：**px**（移动端逻辑像素；设计稿 375 基准）。

| Token | 字号 | 字重 | 行高 | 字距 | 字体栈 | 分组 |
|---|---:|---:|---:|---|---|---|
| `{typography.hero-display}` | 40 | 700 | 1.18 | -0.2px | sans | 展示 |
| `{typography.display-lg}` | 32 | 700 | 1.22 | -0.1px | sans | 展示 |
| `{typography.display-md}` | 26 | 600 | 1.28 | 0 | sans | 展示 |
| `{typography.title-lg}` | 24 | 600 | 1.30 | 0 | sans | 标题 |
| `{typography.title-md}` | 20 | 600 | 1.35 | 0 | sans | 标题 |
| `{typography.title-sm}` | 18 | 600 | 1.40 | 0 | sans | 标题 |
| `{typography.body-lg}` | 17 | 400 | 1.55 | 0 | sans | 正文 |
| `{typography.body}` | 16 | 400 | 1.55 | 0 | sans | 正文 |
| `{typography.body-sm}` | 15 | 400 | 1.50 | 0 | sans | 正文 |
| `{typography.button}` | 16 | 600 | 1.00 | 0 | sans | 按钮 |
| `{typography.caption}` | 14 | 400 | 1.45 | 0 | sans | 说明 |
| `{typography.caption-sm}` | 12 | 400 | 1.45 | 0 | sans | 说明 |
| `{typography.micro-legal}` | 11 | 400 | 1.45 | 0 | sans | 合规 |
| `{typography.number-xl}` | 36 | 700 | 1.10 | -0.2px | number | 数字 |
| `{typography.number-lg}` | 28 | 700 | 1.12 | -0.1px | number | 数字 |
| `{typography.number-md}` | 22 | 600 | 1.20 | 0 | number | 数字 |
| `{typography.mono}` | 13 | 400 | 1.45 | 0 | mono | 等宽 |

> **下限：** 界面可读文字不得低于 **11px**；风险披露、费用说明、免责声明必须 ≥ `micro-legal`。

---

## 4. 分组用法

### 4.1 展示 / 标题

| Token | 场景 | 示例文案 |
|---|---|---|
| `hero-display` | H5 首屏、报告封面主标题 | 长期主义财富规划 |
| `display-lg` | 页面主标题、大模块标题 | 思远定投全球好资产 |
| `display-md` | 二级分区标题 | 账户配置诊断 |
| `title-lg` | 模块标题、图表组标题 | 本周收益表现 |
| `title-md` | 卡片标题、弹窗标题 | 波动进一步加大了怎么办？ |
| `title-sm` | 小卡片 / 列表标题 | 投资闲聊话题 |

### 4.2 正文 / 按钮

| Token | 场景 | 示例文案 |
|---|---|---|
| `body-lg` | 主要正文、摘要段落 | 市场又到了波动加剧的阶段…… |
| `body` | 标准正文、表单、表格正文 | 我们看的是长期资产配置节奏…… |
| `body-sm` | 次级正文、卡片内说明 | 若定投计划匹配现金流…… |
| `button` | 主按钮 / 次按钮文字 | 联系助理 · 确认配置 |

### 4.3 说明 / 合规

| Token | 场景 | 示例文案 |
|---|---|---|
| `caption` | 图例、标签旁说明、辅助信息 | 策略陪伴圈 · 89,999+ 用户 |
| `caption-sm` | 时间、地区、数据来源 | 更新于 2 个月前 · 广东省广州市 |
| `micro-legal` | 风险披露、法律声明 | 历史表现不预示未来收益…… |

### 4.4 金融数字

| Token | 场景 | 示例 |
|---|---|---|
| `number-xl` | 总资产、关键金额 | ¥1,286,450.00 |
| `number-lg` | 指标卡核心收益率 / 回撤 | +12.86% |
| `number-md` | 次级指标、列表数字 | 3.25% |

数字旁必须可见：**单位、时间口径、必要时数据来源 / 风险提示**。不得仅放大数字而无口径。

---

## 5. 文本色与字号的配合

字号解决层级；颜色解决重要度。二者勿重复堆叠。

| 文本色 Token | 色值 | 常配字号 |
|---|---|---|
| `{colors.text-primary}` | #333333 | 标题、核心正文、关键数字说明 |
| `{colors.text-secondary}` | #606060 | `body` / `body-sm` |
| `{colors.text-tertiary}` | #999999 | `caption` / `caption-sm`、辅助图标旁文字 |
| `{colors.text-disabled}` | #CCCCCC | 禁用；禁止用于风险披露 |
| `{colors.brand-primary}` | #1B88EE | 链接、选中 Tab、关键数字强调（克制使用） |
| `{colors.text-inverse}` | #FFFFFF | 蓝底 / 海报反白标题 |

---

## 6. 页面组合模板（推荐）

同一卡片 / 同一信息块：**字号层级 ≤ 3**。

### 6.1 圈子帖子卡

| 元素 | Token / 接近值 | 说明 |
|---|---|---|
| 帖子标题 | `body-lg` 600 或 `title-sm` | 17–18px，单行优先 |
| 正文摘要 | `body-sm` | 15px |
| 时间 / 地点 | `caption-sm` | 12px · tertiary |
| 风险脚注 | `micro-legal` | 11px |

### 6.2 指标卡

| 元素 | Token | 说明 |
|---|---|---|
| 指标名 | `caption` | 14px |
| 核心数字 | `number-lg` | 28px · number 字体 |
| 口径 / 截至日 | `caption-sm` | 12px |

### 6.3 策略介绍首屏（H5）

| 元素 | Token | 说明 |
|---|---|---|
| 策略主张 | `display-lg` 或 `hero-display` | 一屏一个观点 |
| 一句话解释 | `body` / `body-lg` | |
| 风险入口 | `micro-legal` 或 `caption` + 链接色 | 不可隐藏 |

### 6.4 主操作区

| 元素 | Token | 说明 |
|---|---|---|
| 按钮文字 | `button` | 16px / 600；触控高度 ≥ 44px |
| 按钮旁辅助 | `caption-sm` | 费用、到账时间等 |

---

## 7. Do / Don’t

### Do

- 使用上表完整 token（字号 + 字重 + 行高），不要只抄字号忽略字重。
- 先标题/结论，再正文解释。
- 数字用 `--font-number`，并配单位与口径。
- 风险提示 ≥ 11px，颜色可读（勿用 disabled 灰）。
- 移动端左右安全边距保持 16px，长段落行高用 `1.5–1.55`。

### Don’t

- 不要在同一卡片堆叠超过 3 个字号层级。
- 不要用 &lt; 15px 做长段落正文。
- 不要把风险披露做成装饰性小字或过浅灰。
- 不要用超大装饰字号抢过核心金融数据。
- 不要引入与 token 表不一致的临时字号（如 19 / 21 / 23 / 27px）。
- 不要用 emoji 替代正式字号层级或图标语义。

---

## 8. CSS 映射示例

```css
:root {
  --font-sans: PingFang SC, MiSans, system-ui, -apple-system, sans-serif;
  --font-number: MiSans, DIN Alternate, PingFang SC, system-ui, sans-serif;
}

.type-title-md {
  font-family: var(--font-sans);
  font-size: 20px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: 0;
}

.type-body {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.55;
}

.type-number-lg {
  font-family: var(--font-number);
  font-size: 28px;
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.1px;
}

.type-legal {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 400;
  line-height: 1.45;
  color: var(--text-tertiary); /* #999999，禁止再用更浅色 */
}
```

引用语法与 YAML 一致：`{typography.<key>}`。

---

## 9. 与相邻规范的关系

| 文档 | 关系 |
|---|---|
| `tokens.yaml` `typography:` | **唯一数值源**；本文件是可读版与场景说明 |
| `assets/prototypes/typography-specimen.html` | 可视化对照样张 |
| `qieman-foundation/references/brand/typography.md` | 品牌气质与文案语气；字号区间需在 App 场景收敛到本表 |
| `qieman-foundation/references/tokens/typography-token.md` | 变量命名与行高资产；App 精确字号以 L0 本表为准 |
| `.cursor/skills/ui-guideline` | 通用 UI 字号（含 pt）；且慢 App 交付以本表 px token 为准 |

---

## 10. 评审清单

- [ ] 页面仅使用本表登记字号  
- [ ] 单卡片字号层级 ≤ 3  
- [ ] 关键数字有单位 + 时间口径  
- [ ] 风险披露 ≥ 11px 且对比度可读  
- [ ] 按钮文字为 `button`（16 / 600），触控高度 ≥ 44px  
- [ ] 未混用未授权字体家族  

---

## 变更记录

| 日期 | 说明 |
|---|---|
| 2026-07-15 | 首版：从 L0 YAML 抽出完整字号表、场景模板与 Do/Don’t；关联可视化样张 |
| 2026-09-09 | Token 真源改为 `references/tokens.yaml` |
