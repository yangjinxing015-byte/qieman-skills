# qieman-report-swipe-design

且慢 **报告横向翻页演示** skill（L1 扩展）。

- **视觉**：且慢报告 token（浅蓝画布、白卡片、品牌蓝 KPI）
- **交互**：`guizang-ppt-skill`（`100vw×100vh`、键盘/滚轮/触屏/圆点/ESC 索引）

## 快速开始

```bash
cp qieman-report-swipe-design/assets/template-report-swipe.html 项目/ppt/index.html
# 读 references/layouts-report-swipe.md 填 R01–R12
node qieman-report-swipe-design/scripts/validate-report-swipe-deck.mjs 项目/ppt/index.html
open 项目/ppt/index.html
```

完整规范见 [`SKILL.md`](./SKILL.md)。
