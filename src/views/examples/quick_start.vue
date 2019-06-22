<template>
  <section class="quick-start-root" v-html="content"></section>
</template>

<script>
import { forEach } from '../../utils'

export default {
  name: 'QuickStart',
  props: {
    content: String,
  },
  mounted() {
    const $instance = document.querySelector('.instance .demo')
    const effect = new JParticles.Particles($instance, {
      distance: 60,
      num: 30,
    })

    const $ctrls = document.querySelectorAll('.instance-ctrls')
    forEach($ctrls, $ctrl => {
      $ctrl.querySelector('.open').addEventListener('click', () => {
        effect.open()
      })
      $ctrl.querySelector('.pause').addEventListener('click', () => {
        effect.pause()
      })
    })
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
