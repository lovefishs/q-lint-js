# q-lint-js

沃趣前端 JavaScript 代码规范检查工具

具体细节查看 [JavaScript.md](/RULES.md)

## Install

```bash
npm install q-lint-js --save-dev
```

## Usage

`package.json` 新增 `q-lint-js.ignore` 字段，自定义忽略规则：

```js
  "q-lint-js": {
    "ignore": [
      "node_modules/",
      "dist/",
    ]
  },
```

```bash
q-lint-js
Error: Use JavaScript Q Style
  src/index.js:20:11: Expected '===' and instead saw '=='.
```
