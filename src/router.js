import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/home'),
    },
    {
      path: '/examples',
      redirect: '/examples/particle',
      component: () => import('./views/examples'),
      children: [
        {
          path: 'intro',
          component: () => import('./views/examples/intro'),
        },
        {
          path: 'quick_start',
          component: () => import('./views/examples/quick_start'),
        },
        {
          path: 'particle',
          component: () => import('./views/examples/particle'),
        },
      ],
    },
    {
      path: '/download',
      redirect: '/examples/quick_start',
    },
    {
      path: '/changelog',
      component: () => import('./views/changelog'),
    },
    // 404 route
    {
      path: '/404',
      component: () => import('./views/not_found'),
    },
    // language route
    {
      path: '/:lang',
      component: () => import('./views/home'),
    },
    {
      path: '/:lang/examples',
      redirect: '/:lang/examples/particle',
      component: () => import('./views/examples'),
      children: [
        {
          path: 'intro',
          component: () => import('./views/examples/intro'),
        },
        {
          path: 'quick_start',
          component: () => import('./views/examples/quick_start'),
        },
        {
          path: 'particle',
          component: () => import('./views/examples/particle'),
        },
      ],
    },
    {
      path: '/:lang/download',
      redirect: '/:lang/examples/quick_start',
    },
    {
      path: '/:lang/changelog',
      component: () => import('./views/changelog'),
    },
    // 404 route
    {
      path: '*',
      redirect: '/404',
    },
  ],
})
