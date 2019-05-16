export const generateLangPath = path => {
  const state = window.$store.state
  return state.routeHasLanguage ? `/${state.routeLanguage}${path}` : path
}
