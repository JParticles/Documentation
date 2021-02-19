<template>
  <section class="particles-root" v-html="content"></section>
</template>

<script>
import { mapState } from 'vuex'
import { Particle } from 'jparticles'

export default {
  name: 'Particle',
  props: {
    content: String,
  },
  computed: {
    ...mapState(['isSmallScreen']),
  },
  mounted() {
    let settings = {
      proximity: 90,
      range: 100,
    }

    if (this.isSmallScreen) {
      settings.proximity = 30
    }

    this.$bindEffectHandlebar('.instance.i1', $demo => {
      return new Particle($demo, settings)
    })

    this.$bindEffectHandlebar('.instance.i2', $demo => {
      return new Particle($demo, {
        color: '#25bfff',
        lineShape: 'cube',
        range: 2000,
        proximity: 100,
        parallax: true,
      })
    })

    this.$bindEffectHandlebar('.instance.i3', $demo => {
      return new Particle($demo, {
        range: 0,
        num: 18,
        maxR: 20,
        minR: 10,
        maxSpeed: 3,
      })
    })
  },
  methods: {},
}
</script>

<style scoped lang="scss"></style>
