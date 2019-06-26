import Marked from 'marked'
import hljs from './hljs'

const renderer = new Marked.Renderer()

const outerLinkReg = /^(https?|\/\/)/i
renderer.link = function(href, title, text) {
  href = outerLinkReg.test(href) ? href : `#${href}`
  return `
    <a href="${href}" ${title ? `title="${title}"` : ''} target="_blank">
      ${text}
    </a>
  `
}

let headerIndex = 0
renderer.heading = function(text, level) {
  headerIndex++
  return `<h${level} id="H${headerIndex}">${text}</h${level}>\n`
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
  // reset headerIndex for every parse
  headerIndex = 0
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
