module.exports = {
  moduleNameMapper: {
    '.*vue-disqus.*': '<rootDir>/test/mocks/fileMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf)$':
      '<rootDir>/test/mocks/fileMock.js',
    '.*lqip$': '<rootDir>/test/mocks/fileMock.js',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ]
}
