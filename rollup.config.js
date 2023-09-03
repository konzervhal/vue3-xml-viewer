import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-import-css';

export default {
  input: 'src/main.js',
  output: [{
      format: 'esm',
      file: 'dist/index.js'
  }],
  plugins:[
    css({minify:true}),
    vue({
      css: false
    }),
    peerDepsExternal(),
    terser()
  ]
};
