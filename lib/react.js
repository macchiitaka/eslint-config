module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    /**
     * -----------------------------------------------------
     * eslint-plugin-react
     * @see https://github.com/yannickcr/eslint-plugin-react
     * -----------------------------------------------------
     */

    // error
    'react/no-access-state-in-setstate': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    // warn
    'react/button-has-type': 'warn',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-array-index-key': 'warn',
    'react/no-danger': 'warn',
    'react/no-typos': 'warn',
    'react/no-unused-state': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': [
      'warn',
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
    'react/jsx-boolean-value': 'warn',
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never' },
    ],
    'react/jsx-curly-spacing': 'warn',
    'react/jsx-equals-spacing': 'warn',
    'react/jsx-first-prop-new-line': 'warn',
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-max-props-per-line': ['warn', { when: 'multiline' }],
    'react/jsx-no-bind': 'warn',
    'react/jsx-no-constructed-context-values': 'warn',
    'react/jsx-no-script-url': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-pascal-case': ['warn', { allowAllCaps: true }],
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-tag-spacing': [
      'warn',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    'react/jsx-wrap-multilines': 'warn',

    'react/react-in-jsx-scope': 'off',
    // 'react/boolean-prop-naming': 'off',
    // 'react/default-props-match-prop-types': 'off',
    // 'react/destructuring-assignment': 'off',
    // 'react/forbid-component-props': 'off',
    // 'react/forbid-dom-props': 'off',
    // 'react/forbid-elements': 'off',
    // 'react/forbid-prop-types': 'off',
    // 'react/forbid-foreign-prop-types': 'off',
    // 'react/no-adjacent-inline-elements': 'off',
    // 'react/no-multi-comp': 'off',
    // 'react/no-redundant-should-component-update': 'off',
    // 'react/no-set-state': 'off',
    // 'react/no-unused-prop-types': 'off',
    // 'react/prefer-read-only-props': 'off',
    // 'react/require-default-props': 'off',
    // 'react/require-optimization': 'off',
    // 'react/sort-prop-types': 'off',
    // 'react/state-in-constructor': 'off',
    // 'react/static-property-placement': 'off',
    // 'react/jsx-child-element-spacing': 'off',
    // 'react/jsx-curly-newline': 'off',
    // 'react/jsx-fragments': 'off',
    // 'react/jsx-handler-names': 'off',
    // 'react/jsx-max-depth': 'off',
    // 'react/jsx-newline': 'off',
    // 'react/jsx-no-literals': 'off',
    // 'react/jsx-one-expression-per-line': 'off',
    // 'react/jsx-props-no-spreading': 'off',
    // 'react/jsx-sort-default-props': 'off',
    // 'react/jsx-sort-props': 'off',
    // 'react/jsx-space-before-closing': 'off',

    /**
     * -----------------------------------------------------
     * eslint-plugin-react-hooks
     * @see https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
     * -----------------------------------------------------
     */

    // error
    'react-hooks/rules-of-hooks': 'error',

    // warn
    'react-hooks/exhaustive-deps': 'warn',

    /**
     * -----------------------------------------------------
     * eslint-plugin-jsx-a11y
     * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
     * -----------------------------------------------------
     */

    // error

    // warn

    'jsx-a11y/no-autofocus': 'off',
  },
}
