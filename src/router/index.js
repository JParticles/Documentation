import Vue from 'vue'
import Router from 'vue-router'
import RouteMounter from '@/components/RouteMounter'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/Home'),
    },
    {
      path: '/examples',
      redirect: '/examples/particle',
      component: RouteMounter,
      children: [
        {
          path: ':doc',
          component: () => import('@/views/examples'),
        },
      ],
    },
    {
      path: '/download',
      redirect: '/examples/quick-start',
    },

    // language routes
    {
      path: '/:lang',
      name: 'langIndex',
      component: () => import('@/views/Home'),
    },
    {
      path: '/:lang/examples',
      redirect: '/:lang/examples/particle',
      component: RouteMounter,
      children: [
        {
          path: ':doc',
          component: () => import('@/views/examples'),
        },
      ],
    },
    {
      path: '/:lang/download',
      redirect: '/:lang/examples/quick-start',
    },

    // 404 route
    {
      path: '*',
      name: 404,
      component: () => import('@/views/NotFound'),
    },
  ],
})
