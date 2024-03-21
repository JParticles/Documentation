<template>
  <section class="snow-root" v-html="content"></section>
</template>

<script>
import { Snow } from 'jparticles'
import { getImageSitePath } from '@/utils/misc'

export default {
  name: 'Snow',
  props: {
    content: String,
  },
  mounted() {
    this.i1()
    this.i2()
    this.i3()
    this.i4()
  },
  methods: {
    i1() {
      this.$bindEffectHandlebar('.instance.i1', $demo => {
        return new Snow($demo)
      })
    },
    i2() {
      this.$bindEffectHandlebar('.instance.i2', $demo => {
        return new Snow($demo, {
          maxR: 10,
          minR: 10,
          maxSpeed: 0.3,
          minSpeed: 0.1,
          swing: false,
          shape: [
            'triangle',
            'star',
            'star:4:0.5',
            getImageSitePath('gift.png'),
          ],
        })
      })
    },
    i3() {
      this.$bindEffectHandlebar('.instance.i3', $demo => {
        const effect = new Snow($demo, {
          num: 2,
          maxR: 20,
          minR: 10,
          maxSpeed: 0.3,
          minSpeed: 0.1,
          shape: [
            'star',
            getImageSitePath('gift.png'),
            getImageSitePath('smiling-face.gif'),
          ],
          spin: true,
        })
        return effect
      })
    },
    i4() {
      this.$bindEffectHandlebar('.instance.i4', $demo => {
        const fallAgain = document.querySelector('.fall-again')
        const effect = new Snow($demo, {
          num: 2,
          maxR: 10,
          minR: 10,
          maxSpeed: 0.3,
          minSpeed: 0.3,
          swing: false,
          shape: getImageSitePath('gift.png'),
          duration: 3000,
        })

        fallAgain.addEventListener('click', () => {
          effect.fallAgain()
        })

        return effect
      })
    },
  },
}
</script>

<style scoped lang="scss">
.snow-root {
  ::v-deep {
    .instance {
      background-color: #333;
      .demo {
        width: 100%;
        height: rem(550);
        background: globalImages('merry-christmas.jpg') 0 0 no-repeat;
        background-size: 100% 100%;
        border: none;
      }
    }
  }
}
</style>
