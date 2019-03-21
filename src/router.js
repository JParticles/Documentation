import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:lang',
      component: () => import('./views/home'),
    },
    {
      path: '/:lang/examples',
      redirect: '/:lang/examples/intro',
      component: () => import('./views/home'),
      children: [
        {
          path: ':instance',
          component: () => import('./views/home'),
        },
      ],
    },
    {
      path: '/:lang/download',
      redirect: '/:lang/examples/quick_start',
      component: () => import('./views/home'),
    },
    {
      path: '/:lang/changelog',
      component: () => import('./views/home'),
    },
    {
      path: '/404',
      component: () => import('./views/404'),
    },
  ],
})
