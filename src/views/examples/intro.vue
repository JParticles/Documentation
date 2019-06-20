<template>
  <section class="intro-root" v-html="content"></section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Intro',
  props: {
    content: String,
  },
  computed: {
    ...mapState(['language', 'themeColor']),
  },
  methods: {},
  mounted() {
    console.log('in Intro Component')
  },
}
</script>

<style scoped lang="scss"></style>
