import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json'],
  verbose: true,
  testRegex: '.*\\.test\\.js$',
  transform: { },
  testEnvironment: 'node',
  roots: ['<rootDir>/dist/tests'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
    'interfaces',
    'jestGlobalMocks.js',
    '.module.js',
    'src/main.js',
    '.mock.js',
    'src/database'
  ],
  coverageReporters: ['text', 'html'],
  collectCoverageFrom: ['**/*.js'],
  coverageDirectory: '../coverage/dist/tests'
};

export default config;
