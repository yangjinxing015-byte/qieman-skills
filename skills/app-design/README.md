# app-design

且慢 **App 界面与组件** skill 分类。文件夹名 = 各目录 `SKILL.md` 的 `name` 字段。

## Skill 清单

| `name` | 层级 | 路径 | 职责 |
|--------|------|------|------|
| `qieman-ui-design` | L0 | `qieman-ui-design/SKILL.md` | 品牌 token、通用 App 组件与页面 Pattern |
| `qieman-sell-popup-design` | L1 | `qieman-sell-popup-design/SKILL.md` | 卖出/赎回/营销类底部挽留弹窗 |
| `qieman-chart-design` | L2 | `qieman-chart-design/SKILL.md` | 曲线、走势图、饼图等图表与数据可视化 |

## 调用路由（Agent 必读）

收到用户指令或提示词时，按关键词匹配 **先读 L0，再叠加 L1/L2**：

### 1. 通用 App UI → 仅 `qieman-ui-design`

**触发词（含同义表述）：**

- UI 界面、UI 设计、界面设计
- 且慢 App 设计、且慢 app 设计、且慢 UI
- App 页面、App 原型、金融 App 界面

**调用：**

```bash
npx openskills read qieman-ui-design
```

### 2. 弹窗 / 挽留 → `qieman-ui-design` + `qieman-sell-popup-design`

**触发词（含同义表述）：**

- 弹窗设计、App 弹窗、底部弹窗
- 营销类弹窗、营销弹窗
- 卖出挽留弹窗、卖出挽留、赎回确认、退出策略弹窗

**调用：**

```bash
npx openskills read qieman-ui-design
npx openskills read qieman-sell-popup-design
```

> L1 必须在 L0 之上叠加；弹窗几何与交互以 L1 为准，品牌色与字体气质以 L0 为准。

### 3. 含图表的 App UI → `qieman-ui-design` + `qieman-chart-design`

**触发词（含同义表述）：**

- 在 **规则 1** 的 UI 类触发词基础上，额外出现：
- 图表设计、数据可视化、数据图表
- 曲线、走势图、折线图、K 线
- 饼图、柱状图、环形图、面积图
- 持仓分布、收益曲线、净值走势

**调用：**

```bash
npx openskills read qieman-ui-design
npx openskills read qieman-chart-design
```

### 4. 组合场景

| 场景 | 调用 skill |
|------|------------|
| App 页内卖出挽留弹窗 | `qieman-ui-design` + `qieman-sell-popup-design` |
| App 页内图表（无弹窗） | `qieman-ui-design` + `qieman-chart-design` |
| 图表页 + 卖出挽留弹窗 | `qieman-ui-design` + `qieman-chart-design` + `qieman-sell-popup-design` |

## 分层关系

```
qieman-ui-design (L0)
├── qieman-sell-popup-design (L1, extends L0)
└── qieman-chart-design (L2, extends L0)
```

详细 token 与 Pattern 见各 skill 目录下的 `SKILL.md`；全局分层说明见 `qieman-ui-design/SKILL.md` → **Skill Layering**。
