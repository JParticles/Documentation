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
    this.i1()
    this.i2()
    this.i3()
  },
  methods: {
    i1() {
      const settings = {
        proximity: 90,
        range: 100,
      }

      if (this.isSmallScreen) {
        settings.proximity = 30
      }

      this.$bindEffectHandlebar('.instance.i1', $demo => {
        return new Particle($demo, settings)
      })
    },
    i2() {
      this.$bindEffectHandlebar('.instance.i2', $demo => {
        return new Particle($demo, {
          color: '#25bfff',
          lineShape: 'cube',
          range: 2000,
          proximity: 100,
          parallax: true,
        })
      })
    },
    i3() {
      this.$bindEffectHandlebar('.instance.i3', $demo => {
        return new Particle($demo, {
          // range 等于 0，粒子之间不连线
          range: 0,
          num: 0.1,
          minSpeed: 0.01,
          maxSpeed: 0.05,
          minR: 0.2,
          maxR: 1.2,
        })
      })
    },
  },
}
</script>

<style scoped lang="scss">
.particles-root {
  ::v-deep {
    .i3 {
      .demo {
        background: linear-gradient(0deg, #181269, #050413);
      }
    }
  }
}
</style>
