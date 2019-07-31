import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import axios from 'axios'
import 'vant/lib/index.css'
import './registerServiceWorker'

Vue.use(Vant)
Vue.config.productionTip = false

axios.defaults.baseURL = (process.env.NODE_ENV === 'development') ? 'http://192.168.31.233:9000/api/' : 'https://pc.yuantang.iluckin.cn/api/'

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
