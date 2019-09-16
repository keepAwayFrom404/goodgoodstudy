import Vue from 'vue';
import Vuex from 'vuex';
import Count from './modules/count';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Count
  }
});
