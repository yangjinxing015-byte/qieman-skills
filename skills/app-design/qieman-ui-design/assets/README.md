# Assets 资源文件

本目录包含且慢 UI 设计中使用的 Logo 与品牌资源。

## 目录结构

```
assets/
├── logos/                              # Logo 文件（SVG）
│   ├── 且慢logo-Regular.svg            # 且慢标准 Logo（浅色背景）
│   ├── 且慢logo-white.svg              # 且慢反白 Logo（深色/蓝色背景）
│   ├── 且慢logo-Graphic.svg            # 且慢图形标
│   ├── 盈米logo-Regular.svg            # 盈米标准 Logo
│   ├── 盈米logo-white.svg              # 盈米反白 Logo
│   ├── 盈米且慢logo-Regular.svg        # 盈米且慢联合 Logo（浅色背景）
│   ├── 盈米且慢logo-white.svg          # 盈米且慢联合 Logo（深色背景）
│   └── logo-slogn.svg                  # 带 Slogan 的 Logo
└── README.md
```

## 使用场景

| 文件 | 适用场景 |
|---|---|
| `且慢logo-Regular.svg` | App 内页、H5 浅色背景页眉 |
| `且慢logo-white.svg` | 封面、封底、深蓝品牌底 |
| `且慢logo-Graphic.svg` | 图标位、小尺寸品牌露出 |
| `盈米且慢logo-Regular.svg` / `盈米且慢logo-white.svg` | 需同时展示盈米与且慢品牌时 |
| `logo-slogn.svg` | 品牌陪伴页、关于页 |

## 在代码中引用

资源路径相对于 skill 目录或生成的 HTML 所在目录，按实际工程调整：

```html
<!-- 内页页眉 -->
<img src="assets/logos/且慢logo-Regular.svg" alt="且慢" height="20" />

<!-- 封面 / 深蓝背景 -->
<img src="assets/logos/且慢logo-white.svg" alt="且慢" height="22" />
```

## 使用规范

- 优先使用 SVG，保证缩放清晰
- 颜色与尺寸遵循 `qieman-ui-design` 中的 `{colors.*}` 与排版 token
- 确保 Logo 在目标背景下有足够对比度
- 文件名与上表保持一致，避免使用泛称 `logo.svg` / `logo.png`
