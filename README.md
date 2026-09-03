qieman skills



包更新日期：2026-09-03
各文件以头部信息栏中的更新时间为准，后续可由 scripts/sync-updated-at.py 同步。

且慢设计 Skill 集合。

官方约定：





每个 Skill 的主文件固定命名为 SKILL.md



Skill 文件夹名称必须与 SKILL.md 中的 name 字段完全一致



name 只能使用小写字母、数字和连字符



name 不得以连字符开头或结尾，不得出现连续连字符



name 长度为 1–64 个字符



未包含 SKILL.md 的目录仅作为占位或资料目录，不视为可调用 Skill



框架结构

qieman-skills/
└── skills/
    ├── app-design/                                 App 界面与组件
    │   ├── qieman-ui-design/                       L0
    │   ├── qieman-sell-popup-design/               L1
    │   └── qieman-chart-design/                    L2
    │
    ├── marketing-design/                           营销传播
    │   ├── qieman-advisor-h5-design/               L2
    │   ├── qieman-insurance-design/                L2
    │   ├── qieman-vip-design/                      L2
    │   └── qieman-ip-visual-design/                L2
    │
    ├── report-design/                              报告与演示
    │   ├── qieman-ppt-design/                      L2
    │   └── qieman-report-design/                   L1
    │
    ├── design-audit/                               设计核查与交付验收
    │   └── qieman-design-content-audit/            L1
    │
    ├── workflow-design/                            AI 设计工作流
    │   └── qieman-ai-workflow-design/              L1
    │
    └── README.md



qieman-insurance-design 已完成基础版，可正式调用。
当前基础验证标准以保险产品介绍页 V8（Hero 融合 + 内嵌 Icon）为参考基准。





分层说明



L0：基础入口

负责定义某一大类设计能力的基础规范、调用边界和下游路由。

示例：

app-design/qieman-ui-design/SKILL.md



L1：业务能力

负责一类完整业务场景或设计交付流程。

示例：

report-design/qieman-report-design/SKILL.md
design-audit/qieman-design-content-audit/SKILL.md
workflow-design/qieman-ai-workflow-design/SKILL.md



L2：专项能力

负责明确的页面类型、营销场景或视觉产物。

示例：

marketing-design/qieman-advisor-h5-design/SKILL.md
marketing-design/qieman-vip-design/SKILL.md
marketing-design/qieman-ip-visual-design/SKILL.md
report-design/qieman-ppt-design/SKILL.md





Skills 总览



app-design







Skill



中文名



层级



适用场景



状态





qieman-ui-design



且慢 UI 界面设计



L0



App 页面、基础组件、页面结构与交互规范



可用





qieman-sell-popup-design



且慢营销弹窗设计



L1



吸底弹窗、确认弹窗、营销弹窗、规则提示



可用





qieman-chart-design



且慢金融图表设计



L2



收益曲线、柱状图、饼图、资产配置图表



可用



marketing-design







Skill



中文名



层级



适用场景



状态





qieman-advisor-h5-design



且慢顾问类 H5 设计



L2



顾问服务、策略介绍、投资教育、账户分析、资产配置类 H5



可用





qieman-insurance-design



且慢保险设计



L2



保险产品 H5 / App、Hero、Icon、插画、人物、信息可视化、内容审核



可用





qieman-vip-design



且慢 VIP 设计



L2



高净值私域、VIP 圈层、专属权益、九宫格、私域海报



可用





qieman-ip-visual-design



且慢 IP 视觉设计



L2



小顾 IP 内容封面、运营图、社群图、活动物料



可用



H5 拆分说明

原 qieman-h5-design 已按业务场景拆分为：

qieman-advisor-h5-design
qieman-insurance-design

拆分原因：





顾问类 H5 强调专业、克制、可信、策略逻辑与顾问陪伴



保险设计强调保险产品信息架构、Hero、保障图标、人物/家庭插画、关键信息可视化与保险内容保护



两类页面的视觉语言、图标、插画、信息层级和合规要求不同

qieman-vip-design 继续负责高净值私域和 VIP 营销，不并入普通 H5 Skill。

qieman-insurance-design 当前基础版已验证以下规则：





Hero 左侧文案、右侧人物，二者垂直居中并保持视觉平衡



人物优先使用透明底资产，与主蓝色背景自然融合



Hero 与正文之间使用柔和渐变过渡，避免明显断层



避免人物过小或出现大面积无效留白



HTML 本地预览时，基础 Icon 优先使用可离线显示的内嵌 SVG



已有设计稿优化时优先保留原尺寸、结构与页面节奏



保险产品事实、关键数据、责任范围和限制条件不得因视觉优化被改写



report-design







Skill



中文名



层级



适用场景



状态





qieman-ppt-design



且慢 PPT 设计



L2



汇报、路演、客户提案、内部演示



可用





qieman-report-design



且慢报告设计



L1



客户报告、财富报告、策略报告、组合报告



可用



design-audit







Skill



中文名



层级



适用场景



状态





qieman-design-content-audit



且慢设计内容核查



L1



需求文档、设计稿、HTML、生产页面之间的文案和数据核对



可用

默认输出：





HTML 可视化核查报告



只标注确认有问题的位置



正确区域不标注



同一错误多次出现时逐一定位



支持页面标记与问题清单双向跳转



workflow-design







Skill



中文名



层级



适用场景



状态





qieman-ai-workflow-design



且慢 AI 工作流设计



L1



AI 设计流程、自动化工作流、工具编排与团队协作



可用





调用路由







用户意图 / 触发词



推荐调用





App 页面、组件、交互、页面结构



qieman-ui-design





弹窗、吸底弹窗、确认弹窗、规则弹窗



qieman-sell-popup-design





收益图、资产配置图、柱状图、饼图、金融图表



qieman-chart-design





顾问服务、策略介绍、投教、账户分析、资产配置 H5



qieman-advisor-h5-design





医疗险、重疾险、意外险、保险产品、保障方案、投保引导、保险 Hero / Icon / 插画



qieman-insurance-design





高净值私域、VIP 圈层、九宫格、专属权益



qieman-vip-design





小顾 IP、内容封面、社群图、运营图、活动物料



qieman-ip-visual-design





PPT、路演、汇报、客户提案



qieman-ppt-design





客户报告、财富报告、策略报告、组合报告



qieman-report-design





核对需求稿与设计稿、检查数字、文案、风险提示



qieman-design-content-audit





AI 工作流、自动化流程、工具编排



qieman-ai-workflow-design





典型调用示例



顾问类 H5

调用 qieman-advisor-h5-design，
根据业务需求生成一份顾问类 H5 页面。
主题：低利率时代如何安放闲钱。
强调专业、克制、可信和清晰的信息表达。



保险设计

qieman-insurance-design 当前已完成基础版，可正式调用。

调用 qieman-insurance-design，
根据保险需求文档生成医疗险 H5 / App 产品介绍页。
严格继承 qieman-ui-design；
不得新增、删减或改写保障责任和关键数据。
Hero 默认采用左文右图，人物与文字垂直居中，
人物优先透明底并与主背景自然融合；
关键卖点、保障责任和流程模块需补充明确 Icon。



VIP 私域设计

调用 qieman-vip-design，
生成一组高净值用户私域九宫格。
只使用 VIP 圈层、高净值营销和且慢蓝金视觉规则。



IP 视觉设计

调用 qieman-ip-visual-design，
生成一组小顾 IP 内容封面。
使用 Logo + 主标题 + 内容 + IP 的视觉结构。



内容核查

调用 qieman-design-content-audit，
以需求文档为准核对设计稿。
输出 HTML 核查报告，只标注有问题的位置。





WIP Skill 管理规则

未完成的 Skill 仍只保留占位 README.md，并明确：





当前状态：WIP / 整理中



计划覆盖的业务场景



暂不可调用



完成后再增加 SKILL.md

当前 qieman-insurance-design 不再属于 WIP，因为已经包含正式 SKILL.md，并通过基础保险产品介绍页验证。

在 SKILL.md 正式加入前，其他 WIP Skill 不应：





在调用路由中标记为“可用”



对外提供正式调用提示词



被自动识别为可执行 Skill





目录维护规则



新增 Skill





创建符合命名规范的文件夹



添加 SKILL.md



确保文件夹名与 name 完全一致



更新本 README 的框架结构、总览和调用路由



更新对应分类目录中的 README.md



提交前删除 .DS_Store



Skill 改名

改名时必须同步更新：





文件夹名称



SKILL.md 中的 name



相对路径引用



分类 README.md



skills/README.md



团队 Skill 索引表



调用示例与历史提示词

本次保险 Skill 已完成正式迁移：

qieman-insurance-h5-design
→
qieman-insurance-design

仓库中应优先使用新名称 qieman-insurance-design，并逐步清理旧名称引用。

删除或合并 Skill

删除前确认：





是否有其他 Skill 引用其路径



是否存在团队正在使用的旧调用语句



是否需要保留迁移说明



是否会导致公共素材丢失





Git 提交建议

不要提交：

.DS_Store
**/.DS_Store

建议在仓库根目录 .gitignore 中加入：

.DS_Store
**/.DS_Store

典型提交信息：

Summary:
Update insurance design skill routing

Description:
- Replace qieman-insurance-h5-design with qieman-insurance-design
- Mark insurance design skill as available
- Update skills framework, routing and invocation examples
- Add insurance Hero, Icon, persona and content-protection scope
- Remove obsolete insurance WIP references





当前状态摘要

qieman-advisor-h5-design      可用
qieman-insurance-design       可用
qieman-vip-design             可用
qieman-ip-visual-design       可用
qieman-design-content-audit   可用

