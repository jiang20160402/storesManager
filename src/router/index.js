import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// import TodoList from '@/components/TodoList'
import Register from '@/components/Register'

import main from '@/components/main'
import home from '@/components/goodsManage'
import supply from '@/components/supply'
import stock from '@/components/stock'
import count from '@/components/count'
import lose from '@/components/lose'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
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
    children: [{
      path: '',
      component: home,
      meta: []
    },
    {
      path: '/supply',
      component: supply
    },
    {
      path: '/stock',
      component: stock
    },
    {
      path: '/count',
      component: count
    },
    {
      path: '/lose',
      component: lose
    }
    ]
  }
  ]
})
