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

const marked = (content, options = {}) =>
  Marked(content, {
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

export default marked
