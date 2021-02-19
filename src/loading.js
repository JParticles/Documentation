// eslint-disable-next-line
for (const key in languages) {
  // eslint-disable-next-line
  const lang = languages[key]
  lang.languageFlag = `/i18n/${lang.languageCode}/images/flag.png`
}

const globalConfig = (window.globalConfig = {
  themeColor: '#00be70',
  // eslint-disable-next-line
  languages,
  language: {},
  routeHasLanguage: false,
  routeLanguage: '',
  setCurrentLanguage() {
    let userLanguage = location.hash.substring(2).split('/')[0]
    if (userLanguage === 'zh-cn') {
      userLanguage = 'cn'
    }

    if (globalConfig.languages[userLanguage]) {
      globalConfig.routeHasLanguage = true
      globalConfig.routeLanguage = userLanguage
    } else {
      userLanguage = navigator.language && navigator.language.toLowerCase()
      if (userLanguage === 'zh-cn') userLanguage = 'cn'
    }

    if (!globalConfig.languages[userLanguage]) {
      userLanguage = 'en'
    }

    globalConfig.language = globalConfig.languages[userLanguage]
  },
  setDocumentLanguage() {
    const language = globalConfig.language
    document.title = language.title
    document.getElementsByTagName('html')[0].lang = language.languageCodeOnHtml
  },
})

globalConfig.setCurrentLanguage()
globalConfig.setDocumentLanguage()

const $body = document.getElementsByTagName('body')[0]
const $layer = document.getElementById('loading-layer')
const $container = document.getElementById('loading-container')
const progressText = globalConfig.language.progressText
const loading = new window.JParticles.WaveLoading($container, {
  font: 'normal 900 13px Arial',
  color: globalConfig.themeColor,
  fillColor: globalConfig.themeColor,
  formatter: progressText + '%d%',
  duration: 5000,
  resize: false,
})

loading
  .onProgress(progress => {
    // set white text when the progress more than 60%
    if (progress >= 60) {
      loading.setOptions({
        color: '#fff',
      })
    }
  })
  .onFinished(() => {
    $body.classList.remove('overflow-hidden')
    $layer.classList.add('zoom-out')
  })

function animationendHandler() {
  $layer.removeEventListener('animationend', animationendHandler)
  $body.removeChild($layer)
}

$layer.addEventListener('animationend', animationendHandler)

function loadingDone() {
  window.removeEventListener('load', loadingDone)
  loading.done()
}

window.addEventListener('load', loadingDone)
