<template>
  <section class="intro-root" v-html="content"></section>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    content: String,
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss"></style>
