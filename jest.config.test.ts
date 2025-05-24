// jest.config.test.ts

import { createDefaultPreset } from "ts-jest";
import jestConfig from "./jest.config";

describe("jest.config", () => {
  it("should export the correct jest configuration", () => {
    const expectedConfig = {
      testEnvironment: "node",
      transform: createDefaultPreset().transform
    };
    expect(jestConfig).toEqual(expectedConfig);
  });
});