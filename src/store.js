import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    admins: [],
  },
  getters: {
    admins: state => state.admins,
    loading: state => state.loading,
  },
  mutations: {
    PUSH_ADMIN(state, { id, password }) {
      state.admins.push({ id, password })
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
  },
  actions: {
    pushAdmin(context, { id, password }) {
      context.commit('PUSH_ADMIN', { id, password })
    },
    setLoading(context, loading) {
      context.commit('SET_LOADING', loading)
    },
  },
})
