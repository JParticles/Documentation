<template>
  <section class="snow-root" v-html="content"></section>
</template>

<script>
export default {
  name: 'Snow',
  props: {
    content: String,
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss"></style>
