const state = {
  count: 0
};
const getters = {
  doubleCount: state => {
    return state.count * 2;
  },
  stringCount: state => {
    return state.count + 'clicks';
  }
};
const mutations = {
  increment: state => {
    state.count++;
  },
  decrement: state => {
    state.count--;
  }
};
const actions = {
  increment: ({ commit }) => {
    commit('increment');
  },
  decrement: ({ commit }) => {
    commit('decrement');
  },
  asyncIncrement: ({ commit }) => {
    setTimeout(() => {
      commit('increment');
    }, 1000);
  },
  asyncDecrement: ({ commit }) => {
    setTimeout(() => {
      commit('decrement');
    }, 1000);
  }
};
export default {
  state,
  mutations,
  getters,
  actions
};
