module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  // It's 5〜10x slower with the project setting.
  // So We disable it until the issue has been fixed
  /*
  parserOptions: {
    project: './tsconfig.json',
  },
  */
  rules: {
    // error
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/consistent-indexed-object-style': [
      'error',
      'index-signature',
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/method-signature-style': ['error', 'method'],

    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md#options
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    // These rules are required type information, which means these can be checked without parserOptions.project
    '@typescript-eslint/no-for-in-array': 'error',

    // warn

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md#how-to-use
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',

    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        ignoredMethodNames: [
          // React
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'state',
          'getInitialState',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
          'render',
          // Next.js
          'getInitialProps',
          'getStaticProps',
          'getServerSideProps',
          'getStaticPaths',
        ],
      },
    ],
    '@typescript-eslint/indent': ['warn', 2, { SwitchCase: 1 }],
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    '@typescript-eslint/prefer-enum-initializers': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',

    // These rules are required type information, which means these can be checked without parserOptions.project
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'warn',
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],

    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',

    // @TODO use NonNullable<T> instead
    '@typescript-eslint/no-non-null-assertion': 'off',

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-triple-slash-reference': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    // '@typescript-eslint/no-implicit-any-catch': 'off',
    // '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    // '@typescript-eslint/class-literal-property-style': 'off',
    // '@typescript-eslint/consistent-type-assertions': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/member-ordering': 'off',
    // '@typescript-eslint/naming-convention': 'off',
    // '@typescript-eslint/no-base-to-string': 'off',
    // '@typescript-eslint/no-dynamic-delete': 'off',
    // '@typescript-eslint/no-extraneous-class': 'off',
    // '@typescript-eslint/no-floating-promises': 'off',
    // '@typescript-eslint/no-invalid-void-type': 'off',
    // '@typescript-eslint/no-parameter-properties': 'off',
    // '@typescript-eslint/no-require-imports': 'off',
    // '@typescript-eslint/no-type-alias': 'off',
    // '@typescript-eslint/prefer-literal-enum-member': 'off',
    // '@typescript-eslint/promise-function-async': 'off',
    // '@typescript-eslint/sort-type-union-intersection-members': 'off',
    // '@typescript-eslint/strict-boolean-expressions': 'off',
    // '@typescript-eslint/typedef': 'off',
    // '@typescript-eslint/prefer-for-of': 'off',
  },
}
