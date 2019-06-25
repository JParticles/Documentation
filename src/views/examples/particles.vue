<template>
  <section class="particles-root" v-html="content"></section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Particles',
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

    this.$createEffect('.instance.i1', $demo => {
      return new JParticles.Particles($demo, settings)
    })

    this.$createEffect('.instance.i2', $demo => {
      return new JParticles.Particles($demo, {
        color: '#25bfff',
        lineShape: 'cube',
        range: 2000,
        proximity: 100,
        parallax: true,
      })
    })

    this.$createEffect('.instance.i3', $demo => {
      return new JParticles.Particles($demo, {
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
