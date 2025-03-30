import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  verbose: true,
  testRegex: '.*\\.test\\.ts$',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      { useESM: true }
    ]
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transformIgnorePatterns: [
    'node_modules/(?!@types)'
  ],
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
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
  collectCoverageFrom: ['**/*.ts'],
  coverageDirectory: '../coverage/tests'
};

export default config;
