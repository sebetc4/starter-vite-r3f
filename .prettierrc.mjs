/** @type {import("prettier").Config} */
export default {
    plugins: ['@trivago/prettier-plugin-sort-imports'],
    printWidth: 100,
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
    bracketSameLine: false,
    importOrder: [
        '.*\\.(css|scss)$',
        '^react$',
        '^@?\\w',
        '^(?!@/types)(@/|.)(?!.*.glsl$)',
        '^@/types',
        '.*\\.glsl$',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
}
