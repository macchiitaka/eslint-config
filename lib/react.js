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
    'react/no-access-state-in-setstate': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/button-has-type': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/no-typos': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-stateless-function': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
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
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { when: 'multiline' }],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreDOMComponents: true,
        ignoreRefs: true,
      },
    ],
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    'react/jsx-wrap-multilines': 'error',

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
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    /**
     * -----------------------------------------------------
     * eslint-plugin-jsx-a11y
     * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
     * -----------------------------------------------------
     */
    'jsx-a11y/no-autofocus': 'off',
  },
};
