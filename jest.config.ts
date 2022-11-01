import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  setupFiles: ["dotenv/config"],
  projects: ["<rootDir>"],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/test/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],
  testPathIgnorePatterns: [
    "/(?:production_)?node_modules/",
    ".d.ts$",
    "<rootDir>/test/fixtures",
    "<rootDir>/test/helpers",
    "__mocks__",
  ],
  transform: {
    "^.+\\.[jt]sx?$": "ts-jest",
  },
  moduleNameMapper: {
    '^@helpers/methods$': '<rootDir>/helpers/methods',
    '^src/(.*)$': '<rootDir>/$1',
  },

  reporters: [
      "default",
      "./helpers/reporter",
  ],

};


export default config;

