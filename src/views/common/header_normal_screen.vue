<template>
  <div class="site-header-normal">
    <div class="logo">
      <x-link :to="rootRoute">JParticles</x-link>
    </div>
    <div class="right">
      <nav class="nav">
        <x-link v-for="(nav, i) in navBars" :key="i" :to="nav.link">
          {{ nav.name }}
        </x-link>
        <div class="sliding-block"></div>
      </nav>
      <Language />
    </div>
  </div>
</template>

<script>
import Language from './language'
export default {
  name: 'SiteHeaderNormal',
  components: { Language },
  props: {
    rootRoute: { type: String },
    navBars: { type: Array },
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss">
$header-shadow: #e8e8e8;

.site-header-normal {
}
</style>
