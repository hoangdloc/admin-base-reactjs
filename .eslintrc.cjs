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
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@typescript-eslint/stylistic',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    'dist',
    'node_modules',
    'coverage',
    'vite.config.ts',
    '**/.*',
  ],
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
    tailwindcss: {
      callees: ['classnames', 'cn', 'clsx', 'classNames'],
      config: 'tailwind.config.js',
      cssFiles: [
        'src/**/*.(scss|css|less)$',
        '!**/node_modules',
        '!**/.*',
        '!**/dist',
        '!**/build',
      ],
      cssFilesRefreshRate: 5_000,
      removeDuplicates: true,
      skipClassAttribute: false,
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-refresh',
    'jsx-a11y',
    'import',
    'promise',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.mjs', '*.cjs'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    // react-refresh
    'react-refresh/only-export-components': [
      1,
      {
        allowConstantExport: true,
      },
    ],
    // react
    'react/button-has-type': 0,
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
    'react/jsx-no-leaked-render': [
      1,
      {
        validStrategies: ['coerce', 'ternary'],
      },
    ],
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
    'react/prop-types': 0,
    // import
    'import/no-empty-named-blocks': 1,
    'import/no-mutable-exports': 1,
    'import/no-named-as-default': 1,
    'import/no-unused-modules': 1,
    'import/no-nodejs-modules': 2,
    'import/no-unresolved': 0, // using module bundler so turn this rule off
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
        img: ['Image'],
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
    'jsx-a11y/img-redundant-alt': [
      1,
      {
        components: [],
      },
    ],
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
    'no-duplicate-imports': [
      2,
      {
        includeExports: true,
      },
    ],
    'no-promise-executor-return': [
      2,
      {
        allowVoid: true,
      },
    ],
    'no-self-compare': 2,
    'no-use-before-define': [
      2,
      {
        functions: true,
        classes: true,
        variables: true,
        allowNamedExports: true,
      },
    ],
    'guard-for-in': 2,
    'logical-assignment-operators': [
      2,
      'always',
      {
        enforceForIfStatements: true,
      },
    ],
    'no-array-constructor': 0, // conflict with typescript-eslint
    'no-caller': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-implied-eval': 0, // conflict with typescript-eslint
    'no-lonely-if': 2,
    'no-magic-numbers': 0, // conflict with typescript-eslint
    'no-loss-of-precision': 0, // conflict with typescript-eslint
    'no-octal': 2,
    'no-shadow': 0, // conflict with typescript-eslint
    'no-redeclare': 0, // conflict with typescript-eslint
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: true,
      },
    ],
    'no-unused-expressions': 0, // conflict with typescript-eslint
    'no-unused-vars': 0, // conflict with typescript-eslint
    'no-use-before-define': 0, // conflict with typescript-eslint
    'no-var': 2,
    'no-useless-concat': 2,
    'no-useless-computed-key': [
      2,
      {
        enforceForClassMembers: true,
      },
    ],
    'no-with': 2,
    'no-empty-function': 0, // conflict with typescript-eslint
    'no-return-await': 0, // conflict with typescript-eslint
    'prefer-const': [
      2,
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-object-has-own': 2,
    'sort-imports': [
      1,
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'sort-keys': [
      1,
      'asc',
      {
        caseSensitive: true,
        natural: true,
        allowLineSeparatedGroups: false,
        minKeys: 2,
      },
    ],
    'sort-vars': [
      1,
      {
        ignoreCase: false,
      },
    ],
    'vars-on-top': 2,
    'require-await': 0, // conflict with typescript-eslint
    yoda: [
      2,
      'never',
      {
        exceptRange: true,
        onlyEquality: true,
      },
    ],
    'block-scoped-var': 2,
    'default-case': [
      2,
      {
        commentPattern: '^skip\\sdefault',
      },
    ],
    'default-case-last': 2,
    'default-param-last': 0, // conflict with typescript-eslint
    'dot-notation': 0, // conflict with typescript-eslint
    eqeqeq: [2, 'always'],
    // typescript-eslint
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/array-type': 0,
    '@typescript-eslint/await-thenable': 2,
    '@typescript-eslint/ban-ts-comment': 2,
    '@typescript-eslint/ban-tslint-comment': 0,
    '@typescript-eslint/ban-types': [
      2,
      {
        extendDefaults: true,
      },
    ],
    '@typescript-eslint/consistent-generic-constructors': [2, 'constructor'],
    '@typescript-eslint/consistent-indexed-object-style': [2, 'record'],
    '@typescript-eslint/consistent-type-exports': [
      2,
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      2,
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
        disallowTypeAnnotations: true,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/default-param-last': 2,
    '@typescript-eslint/dot-notation': [
      2,
      {
        allowKeywords: true,
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true,
        allowIndexSignaturePropertyAccess: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      0,
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
        allowFunctionsWithoutTypeParameters: false,
        allowedNames: [],
        allowIIFEs: false,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': [
      0,
      {
        allowArgumentsExplicitlyTypedAsAny: true,
        allowDirectConstAssertionInArrowFunctions: false,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/member-ordering': [
      1,
      {
        default: {
          memberTypes: [
            // Index signature
            'signature',
            'call-signature',

            // Fields
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            '#private-static-field',

            'public-decorated-field',
            'protected-decorated-field',
            'private-decorated-field',

            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',
            '#private-instance-field',

            'public-abstract-field',
            'protected-abstract-field',

            'public-field',
            'protected-field',
            'private-field',
            '#private-field',

            'static-field',
            'instance-field',
            'abstract-field',

            'decorated-field',

            'field',

            // Static initialization
            'static-initialization',

            // Constructors
            'public-constructor',
            'protected-constructor',
            'private-constructor',

            'constructor',

            // Accessors
            'public-static-accessor',
            'protected-static-accessor',
            'private-static-accessor',
            '#private-static-accessor',

            'public-decorated-accessor',
            'protected-decorated-accessor',
            'private-decorated-accessor',

            'public-instance-accessor',
            'protected-instance-accessor',
            'private-instance-accessor',
            '#private-instance-accessor',

            'public-abstract-accessor',
            'protected-abstract-accessor',

            'public-accessor',
            'protected-accessor',
            'private-accessor',
            '#private-accessor',

            'static-accessor',
            'instance-accessor',
            'abstract-accessor',

            'decorated-accessor',

            'accessor',

            // Getters
            'public-static-get',
            'protected-static-get',
            'private-static-get',
            '#private-static-get',

            'public-decorated-get',
            'protected-decorated-get',
            'private-decorated-get',

            'public-instance-get',
            'protected-instance-get',
            'private-instance-get',
            '#private-instance-get',

            'public-abstract-get',
            'protected-abstract-get',

            'public-get',
            'protected-get',
            'private-get',
            '#private-get',

            'static-get',
            'instance-get',
            'abstract-get',

            'decorated-get',

            'get',

            // Setters
            'public-static-set',
            'protected-static-set',
            'private-static-set',
            '#private-static-set',

            'public-decorated-set',
            'protected-decorated-set',
            'private-decorated-set',

            'public-instance-set',
            'protected-instance-set',
            'private-instance-set',
            '#private-instance-set',

            'public-abstract-set',
            'protected-abstract-set',

            'public-set',
            'protected-set',
            'private-set',
            '#private-set',

            'static-set',
            'instance-set',
            'abstract-set',

            'decorated-set',

            'set',

            // Methods
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            '#private-static-method',

            'public-decorated-method',
            'protected-decorated-method',
            'private-decorated-method',

            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
            '#private-instance-method',

            'public-abstract-method',
            'protected-abstract-method',

            'public-method',
            'protected-method',
            'private-method',
            '#private-method',

            'static-method',
            'instance-method',
            'abstract-method',

            'decorated-method',

            'method',
          ],
          optionalityOrder: 'required-first',
          order: 'natural-case-insensitive',
        },
        interfaces: {
          memberTypes: ['signature', 'method', 'constructor', 'field'],
          optionalityOrder: 'required-first',
          order: 'natural-case-insensitive',
        },
        typeLiterals: {
          memberTypes: ['signature', 'method', 'constructor', 'field'],
          optionalityOrder: 'required-first',
          order: 'natural-case-insensitive',
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      1,
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: true,
        },
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom: {
          regex: '^E[A-Z]',
          match: true,
        },
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE', 'PascalCase'],
      },
    ],
    '@typescript-eslint/no-array-constructor': 2,
    '@typescript-eslint/no-array-delete': 2,
    '@typescript-eslint/no-base-to-string': [
      2,
      {
        ignoredTypeNames: ['Error', 'RegExp', 'URL', 'URLSearchParams', 'Date'],
      },
    ],
    '@typescript-eslint/no-confusing-non-null-assertion': 2,
    '@typescript-eslint/no-duplicate-enum-values': 2,
    '@typescript-eslint/no-duplicate-type-constituents': [
      2,
      {
        ignoreIntersections: false,
        ignoreUnions: false,
      },
    ],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-empty-interface': [
      2,
      {
        allowSingleExtends: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-extra-non-null-assertion': 2,
    '@typescript-eslint/no-floating-promises': [
      2,
      {
        ignoreVoid: true,
        ignoreIIFE: true,
      },
    ],
    '@typescript-eslint/no-for-in-array': 2,
    '@typescript-eslint/no-implied-eval': 2,
    '@typescript-eslint/no-import-type-side-effects': 2,
    '@typescript-eslint/no-inferrable-types': [
      2,
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    '@typescript-eslint/no-invalid-void-type': [
      2,
      {
        allowInGenericTypeArguments: true,
        allowAsThisParameter: true,
      },
    ],
    '@typescript-eslint/no-loss-of-precision': 2,
    '@typescript-eslint/no-magic-numbers': [
      1,
      {
        ignore: [0, 1, -1],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreClassFieldInitialValues: true,
        enforceConst: true,
        detectObjects: false,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],
    '@typescript-eslint/no-misused-new': 2,
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksConditionals: true,
        checksVoidReturn: false,
        checksSpreads: true,
      },
    ],
    '@typescript-eslint/no-namespace': [
      2,
      {
        allowDeclarations: true,
        allowDefinitionFiles: true,
      },
    ],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
    '@typescript-eslint/no-redeclare': [
      2,
      {
        builtinGlobals: true,
        ignoreDeclarationMerge: false,
      },
    ],
    '@typescript-eslint/no-redundant-type-constituents': 0,
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/no-shadow': [
      2,
      {
        builtinGlobals: false,
        hoist: 'all',
        allow: [
          'resolve',
          'reject',
          'done',
          'cb',
          'next',
          'err',
          'error',
          'data',
        ],
        ignoreOnInitialization: false,
        ignoreTypeValueShadow: false,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],
    '@typescript-eslint/no-this-alias': [
      2,
      {
        allowDestructuring: true,
        allowedNames: ['self'],
      },
    ],
    '@typescript-eslint/no-unnecessary-qualifier': 2,
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    '@typescript-eslint/no-unnecessary-type-constraint': 2,
    '@typescript-eslint/no-unsafe-argument': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-declaration-merging': 2,
    '@typescript-eslint/no-unsafe-enum-comparison': 2,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-unsafe-unary-minus': 2,
    '@typescript-eslint/no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'after-used',
        varsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: false,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        functions: false,
        classes: true,
        variables: false,
        allowNamedExports: false,
        enums: true,
        typedefs: true,
        ignoreTypeReferences: false,
      },
    ],
    '@typescript-eslint/no-useless-empty-export': 2,
    '@typescript-eslint/no-var-requires': [
      2,
      {
        allow: ['^.*\\.json$', 'tailwindcss/plugin'],
      },
    ],
    '@typescript-eslint/non-nullable-type-assertion-style': 1,
    '@typescript-eslint/prefer-as-const': 1,
    '@typescript-eslint/prefer-find': 1,
    '@typescript-eslint/prefer-for-of': 1,
    '@typescript-eslint/prefer-function-type': 1,
    '@typescript-eslint/prefer-namespace-keyword': 2,
    '@typescript-eslint/prefer-nullish-coalescing': [
      1,
      {
        ignoreTernaryTests: false,
        ignoreConditionalTests: false,
        ignoreMixedLogicalExpressions: false,
        ignorePrimitives: {
          string: false,
          boolean: false,
          bigint: false,
          number: false,
        },
      },
    ],
    '@typescript-eslint/prefer-optional-chain': [
      2,
      {
        checkAny: true,
        checkUnknown: true,
        requireNullish: true,
      },
    ],
    '@typescript-eslint/prefer-readonly-parameter-types': [
      0,
      {
        checkParameterProperties: true,
        ignoreInferredTypes: true,
        treatMethodsAsReadonly: true,
      },
    ],
    '@typescript-eslint/prefer-regexp-exec': 1,
    '@typescript-eslint/prefer-string-starts-ends-with': 1,
    '@typescript-eslint/require-await': 2,
    '@typescript-eslint/restrict-plus-operands': [
      2,
      {
        allowAny: true,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: true,
        allowRegExp: false,
        skipCompoundAssignments: false,
      },
    ],
    '@typescript-eslint/restrict-template-expressions': [
      2,
      {
        allowAny: true,
        allowBoolean: false,
        allowNullish: false,
        allowNumber: true,
        allowRegExp: false,
      },
    ],
    '@typescript-eslint/return-await': [2, 'in-try-catch'],
    '@typescript-eslint/sort-type-constituents': [
      1,
      {
        checkIntersections: true,
        checkUnions: true,
        groupOrder: [
          'named',
          'keyword',
          'operator',
          'literal',
          'function',
          'import',
          'conditional',
          'object',
          'tuple',
          'intersection',
          'union',
          'nullish',
        ],
      },
    ],
    '@typescript-eslint/strict-boolean-expressions': [
      0,
      {
        allowString: true,
        allowNumber: true,
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableString: true,
        allowNullableNumber: true,
        allowNullableEnum: true,
        allowAny: false,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': [
      2,
      {
        allowDefaultCaseForExhaustiveSwitch: true,
        requireDefaultForNonUnion: true,
      },
    ],
    '@typescript-eslint/triple-slash-reference': [
      2,
      { lib: 'always', path: 'never', types: 'prefer-import' },
    ],
    '@typescript-eslint/unbound-method': [
      0,
      {
        ignoreStatic: true,
      },
    ],
    // tailwindcss
    'tailwindcss/classnames-order': 0,
    'tailwindcss/enforces-negative-arbitrary-values': 1,
    'tailwindcss/enforces-shorthand': 1,
    'tailwindcss/migration-from-tailwind-2': 1,
    'tailwindcss/no-arbitrary-value': 0,
    'tailwindcss/no-contradicting-classname': 1,
    'tailwindcss/no-custom-classname': 0,
    // prettier
    'prettier/prettier': 1,
  },
};
