import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
  state: {
    input: '# None',
    file: {}
  },

  getters: {
    input(state) {
      return state.input;
    },
    file(state) {
      return state.file
    },
  },

  mutations: {
    setValues(state, input) {
      state.input = '# None';
      state.input = input;
    },
    setFile(state, file) {
      state.file = {}
      state.file = file
    },
  },

  actions: {
    setValues(context, input) {
      context.commit('setValues', input)
    },
    setFile(context, file) {
      context.commit('setFile', file)
    }
  }
})
