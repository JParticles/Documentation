import Marked from 'marked'
import hljs from './hljs'

const renderer = new Marked.Renderer()

renderer.link = function(href, title, text) {
  return `
    <a href="${href}" ${title ? `title="${title}"` : ''} target="_blank">
      ${text}
    </a>
  `
}

const pReg1 = /^<div/i
const pReg2 = /^<table/i

renderer.paragraph = function(text) {
  if (pReg1.test(text)) {
    return text
  }
  if (pReg2.test(text)) {
    return `<div class="site-table-scroll">${text}</div>`
  }
  return '<p>' + text + '</p>\n'
}

const marked = (content, options = {}) => {
  return Marked(content, {
    sanitize: true,
    sanitizer(content) {
      return content
    },
    renderer: renderer,
    highlight(code, lang) {
      return hljs.highlightAuto(code, lang ? [lang] : null).value
    },
    ...options,
  })
}

export default marked
