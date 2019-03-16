;(function() {
  function find() {}

  window.globalConfig = {
    themeColor: '#00be70',
    languages: [],
    langCode: 'en',
    isMobile() {
      return document.documentElement.clientWidth <= 768
    },
    setLang(langCode) {
      this.langCode = langCode
      const lang = find(this.languages, langCode)
      document.title = lang.title
      document.getElementsByTagName('html')[0].lang =
        languageField == 'cn' ? 'zh-cn' : languageField
    },
  }

  console.log('sdf')
})()
