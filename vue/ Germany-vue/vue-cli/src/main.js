import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './router';
Vue.use(VueResource);

export const serverBus = new Vue();
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});
Vue.directive('myon', {
  bind(el, binding) {
    if (binding.arg) {
      const fn = binding.value;
      el.addEventListener(binding.arg, fn);
    }
  }
});
Vue.filter('showStrLength', value => {
  return value + ' ' + `(${value.length})`;
});
Vue.mixin({});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
