import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'src/index.js',
  output: {
    format: 'iife',
    file: 'public/cb-canyon.js'
  },
  plugins: [
    resolve(),
    commonjs(),
    livereload()
  ]
}
