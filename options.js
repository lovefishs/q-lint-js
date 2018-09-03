const { resolve } = require('path')
const eslint = require('eslint')

const pkg = require('./package.json')

module.exports = {
  bugs: pkg.bugs.url,
  homepage: pkg.homepage,
  version: pkg.version,
  tagline: 'Use JavaScript Q Style',
  cmd: 'q-lint-js',
  eslint: eslint,
  eslintConfig: {
    configFile: resolve(__dirname, '.eslintrc.js'),
  },
}
