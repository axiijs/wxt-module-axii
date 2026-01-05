import "wxt";
import { addViteConfig, defineWxtModule } from "wxt/modules";

interface AxiiModuleOptions {}

export default defineWxtModule<AxiiModuleOptions>({
  name: "wxt-module-axii",
  configKey: "axii",
  setup(wxt, _options) {
    addViteConfig(wxt, () => ({
      esbuild: {
        jsxFactory: "createElement",
        jsxFragment: "Fragment",
      },
    }));

    wxt.hook("config:resolved", (wxt) => {
      // In older versions of WXT, `wxt.config.imports` could be false
      if (!wxt.config.imports) return;

      wxt.config.imports.dirsScanOptions ??= {};
      wxt.config.imports.dirsScanOptions.filePatterns = [
        // Default plus JSX/TSX
        "*.{ts,js,mjs,cjs,mts,cts,jsx,tsx}",
      ];
    });
  },
});
