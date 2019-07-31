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

axios.defaults.baseURL = (process.env.NODE_ENV === 'development') ? 'http://172.16.5.95:9000/api/' : 'https://pc.yuantang.iluckin.cn/api/'

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
