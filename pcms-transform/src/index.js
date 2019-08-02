import Demo from './components/demo'

const VueComponent = {
  install: function (Vue) {
    Vue.component('demo', Demo)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueComponent)
}

export default VueComponent

export {
  Demo
}
