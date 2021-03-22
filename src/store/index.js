import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import topStore from './top-store'

Vue.use(Vuex)

const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins,
  modules: {},
  ...topStore,
})

// register store to global for no-state tools use
window.$store = store

window.addEventListener('resize', () => {
  store.commit('updateScreenState')
})

export default store
