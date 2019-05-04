<template>
  <div class="menu-root">
    <x-link v-for="menu in menus" :key="menu.name" :to="menu.href">
      {{ menu.name }}
      <i class="site-icon-required" v-if="showRequiredIcon(menu)">
        {{ language.examples.required }}
      </i>
    </x-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { LS } from '@/fixtures/storage_keys'

const quickStartPath = '/examples/quick_start'

function getReadState() {
  return !!localStorage.getItem(LS.READ_QUICK_START)
}

function setReadState() {
  localStorage.setItem(LS.READ_QUICK_START, true)
}

export default {
  name: 'Menu',
  data() {
    return {
      read: getReadState(),
    }
  },
  computed: {
    ...mapState(['menus', 'language']),
  },
  watch: {
    $route() {
      if (this.isQuickStartPath()) {
        setReadState()
        this.read = true
      } else {
        this.read = getReadState()
      }
    },
  },
  methods: {
    isQuickStartPath(path = this.$route.path) {
      return path.indexOf(quickStartPath) !== -1
    },
    showRequiredIcon(menu) {
      return !this.read && this.isQuickStartPath(menu.href)
    },
  },
}
</script>

<style scoped lang="scss"></style>
