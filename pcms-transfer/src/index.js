import GtTransfer from './components/gt-transfer';

const VueComponent = {
  install: function(Vue) {
    Vue.component('gtTransfer', GtTransfer);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueComponent);
}

export default VueComponent;

export { GtTransfer };
