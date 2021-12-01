module.exports = {
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  plugins: ['simple-import-sort', 'unicorn', 'unused-imports'],
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
    'require-atomic-updates': 'error',
    'no-extra-parens': 'error',
    'no-template-curly-in-string': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-promise-executor-return': 'error',
    'no-unreachable-loop': 'error',

    // 'no-await-in-loop': 'off',
    // 'no-console': 'off',
    // 'no-loss-of-precision': 'off',
    // 'no-useless-backreference': 'off',

    /*
     * Best Practices
     * @see https://eslint.org/docs/rules/#best-practices
     */
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
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    curly: ['error', 'all'],
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'guard-for-in': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': [
      'error',
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-param-reassign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'prefer-promise-reject-errors': 'error',
    'vars-on-top': 'error',
    yoda: 'error',

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
    'no-label-var': 'error',
    'no-undef-init': 'error',

    // 'no-shadow': 'off',
    // 'init-declarations': 'off',
    // 'no-restricted-globals': 'off',
    // 'no-undefined': 'off',
    // 'no-use-before-define': 'off',

    /**
     * Stylistic Issues
     * @see https://eslint.org/docs/rules/#stylistic-issues
     */
    'func-call-spacing': 'error',
    'new-parens': 'error',
    'no-new-object': 'error',
    'no-tabs': 'error',
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'lines-between-class-members': 'error',
    'max-depth': 'error',
    'max-len': ['error', 150],
    'max-nested-callbacks': ['error', 5],
    'max-params': ['error', 7],
    'max-statements': ['error', 40],
    'new-cap': ['error', { capIsNewExceptions: ['Deferred', 'Express'] }],
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
      },
    ],
    'no-nested-ternary': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-spacing': 'error',
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'operator-assignment': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    semi: 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',

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
    'arrow-body-style': ['error', 'as-needed'],
    'no-new-symbol': 'error',
    'no-useless-constructor': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'error',
    'symbol-description': 'error',

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
    'import/no-cycle': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',

    // 'import/dynamic-import-chunkname': 'off',
    // 'import/exports-last': 'off',
    // 'import/extensions': 'off',
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
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    /*
     * -----------------------------------------------------
     * eslint-plugin-unicorn
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main/rules
     * -----------------------------------------------------
     */
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
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
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
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/prefer-export-from': 'error',

    // 'unicorn/custom-error-definition': 'off',
    // 'unicorn/import-style': 'off',
    // 'unicorn/no-array-callback-reference': 'off',
    // 'unicorn/no-array-reduce': 'off',
    // 'unicorn/no-console-spaces': 'off',
    // 'unicorn/no-keyword-prefix': 'off',
    // 'unicorn/no-lonely-if': 'off',
    // 'unicorn/no-nested-ternary': 'off',
    // 'unicorn/no-null': 'off',
    // 'unicorn/no-unsafe-regex': 'off',
    // 'unicorn/no-unused-properties': 'off',
    // 'unicorn/numeric-separators-style': 'off',
    // 'unicorn/prevent-abbreviations': 'off',
    // 'unicorn/string-content': 'off',

    /*
     * -----------------------------------------------------
     * eslint-plugin-unused-imports
     * @see https://github.com/sweepline/eslint-plugin-unused-imports/tree/master/docs/rules
     * -----------------------------------------------------
     */
    'unused-imports/no-unused-imports': 'error',
  },
};
