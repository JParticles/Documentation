function statistics() {
  if (/localhost|127\.0\.0\.1/i.test(location.hostname)) {
    return
  }

  // Baidu
  ;(function() {
    window._hmt = window._hmt || []
    let hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?8e8c9172687affd39edbb31c89ebbf97'
    let s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
    window.addEventListener('hashchange', () => {
      window._hmt.push(['_trackPageview', location.hash.substring(1)])
    })
  })()

  // Growing IO
  ;(function() {
    let _vds = _vds || []
    window._vds = _vds
    _vds.push(['setAccountId', 'b8678e52a8af5d0f'])
    _vds.push(['trackBot', false])
    _vds.push(['enableHT', true])
    ;(function() {
      let vds = document.createElement('script')
      vds.type = 'text/javascript'
      vds.async = true
      vds.src =
        ('https:' == document.location.protocol ? 'https://' : 'http://') +
        'dn-growing.qbox.me/vds.js'
      let s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(vds, s)
    })()
  })()
}

setTimeout(() => {
  statistics()
}, 50)
