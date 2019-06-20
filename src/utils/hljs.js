import 'highlight.js/styles/googlecode.css'
import hljs from 'highlight.js/lib/highlight'

// eslint-disable-next-line
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))

hljs.configure({
  languages: ['javascript', 'xml', 'css'],
})

export default hljs
