#!/usr/bin/env node
const shell = require('shelljs')
const fs = require('fs')

console.log('Installing dependencies for ESLint...')
shell.exec('npm install -D eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-config-standard eslint-plugin-standard @silverstone/eslint-config')

console.log('Creating ESLint config...')
const config = { extends: '@silverstone' }
fs.writeFileSync('.eslintrc.json', JSON.stringify(config, null, 2))

console.log('Finished installing Silverstone ESLint.')