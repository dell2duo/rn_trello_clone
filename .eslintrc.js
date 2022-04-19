const {endOfLine} = require('./.prettierrc');

module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // 'linebreak-style': ['error', 'windows'],
        'prettier/prettier': ['error', {endOfLine: 'auto'}],
        indent: ['error', 2],
        quotes: ['error', 'single'],
        semi: ['info', 'never'],
        code: ['error', 80],
        '@typescript-eslint/no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_'
          }
        ]
        // '@typescript-eslint/no-shadow': ['error'],
        // 'no-shadow': 'off',
        // 'no-undef': 'off'
      }
    }
  ]
};
