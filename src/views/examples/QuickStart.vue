<template>
  <section class="quick-start-root" v-html="content"></section>
</template>

<script>
import { Particle } from 'jparticles'

export default {
  name: 'QuickStart',
  props: {
    content: String,
  },
  mounted() {
    this.$bindEffectHandlebar(
      {
        selector: '.instance',
        handlebar: '.instance-handlebar',
      },
      $demo => {
        return new Particle($demo, {
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
    .instance-handlebar {
      padding-top: rem(4);
      .btn {
        padding: rem(6) rem(8);
        font-size: rem(10);
      }
    }
  }
}
</style>
