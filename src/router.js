import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Home from '@/views/Home'
import Play from '@/views/Play'
import Create from '@/views/Create'
import Dashboard from '@/views/Dashboard'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/play/:id',
      name: 'play',
      component: Play,
      props: true,
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
    },
    {
      path: '/dashboard/:id',
      name: 'dashboard',
      component: Dashboard,
      props: true,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
})

router.afterEach(() => {
  store.dispatch('setLoading', false)
})

export default router
