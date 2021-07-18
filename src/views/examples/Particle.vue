<template>
  <section class="particles-root" v-html="content"></section>
</template>

<script>
import { mapState } from 'vuex'
import { Particle } from 'jparticles'
import { getImageSitePath } from '@/utils/misc'

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
    this.i4()
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
    i4() {
      this.$bindEffectHandlebar('.instance.i4', $demo => {
        return new Particle($demo, {
          range: 0,
          color: ['#fff888', '#f9cd76', '#f7b26e', '#d5d02c'],
          num: 100,
          maxR: 30,
          minR: 30,
          shape: [
            'triangle',
            'star',
            'star:4:0.5',
            'star:30:0.9',
            getImageSitePath('bubble-colorful.png'),
            getImageSitePath('bubble.png'),
          ],
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
