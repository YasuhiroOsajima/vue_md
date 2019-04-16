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
  },
  mutations: {
    setValues(state, input) {
      state.input = '# None';
      state.input = input;
    },
  },
  actions: {
 
  }
})
