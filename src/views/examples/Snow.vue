<template>
  <section class="snow-root" v-html="content"></section>
</template>

<script>
import { Snow } from 'jparticles'

export default {
  name: 'Snow',
  props: {
    content: String,
  },
  mounted() {
    this.$bindEffectHandlebar('.instance', $demo => {
      return new Snow($demo)
    })
  },
  methods: {},
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
        background: globalImages('merry_christmas.jpg') 0 0 no-repeat;
        background-size: 100% 100%;
        border: none;
      }
    }
  }
}
</style>
