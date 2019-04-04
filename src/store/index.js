import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

const topState = {
  state: {
    ...window.globalConfig,
  },
  actions: {},
  mutations: {
    switchLanguage(state, langCode) {
      console.log('state: ', state)
      console.log('langCode: ', langCode)
      state.routeHasLanguage = true
      state.routeLanguage = langCode
      window.globalConfig.language = state.language = state.languages[langCode]
      state.setDocumentLanguage()
    },
  },
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins,
  modules: {},
  ...topState,
})
