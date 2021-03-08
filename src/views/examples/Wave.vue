<template>
  <section class="waves-root" v-html="content"></section>
</template>

<script>
import { mapState } from 'vuex'
import { Wave, utils } from 'jparticles'

export default {
  name: 'Wave',
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
      this.$bindEffectHandlebar('.instance.i1', $demo => {
        return new Wave($demo, {
          num: 3,
          lineColor: [
            'rgba(0, 190, 112, .5)',
            'rgba(0, 190, 112, .7)',
            'rgba(0, 190, 112, .9)',
          ],
          lineWidth: [0.5, 0.7, 0.9],
          offsetLeft: [2, 1, 0],
          offsetTop: 0.75,
          crestHeight: [10, 14, 18],
          rippleNum: this.isSmallScreen ? 1 : 2,
          speed: 0.1,
        })
      })
    },
    i2() {
      this.$bindEffectHandlebar('.instance.i2', $demo => {
        const settings = {
          crestHeight: [10, 14, 18],
          speed: 0.1,
        }

        const effect = new Wave(
          $demo,
          utils.merge(
            {
              num: 3,
              lineColor: ['#e53d27', '#42e527', '#27C9E5'],
              lineWidth: [0.7, 0.9, 1],
              offsetTop: 0.65,
              rippleNum: this.isSmallScreen ? 1 : 2,
            },
            settings
          )
        )

        const $voiceBtn = document.querySelector('.instance.i2 .button-voice')

        const handleEvent = function() {
          clearInterval(this.timer)
          this.timer = setInterval(() => {
            const crestHeight = [10, 14, 18].map(item => {
              // 获取随机波动值
              item += utils.randomInRange(20, -20)

              // 处理 (0, 1) 之间的值为整数
              if (item > 0 && item < 1) {
                item = Math.ceil(item)
              }

              return item
            })

            // 控制线条波动
            effect.setOptions({
              crestHeight,
              speed: [0.2, 0.14, 0.1],
            })
          }, 100)

          const handleMouseup = () => {
            clearInterval(this.timer)
            effect.setOptions(settings)
            document.removeEventListener('mouseup', handleMouseup)
            document.removeEventListener('touchend', handleMouseup)
          }
          document.addEventListener('mouseup', handleMouseup)
          document.addEventListener('touchend', handleMouseup)
        }

        $voiceBtn.addEventListener('mousedown', handleEvent)
        $voiceBtn.addEventListener('touchstart', handleEvent)

        return effect
      })
    },
    i3() {
      this.$bindEffectHandlebar('.instance.i3', $demo => {
        return new Wave($demo, {
          num: 1,
          line: false,
          fill: true,
          fillColor: '#27C9E5',
          offsetTop: 0.75,
          crestHeight: 8,
          rippleNum: 3,
          speed: 0.07,
        })
      })
    },
  },
}
</script>

<style scoped lang="scss">
.waves-root {
  ::v-deep {
    .instance.i2 {
      position: relative;
      .button-voice {
        background-color: $lightgray-bg;
        position: absolute;
        left: 30%;
        right: 30%;
        bottom: rem(20);
        &:hover {
          background-color: $btn-default-hover;
        }
      }
    }
  }
}
</style>
