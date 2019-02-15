// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {uglify} from 'rollup-plugin-uglify';
import ts from 'rollup-plugin-typescript';
import typescript from 'typescript';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import sass from 'rollup-plugin-sass';

const pkg = require('./package.json');
const production = !process.env.ROLLUP_WATCH;

export default {
  input: pkg.main,
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    resolve(),
    ts({typescript}),
    sass(),
    commonjs(), // converts date-fns to ES modules
    // production && uglify(),
    serve('.'),
    livereload('.')
  ]
};