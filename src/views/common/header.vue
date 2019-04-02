<template>
  <div class="site-header">
    <SmallScreen v-bind="options" v-if="isSmallScreen" />
    <NormalScreen v-bind="options" />
  </div>
</template>

<script>
import NormalScreen from './header_normal_screen'
import SmallScreen from './header_small_screen'
import { isSmallScreen } from '@/utils/detect'

export default {
  name: 'SiteHeader',
  components: { NormalScreen, SmallScreen },
  data() {
    return {
      isSmallScreen: false,
      options: {
        rootRoute: '',
        languages: [],
        language: window.globalConfig.language,
        navBars: [],
        menus: [],
      },
    }
  },
  methods: {
    setRootRoute() {
      // this.options.rootRoute = `/${this.$store.language.languageCode}`
    },
    setLanguages() {
      const currentLang = this.options.language
      const languages = (this.options.languages = [])
      for (const key in window.globalConfig.languages) {
        const lang = window.globalConfig.languages[key]
        if (lang.languageCode !== currentLang.languageCode) {
          languages.push(lang)
        }
      }
      languages.unshift(this.options.language)
    },
    addResizeEvent() {
      this.resizeHandler = () => {
        this.isSmallScreen = isSmallScreen()
      }
      window.addEventListener('resize', this.resizeHandler)
    },
    removeResizeEvent() {
      window.removeEventListener('resize', this.resizeHandler)
    },
  },
  mounted() {
    this.setLanguages()
    this.addResizeEvent()
  },
  destroyed() {
    this.removeResizeEvent()
  },
}
</script>

<style scoped lang="scss"></style>
