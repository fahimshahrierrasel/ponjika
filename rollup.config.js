import { terser } from 'rollup-plugin-terser';
import ts from 'rollup-plugin-ts';

export default [
  {
    input: 'src/index.ts',
    plugins: [
      ts({
        hook: {
          outputPath: (path, kind) =>
            kind === 'declaration' ? './lib/index.d.ts' : path,
        },
      }),
      terser(),
    ],
    output: {
      file: `lib/index.js`,
      format: 'umd',
      name: 'ponjika',
      esModule: false,
    },
  },
  {
    input: {
      index: 'src/index.ts',
    },
    output: [
      {
        dir: 'lib/esm',
        format: 'esm',
        preserveModules: true,
      },
      {
        dir: 'lib/cjs',
        format: 'cjs',
        preserveModules: true,
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
