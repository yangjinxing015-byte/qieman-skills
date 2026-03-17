# 且慢营销字体资源说明

本目录用于存放 **且慢营销设计** 中使用的字体文件，适用于 KV、H5、海报、报告、年度账单、专题页等场景。

> ⚠️ 注意：仅在授权允许内部存储与分发的前提下，将字体文件放入本目录。  
> 若字体不适合直接存储，请在 `skills/marketing-h5/references/` 中补充下载链接、获取方式或使用说明。

---

## 字体角色（标准）

- **Alibaba PuHuiTi** —— 中文主字体（标题 / 正文 / 按钮 / 说明）
- **MiSans** —— 数字专用字体（KPI、金额、收益率、百分比、图表数字等）

---

## 文件列表

### Alibaba PuHuiTi（中文主字体）
- `font-alibaba-puhuiti-regular-v02.ttf`
- `font-alibaba-puhuiti-medium.ttf`
- `font-alibaba-puhuiti-bold-v03.ttf`

### MiSans（数字专用）
- `font-mi-sans-regular.ttf`
- `font-mi-sans-medium.ttf`
- `font-mi-sans-demibold.ttf`

---

## 使用规则（简版）

- **中文文案**：统一使用 **Alibaba PuHuiTi**
- **纯数字信息**：统一使用 **MiSans**
  - 适用于金额、收益率、百分比、图表坐标、KPI 卡片数字等
- 同一个数字模块中，避免混用多个字体家族
- 同一页面中，中文与数字的字体关系应保持稳定，不要频繁切换

---

## 字体使用优先级

### 1. 正文与标题优先级
- 页面标题：优先使用 **Alibaba PuHuiTi Bold / Medium**
- 模块标题：优先使用 **Alibaba PuHuiTi Medium**
- 正文内容：优先使用 **Alibaba PuHuiTi Regular**
- 辅助说明 / 注释：优先使用 **Alibaba PuHuiTi Regular**

### 2. 数字信息优先级
- 金额主数字：优先使用 **MiSans Demibold / Medium**
- KPI 数值：优先使用 **MiSans Demibold**
- 百分比 / 收益率：优先使用 **MiSans Medium / Demibold**
- 图表数字 / 坐标轴数字：优先使用 **MiSans Regular / Medium**
- 日期中的纯数字部分：可优先使用 **MiSans Regular**

### 3. 同屏排版优先级
当页面同时出现中文与数字时，建议遵循以下优先关系：

- 中文主文案 → `Alibaba PuHuiTi`
- 数字重点信息 → `MiSans`
- 同一信息块中，中文与数字只保留这两套字体组合，不再引入第三套字体

---

## H5 场景示例

### 场景 1：年度账单首页 Hero
适用内容：
- 主标题：你的 2025 投资账单
- 副标题：一年投资，一份总结
- 截至时间：截至 2025-12-31
- CTA：查看我的账单

字体建议：
- 主标题：**Alibaba PuHuiTi Bold**
- 副标题：**Alibaba PuHuiTi Regular**
- 日期：中文部分用 **Alibaba PuHuiTi Regular**，数字部分可用 **MiSans Regular**
- CTA 文案：**Alibaba PuHuiTi Medium**

---

### 场景 2：年度亮点 KPI 卡片
适用内容：
- 年度累计投入
- 年度收益率
- 资产峰值
- 投资天数

字体建议：
- 数值主信息（如 `128,600` / `+6.82%` / `312`）：**MiSans Demibold**
- 数值标签（如“年度累计投入（元）”）：**Alibaba PuHuiTi Regular**
- 正收益数值可在颜色上强调，但字体家族保持统一

---

### 场景 3：收益率 / 金额摘要模块
适用内容：
- 收益率数字
- 金额变化
- 持仓金额
- 定投金额

字体建议：
- 核心数字：**MiSans Medium / Demibold**
- 中文补充说明：**Alibaba PuHuiTi Regular**
- 如果数字很大，优先通过字重和字号区分层级，不靠切换字体制造变化

---

### 场景 4：图表与数据可视化
适用内容：
- 饼图比例
- 柱状图数值
- 坐标轴数字
- 图例标签

字体建议：
- 数字：**MiSans Regular / Medium**
- 中文图例：**Alibaba PuHuiTi Regular**
- 图表中避免使用过多字重，优先保证可读性与整洁度

---

### 场景 5：风险提示 / 注释说明
适用内容：
- 数据来源
- 统计周期
- 免责声明
- 风险提示文案

字体建议：
- 中文：**Alibaba PuHuiTi Regular**
- 注释中的数字：可保留与正文一致，或局部使用 **MiSans Regular**
- 此类信息优先保证清晰，不建议做过强样式化处理

---

### 场景 6：营销活动页 / 节日专题页
适用内容：
- 活动标题
- 活动时间
- 利益点说明
- CTA 按钮

字体建议：
- 活动标题：**Alibaba PuHuiTi Bold / Medium**
- 时间区间中的数字：可用 **MiSans Regular**
- CTA：**Alibaba PuHuiTi Medium**
- 节日场景下仍需保持金融品牌克制感，不建议为了氛围改用花哨字体

---

## 推荐字重使用建议

### Alibaba PuHuiTi
- **Regular**：正文、注释、标签、辅助说明
- **Medium**：模块标题、按钮文案、小标题
- **Bold**：首屏主标题、重点标题、营销主标题

### MiSans
- **Regular**：普通数字、图表数字、日期数字
- **Medium**：重要数字、金额摘要、收益率
- **Demibold**：KPI 大数字、年度账单主数值、重点收益率

---

## 命名规范

统一使用 kebab-case 命名，不使用空格，不使用中文字符：

- `font-<family>-<weight>[-vNN].ttf`

示例：
- `font-alibaba-puhuiti-regular-v02.ttf`
- `font-mi-sans-demibold.ttf`

---

## 维护原则

- 保持字体集精简，只保留实际需要的字重
- 优先保留 `.ttf`（或 `.otf`），如存在重复格式请去重
- 不存放无授权、来源不明或重复字体文件
- 若字体文件更新版本，请在文件名中补版本号，如 `-v02`、`-v03`
- 若需补充更完整的字体排版规范，请将说明文档放到：

  - `skills/marketing-h5/references/`

例如可新增：
- `typography_zh.md`

---

## 推荐搭配关系

页面中建议优先采用以下搭配方式：

- **标题 / 正文 / 按钮** → `Alibaba PuHuiTi`
- **金额 / 百分比 / KPI / 图表数字** → `MiSans`
- **中文 + 数字混排场景** → 中文用 `Alibaba PuHuiTi`，数字用 `MiSans`
- **同一页面中最多保持两套字体组合**，不要再引入额外字体家族

---

## 不建议的用法

- 不要在同一数字模块中混用多套数字字体
- 不要在同一页面中随意切换多种中文字体
- 不要把装饰性字体引入金融 H5 正文或关键数据区域
- 不要用字体混乱来制造“设计感”，应优先通过层级、字号、字重和留白控制视觉节奏
