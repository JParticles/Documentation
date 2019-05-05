/**
 * 函数节流
 * @param  {Function}   handler            执行函数
 * @param  {Number}     delay              延迟时间，可选，值 >= 0
 * @param  {Number}     forceInterval      强制执行时间间隔，可选，值 >= 0
 * @return {Function}   wrapper function
 */
export default function throttle(handler, delay, forceInterval) {
  if (!delay) {
    return handler
  }

  let startTime
  let timer

  const throttled = function(...arg) {
    clearTimeout(timer)

    if (forceInterval && forceInterval > delay) {
      const curTime = new Date()
      if (!startTime) {
        startTime = curTime
      }

      if (curTime - startTime >= forceInterval) {
        handler.call(this, ...arg)
        startTime = new Date()
        return
      }
    }

    timer = setTimeout(() => {
      handler.call(this, ...arg)
    }, delay)
  }

  throttled.cancel = function() {
    clearTimeout(timer)
    startTime = timer = null
  }

  return throttled
}
