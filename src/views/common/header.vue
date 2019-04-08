<template>
  <div class="site-header">
    <SmallScreen v-if="isSmallScreen" />
    <NormalScreen />
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
    }
  },
  methods: {
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
    this.addResizeEvent()
  },
  destroyed() {
    this.removeResizeEvent()
  },
}
</script>

<style scoped lang="scss"></style>
