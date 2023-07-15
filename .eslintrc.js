const indent = [2, 4]

module.exports = {
    globals: {
        JSX: 'readonly',
    },
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'plugin:json/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/rules/react',
        'airbnb/rules/react-hooks',
        'plugin:css-modules/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
            node: {
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg'],
            },
        },
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'import',
        'css-modules',
    ],
    rules: {
        'no-shadow': 0,
        'no-unused-vars': 0,
        '@typescript-eslint/no-shadow': [2],
        'import/extensions': [2, 'never', {
            svg: 'always',
            json: 'always'
        }],
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
        'object-curly-newline': 0,
        'max-len': [1, {
            code: 120,
            tabWidth: 4,
            ignoreUrls: true,
            ignoreComments: true,
            ignorePattern: 'd\..*$'
        }],
        indent: 0,
        'react/jsx-indent': indent,
        'react/jsx-indent-props': indent,
        curly: ['error', 'all'],
        '@typescript-eslint/indent': indent,
        '@typescript-eslint/member-delimiter-style': [2, {
            multiline: {
                delimiter: 'none',
            },
            singleline: {
                delimiter: 'comma',
            }
        }],
        '@typescript-eslint/no-unused-vars': [1, {
            argsIgnorePattern: '_'
        }],
        'jsx-a11y/label-has-associated-control': [0, {
            labelComponents: ['CustomInputLabel'],
            labelAttributes: ['label'],
            controlComponents: ['CustomInput'],
            depth: 3,
        }],
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'react/jsx-props-no-spreading': 0,
        'no-use-before-define': 0,
        'react/prop-types': 0,
        '@typescript-eslint/consistent-type-exports': 2,
        'jest/valid-title': [1, {
            ignoreTypeOfDescribeName: true,
        }],
        'jest/no-done-callback': 1,
        'jest/no-export': 0,
        'react/jsx-uses-react': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-fragments': [2, 'element'],
        'react/no-unknown-property': [2, {
            ignore: ['css']
        }],
        'react/function-component-definition': 0,
        'react/jsx-no-useless-fragment': 1,
        'react/no-unstable-nested-components': 1,
        'react/require-default-props': 0,
        'react/jsx-no-constructed-context-values': 1,
        'css-modules/no-unused-class': [1, { camelCase: true }],
        'css-modules/no-undef-class': [1, { camelCase: true }],
        'semi': 0,
    },
}
