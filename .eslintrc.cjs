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
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:jsx-a11y/recommended',
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
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'import',
    'promise',
    'jsx-a11y',
  ],
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
    // promise
    'promise/catch-or-return': [
      2,
      {
        allowThen: true,
        allowFinally: true,
        terminationMethod: ['catch', 'asCallback', 'finally'],
      },
    ],
    'promise/no-return-wrap': [
      2,
      {
        allowReject: true,
      },
    ],
    'promise/param-names': 2,
    'promise/always-return': [
      1,
      {
        ignoreLastCallback: true,
      },
    ],
    'promise/no-nesting': 1,
    'promise/no-promise-in-callback': 1,
    'promise/no-new-statics': 2,
    'promise/no-return-in-finally': 1,
    'promise/valid-params': 1,
    'promise/no-multiple-resolved': 1,
    // jsx-a11y
    'jsx-a11y/alt-text': [
      1,
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
      },
    ],
    'jsx-a11y/anchor-has-content': 1,
    'jsx-a11y/anchor-is-valid': [
      1,
      {
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 1,
    'jsx-a11y/aria-props': 1,
    'jsx-a11y/aria-proptypes': 1,
    'jsx-a11y/aria-role': [
      1,
      {
        ignoreNonDOM: true,
      },
    ],
    'jsx-a11y/aria-unsupported-elements': 1,
    'jsx-a11y/autocomplete-valid': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/heading-has-content': 1,
    'jsx-a11y/html-has-lang': 1,
    'jsx-a11y/iframe-has-title': 1,
    'jsx-a11y/img-redundant-alt': 1,
    'jsx-a11y/interactive-supports-focus': 1,
    'jsx-a11y/label-has-associated-control': 1,
    'jsx-a11y/lang': 1,
    'jsx-a11y/media-has-caption': 1,
    'jsx-a11y/mouse-events-have-key-events': 1,
    'jsx-a11y/no-access-key': 1,
    'jsx-a11y/no-aria-hidden-on-focusable': 1,
    'jsx-a11y/no-autofocus': [
      1,
      {
        ignoreNonDOM: true,
      },
    ],
    'jsx-a11y/no-distracting-elements': 1,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 1,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 1,
    'jsx-a11y/no-noninteractive-tabindex': [
      1,
      {
        allowExpressionValues: true,
      },
    ],
    'jsx-a11y/no-redundant-roles': 1,
    'jsx-a11y/no-static-element-interactions': [
      1,
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
        allowExpressionValues: true,
      },
    ],
    'jsx-a11y/role-has-required-aria-props': 1,
    'jsx-a11y/role-supports-aria-props': 1,
    'jsx-a11y/scope': 1,
    'jsx-a11y/tabindex-no-positive': 1,
    // eslint
    'no-console': 2,
  },
};
