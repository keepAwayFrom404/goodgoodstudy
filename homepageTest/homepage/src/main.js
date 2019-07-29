import Vue from 'vue'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueFullPage)
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
}).$mount('#app')