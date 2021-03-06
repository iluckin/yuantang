import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import axios from 'axios'
import 'vant/lib/index.css'
import './registerServiceWorker'

Vue.use(Vant)
Vue.config.productionTip = true
Vue.prototype.$axios = axios.create({
  baseURL: Vue.config.productionTip ? 'https://pc.yuantang.iluckin.cn/api/' : 'http://172.16.5.67:9000/api/',
  headers: { 'X-AUTH-ID': 'Nice2019' }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
