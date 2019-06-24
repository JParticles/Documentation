<template>
  <section class="quick-start-root" v-html="content"></section>
</template>

<script>
export default {
  name: 'QuickStart',
  props: {
    content: String,
  },
  mounted() {
    this.$createEffect(
      {
        selector: '.instance',
        ctrls: '.instance-ctrls',
      },
      $demo => {
        return new JParticles.Particles($demo, {
          distance: 60,
          num: 30,
        })
      }
    )
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.quick-start-root {
  ::v-deep {
    .instance {
      .demo {
        max-width: rem(400);
        height: rem(250);
      }
    }
    .instance-ctrls {
      padding-top: rem(4);
      .btn {
        padding: rem(6) rem(8);
        font-size: rem(10);
      }
    }
  }
}
</style>
