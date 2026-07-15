# marketing-design

且慢营销设计类 Skills，用于沉淀品牌营销传播、顾问类 H5、保险类 H5、高净值私域与 IP 视觉等场景的设计规范。

---

## Skills

| Skill | 中文名 | 层级 | 适用场景 | 状态 |
|---|---|---:|---|---|
| `qieman-advisor-h5-design` | 且慢顾问类 H5 设计 | L2 | 顾问服务、策略介绍、投资教育、账户分析、资产配置类 H5 | 可用 |
| `qieman-insurance-h5-design` | 且慢保险类 H5 设计 | L2 | 医疗险、重疾险、意外险、保障方案、投保引导类 H5 | 整理中 |
| `qieman-vip-design` | 且慢 VIP 设计 | L2 | 高净值私域、VIP 圈层、专属权益、九宫格、私域海报 | 可用 |
| `qieman-ip-visual-design` | 且慢 IP 视觉设计 | L2 | 小顾 IP 内容封面、运营图、社群图、活动物料 | 可用 |

> `qieman-insurance-h5-design` 当前为 WIP 占位目录。  
> 在正式补充 `SKILL.md` 前，不视为可调用 Skill。

---

## H5 拆分说明

原 `qieman-h5-design` 已按业务场景拆分为：

```text
qieman-advisor-h5-design
qieman-insurance-h5-design
```

拆分原因：

- 顾问类 H5 强调专业、克制、可信、策略逻辑与顾问陪伴
- 保险类 H5 强调保险插画、保障图标、保额保费、赔付金额与保险合规
- 两类页面在视觉语言、图标、插画、信息层级与合规要求上差异明显
- 拆分后可以减少规则冲突，提高调用准确率和页面风格一致性

`qieman-vip-design` 继续负责高净值私域和 VIP 营销，不并入普通 H5 Skill。

---

## 调用路由

| 用户意图 / 触发词 | 推荐调用 |
|---|---|
| 顾问服务、策略介绍、投资教育、账户分析、资产配置 H5 | `qieman-advisor-h5-design` |
| 医疗险、重疾险、意外险、保险产品、保障方案、投保引导 H5 | `qieman-insurance-h5-design`（整理中，暂不可调用） |
| 高净值私域、VIP 圈层、九宫格、专属权益、私域海报 | `qieman-vip-design` |
| 小顾 IP、内容封面、社群图、运营图、活动物料 | `qieman-ip-visual-design` |

---

## qieman-advisor-h5-design

### 适用场景

- 顾问服务介绍
- 策略介绍页
- 投资教育内容
- 账户诊断
- 资产配置建议
- 市场陪伴
- 顾问沟通类 H5

### 视觉关键词

```text
专业
克制
可信
清晰
理性
陪伴感
```

### 常用视觉元素

- 金融图表
- 数据卡片
- 顾问服务卡片
- 策略逻辑图
- 流程图
- 资产配置图
- 轻量金融图标
- 简洁说明模块

### 不建议使用

- 与内容无关的强营销主视觉
- 过度夸张的促销元素
- 保险类保障图标作为主视觉
- 高饱和、强刺激的活动视觉

### 调用示例

```text
调用 qieman-advisor-h5-design，
根据业务需求生成一份顾问类 H5 页面。
主题：低利率时代如何安放闲钱。
强调专业、克制、可信和清晰的信息表达。
```

---

## qieman-insurance-h5-design

> 状态：WIP / 整理中，暂不可正式调用。

### 计划适用场景

- 医疗险
- 重疾险
- 意外险
- 养老险
- 少儿保障
- 家庭保障
- 保险产品介绍
- 投保引导
- 保障场景营销页

### 计划视觉关键词

```text
保障感
安全感
家庭感
健康感
清晰易懂
金额突出
```

### 必须强调的设计差异

1. 页面中需要有明确的保险类插画或图标引导
2. 保额、保费、赔付金额、起投金额等数字需形成强信息层级
3. 金额不应与普通正文使用相同视觉权重
4. 优先使用盾牌、医疗、家庭守护、保单、理赔、住院等保险语义元素
5. 不使用股票、K 线、收益曲线作为保险页面主视觉
6. 保险责任、免责条件和风险提示不得被营销视觉弱化
7. 产品责任、适用人群、保障范围与理赔流程需要清晰呈现

### 整理完成后的调用示例

```text
调用 qieman-insurance-h5-design，
根据保险需求文档生成医疗险 H5。
突出保险场景插画、保障责任、保额、保费和理赔信息。
```

---

## qieman-vip-design

### 适用场景

- 高净值私域
- VIP 用户圈层
- 专属权益
- 九宫格
- 系列海报
- 私域邀请页
- 高端金融营销视觉

### 视觉关键词

```text
高端
克制
圈层感
专业
蓝金
尊享感
```

### 调用示例

```text
调用 qieman-vip-design，
生成一组高净值用户私域九宫格。
只使用 VIP 圈层、高净值营销和且慢蓝金视觉规则。
```

---

## qieman-ip-visual-design

### 适用场景

- 小顾 IP 内容封面
- 社群图
- 运营图
- 活动物料
- IP 使用场景
- IP 与 Logo 组合视觉

### 调用示例

```text
调用 qieman-ip-visual-design，
生成一组小顾 IP 内容封面。
使用 Logo + 主标题 + 内容 + IP 的视觉结构。
```

---

## 目录结构

```text
marketing-design/
├── qieman-advisor-h5-design/
│   ├── SKILL.md
│   ├── README.md
│   ├── references/
│   └── assets/
│
├── qieman-insurance-h5-design/
│   └── README.md
│
├── qieman-vip-design/
│   ├── SKILL.md
│   ├── README.md
│   ├── references/
│   └── assets/
│
├── qieman-ip-visual-design/
│   ├── SKILL.md
│   ├── README.md
│   ├── references/
│   └── assets/
│
└── README.md
```

---

## WIP Skill 管理

未完成的 Skill 建议只保留：

```text
qieman-insurance-h5-design/
└── README.md
```

占位 README 需要明确：

- 当前状态为 WIP / 整理中
- 计划覆盖的业务场景
- 暂不可调用
- 完成后再补充 `SKILL.md`

在 `SKILL.md` 正式加入前，不应：

- 在调用路由中标记为可用
- 对外提供正式调用能力
- 被自动识别为可执行 Skill

---

## 命名规范

所有 Skill 必须满足：

- 文件夹名与 `SKILL.md` 中的 `name` 完全一致
- `name` 只能使用小写字母、数字和连字符
- 不以连字符开头或结尾
- 不出现连续连字符
- 长度为 1–64 个字符

示例：

```yaml
name: qieman-advisor-h5-design
```

```yaml
name: qieman-insurance-h5-design
```

---

## 改名与迁移检查

原 `qieman-h5-design` 改名后，需要同步更新：

- 文件夹名称
- `SKILL.md` 中的 `name`
- references 内部路径
- assets 内部路径
- 本 README
- `skills/README.md`
- 团队 Skill 索引表
- 调用示例与历史提示词

建议确保仓库中不再残留：

```text
qieman-h5-design
```

---

## Git 提交建议

本次拆分推荐提交信息：

```text
Summary:
Split H5 design skills by business scenario

Description:
- Rename qieman-h5-design to qieman-advisor-h5-design
- Add qieman-insurance-h5-design placeholder
- Update marketing-design README and skill routing
- Separate advisor, insurance, VIP and IP visual scenarios
```

不要提交：

```text
.DS_Store
**/.DS_Store
```
