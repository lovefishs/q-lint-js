module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    'shared-node-browser': true,
    jquery: true,
    worker: true,
    mocha: true,
    jasmine: true,
    jest: true,
    phantomjs: true,
  },
  plugins: ['eslint-plugin-react'],
  globals: {
    NODE_ENV: true,
    __HMR__: true,
    __DEV__: true,
    __PROD__: true,
    __TEST__: true,
  },
  rules: {
    strict: 0,
    indent: [2, 2, { SwitchCase: 1 }],
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    'no-unused-vars': [2],
    'keyword-spacing': [2],
    'space-before-function-paren': [
      2,
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    eqeqeq: [2],
    'space-infix-ops': [2],
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    curly: [2, 'multi-line'],
    'handle-callback-err': [2, 'err'],
    'no-undef': [2, { typeof: true }],
    'no-multiple-empty-lines': [2, { max: 2 }],
    'operator-linebreak': [
      1,
      'after',
      {
        overrides: {
          '?': 'ignore',
          ':': 'ignore',
          '&&': 'ignore',
          '||': 'ignore',
        },
      },
    ],
    'one-var': [2, { var: 'never', let: 'never', const: 'never' }],
    'no-cond-assign': [2, 'except-parens'],
    'block-spacing': [2],
    camelcase: [2, { properties: 'never' }],
    'comma-spacing': [2],
    'comma-style': [2, 'last'],
    'comma-dangle': [2, 'only-multiline'],
    'dot-location': [2, 'property'],
    'eol-last': [2],
    'func-call-spacing': [2],
    'key-spacing': [
      2,
      { beforeColon: false, afterColon: true, mode: 'strict' },
    ],
    'new-cap': [2],
    'new-parens': [2],
    'accessor-pairs': [2],
    'constructor-super': [2],
    'no-array-constructor': [2],
    'no-caller': [2],
    'no-class-assign': [2],
    'no-const-assign': [2],
    'no-constant-condition': [2, { checkLoops: false }],
    'no-control-regex': [2],
    'no-invalid-regexp': [2],
    'no-empty-character-class': [2],
    'no-debugger': [2],
    'no-delete-var': [2],
    'no-dupe-args': [2],
    'no-dupe-class-members': [2],
    'no-dupe-keys': [2],
    'no-duplicate-case': [2],
    'no-duplicate-imports': [2],
    'no-empty-pattern': [2],
    'no-eval': [2],
    'no-ex-assign': [2],
    'no-extend-native': [2],
    'no-extra-bind': [2],
    'no-extra-boolean-cast': [2],
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': [2],
    'no-floating-decimal': [2],
    'no-func-assign': [2],
    'no-global-assign': [2],
    'no-implied-eval': [2],
    'no-inner-declarations': [2, 'functions'],
    'no-irregular-whitespace': [2, { skipStrings: true, skipTemplates: true }],
    'no-iterator': [2],
    'no-label-var': [2],
    'no-labels': [2],
    'no-lone-blocks': [2],
    'no-mixed-spaces-and-tabs': [2],
    'no-multi-spaces': [2],
    'no-multi-str': [2],
    'no-new': [2],
    'no-new-func': [2],
    'no-new-object': [2],
    'no-new-require': [2],
    'no-new-symbol': [2],
    'no-new-wrappers': [2],
    'no-obj-calls': [2],
    'no-octal': [2],
    'no-octal-escape': [2],
    'no-path-concat': [2],
    'no-proto': [2],
    'no-redeclare': [2],
    'no-regex-spaces': [2],
    'no-return-assign': [2],
    'no-self-assign': [2],
    'no-self-compare': [2],
    'no-sequences': [2],
    'no-shadow-restricted-names': [2],
    'no-sparse-arrays': [2],
    'no-tabs': [2],
    'no-template-curly-in-string': [2],
    'no-this-before-super': [2],
    'no-throw-literal': [2],
    'no-trailing-spaces': [2],
    'no-undef-init': [2],
    'no-unmodified-loop-condition': [2],
    'no-unneeded-ternary': [2],
    'no-unreachable': [2],
    'no-unsafe-finally': [2],
    'no-unsafe-negation': [2],
    'no-useless-call': [2],
    'no-useless-computed-key': [2],
    'no-useless-constructor': [2],
    'no-useless-escape': [2],
    'no-useless-rename': [2],
    'no-whitespace-before-property': [2],
    'no-with': [2],
    'no-alert': [0],
    'no-console': [0],
    'object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
    'padded-blocks': [2, 'never'],
    'rest-spread-spacing': [2, 'never'],
    'semi-spacing': [2, { before: false, after: true }],
    'space-before-blocks': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-unary-ops': [2, { words: true, nonwords: false }],
    'spaced-comment': [2, 'always', { exceptions: ['-'] }],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': [2],
    'valid-typeof': [2],
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, { before: true, after: true }],
    yoda: [2, 'never'],
    semi: [2, 'never'],
    'no-unexpected-multiline': [2],
    'jsx-quotes': [2, 'prefer-double'],
    'react/boolean-prop-naming': [0],
    'react/button-has-type': [2, { button: true, submit: true, reset: true }],
    'react/default-props-match-prop-types': [0],
    'react/destructuring-assignment': [1, 'always'],
    'react/display-name': [0],
    'react/forbid-component-props': [0],
    'react/forbid-dom-props': [0],
    'react/forbid-elements': [0],
    'react/forbid-prop-types': [0],
    'react/forbid-foreign-prop-types': [2],
    'react/no-access-state-in-setstate': [2],
    'react/no-array-index-key': [1],
    'react/no-children-prop': [2],
    'react/no-danger': [1],
    'react/no-danger-with-children': [1],
    'react/no-deprecated': [0],
    'react/no-did-mount-set-state': [0],
    'react/no-did-update-set-state': [0],
    'react/no-direct-mutation-state': [2],
    'react/no-find-dom-node': [0],
    'react/no-is-mounted': [2],
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/no-redundant-should-component-update': [2],
    'react/no-render-return-value': [0],
    'react/no-set-state': [0],
    'react/no-typos': [2],
    'react/no-string-refs': [2],
    'react/no-this-in-sfc': [2],
    'react/no-unescaped-entities': [2],
    'react/no-unknown-property': [2],
    'react/no-unsafe': [1],
    'react/no-unused-prop-types': [2, { skipShapeProps: true }],
    'react/no-unused-state': [2],
    'react/no-will-update-set-state': [2],
    'react/prefer-es6-class': [2, 'always'],
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/prop-types': [1],
    'react/react-in-jsx-scope': [2],
    'react/require-default-props': [1, { forbidDefaultForRequired: true }],
    'react/require-optimization': [0],
    'react/require-render-return': [2],
    'react/self-closing-comp': [2, { component: true, html: false }],
    'react/sort-comp': [1],
    'react/sort-prop-types': [0],
    'react/style-prop-object': [2],
    'react/void-dom-elements-no-children': [2],
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-child-element-spacing': [0],
    'react/jsx-closing-bracket-location': [2],
    'react/jsx-closing-tag-location': [2],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-filename-extension': [0],
    'react/jsx-first-prop-new-line': [0],
    'react/jsx-handler-names': [
      1,
      { eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' },
    ],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': [2],
    'react/jsx-max-depth': [0],
    'react/jsx-max-props-per-line': [0],
    'react/jsx-no-bind': [
      1,
      {
        ignoreRefs: true,
        allowBind: false,
        allowArrowFunctions: false,
        allowFunctions: false,
      },
    ],
    'react/jsx-no-comment-textnodes': [2],
    'react/jsx-no-duplicate-props': [2],
    'react/jsx-no-literals': [0],
    'react/jsx-no-target-blank': [2],
    'react/jsx-no-undef': [2],
    'react/jsx-one-expression-per-line': [0],
    'react/jsx-curly-brace-presence': [0],
    'react/jsx-pascal-case': [2],
    'react/jsx-props-no-multi-spaces': [2],
    'react/jsx-sort-default-props': [0],
    'react/jsx-sort-props': [0],
    'react/jsx-tag-spacing': [
      2,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    'react/jsx-uses-react': [2],
    'react/jsx-uses-vars': [2],
    'react/jsx-wrap-multilines': [0],
  },
}
