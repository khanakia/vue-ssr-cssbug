// https://vuejs.org/guide/scaling-up/ssr.html#rendering-an-app

import { createSSRApp } from 'vue'
import { renderToString, ssrRenderStyle } from 'vue/server-renderer'

import MyComponent from './dist/MyComponent.esm.js' // Dist dir copied from vue-rollup-1

const app = createSSRApp({
  template: `<MyComponent />`,
  components: {
    MyComponent
  }
})

renderToString(app).then((html) => {
  console.log(html)
})
