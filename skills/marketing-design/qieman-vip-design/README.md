# qieman-design-vip V0.2.1

这是“能力保留型精简版”。相较V0.2.0，补回了所有非九宫格的核心VIP页面规则，同时继续解决原Skill过长、重复和冲突的问题。

## 保留的能力

- 单张1080×1920完整VIP海报
- 无字海报背景
- H5头图与页面主视觉
- 多张系列海报
- 深蓝金、黑蓝金、浅蓝白三套页面风格
- Logo、标题、卖点、主视觉、底部弧形、Slogan、风险提示
- 门槛席位、信息源、投研全球、长期主义、私享机会、布局观望页面模式
- 九宫格策划、完整成稿与拆分
- 主流生图工具提示词和合规规则

## 核心变化

- 主SKILL只做路由和最高优先级规则
- 单张/H5规则移动到 `references/vip-poster-page-rules.md`
- 文案库移动到 `references/copywriting.md`
- 九宫格规则独立，不影响单张页面
- 用户说“完整海报”时不会被强制改成“无字背景”
- 用户说“背景图”时不会擅自添加文字

## 目录

```txt
qieman-design-vip-v0.2.1/
├── SKILL.md
├── README.md
├── CHANGELOG.md
├── MIGRATION_MATRIX.md
├── references/
│   ├── vip-poster-page-rules.md
│   ├── nine-grid-rules.md
│   ├── design-tokens.md
│   ├── visual-language.md
│   ├── copywriting.md
│   ├── prompt-templates.md
│   └── compliance.md
└── assets/
    └── nine-grid-template.html
```

运行时只读取主SKILL和当前任务需要的reference。
