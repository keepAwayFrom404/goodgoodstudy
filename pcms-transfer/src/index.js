import Demo from './components/demo';
import GtTransform from './components/gt-transform';

const VueComponent = {
  install: function(Vue) {
    Vue.component('demo', Demo);
    Vue.component('gtTransform', GtTransform);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueComponent);
}

export default VueComponent;

export { Demo, GtTransform };
