<template>
  <section class="wave-loading-root" v-html="content"></section>
</template>

<script>
import { mapState } from 'vuex'
import { WaveLoading, easing } from 'jparticles'

Object.assign(easing, {
  easeOutBounce: function(x, t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
    }
  },
})

const imgUrl = 'https://barrior.github.io/storage/love.jpg'

export default {
  name: 'WaveLoading',
  props: {
    content: String,
  },
  computed: {
    ...mapState(['language']),
  },
  mounted() {
    this.i1()
    this.i2()
  },
  methods: {
    i1() {
      let loading = null

      const createLoading = () => {
        loading = new WaveLoading('.instance.i1 .demo', {
          font: 'normal 900 16px Arial',
          smallFont: 'normal 900 14px Arial',
          resize: false,
        })

        loading.onProgress(progress => {
          loading.setOptions({
            color: progress >= 60 ? '#fff' : '#333',
          })
          return this.language.progressText + Math.ceil(progress) + '%'
        })
      }

      createLoading()

      document
        .querySelector('.instance.i1 .done')
        .addEventListener('click', () => {
          loading && loading.done()
        })

      document
        .querySelector('.instance.i1 .reload')
        .addEventListener('click', createLoading)
    },
    i2() {
      const $instance = document.querySelector('.instance.i2')
      const $demo = $instance.querySelector('.demo')
      const $mask = $instance.querySelector('.mask')
      const $imgFrame = $instance.querySelector('.img-frame')
      let loading = null

      const createLoading = () => {
        loading = new WaveLoading($demo, {
          font: 'normal 900 16px Arial',
          easing: 'easeOutBounce',
          resize: false,
        })

        loading
          .onProgress(progress => {
            if (progress >= 60) {
              loading.setOptions({
                color: '#fff',
              })
            }
            return this.language.progressText + Math.ceil(progress) + '%'
          })
          .onFinished(() => {
            setTimeout(() => {
              $mask.style.display = 'none'
              $demo.style.display = 'none'
            }, 50)
          })
      }

      function createImg() {
        const $img = document.createElement('img')
        $img.addEventListener('load', () => loading.done())
        $img.src = imgUrl
        $imgFrame.appendChild($img)
      }

      $demo.addEventListener('click', () => {
        createLoading()
        createImg()
      })

      $instance.querySelector('.reload').addEventListener('click', () => {
        $imgFrame.innerHTML = ''
        $mask.removeAttribute('style')
        $demo.removeAttribute('style')
        $demo.click()
      })
    },
  },
}
</script>

<style scoped lang="scss">
.wave-loading-root {
  ::v-deep {
    [class~='instance'] {
      height: rem(440);
      border: 1px solid $gray-border;
      .demo {
        width: 140px !important;
        height: 140px !important;
        margin: -70px 0 0 -70px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
      }
    }
    .instance.i2 {
      .mask,
      .container {
        padding: 0 rem(20);
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: auto;
        .img-frame {
          display: inline-block;
          padding: rem(20);
          border: 1px solid $gray-border;
          box-shadow: 0 0 rem(13) 0 $gray-border;
        }
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      .mask {
        background-color: #fff;
        z-index: 2;
      }
      .demo {
        line-height: 140px;
        text-align: center;
        z-index: 8;
        cursor: pointer;
      }
    }
  }
}
</style>
