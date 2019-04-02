import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import language from './language'

Vue.use(Vuex)

const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins,
  modules: {
    language,
  },
  state: {},
})
