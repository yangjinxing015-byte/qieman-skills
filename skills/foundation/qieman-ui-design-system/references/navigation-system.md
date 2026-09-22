# Navigation System 导航组件体系

## 1. 定义

导航组件负责帮助用户理解所在位置、切换信息层级、回到上一步或进入关键流程。

## 2. 导航类型

| 类型 | 场景 |
|---|---|
| Top Navigation | App 页面标题、返回、更多操作 |
| Tab / Segment | 状态分类、内容切换 |
| Bottom Navigation | App 一级入口 |
| Breadcrumb | Web / 平台层级 |
| Anchor Navigation | H5 长页锚点 |
| Step Indicator | 交易流程、测评流程、开户流程 |
| Sticky Action Bar | 底部确认操作区 |

## 3. App 顶部导航

推荐高度：44px - 56px。

结构：

```text
[返回] [标题居中] [更多 / 帮助]
```

规则：

- 标题应简短；
- 页面内不重复放多个导航；
- 返回路径必须清晰；
- 高风险操作页需要保留退出能力。

## 4. Tab 组件

适用于状态分类，例如：

```text
监测中 / 已执行 / 已失效
持有中 / 交易中 / 历史记录
全部 / 买入 / 卖出 / 调仓
```

规则：

- Tab 文案要同一维度；
- 不要把操作按钮放进 Tab；
- Tab 下方内容必须即时反馈当前状态；
- 状态数量建议 2-5 个。

## 5. Step Indicator

用于交易、测评、开户、生成报告等流程。

推荐结构：

```text
1 信息填写 → 2 风险确认 → 3 交易确认 → 4 完成
```

移动端可简化为：

```text
第 2/4 步 · 风险确认
```

## 6. Sticky Action Bar

底部吸底操作区用于关键提交，不承载大量说明。

必须保证：

- 不遮挡关键风险提示；
- 按钮状态与表单状态一致；
- iOS 安全区留白；
- 涉及协议时，协议勾选在按钮上方。

## 7. Token Mapping

| 属性 | 推荐 Token |
|---|---|
| 导航背景 | `background/page/default` / `background/card/default` |
| 标题文字 | `foreground/neutral` |
| 返回 / 操作 | `foreground/neutral subtle` / `foreground/primary` |
| 激活 Tab | `foreground/primary` |
| 未激活 Tab | `foreground/neutral subtler` |
| 底部操作背景 | `background/page/default` |
| 分割线 | `border/default` |

## 8. 禁用

- 不在二级页重复全局导航；
- 不让返回、关闭、取消路径消失；
- 不用过多 Tab 承载复杂信息；
- 不把高风险操作放在隐蔽菜单里。
