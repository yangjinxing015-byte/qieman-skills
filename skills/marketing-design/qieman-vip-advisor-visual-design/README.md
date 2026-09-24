# qieman-vip-advisor-visual-design

盈米基金 / 且慢 VIP 顾问标准化视觉设计 Skill。

## 当前版本

当前包已包含：

- `SKILL.md`
- 三套模板规则 reference
- 人物处理规则
- 内容数据结构
- QA checklist
- 输入 JSON 示例
- assets / html / scripts 占位目录

当前**未包含**：

- 最终背景素材
- Logo 资产
- 顾问人物资产
- 二维码资产
- HTML 模板
- 自动渲染脚本
- HTML → 3× JPG 自动导出脚本

这些内容可在后续补充，不影响继续维护 Skill 规则。

## 后续推荐补充顺序

1. `assets/logos/`
2. `assets/backgrounds/`
3. `html/template-horizontal-card.html`
4. `html/template-vertical-card.html`
5. `html/template-advisor-poster.html`
6. `scripts/validate-input.js`
7. `scripts/render-template.js`
8. `scripts/export-image.js`

## 核心原则

这套 Skill 的目标不是为每位顾问重新设计，而是让：

- 品牌一致
- 人物真实
- 信息准确
- 模板稳定
- 批量生产
- 可自动 QA

## 最终交付物

每次生成必须同时给出：

- HTML 文件
- 3× JPG（横版 `2199 × 1209` / 竖版 `1242 × 2163` / 海报 `2250 × 3000`）
