import Vue from 'vue';
import Vuex from 'vuex';
import portfolio from './modules/portfolio';
import stocks from './modules/stocks';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    funds: 10000,
  },
  mutations: {
    addFunds: (state, payload) => {
      state.funds += payload;
    },
    reduceFunds: (state, payload) => {
      state.funds -= payload;
    },
  },
  actions: {},
  modules: {
    portfolio,
    stocks,
  },
});
