# HTML 模板

三套可渲染模板 + 对应顾问实例，均自包含 `assets/`，可直接用浏览器打开。

## 模板

| 模板 | 画布 | 文件 |
|------|------|------|
| Template A 横版名牌 | 733×403 | `template-horizontal-card.html` |
| Template B 竖版名牌 | 414×721 | `template-vertical-card.html` |
| Template C 顾问介绍海报 | 973×1280 | `template-advisor-poster.html` |

占位字段：`{{name}}`、`{{phone}}`、`{{license_id}}`。

## 实例

- `顾问名片-陈雨辰.html`（横版）
- `顾问名片-汤楚然.html`（横版）
- `顾问竖版海报-张宏第.html`（竖版）
- `顾问名片-张宏第-竖版.html`（竖版，同稿）
- `顾问介绍海报-汤楚然.html`（介绍海报）

## 约定

- 固定画布尺寸
- 背景 / 人物 / 文案分层
- 文案字段可被 JSON 替换
- 支持长姓名适配
- 支持隐藏空字段
- 支持按 1× 画布预览
- 最终导出 3× JPG（与 HTML 一并交付）
- 不依赖模型重新生成文字
