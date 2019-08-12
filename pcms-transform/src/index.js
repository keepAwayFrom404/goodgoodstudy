import Demo from './components/demo'
import Transform from './components/transform'
import GtTransform from './components/gt-transform'

const VueComponent = {
  install: function(Vue) {
    Vue.component('demo', Demo)
    Vue.component('transform', Transform)
    Vue.component('gtTransform', GtTransform)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueComponent)
}

export default VueComponent

export {
  Demo,
  Transform,
  GtTransform
}