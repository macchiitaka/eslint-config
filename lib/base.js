module.exports = {
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  plugins: ['simple-import-sort', 'unicorn'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  rules: {
    /*
     * -----------------------------------------------------
     * eslint
     * -----------------------------------------------------
     */

    /**
     * Possible Errors
     * @see https://eslint.org/docs/rules/#possible-errors
     */

    // error
    'require-atomic-updates': 'error',

    // warn
    'no-extra-parens': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-unsafe-optional-chaining': 'warn',
    'no-promise-executor-return': 'warn',
    'no-unreachable-loop': 'warn',

    // 'no-await-in-loop': 'off',
    // 'no-console': 'off',
    // 'no-loss-of-precision': 'off',
    // 'no-useless-backreference': 'off',

    /*
     * Best Practices
     * @see https://eslint.org/docs/rules/#best-practices
     */

    // error
    'default-param-last': 'error',
    eqeqeq: ['error', 'always'],
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'no-void': 'error',
    'prefer-regex-literals': 'error',
    radix: 'error',
    'wrap-iife': ['error', 'any'],

    // warn
    'array-callback-return': 'warn',
    'block-scoped-var': 'warn',
    'consistent-return': 'warn',
    curly: ['warn', 'all'],
    'default-case': 'warn',
    'dot-location': ['warn', 'property'],
    'dot-notation': 'warn',
    'guard-for-in': 'warn',
    'no-caller': 'warn',
    'no-div-regex': 'warn',
    'no-else-return': 'warn',
    'no-empty-function': [
      'warn',
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-floating-decimal': 'warn',
    'no-invalid-this': 'warn',
    'no-iterator': 'warn',
    'no-labels': 'warn',
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    'no-param-reassign': 'warn',
    'no-return-await': 'warn',
    'no-script-url': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-useless-call': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-return': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'vars-on-top': 'warn',
    yoda: 'warn',

    // 'accessor-pairs': 'off',
    // 'class-methods-use-this': 'off',
    // complexity: 'off',
    // 'default-case-last': 'off',
    // 'grouped-accessor-pairs': 'off',
    // 'max-classes-per-file': 'off',
    // 'no-alert': 'off',
    // 'no-constructor-return': 'off',
    // 'no-eq-null': 'off',
    // 'no-implicit-coercion': 'off',
    // 'no-magic-numbers': 'off',
    // 'no-new': 'off',
    // 'no-nonoctal-decimal-escape': 'off',
    // 'no-restricted-properties': 'off',
    // 'no-warning-comments': 'off',
    // 'prefer-named-capture-group': 'off',
    // 'require-await': 'off',
    // 'require-unicode-regexp': 'off',

    /**
     * Strict Mode
     * @see https://eslint.org/docs/rules/#strict-mode
     */

    // strict: 'off',

    /**
     * Variables
     * @see https://eslint.org/docs/rules/#variables
     */

    // error
    'no-label-var': 'error',
    'no-shadow': 'error',

    // warn
    'no-undef-init': 'warn',

    // 'init-declarations': 'off',
    // 'no-restricted-globals': 'off',
    // 'no-undefined': 'off',
    // 'no-use-before-define': 'off',

    /**
     * Stylistic Issues
     * @see https://eslint.org/docs/rules/#stylistic-issues
     */

    // error
    'func-call-spacing': 'error',
    'new-parens': 'error',
    'no-new-object': 'error',
    'no-tabs': 'error',

    // warn
    'array-bracket-spacing': 'warn',
    'block-spacing': 'warn',
    'brace-style': 'warn',
    'comma-spacing': 'warn',
    'comma-style': 'warn',
    'computed-property-spacing': 'warn',
    indent: ['warn', 2, { SwitchCase: 1 }],
    'jsx-quotes': 'warn',
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'linebreak-style': 'warn',
    'lines-between-class-members': 'warn',
    'max-depth': 'warn',
    'max-len': ['warn', 150],
    'max-nested-callbacks': ['warn', 5],
    'max-params': ['warn', 7],
    'max-statements': ['warn', 40],
    'new-cap': ['warn', { capIsNewExceptions: ['Deferred', 'Express'] }],
    'no-array-constructor': 'warn',
    'no-lonely-if': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 2,
        maxEOF: 1,
      },
    ],
    'no-nested-ternary': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-whitespace-before-property': 'warn',
    'nonblock-statement-body-position': 'warn',
    'object-curly-spacing': 'warn',
    'object-property-newline': [
      'warn',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'operator-assignment': 'warn',
    'prefer-exponentiation-operator': 'warn',
    'prefer-object-spread': 'warn',
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    semi: 'warn',
    'semi-spacing': 'warn',
    'semi-style': 'warn',
    'space-before-blocks': 'warn',
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'spaced-comment': 'warn',
    'switch-colon-spacing': 'warn',
    'template-tag-spacing': 'warn',
    'unicode-bom': 'warn',

    // 'array-bracket-newline': 'off',
    // 'array-element-newline': 'off',
    // camelcase: 'off',
    // 'capitalized-comments': 'off',
    // 'comma-dangle': 'off',
    // 'consistent-this': 'off',
    // 'eol-last': 'off',
    // 'func-name-matching': 'off',
    // 'func-names': 'off',
    // 'func-style': 'off',
    // 'function-call-argument-newline': 'off',
    // 'function-paren-newline': 'off',
    // 'id-denylist': 'off',
    // 'id-length': 'off',
    // 'id-match': 'off',
    // 'implicit-arrow-linebreak': 'off',
    // 'line-comment-position': 'off',
    // 'lines-around-comment': 'off',
    // 'max-lines': 'off',
    // 'max-lines-per-function': 'off',
    // 'max-statements-per-line': 'off',
    // 'multiline-comment-style': 'off',
    // 'multiline-ternary': 'off',
    // 'newline-per-chained-call': 'off',
    // 'no-bitwise': 'off',
    // 'no-continue': 'off',
    // 'no-inline-comments': 'off',
    // 'no-mixed-operators': 'off',
    // 'no-mixed-spaces-and-tabs': 'off',
    // 'no-multi-assign': 'off',
    // 'no-negated-condition': 'off',
    // 'no-plusplus': 'off',
    // 'no-restricted-syntax': 'off',
    // 'no-ternary': 'off',
    // 'no-underscore-dangle': 'off',
    // 'object-curly-newline': 'off',
    // 'one-var': 'off',
    // 'operator-linebreak': 'off',
    // 'padded-blocks': 'off',
    // 'padding-line-between-statements': 'off',
    // 'quote-props': 'off',
    // 'sort-keys': 'off',
    // 'sort-vars': 'off',
    // 'wrap-regex': 'off',

    /**
     * ECMAScript 6
     * @see https://eslint.org/docs/rules/#ecmascript-6
     */

    // error
    'generator-star-spacing': ['error', 'after'],
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'after'],

    // warn
    'arrow-body-style': ['warn', 'as-needed'],
    'no-new-symbol': 'warn',
    'no-useless-constructor': 'warn',
    'object-shorthand': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-numeric-literals': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'rest-spread-spacing': 'warn',
    'symbol-description': 'warn',

    // 'arrow-parens': 'off',
    // 'arrow-spacing': 'off',
    // 'no-duplicate-imports': 'off',
    // 'no-restricted-exports': 'off',
    // 'no-restricted-imports': 'off',
    // 'no-this-before-super': 'off',
    // 'prefer-destructuring': 'off',
    // 'require-yield': 'off',
    // 'sort-imports': 'off',

    /*
     * -----------------------------------------------------
     * eslint-plugin-import
     * @see https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
     * -----------------------------------------------------
     */

    // error
    'import/no-cycle': 'error',

    // warn
    'import/newline-after-import': 'warn',
    'import/no-deprecated': 'warn',

    // 'import/dynamic-import-chunkname': 'off',
    // 'import/exports-last': 'off',
    // 'import/extensions': 'off',
    // 'import/first': 'off',
    // 'import/group-exports': 'off',
    // 'import/imports-first': 'off',
    // 'import/max-dependencies': 'off',
    // 'import/no-absolute-path': 'off',
    // 'import/no-amd': 'off',
    // 'import/no-anonymous-default-export': 'off',
    // 'import/no-commonjs': 'off',
    // 'import/no-default-export': 'off',
    // 'import/no-dynamic-require': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'import/no-import-module-exports': 'off',
    // 'import/no-internal-modules': 'off',
    // 'import/no-mutable-exports': 'off',
    // 'import/no-named-default': 'off',
    // 'import/no-named-export': 'off',
    // 'import/no-namespace': 'off',
    // 'import/no-nodejs-modules': 'off',
    // 'import/no-relative-packages': 'off',
    // 'import/no-relative-parent-imports': 'off',
    // 'import/no-restricted-paths': 'off',
    // 'import/no-self-import': 'off',
    // 'import/no-unassigned-import': 'off',
    // 'import/no-unused-modules': 'off',
    // 'import/no-useless-path-segments': 'off',
    // 'import/no-webpack-loader-syntax': 'off',
    // 'import/order': 'off',
    // 'import/prefer-default-export': 'off',
    // 'import/unambiguous': 'off',

    /*
     * -----------------------------------------------------
     * eslint-plugin-simple-import-sort
     * -----------------------------------------------------
     */

    /**
     * @see https://github.com/lydell/eslint-plugin-simple-import-sort#usage
     */
    'sort-imports': 'off',
    'import/order': 'off',

    // error
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // warn

    /*
     * -----------------------------------------------------
     * eslint-plugin-unicorn
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main/rules
     * -----------------------------------------------------
     */

    // error
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',

    // warn

    'unicorn/prevent-abbreviations': 'off',
    // 'unicorn/custom-error-definition': 'off',
    // 'unicorn/import-style': 'off',
    // 'unicorn/no-array-callback-reference': 'off',
    // 'unicorn/no-array-for-each': 'off',
    // 'unicorn/no-array-reduce': 'off',
    // 'unicorn/no-console-spaces': 'off',
    // 'unicorn/no-for-loop': 'off',
    // 'unicorn/no-keyword-prefix': 'off',
    // 'unicorn/no-lonely-if': 'off',
    // 'unicorn/no-nested-ternary': 'off',
    // 'unicorn/no-null': 'off',
    // 'unicorn/no-unsafe-regex': 'off',
    // 'unicorn/no-unused-properties': 'off',
    // 'unicorn/numeric-separators-style': 'off',
    // 'unicorn/prefer-string-replace-all': 'off',
    // 'unicorn/prefer-ternary': 'off',
    // 'unicorn/string-content': 'off',
  },
}
