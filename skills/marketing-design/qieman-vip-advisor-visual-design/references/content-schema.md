# Content Schema

## Purpose

定义三套顾问模板的统一字段。

## Template Values

`template` 支持：

- `horizontal-card`
- `vertical-card`
- `advisor-poster`

## Fields

### template

模板类型。

### name

顾问姓名。

### portrait

人物图片路径。

### phone

联系电话。

### license_id

执业编号 / 对应业务要求的从业编号。

### services

服务能力数组。

例如：

- 财务规划
- 资产配置
- 产品咨询
- 持仓分析
- 市场解读
- 陪伴服务

### title

人物主身份标题。

例如：

- 资深理财规划师

### experience_years

金融从业年限。

### service_label

服务数据说明。

例如：

- 累计服务高净值用户
- 累计服务客户资产规模

### service_value

服务数据值。

例如：

- 1000+
- 30亿
- 2千+

### experience_description

从业经历 / 擅长方向数组。

### education

学历或专业背景。

### certifications

专业资格数组。

### qr_code

二维码素材路径。

## Required by Template

### horizontal-card

建议必填：

- template
- name
- portrait
- license_id

选填：

- services

### vertical-card

建议必填：

- template
- name
- portrait
- phone
- license_id

### advisor-poster

建议必填：

- template
- name
- portrait
- title
- experience_years
- service_label
- service_value
- phone
- license_id

建议选填：

- experience_description
- education
- certifications
- qr_code

## Missing Field Rules

- 必填字段缺失：停止最终生成并提示补充
- 选填字段缺失：隐藏对应模块
- 不得自动虚构真实履历或资格信息
