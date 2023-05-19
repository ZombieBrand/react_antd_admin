module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'no-console': 'warn', // 禁止使用console
        'no-unused-vars': 'error', // 禁止定义未使用的变量
        'no-debugger': 'error', // 禁止使用debugger
        'no-var': 'error' // 要求使用 let 或 const 而不是 var
    }
}
