import Vue from 'vue';
import App from './App.vue';
import BaiduMap from 'vue-baidu-map';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(BaiduMap, {
  ak: 'ctGSDkx5WWzGsFpv5aWG3cWp9i1GsoMl'
});
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
