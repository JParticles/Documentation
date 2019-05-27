export const generateLangPath = path => {
  const state = window.$store.state
  return state.routeHasLanguage ? `/${state.routeLanguage}${path}` : path
}

export const getDocPath = name => {
  const lang = window.$store.state.language.languageCode
  return `/languages/${lang}/pages/examples/${name}.md`
}
