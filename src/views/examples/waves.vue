<template>
  <section class="waves-root" v-html="content"></section>
</template>

<script>
export default {
  name: 'Waves',
  props: {
    content: String,
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss"></style>
