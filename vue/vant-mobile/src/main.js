import Vue from 'vue'
import App from './App.vue'
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Cell,
  CellGroup
} from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false

Vue.use(Button).use(Checkbox).use(CheckboxGroup).use(Cell).use(CellGroup)


new Vue({
  render: h => h(App),
}).$mount('#app')