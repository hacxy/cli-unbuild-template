import { defineBuildConfig } from 'unbuild';

const enableOut = process.argv.includes('--out');

export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  declaration: false,
  sourcemap: enableOut,
  rollup: { esbuild: { target: 'node18', minify: true } },
});
