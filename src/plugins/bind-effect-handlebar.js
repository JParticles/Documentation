import throttle from '@/utils/throttle'
import { isElementInViewport } from '@/utils/dom'
import { utils } from 'jparticles'

const { isString, isPlainObject } = utils
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
    Vue.prototype.$bindEffectHandlebar = (selector, createEffect) => {
      // 假设 selector 是 DOM 元素类型
      let $instance = selector
      let $handlebar

      if (isString(selector)) {
        $instance = document.querySelector($instance)
      } else if (isPlainObject(selector)) {
        $instance = document.querySelector(selector.selector)
        $handlebar = document.querySelector(selector.handlebar)
      }

      if (!$handlebar) {
        $handlebar = $instance.querySelector('.handlebar')
      }

      const $demo = $instance.querySelector('.demo')
      const effect = ($instance.effect = createEffect($demo))

      if ($handlebar) {
        const $open = $handlebar.querySelector('.open')
        const $pause = $handlebar.querySelector('.pause')

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

    Vue.prototype.$bindEffectHandlebar.clear = () => {
      instances.length = 0
    }
  },
}
