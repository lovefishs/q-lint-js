const { resolve } = require('path')
const eslint = require('eslint')
const pkg = require('./package.json')

module.exports = {
  cmd: 'q-lint-js',
  eslint: eslint,
  eslintConfig: {
    configFile: resolve(__dirname, './eslintrc.json'),
  },
  tagline: 'Use JavaScript Q Style',
  version: pkg.version,
}
