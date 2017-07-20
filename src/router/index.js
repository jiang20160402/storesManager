import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// import TodoList from '@/components/TodoList'
import Register from '@/components/Register'

import main from '@/components/main'
import home from '@/components/One'
import two from '@/components/Two'
import three from '@/components/Three'
import four from '@/components/Four'

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
      path: '/',
      name: 'Index',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: '',
          component: home,
          meta: [],
        },
        {
          path: '/orderList',
          component: two,
        },
        {
          path: '/three',
          component: three,
        },
        {
          path: '/four',
          component: four,
        }
      ]
    },
  ]
})
