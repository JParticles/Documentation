import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store/index'
import '@/styles/build.scss'
import 'jparticles'
import '@/utils/statistics'
import './jparticles_polyfill'

import Icon from '@/components/x_icon'
import Link from '@/components/x_link'

Vue.component('x-icon', Icon)
Vue.component('x-link', Link)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
