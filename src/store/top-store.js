import { navs, menus } from '@/constants/navigators'
import { isSmallScreen } from '@/utils/detect'
import { utils } from 'jparticles'

const { merge, isPlainObject } = utils

function generateMenus(config) {
  return merge([], menus).map((item, i) => {
    if (!/^https?/i.test(item.href) && config.routeHasLanguage) {
      // use language route instead of raw route
      item.rawHref = item.href
      item.href = `/${config.routeLanguage}${item.href}`
    }

    // match display language
    item.name = config.language.examples.menu[i]

    return item
  })
}

function generateNavBars(config) {
  return merge([], navs).map((item, i) => {
    if (!/^https?/i.test(item.href) && config.routeHasLanguage) {
      // use language route instead of raw route
      item.rawHref = item.href
      item.href = `/${config.routeLanguage}${item.href}`
    }

    // match display language
    const lang = config.language.header.common[i]
    if (isPlainObject(lang)) {
      Object.assign(item, lang)
    } else {
      item.name = lang
    }

    return item
  })
}

function getRootRoute(config) {
  return config.routeHasLanguage ? `/${config.routeLanguage}` : '/'
}

// split with loading.js
function setDocumentLanguage(language) {
  document.title = language.title
  document.getElementsByTagName('html')[0].lang = language.languageCodeOnHtml
}

export default {
  state: {
    ...window.globalConfig,
    rootRoute: getRootRoute(window.globalConfig),
    menus: generateMenus(window.globalConfig),
    navBars: generateNavBars(window.globalConfig),
    isSmallScreen: isSmallScreen(),
  },
  actions: {},
  mutations: {
    updateScreenState(state) {
      state.isSmallScreen = isSmallScreen()
    },
    switchLanguage(state, langCode) {
      Object.assign(state, {
        routeHasLanguage: true,
        routeLanguage: langCode,
        language: state.languages[langCode],
      })

      Object.assign(state, {
        rootRoute: getRootRoute(state),
        menus: generateMenus(state),
        navBars: generateNavBars(state),
      })

      setDocumentLanguage(state.language)
    },
  },
}
