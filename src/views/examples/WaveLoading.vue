<template>
  <section class="wave-loading-root" v-html="content"></section>
</template>

<script>
import { mapState } from 'vuex'
import { WaveLoading, easing } from 'jparticles'
import { getImageSitePath } from '@/utils/misc'

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
    this.i3()
    this.i4()
  },
  methods: {
    i1() {
      let loading = null

      const createLoading = () => {
        loading = new WaveLoading('.instance.i1 .demo', {
          font: 'normal 900 16px Arial',
          resize: false,
        })

        loading.onProgress(progress => {
          loading.setOptions({
            textColor: progress >= 60 ? '#fff' : '#333',
          })
        })
      }

      createLoading()

      document
        .querySelector('.instance.i1 .reload')
        .addEventListener('click', createLoading)

      document
        .querySelector('.instance.i1 .done')
        .addEventListener('click', () => {
          loading && loading.done()
        })
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
                textColor: '#fff',
              })
            }
          })
          .onFinished(() => {
            setTimeout(() => {
              $mask.style.display = 'none'
              $demo.style.display = 'none'
            }, 50)
          })
      }

      function createImg() {
        const $img = document.createElement('iframe')
        $img.addEventListener('load', () => {
          setTimeout(() => {
            loading.done()
          }, 4000)
        })
        $img.src = 'https://jparticles.js.org'
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
    i3() {
      let loading = null

      function createLoading() {
        loading = new WaveLoading('.instance.i3 .demo', {
          fillColor: '#27C9E5',
          crestHeight: 5,
          crestCount: 3,
          speed: 0.2,
          // 加载进度文本格式为空字符串时，不显示进度文本
          textFormatter: '',
          // 取消边框圆角
          borderRadius: '',
          // 设置遮罩图片，实现遮罩效果（如果希望防止图片闪烁，可提前加载完图片后再创建特效）
          mask: getImageSitePath('github-logo-text.svg'),
        })
      }

      createLoading()

      document
        .querySelector('.instance.i3 .reload')
        .addEventListener('click', createLoading)

      document
        .querySelector('.instance.i3 .done')
        .addEventListener('click', () => {
          loading && loading.done()
        })
    },
    i4() {
      let loading = null

      function createLoading() {
        loading = new WaveLoading('.instance.i4 .demo', {
          num: 2,
          textColor: '#fff',
          textFormatter: '加载中...%d%',
          fillColor: 'rgba(0, 0, 0, 0.15)',
          offsetLeft: [0, 1.5],
          crestHeight: 5,
          crestCount: 2,
          speed: 0.2,
          // 加载时长设置为 10s
          duration: 10000,
          mask: getImageSitePath('chrome-logo.svg'),
          maskMode: 'ghost',
        })
      }

      createLoading()

      document
        .querySelector('.instance.i4 .reload')
        .addEventListener('click', createLoading)

      document
        .querySelector('.instance.i4 .done')
        .addEventListener('click', () => {
          loading && loading.done()
        })
    },
  },
}
</script>

<style scoped lang="scss">
.wave-loading-root {
  ::v-deep {
    .instance {
      &.i1,
      &.i2 {
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
    }

    .instance.i2 {
      .mask,
      .container {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: hidden;
        .img-frame,
        iframe {
          width: 100%;
          height: 100%;
          border: none;
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

    .instance.i3 {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $gray-border;
      padding: rem(100);
      .demo {
        max-width: 80%;
        width: rem(600);
        height: rem(150);
        border: none;
      }
    }

    .instance.i4 {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $gray-border;
      padding: rem(50);
      .demo {
        border: none;
        width: rem(300);
        height: rem(300);
      }
    }
  }
}
</style>
