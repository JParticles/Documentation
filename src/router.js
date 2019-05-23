import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/home'),
    },
    {
      path: '/examples',
      redirect: '/examples/particles',
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
          path: 'particles',
          component: () => import('./views/examples/particles'),
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
    // language route
    {
      path: '/:lang',
      name: 'langIndex',
      component: () => import('./views/home'),
    },
    {
      path: '/:lang/examples',
      redirect: '/:lang/examples/particles',
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
          path: 'particles',
          component: () => import('./views/examples/particles'),
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
      name: 404,
      component: () => import('./views/not_found'),
    },
  ],
})
