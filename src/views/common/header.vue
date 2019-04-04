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
        navBars: [],
        menus: [],
      },
    }
  },
  computed: {
    rootRoute() {
      return `/${this.$store.state.language.languageCode}`
    },
  },
  watch: {
    $route() {
      this.setOptions()
    },
  },
  methods: {
    setOptions() {
      this.options.rootRoute = this.rootRoute
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
    this.setOptions()
    this.addResizeEvent()
  },
  destroyed() {
    this.removeResizeEvent()
  },
}
</script>

<style scoped lang="scss"></style>
