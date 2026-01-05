import { defineConfig } from "tsdown";

const entry = {
  index: "./main.ts",
};

export default defineConfig([
  {
    entry,
  },
  {
    entry,
    format: "cjs",
  },
]);
