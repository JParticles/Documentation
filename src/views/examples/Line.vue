<template>
  <section class="line-root" v-html="content"></section>
</template>

<script>
import { Line } from 'jparticles'

export default {
  name: 'Line',
  props: {
    content: String,
  },
  mounted() {
    this.i1()
    this.i2()
  },
  methods: {
    i1() {
      this.$bindEffectHandlebar('.instance.i1', $demo => {
        return new Line($demo)
      })
    },
    i2() {
      this.$bindEffectHandlebar('.instance.i2', $demo => {
        return new Line($demo, {
          reservedLines: 12,
          maxDegree: 70,
          minDegree: 70,
        })
      })
    },
  },
}
</script>

<style scoped lang="scss"></style>
