import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

// global styles
import '@/assets/styles/build.scss'

// analysis
import '@/utils/analysis'

// global components
Vue.component('x-icon', require('@/components/XIcon').default)
Vue.component('x-link', require('@/components/XLink').default)

// global plugins
Vue.use(require('@/plugins/bind-effect-handlebar').default)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
