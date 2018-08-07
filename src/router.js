import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Play from '@/views/Play'
import Create from '@/views/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/play/:id',
      name: 'Play',
      component: Play,
      props: true,
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
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
