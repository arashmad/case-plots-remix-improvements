import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  coverageDirectory: "coverage", // Output directory for coverage reports
  coverageReporters: ["text", "lcov"], // Include lcov for coverage tools like Codecov
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/app/$1", // Ensure paths resolve correctly
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Add setup file if needed
};

export default config;
