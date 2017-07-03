# q-lint-js

沃趣前端 JavaScript 代码规范检查工具

具体细节查看 [http://192.168.1.121/front-end/styleguide/blob/master/JavaScript.md](http://192.168.1.121/front-end/styleguide/blob/master/JavaScript.md)

## Install

```bash
npm install q-lint-js --save-dev
```

## Usage

```bash
q-lint-js
Error: Use JavaScript Q Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

```bash
$ q-lint-js "src/util/**/*.js" "test/**/*.js"
```
