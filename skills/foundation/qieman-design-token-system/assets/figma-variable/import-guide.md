# Figma Variables 导入与维护指南

## 1. 导入原则

1. 先导入基础色阶，再导入语义色。
2. 语义色必须通过 alias 绑定基础色阶。
3. Light / Dark mode 要在同一个变量集合内维护。
4. 单元变量用于 radius、layout、line-height，不要混入颜色集合。

## 2. 建议集合

```text
色阶 / Primitive Color
色彩 / Semantic Color
单元 / Unit
```

## 3. 维护流程

```text
Figma Variables 更新
    ↓
导出 JSON
    ↓
更新 assets/json-token/raw
    ↓
重新生成 normalized JSON / CSS Variables
    ↓
同步 references 文档
```

## 4. 审核点

- Token 命名是否符合英文小写 / 分层结构。
- 语义 Token 是否明确表达用途。
- 暗色模式是否存在可读性问题。
- 是否出现业务页面直接使用 primitive 色阶的情况。
