#!/usr/bin/env node

if (process.version.match(/v(\d+)\./)[1] < 6) {
  console.error('q-lint-js: Node v6 or greater is required. `q-lint-js` did not run.')
} else {
  const opts = require('../options')
  require('standard-engine').cli(opts)
}
