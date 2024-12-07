import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/app/$1", // Ensure paths resolve correctly
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Add setup file if needed
};

export default config;
