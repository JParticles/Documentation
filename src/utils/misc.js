export function forEach(list, fn) {
  Array.prototype.forEach.call(list, fn)
}

export function startCaseWithoutBlank(str) {
  str = str
    .replace(/[^a-z]/gi, ' ')
    .replace(/ +/g, ' ')
    .trim()

  const arr = str.split(' ').map(item => {
    const code = item.charCodeAt(0)
    if (97 <= code && code <= 122) {
      item = item[0].toUpperCase() + item.substring(1)
    }
    return item
  })

  return arr.join('')
}

export function getImageSitePath(name) {
  const res = require(`@/assets/images/${name}`)
  return location.origin + res
}
