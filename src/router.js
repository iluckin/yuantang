import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/credentials/house',
      component: () => import('./views/credentials/House.vue')
    },
    {
      path: '/credentials/store',
      component: () => import('./views/credentials/Store.vue')
    },
    {
      path: '/credentials/park',
      component: () => import('./views/credentials/Park.vue')
    },
    {
      // 会匹配所有路径
      path: '*',
      component: () => import('./views/NotFound.vue')
    }
  ]
})
