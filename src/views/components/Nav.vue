<template>
  <nav class="nav-root">
    <x-link
      v-for="(nav, i) in navBars"
      :key="i"
      :to="nav.href"
      :class="{ 'router-link-exact-active': highlightNav(nav) }"
      :data-name="nav.rawHref"
    >
      {{ nav.name }}
    </x-link>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

const examplesPath = '/examples'

export default {
  name: 'Nav',
  computed: {
    ...mapState(['navBars']),
    isExamplesPath() {
      return this.$route.path.indexOf(examplesPath) !== -1
    },
  },
  methods: {
    highlightNav(nav) {
      return this.isExamplesPath && nav.href.indexOf(examplesPath) !== -1
    },
  },
}
</script>

<style scoped lang="scss"></style>
