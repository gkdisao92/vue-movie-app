import { createApp } from 'vue'
import App from './App.vue'
// 폴더에서 index.js 파일의 이름은 생략 가능하다.
// import router from './routes/index.js'
import router from './routes'
// import store from './store/index.js'
import store from './store'
// router 나 store도 하나의 플러그인이다.
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router) // $route $router
  .use(store)  // $store
  .use(loadImage) // $loadImage
  .mount('#app')