import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/home'),
    },
    {
      path: '/examples',
      redirect: '/examples/particles',
      component: () => import('@/views/@common/mounter'),
      children: [
        {
          path: ':doc',
          component: () => import('@/views/examples'),
        },
      ],
    },
    {
      path: '/download',
      redirect: '/examples/quick_start',
    },
    // language routes
    {
      path: '/:lang',
      name: 'langIndex',
      component: () => import('@/views/home'),
    },
    {
      path: '/:lang/examples',
      redirect: '/:lang/examples/particles',
      component: () => import('@/views/@common/mounter'),
      children: [
        {
          path: ':doc',
          component: () => import('@/views/examples'),
        },
      ],
    },
    {
      path: '/:lang/download',
      redirect: '/:lang/examples/quick_start',
    },
    // 404 route
    {
      path: '*',
      name: 404,
      component: () => import('@/views/not_found'),
    },
  ],
})
