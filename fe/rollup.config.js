// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {uglify} from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import sass from 'rollup-plugin-sass';
import pkg from 'package';


// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: pkg.main,
  output: {
    file: 'dist/bundle.js',
    format: 'es', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true
  },
  plugins: [
    resolve(), // tells Rollup how to find date-fns in node_modules
    typescript(),
    sass(),
    // commonjs(), // converts date-fns to ES modules
    production && uglify(), // minify, but only in production
    serve('.'),
    livereload('.')
  ]
};