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
    this.i4()
    this.i5()
    this.i6()
  },
  methods: {
    i1() {
      this.$bindEffectHandlebar('.instance.i1', $demo => {
        return new Wave($demo, {
          num: 3,
          line: true,
          lineColor: [
            'rgba(0, 190, 112, 0.5)',
            'rgba(0, 190, 112, 0.7)',
            'rgba(0, 190, 112, 0.9)',
          ],
          lineWidth: [0.5, 0.7, 0.9],
          offsetLeft: [2, 1, 0],
          offsetTop: 0.75,
          crestHeight: [10, 14, 18],
          crestCount: this.isSmallScreen ? 1 : 2,
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
          Object.assign(
            {
              num: 3,
              lineColor: ['#e53d27', '#42e527', '#27C9E5'],
              lineWidth: [0.7, 0.9, 1],
              offsetTop: 0.65,
              crestCount: this.isSmallScreen ? 1 : 2,
            },
            settings
          )
        )

        const $voiceBtn = document.querySelector('.instance.i2 .button-voice')

        const handleEvent = function() {
          clearInterval(this.timer)
          this.timer = setInterval(() => {
            const crestHeight = settings.crestHeight.map(item => {
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
          crestCount: 3,
          speed: 0.07,
        })
      })
    },
    i4() {
      this.$bindEffectHandlebar('.instance.i4', $demo => {
        return new Wave($demo, {
          num: 1,
          line: false,
          fill: true,
          fillColor: '#27C9E5',
          offsetTop: 0.5,
          crestHeight: 5,
          crestCount: 3,
          speed: 0.2,
          // 设置遮罩图片，实现遮罩效果（如果希望防止图片闪烁，可提前加载完图片后再创建特效）
          mask:
            'https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo-text.svg',
        })
      })
    },
    i5() {
      this.$bindEffectHandlebar('.instance.i5', $demo => {
        return new Wave($demo, {
          num: 2,
          fillColor: 'rgba(0, 0, 0, 0.15)',
          offsetTop: 0.46,
          offsetLeft: [0, 1.5],
          crestHeight: 5,
          crestCount: 2,
          fill: true,
          line: false,
          speed: 0.2,
          mask:
            'https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg',
          maskMode: 'ghost',
        })
      })
    },
    i6() {
      const effect = new Wave('.instance.i6 .demo', {
        num: 2,
        line: false,
        fill: true,
        fillColor: 'rgba(0, 0, 0, 0.15)',
        offsetTop: 0.99,
        offsetLeft: [0, 1.5],
        crestHeight: 5,
        crestCount: 2,
        speed: 0.2,
        mask:
          'https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg',
        maskMode: 'ghost',
      })

      function loading(progress) {
        if (progress < 100) {
          progress += 1
          effect.setOptions({ offsetTop: 1 - progress / 100 })
          window.requestAnimationFrame(() => loading(progress))
        }
      }

      document
        .querySelector('.instance.i6 .button-show')
        .addEventListener('click', () => {
          loading(0)
        })
    },
  },
}
</script>

<style scoped lang="scss">
.waves-root {
  ::v-deep {
    .instance {
      &.i2 {
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

      &.i4,
      &.i5,
      &.i6 {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid $gray-border;
        .demo {
          border: none;
        }
      }

      &.i4 {
        .demo {
          max-width: 80%;
          width: rem(620);
          height: rem(400);
        }
      }

      &.i5,
      &.i6 {
        padding: rem(50);
        .demo {
          width: rem(300);
          height: rem(300);
        }
      }
    }
  }
}
</style>
