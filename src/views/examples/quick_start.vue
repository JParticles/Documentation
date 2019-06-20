<template>
  <section class="quick-start-root" v-html="content"></section>
</template>

<script>
export default {
  name: 'QuickStart',
  props: {
    content: String,
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
