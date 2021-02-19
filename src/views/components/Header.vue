<template>
  <div class="site-header">
    <SmallScreen v-if="isSmallScreen" />
    <NormalScreen v-else />
  </div>
</template>

<script>
import NormalScreen from './HeaderNormal'
import SmallScreen from './HeaderSmall'
import { mapState } from 'vuex'

export default {
  name: 'SiteHeader',
  components: { NormalScreen, SmallScreen },
  computed: mapState(['isSmallScreen']),
}
</script>

<style scoped lang="scss"></style>
