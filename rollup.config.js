import terser from '@rollup/plugin-terser';
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-import-css';

export default {
  input: 'src/main.js',
  output: {
      format: 'esm',
      file: 'dist/index.js'
  },
  plugins:[
    css({minify:true}),
    vue({
      css: false
    }),
    terser()
  ]
};
