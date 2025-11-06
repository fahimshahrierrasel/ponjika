import { terser } from 'rollup-plugin-terser';
import ts from 'rollup-plugin-ts';

const banner = `/**
 * Ponjika - Bengali Calendar Converter
 * @version ${require('./package.json').version}
 * @license MIT
 * @author fahimshahrierrasel
 */`;

export default [
  // UMD build (for browsers and Node.js via script tag)
  {
    input: 'src/index.ts',
    plugins: [
      ts({
        hook: {
          outputPath: (path, kind) =>
            kind === 'declaration' ? './lib/index.d.ts' : path,
        },
      }),
      terser({
        format: {
          comments: false,
          preamble: banner,
        },
      }),
    ],
    output: {
      file: `lib/index.js`,
      format: 'umd',
      name: 'ponjika',
      esModule: false,
      sourcemap: true,
      banner,
    },
  },
  // ESM and CJS builds (for bundlers, Node.js, Deno, Bun)
  {
    input: {
      index: 'src/index.ts',
    },
    output: [
      {
        dir: 'lib/esm',
        format: 'esm',
        preserveModules: true,
        sourcemap: true,
        banner,
      },
      {
        dir: 'lib/cjs',
        format: 'cjs',
        preserveModules: true,
        sourcemap: true,
        banner,
      },
    ],
    plugins: [
      ts({
        tsconfig: {
          declaration: false,
        },
      }),
    ],
  },
];
