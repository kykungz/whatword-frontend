import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admins: [],
  },
  getters: {
    admins: state => state.admins,
  },
  mutations: {
    PUSH_ADMIN(state, { id, password }) {
      state.admins.push({ id, password })
    },
  },
  actions: {
    pushAdmin(context, { id, password }) {
      context.commit('PUSH_ADMIN', { id, password })
    },
  },
})
