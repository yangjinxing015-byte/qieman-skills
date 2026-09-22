# Icon Library Asset Folder

该目录用于归档且慢 App 端图标资源索引与使用说明。

## 统一图标来源

且慢 App 端通用图标统一调用 Remix Icon：

```text
https://remixicon.com/
```

## 推荐目录

```text
icon-library/
├── common/
├── navigation/
├── trading/
├── account/
├── portfolio/
├── risk/
├── ai/
├── service/
└── marketing/
```

## 使用规则

- 默认使用 Remix Icon 的 `line` 风格。
- 选中态、强状态、品牌重点入口可使用 `fill` 风格。
- 图标颜色必须绑定 Design Token。
- App 默认图标尺寸为 24px，点击热区不小于 44×44px。
- 详细规范请读取：`references/icon-library.md`。
