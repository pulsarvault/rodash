import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [
    "src/**/*.ts",
    "!src/**/*.test.ts",
    "!src/**/__tests__/**",
  ],

  format: ["esm"],
  dts: true,
  clean: true,
});
