import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import ts from 'typescript-eslint';
import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';
import security from 'eslint-plugin-security';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import checkFile from 'eslint-plugin-check-file';

export default [
  {
    plugins: {
      ['@import']: importPlugin,
      ['@typescript-eslint']: ts.plugin,
      ['eslint-comments']: eslintCommentsPlugin,
      ['check-file']: checkFile,
    },
  },
  {
    ignores: ['**/*.d.*', '**/*.map.*', '**/*.js', '/node_modules/**'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
  },
  ...ts.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  security.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      'eslint-comments/no-use': 'warn',
      'eslint-comments/no-unused-disable': 'error',
      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/member-ordering': 'warn',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          modifiers: ['const', 'global'],
          format: ['UPPER_CASE', 'camelCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'property',
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'method',
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: true,
          },
        },
        {
          selector: 'enum',
          format: ['PascalCase'],
          custom: {
            regex: '.*Enum$|.*EnumType$',
            match: false,
          },
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
        {
          selector: 'import',
          format: ['camelCase', 'PascalCase'],
        },
      ],
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
      'array-callback-return': 'error',
      'arrow-body-style': [
        'error',
        'as-needed',
        {
          requireReturnForObjectLiteral: true,
        },
      ],
      'arrow-parens': [2, 'always'],
      'arrow-spacing': 'error',
      'block-spacing': 'error',
      'class-methods-use-this': 'off',
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{js,ts}': 'KEBAB_CASE',
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/**/': 'KEBAB_CASE',
          'test/**/': 'KEBAB_CASE',
        },
      ],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
          imports: 'always-multiline',
          objects: 'always-multiline',
        },
      ],
      'comma-spacing': ['error', { before: false, after: true }],
      'computed-property-spacing': ['error', 'never'],
      'curly': 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'eol-last': 'error',
      'eqeqeq': ['error', 'always', { ['null']: 'ignore' }],
      'for-direction': 'error',
      'func-call-spacing': ['error', 'never'],
      'function-call-argument-newline': ['error', 'consistent'],
      'implicit-arrow-linebreak': 'off',
      '@import/no-default-export': 'error',
      '@import/order': 'error',
      '@import/prefer-default-export': 'off',
      'keyword-spacing': 'error',
      'max-classes-per-file': 'error',
      'max-depth': ['error', 4],
      'max-params': ['error', 5],
      // 'newline-per-chained-call': ['base-error', { ignoreChainWithDepth: 3 }],
      'no-await-in-loop': 'off',
      'no-fallthrough': 'error',
      'no-constant-binary-expression': 'error',
      'no-continue': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-duplicate-case': 'error',
      'no-dupe-else-if': 'error',
      'no-else-return': 'error',
      'no-lonely-if': 'error',
      // "no-magic-numbers": ["base-error", { ignore: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1000] }],
      'no-multi-spaces': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-return-await': 'error',
      'no-sequences': 'error',
      'no-template-curly-in-string': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-void': 'error',
      'no-with': 'error',
      'object-curly-spacing': ['error', 'always'],
      'one-var': ['error', 'never'],
      'prefer-arrow-callback': 'error',
      'prefer-promise-reject-errors': 'error',
      'require-atomic-updates': 'warn',
      'require-await': 'error',
      'rest-spread-spacing': ['error', 'never'],
      'semi-spacing': 'error',
      // 'sort-keys': [
      //   'base-error',
      //   'asc',
      //   {
      //     caseSensitive: true,
      //     minKeys: 3,
      //     natural: false,
      //   },
      // ],
      'switch-colon-spacing': 'error',
      'template-curly-spacing': ['error', 'never'],
      'yoda': 'error',
      'no-console': 'error',
      'security/detect-unsafe-regex': 'error',
      'security/detect-buffer-noassert': 'error',
      'security/detect-child-process': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-no-csrf-before-method-override': 'error',
      'security/detect-non-literal-fs-filename': 'warn',
      'security/detect-non-literal-regexp': 'warn',
      'security/detect-non-literal-require': 'error',
      'security/detect-object-injection': 'off',
      'security/detect-possible-timing-attacks': 'error',
      'security/detect-pseudoRandomBytes': 'warn',
      'security/detect-new-buffer': 'error',
    },
  },
  {
    files: ['**/*.test.ts', '**/*.e2e-test.ts'],
    'env': {
      'jest': true
    },
    rules: {
      '@import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      'check-file/filename-naming-convention': 'off',
      'no-magic-numbers': 'off',
    },
  },
  {
    files: ['**/*.mock.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@import/no-extraneous-dependencies': 'off',
      'check-file/filename-naming-convention': 'off',
    },
  },
  {
    files: ['**/*.fixture.ts'],
    rules: {
      'check-file/filename-naming-convention': 'off',
      '@typescript-eslint/naming-convention': 'off',
    },
  },
];
