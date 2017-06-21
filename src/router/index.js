import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Store from '@/components/Store'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/',
      name: 'Index',
      component: Login
    }
  ]
})
