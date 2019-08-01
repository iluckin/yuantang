import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bootstrap: false,
    carouselImages: [],
    notifications: '',
    navBars: [],
    member: {}
  },
  getters: {
    carouselImages (state) {
      return state.carouselImages
    },
    notifications (state) {
      return state.notifications
    },
    navBars (state) {
      return state.navBars
    },
    bootstrap (state) {
      return state.bootstrap
    }
  },
  mutations: {
    /** 设置轮播图 */
    carouselImages (state, images) {
      images.map(item => {
        state.carouselImages.push(item)
      })
    },
    /** 设置轮播图 */
    navBars (state, bars) {
      bars.map(item => {
        state.navBars.push(item)
      })
    },
    /** 设置首页通知 */
    notifications (state, notice) {
      state.notifications = notice
    },
    bootstrap (state, status = true) {
      state.bootstrap = status
    }
  },
  actions: {
    carouselImages (ctx, payload) {
      ctx.commit('carouselImages', payload)
    },
    notifications (ctx, notice) {
      ctx.commit('notifications', notice)
    },
    navBars (ctx, bars) {
      ctx.commit('navBars', bars)
    },
    bootstrap (ctx, status = true) {
      ctx.commit('bootstrap', status)
    }
  }
})
