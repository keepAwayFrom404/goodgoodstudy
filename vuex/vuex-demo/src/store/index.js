import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const modulesA = {
  state: {
    count: 0
  },
  mutations: {
    add(state, payload) {
      state.count += payload.amount
    }
  },
  actions: {
    increment({commit}) {
      setTimeout(() => {
        commit('add', { amount: 20})
      }, 2000);
    }
  }
}
const modulesB = {
  state: {
    count: 1
  },
  mutations: {
    add(state, payload) {
      state.count += payload.amount
    }
  },
  actions: {
    increment({commit}) {
      setTimeout(() => {
        commit('add', { amount: 20})
      }, 2000);
    }
  }
}
export default new Vuex.Store({
  modules: {
    a: modulesA,
    b: modulesB
  }
})