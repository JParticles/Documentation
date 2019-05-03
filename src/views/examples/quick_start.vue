<template>
  <section class="quick-start-root">
    <h3>quick start</h3>
  </section>
</template>

<script>
import { LS } from '@/fixtures/storage_keys'

export default {
  name: 'QuickStart',
  methods: {
    hideRequiredIcon() {
      localStorage.setItem(LS.READ_QUICK_START, true)
    },
  },
  mounted() {
    this.hideRequiredIcon()
  },
}
</script>

<style scoped lang="scss"></style>
