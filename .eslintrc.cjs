//
//
// DANGEROUS!!!
// DO NOT CHANGE THIS FILE UNLESS YOU KNOW WHAT YOU ARE DOING
// OR YOU ARE THE AUTHOR OF THIS FILE
//
//

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  plugins: ['react', 'react-hooks', 'react-refresh', 'import'],
  rules: {
    // react-refresh
    'react-refresh/only-export-components': [
      1,
      {
        allowConstantExport: true,
      },
    ],
    // react
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
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    // import
    'import/no-empty-named-blocks': 1,
    'import/no-mutable-exports': 1,
    'import/no-named-as-default': 1,
    'import/no-unused-modules': 1,
    'import/no-nodejs-modules': 2,
    'import/default': 2,
    'import/named': 2,
    'import/no-self-import': 2,
    'import/no-dynamic-require': 2,
    'import/first': 1,
    'import/group-exports': 1,
    'import/newline-after-import': 1,
    'import/order': [
      1,
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        distinctGroup: true,
        pathGroupsExcludedImportTypes: ['builtin', 'external'],
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
    // eslint
    'no-console': 2,
  },
};
