// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import store from './store'
import 'styles/reset.css'
// 1像素问题
import 'styles/border.css' // 在webpack上面进行修改后 要重新启动
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

// 300ms点击事件延迟的问题  npm i fastClick --save
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)  //使用轮播图组件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
