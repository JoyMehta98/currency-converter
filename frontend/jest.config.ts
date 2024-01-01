export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: "node_modules/ts-jest-mock-import-meta", // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
              options: {
                metaObjectReplacement: {
                  env: { VITE_APP_BASE_URL: "https://test.com" },
                },
              },
            },
          ],
        },
      },
    ],
    // process `*.tsx` files with `ts-jest`
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  moduleDirectories: ["node_modules", "src"],
};
