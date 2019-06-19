import Vue from 'vue'
import Router from 'vue-router'
import TodoApp from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todoApp',
      component: TodoApp
    }
  ]
})
