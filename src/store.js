import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bootstrap: false,
    system: {},
    member: null
  },
  getters: {
    system (state) {
      return state.system
    },
    bootstrap (state) {
      return state.bootstrap
    }
  },
  mutations: {
    /** 设置全局数据 */
    setSystemAttribute (state, payload) {
      state.system = payload
    },

    /** 设置用户数据 */
    setMemberAttribute (state, payload) {
      state.member = payload
    },

    /** 设置已启动 */
    setBootstrap (state, status) {
      state.bootstrap = status
    }
  },
  actions: {
    setSystem (ctx, payload) {
      ctx.commit('setSystemAttribute', payload)
      console.info(this.state.system)
    },
    bootstrap (ctx) {
      ctx.commit('setBootstrap', true)
    }
  }
})
