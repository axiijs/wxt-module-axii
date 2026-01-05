# wxt-module-axii

WXT module that configures Vite/ESBuild for Axii JSX and expands WXT imports
auto-scan to include JSX/TSX files.

## Note

Axii can still run inside WXT without this module, but you will miss auto import
support and additional custom configuration. Any configuration that improves the
Axii browser-development DX should live in this module.

## Installation

```bash
pnpm add -D wxt-module-axii
```

## Usage

```ts
import { defineConfig } from "wxt";
import axii from "wxt-module-axii";

export default defineConfig({
  modules: [axii()],
  // Optional module config (currently empty)
  axii: {},
});
```

## What it does

- Sets `esbuild.jsxFactory` to `createElement` and `esbuild.jsxFragment` to
  `Fragment`.
- Ensures WXT auto-import scanning includes `jsx` and `tsx` file patterns.

## Development

```bash
pnpm install
pnpm build
```
