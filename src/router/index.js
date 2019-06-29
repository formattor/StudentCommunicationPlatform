import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
import Register from '@/page/Register'
import Stuhome from '@/page/Student/Stuhome'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Login},
    {path: '/register',component: Register},
    {path: '/Stuhome',component: Stuhome}
  ]
})
