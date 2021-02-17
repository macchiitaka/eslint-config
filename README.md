# @takamachi/eslint-config

[![npm version](https://badge.fury.io/js/%40takamachi%2Feslint-config.svg)](https://badge.fury.io/js/%40takamachi%2Feslint-config)

A ESLint rule set for macchiitaka.

**This package is intended to use in macchiitaka. Currently, this is still in development so the rules might be changed.**

## What is this?

This is a ESLint rule set for macchiitaka.
The purpose of `@takamachi/eslint-config` are following

- Share best practices for JavaScript
- Standardize JavaScript coding guideline in macchiitaka
- Installation support for ESLint and continuous support for the rule set

## The benefits to adapt this rule

You don't need to care about updates for ESLint and ESLint plugins.
We'll manage the updates and provide CHANGELOG that you need to know so that you can update it easily.
In addition, we'll add some useful plugins into `@takamachi/eslint-config` so you can learn about best practices for JavaScript through `@takamachi/eslint-config`.

## Rule set policies

We provide rules that are Error or Warning.

### Error

This is a rule you must fix because the code might not follow our practices in JavaScript

### Warning

This is a rule you should fix because the code style might not be preferable.

## Version policy

1.  We update major version if the changes might cause new errors.
1.  We update minor version if the changes might cause new warnings.
1.  We update patch version if the changes don't cause any new errors and warings.

## How to use

Install `eslint` and `@takamachi/eslint-config` and put it into your `.eslintrc.js`

```bash
$ npm install --save-dev eslint @takamachi/eslint-config
```

- `.eslintrc.js`

```js
module.exports = {
  extends: '@takamachi',
}
```

**Currently, we adopt that `indent` rule is 2 spaces and having indentation in `switch case`.
You can override the rule if your project adopts 4 spaces or others.
We think it's important to have consistency in your entire codebase.**

```js
module.exports = {
  extends: '@takamachi',
  rules: {
    // default
    // 'indent': ['warn', 2, { "SwitchCase": 1 }],
    indent: ['warn', 4, { SwitchCase: 0 }],
  },
}
```

## Support rule set

- `@takamachi`
  - Including
    - `eslint`
    - `eslint-plugin-unicorn`
    - `eslint-plugin-import`
    - `eslint-plugin-simple-import-sort`
- `@takamachi/eslint-config/presets/typescript`
  - Including
    - `@takamachi`
    - `@typescript-eslint/eslint-plugin`
- `@takamachi/eslint-config/presets/react`
  - Including
    - `@takamachi`
    - `eslint-plugin-react`
    - `eslint-plugin-jsx-ally`
    - `eslint-plugin-react-hooks`
  - ⚠️ A11y rules are being defined as warnings, which is an experimental, so we might change the rules in later
- `@takamachi/eslint-config/presets/react-typescript`
  - Including
    - `@takamachi/eslint-config/presets/react`
    - `@takamachi/eslint-config/presets/typescript`
- `@takamachi/eslint-config/presets/node`
  - Including
    - `@takamachi`
    - `eslint-plugin-node`
- `@takamachi/eslint-config/presets/none-typescript`
  - Including
    - `@takamachi/eslint-config/presets/none`
    - `@takamachi/eslint-config/presets/typescript`

## Prettier Support

Prettier is a code formatter, which supports not only JavaScript but also other languages.
Prettier is used widely for a code formatter for JavaScript.

It's an opinionated tool but with Prettier, we don't have to discuss code styles in code review.
(No more bikeshed)

The presets disable all rules conflicting with Prettier and treat the difference as errors.
You can fix the errors by `--fix` option, so you don't have to fix the errors manually.

In order to this, you have to install `prettier` and choose a preset from the followings.

```bash
$ npm install --save-dev prettier
```

- `@takamachi/eslint-config/presets/prettier`
- `@takamachi/eslint-config/presets/typescript-prettier`
- `@takamachi/eslint-config/presets/react-prettier`
- `@takamachi/eslint-config/presets/react-typescript-prettier`
- `@takamachi/eslint-config/presets/node-prettier`
- `@takamachi/eslint-config/presets/node-typescript-prettier`

**Currently, we don't support customized Prettier config**

## Recommended plugins

- [amilajack/eslint-plugin-compat: Lint the browser compatibility of your code](https://github.com/amilajack/eslint-plugin-compat)
- [jest-community/eslint-plugin-jest: ESLint plugin for Jest](https://github.com/jest-community/eslint-plugin-jest)
- [testing-library/eslint-plugin-jest-dom: eslint rules for use with jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)
- [testing-library/eslint-plugin-testing-library: ESLint plugin to follow best practices and anticipate common mistakes when writing tests with Testing Library](https://github.com/testing-library/eslint-plugin-testing-library)
