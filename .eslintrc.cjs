module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      1,
      {
        allowConstantExport: true,
      },
    ],
    'react/button-has-type': 1,
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': [
      2,
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-tag-spacing': 2,
    'react/jsx-sort-props': [
      1,
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        reservedFirst: ['key', 'ref'],
      },
    ],
    'react/sort-default-props': 1,
    'react/jsx-no-leaked-render': 1,
    'react/jsx-handler-names': 1,
    'react/jsx-no-useless-fragment': [
      1,
      {
        allowExpressions: true,
      },
    ],
    'react/jsx-no-duplicate-props': 2,
    'react/hook-use-state': [
      1,
      {
        allowDestructuredState: true,
      },
    ],
    'no-console': 2,
  },
};
