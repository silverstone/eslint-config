# Silverstone ESLint Config

This is a configuration for ESLint which is meant to focus on warnings rather than errors for things that are purely cosmetic.

## Installation

First, install to `devDependencies`:
```bash
$ npm install @silverstone/eslint-config --save-dev
```

Then, create a config file in your project directory called `.eslintrc.json`
```json
{
    "extends": "@silverstone"
}
```