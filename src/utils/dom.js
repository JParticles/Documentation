// 获取元素到页面左边与顶部的距离，与 jQuery().offset() 结果等同
export function offset(elem) {
  const bounding = elem.getBoundingClientRect()
  return {
    left: window.pageXOffset + bounding.left,
    top: window.pageYOffset + bounding.top,
  }
}

export function isWindow(elem) {
  return elem != null && elem === elem.window
}

export function getStyle(elem, prop) {
  const style = getComputedStyle(elem)
  return parseFloat(style[prop])
}

export function getWidth(elem) {
  const clientWidth = getClientWidth(elem)
  const style = getComputedStyle(elem)
  return (
    clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight)
  )
}

export function getClientWidth(elem) {
  if (isWindow(elem) || elem.nodeType === 9) {
    elem = document.documentElement
  }
  return elem.clientWidth
}

export function getClientHeight(elem) {
  if (isWindow(elem) || elem.nodeType === 9) {
    elem = document.documentElement
  }
  return elem.clientHeight
}

export function getScrollHeight(elem) {
  if (isWindow(elem) || elem.nodeType === 9) {
    elem = document.documentElement
  }
  return elem.scrollHeight
}

export function scrollTop(elem, value) {
  let win
  if (isWindow(elem)) {
    win = elem
  } else if (elem.nodeType === 9) {
    win = elem.defaultView
  }

  if (value === undefined) {
    return win ? win.pageYOffset : elem.scrollTop
  }

  if (win) {
    win.scrollTo(0, value)
  } else {
    elem.scrollTop = value
  }
}

// 检查元素是否在可视区内
export function isElementInViewport(elem, ahead = 1) {
  const st = scrollTop(window)
  const ch = getClientHeight(window)
  const elemTop = offset(elem).top
  const elemHeight = elem.offsetHeight / ahead

  return elemTop + elemHeight > st && elemTop < st + ch
}

export function scrollTo(elem = window, to, speed = 0.3) {
  // to 不能小于 0，不能大于最大滚动距离
  to = Math.max(0, Math.min(getScrollHeight(elem) - getClientHeight(elem), to))

  clearInterval(elem.TIMER_OF_SRCOLLTO)
  elem.TIMER_OF_SRCOLLTO = setInterval(function() {
    let st = scrollTop(elem)
    let position = (to - st) * speed

    st += st > to ? Math.floor(position) : Math.ceil(position)

    scrollTop(elem, st)

    if (st < to + 1 && st > to - 1) {
      clearInterval(elem.TIMER_OF_SRCOLLTO)
      scrollTop(elem, to)
    }
  }, 30)
}
