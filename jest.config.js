module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/tests/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  }
};