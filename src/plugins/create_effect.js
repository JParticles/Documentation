import throttle from '@/utils/throttle'
import { isElementInViewport } from '@/utils/dom'

const { isString, isPlainObject } = JParticles.utils
const instances = []

const handleEvent = throttle(() => {
  instances.forEach($instance => {
    if (!$instance.clickToPause && isElementInViewport($instance)) {
      $instance.effect.open()
    } else {
      $instance.effect.pause()
    }
  })
}, 200)

window.addEventListener('resize', handleEvent)
window.addEventListener('scroll', handleEvent)

export default {
  install(Vue) {
    Vue.prototype.$createEffect = (selector, handler) => {
      // 假设 selector 是 DOM 元素类型
      let $instance = selector
      let $ctrls

      if (isString(selector)) {
        $instance = document.querySelector($instance)
      } else if (isPlainObject(selector)) {
        $instance = document.querySelector(selector.selector)
        $ctrls = document.querySelector(selector.ctrls)
      }
      if (!$ctrls) {
        $ctrls = $instance.querySelector('.ctrls')
      }

      const $demo = $instance.querySelector('.demo')
      const effect = ($instance.effect = handler($demo))

      if ($ctrls) {
        const $open = $ctrls.querySelector('.open')
        const $pause = $ctrls.querySelector('.pause')

        $open.addEventListener('click', () => {
          $instance.clickToPause = false
          effect.open()
        })

        $pause.addEventListener('click', () => {
          $instance.clickToPause = true
          effect.pause()
        })
      }

      instances.push($instance)
    }

    Vue.prototype.$createEffect.clear = () => {
      instances.length = 0
    }
  },
}
