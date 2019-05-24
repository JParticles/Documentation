import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

// site styles
import '@/styles/build.scss'

// analysis
import '@/utils/analysis'

import 'jparticles'
import '@/utils/jparticles_polyfill'

// global components
Vue.component('x-icon', require('@/components/x_icon').default)
Vue.component('x-link', require('@/components/x_link').default)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
