<template>
  <section class="particles-root" v-html="content"></section>
</template>

<script>
export default {
  name: 'Particles',
  props: {
    content: String,
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
