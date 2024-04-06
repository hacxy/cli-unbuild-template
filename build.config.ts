import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index"],
  clean: true,

  // Generates .d.ts declaration file
  declaration: false,

  sourcemap: false,
  // Change outDir, default is 'dist'
  outDir: "dist",

  rollup: {
    inlineDependencies: true,
    esbuild: {
      target: "node18",
      minify: true,
    },
  },
  alias: {
    // we can always use non-transpiled code since we support node 18+
    prompts: "prompts/lib/index.js",
  },
});
