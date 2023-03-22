module.exports = {
    displayName: 'app',
    preset: '../../jest.preset.js',
    transform: {
        '^.+.vue$': '@vue/vue3-jest',
        '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+.tsx?$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
    coverageDirectory: '../../coverage/packages/app',
    snapshotSerializers: ['jest-serializer-vue'],
    globals: {
        'ts-jest': {
            tsconfig: 'packages/app/tsconfig.spec.json'
        },
        'vue-jest': {
            tsConfig: 'packages/app/tsconfig.spec.json'
        }
    }
}
