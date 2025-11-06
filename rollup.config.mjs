import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

const banner = `/**
 * Ponjika - Bengali Calendar Converter
 * @version ${pkg.version}
 * @license MIT
 * @author fahimshahrierrasel
 */`;

export default [
  // UMD build (for browsers and Node.js via script tag)
  {
    input: 'src/index.ts',
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
      }),
      terser({
        format: {
          comments: false,
          preamble: banner,
        },
      }),
    ],
    output: {
      file: 'lib/index.js',
      format: 'umd',
      name: 'ponjika',
      esModule: false,
      sourcemap: true,
      banner,
    },
  },
  // ESM build
  {
    input: 'src/index.ts',
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
      }),
    ],
    output: {
      file: 'lib/esm/index.js',
      format: 'esm',
      sourcemap: true,
      banner,
    },
  },
  // CJS build
  {
    input: 'src/index.ts',
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
      }),
    ],
    output: {
      file: 'lib/cjs/index.js',
      format: 'cjs',
      sourcemap: true,
      banner,
    },
  },
  // TypeScript declarations
  {
    input: 'src/index.ts',
    plugins: [dts()],
    output: {
      file: 'lib/index.d.ts',
      format: 'es',
    },
  },
];
