const { resolve } = require('path')
const eslint = require('eslint')
const pkg = require('./package.json')

module.exports = {
  bugs: pkg.bugs.url,
  cmd: 'q-lint-js',
  eslint: eslint,
  eslintConfig: {
    configFile: resolve(__dirname, './eslintrc.js'),
  },
  homepage: pkg.homepage,
  tagline: 'Use JavaScript Q Style',
  version: pkg.version,
}
