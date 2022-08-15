// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/index'
import HeaderTop from '@/components/HeaderTop/HeaderTop'
// 引入swiper的样式文件
import 'swiper/dist/css/swiper.min.css'
import * as api from '@/api'

Vue.config.productionTip = false

// 注冊全局组件
Vue.component(HeaderTop.name, HeaderTop)
// Vue原型对象绑定API接口函数
Vue.prototype.$API = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
