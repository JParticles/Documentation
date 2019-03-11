// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    'plugin:lodash/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'lodash'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': [2, 'always-multiline'],
    'object-curly-spacing': [2, 'always'],
    'new-cap': 2,
    'space-before-function-paren': [2, 'always'],
    'no-var': 2,
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'no-unused-vars': 1,
    'no-inner-declarations': 2,
    'arrow-body-style': ['warn', 'as-needed', { requireReturnForObjectLiteral: true }],
    'no-restricted-syntax': [2, 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
    'camelcase': 0,
  }
}
