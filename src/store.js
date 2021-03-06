import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    rooms: Cookies.getJSON('rooms') || {},
  },
  getters: {
    rooms: state => state.rooms,
    loading: state => state.loading,
  },
  mutations: {
    SAVE_ROOM(state, { id, password }) {
      state.rooms[id] = password
      Cookies.set('rooms', state.rooms, { expires: 1 })
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
  },
  actions: {
    saveRoom(context, { id, password }) {
      context.commit('SAVE_ROOM', { id, password })
    },
    setLoading(context, loading) {
      context.commit('SET_LOADING', loading)
    },
  },
})
