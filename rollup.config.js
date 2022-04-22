import vue from '@vitejs/plugin-vue'
import postcss from 'rollup-plugin-postcss'; // v4.0.0

export default [
  {
    input: 'src/MyComponent.vue',
    output: {
      format: 'esm',
      file: 'dist/MyComponent.esm.js'
    },
    plugins: [
      vue(),
      postcss()
    ]
  },
]