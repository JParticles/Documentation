<template>
  <section class="snow-root" v-html="content"></section>
</template>

<script>
export default {
  name: 'Snow',
  props: {
    content: String,
  },
  mounted() {
    this.$createEffect('.instance', $demo => {
      return new JParticles.Snow($demo)
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
