#!/usr/bin/env node
const shell = require('shelljs')
const fs = require('fs')

console.log('Installing dependencies for ESLint...')
shell.exec('npm install -D eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-config-standard eslint-plugin-standard @silverstone/eslint-config')

console.log('Creating ESLint config...')
const eslintConfig = { 
  extends: '@silverstone',
  env: {
    node: true,
    jasmine: true
  }
}
fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

console.log('Creating Prettier config...')
const prettierConfig = {
  singleQuote: true,
  semi: false,
  printWidth: 100,
  tabWidth: 2
}
fs.writeFileSync('.prettierrc.json', JSON.stringify(prettierConfig, null, 2))

console.log('Finished installing Silverstone ESLint.')