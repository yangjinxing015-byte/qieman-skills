# Assets

生成时优先复制 [`templates/app-shell.html`](templates/app-shell.html)，不要从零写 `:root`。

Logo / AI 小顾选用规则见 [`../references/logos.md`](../references/logos.md)。

```
assets/
├── templates/app-shell.html            # 375 页壳 + :root + Tab / 底栏 / Toast
├── logos/
│   ├── 且慢logo/                       # 且慢主品牌
│   ├── 盈米logo/                       # 盈米主品牌
│   ├── 组合logo/                       # 盈米+且慢联合标
│   ├── 盈米AI开放平台logo/             # OAP 图形 / 组合标
│   └── AI小顾 logo/                    # 组合标 + Style / line / Background
└── prototypes/
    ├── circle-siyuan-feed.html         # 圈子/信息流对照
    ├── typography-specimen.html      # 字号样张
    └── 且慢App字号规范.pptx
```

| 目录 | 默认文件 |
|------|----------|
| `且慢logo/` | 浅底 `且慢logo-Regular.svg`；蓝/深底 `且慢logo-white.svg` |
| `盈米AI开放平台logo/` | 浅底横版 `OAP-组合-light.svg`；图形标 `OAP-默认.svg` |
| `AI小顾 logo/` | 产品名 `AI 小顾-Combination.svg`；App 头像 `AI小顾-Style1-01.png` |

产出 HTML 不在本目录时，把选用文件拷到可访问路径或内联，并改 `src`。
