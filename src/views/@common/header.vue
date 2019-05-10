<template>
  <div class="site-header">
    <SmallScreen v-if="isSmallScreen" />
    <NormalScreen v-else />
  </div>
</template>

<script>
import NormalScreen from './header_normal'
import SmallScreen from './header_small'
import { mapState } from 'vuex'

export default {
  name: 'SiteHeader',
  components: { NormalScreen, SmallScreen },
  computed: mapState(['isSmallScreen']),
}
</script>

<style scoped lang="scss"></style>
