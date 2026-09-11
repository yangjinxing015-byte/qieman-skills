# qieman-insurance-design

且慢保险专项设计 Skill。

## V3 Insurance Visual Calibration

本版本基于已确认的保险产品页视觉方向进行校准，核心变化：

- 明确与 `qieman-business-content-design` 的职责边界
- 默认 `soft-gradient` Hero→正文承接
- 浅蓝页面底 + 白色卡片
- 黑色标题 + 暖珊瑚 / 暖橙关键强调
- Hero 默认左文右人物 / 家庭资产
- Hero 不擅自新增 CTA
- 产品卡已有 CTA 必须保留
- Sticky CTA 与产品卡 CTA 可以同时存在
- 长页允许多种模块表达，禁止全页同构卡片
- Icon / 插画服务保险语义，不堆装饰

## 使用方式

建议与主 Skill 联合调用：

```text
调用 qieman-business-content-design，
基于附件重新设计保险业务页面。
内容不变，视觉重做，不沿用原型表现。
保险专项视觉遵循 qieman-insurance-design。
输出完整移动端 HTML。
```

## 覆盖安装

如果当前 `qieman-insurance-design` 文件夹内已有：

- assets/
- references/
- persona/
- icon resources/

请保留这些资产目录。

本压缩包只覆盖：
- SKILL.md
- README.md
- PACKAGE_MANIFEST.md
