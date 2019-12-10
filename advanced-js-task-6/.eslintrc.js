module.exports = {
    env: {
        es6: true,
        browser: true,
        node: false
    },
    extends: ['plugin:jest/recommended'],
    plugins: [        
        'import',
        'prettier',
    ],
    rules: {
        'linebreak-style': 'off', // Неправильно работает в Windows.

        'arrow-parens': 'off', // Несовместимо с prettier
        'object-curly-newline': 'off', // Несовместимо с prettier
        'no-mixed-operators': 'off', // Несовместимо с prettier
        'arrow-body-style': 'off', // Это - не наш стиль?
        'function-paren-newline': 'off', // Несовместимо с prettier
        'no-plusplus': 'off',
        'space-before-function-paren': 0, // Несовместимо с prettier

        'no-param-reassign': 'off', // Это - не наш стиль?
        "radix": "off", // parseInt, parseFloat и radix выключены. Мне это не нравится.

        'prefer-destructuring': 'off',

        'prettier/prettier': ['error'],
    },
};