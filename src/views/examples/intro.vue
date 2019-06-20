<template>
  <section class="intro-root" v-html="content"></section>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    content: String,
  },
  methods: {},
  mounted() {
    console.log('in Intro Component')
  },
}
</script>

<style scoped lang="scss"></style>
