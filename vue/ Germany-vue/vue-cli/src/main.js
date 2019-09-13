import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
export const serverBus = new Vue();
Vue.config.productionTip = false;
Vue.use(ElementUI);
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
  render: h => h(App)
}).$mount('#app');
