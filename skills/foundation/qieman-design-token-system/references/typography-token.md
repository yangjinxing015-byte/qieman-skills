# Typography Token｜字体变量规范

## 1. 定位

`typography-token.md` 定义且慢跨端文字系统的命名方式、层级关系与使用规则。当前上传的 `单元 .json` 中已包含 `Line height` 变量，可作为标题和展示型文本的行高基础。

## 2. 已有 Line Height Token

来源：`单元 .json`。

| Token | Value(px) | Scope |
| --- | --- | --- |
| Line height/Title 1 | 100 | TEXT_CONTENT |
| Line height/Title 2 | 84 | TEXT_CONTENT |
| Line height/Title 3 | 68 | TEXT_CONTENT |
| Line height/Title 4 | 60 | TEXT_CONTENT |
| Line height/Title 5 | 52 | TEXT_CONTENT |
| Line height/Title 6 | 40 | TEXT_CONTENT |
| Line height/Featured 1 | 40 | TEXT_CONTENT |


## 3. 字体族建议

| 端 | 推荐字体栈 | 说明 |
|---|---|---|
| App / H5 | `-apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", Arial, sans-serif` | 优先系统字体，保证移动端清晰 |
| Web 官网 | `Inter, -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", Arial, sans-serif` | 兼顾中英文与数字展示 |
| PPT / 品牌物料 | `PingFang SC` / `Source Han Sans SC` | 保持专业、现代、清爽 |
| 高净值标题 | 可结合宋体类标题字体 | 仅用于大标题，不用于正文长段落 |

## 4. 推荐文字层级

| 层级 | 建议字号 | 建议字重 | 建议行高 Token | 使用场景 |
|---|---:|---:|---|---|
| Display | 40-48 | 600/700 | `Line height/Title 1` | Web 首屏、PPT 主标题 |
| Title 1 | 32-36 | 600/700 | `Line height/Title 2` | H5 主标题、章节页标题 |
| Title 2 | 28-32 | 600 | `Line height/Title 3` | 模块标题、重点数据标题 |
| Title 3 | 24-28 | 600 | `Line height/Title 4` | App 页面标题、卡片主标题 |
| Title 4 | 20-24 | 500/600 | `Line height/Title 5` | 弹窗标题、卡片标题 |
| Body | 14-16 | 400/500 | 建议后续补充 Body 行高 | 正文、说明文字 |
| Caption | 11-13 | 400 | 建议后续补充 Caption 行高 | 辅助说明、风险提示、标签 |

## 5. 待补充 Token

当前源文件中未包含明确的 `font-size`、`font-weight`、`letter-spacing` Token。建议后续在 Figma Variables 中补充：

```text
font-size/display
font-size/title-1
font-size/title-2
font-size/body
font-size/caption
font-weight/regular
font-weight/medium
font-weight/semibold
font-weight/bold
```

## 6. 使用原则

- 金融信息页面优先保证可读性，不追求过细字重。
- 大额数字可以使用更高字重，但必须和风险、口径说明保持同屏可见。
- 风险提示、费用说明、免责声明不应低于 11px。
- 不要用过多字体家族制造“高级感”，应通过留白、层级和排版实现专业感。
