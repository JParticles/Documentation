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
