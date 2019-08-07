import Vue from 'vue/dist/vue.js'
import vuePcms from 'vue-pcms'
import './common.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'

// node脚本替换路径
import C from '@/components/transform'
Vue.component('transform', C)

Vue.config.productionTip = false
Vue.use(vuePcms, {
  defaultDataSource: 'mock'
})
Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: () => {
        return '/config'
      }
    },
    {
      path: '/config/:pkgInfo?',
      component: () => import('./config-page.vue')
    },
    {
      path: '/preview',
      component: () => import('./preview-page.vue')
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h('router-view')
})
