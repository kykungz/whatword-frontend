import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Play from '@/components/Play'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/play/:id',
      name: 'Play',
      component: Play
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    }
  ]
})
