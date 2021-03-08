import { utils } from 'jparticles'
const { isPlainObject } = utils

export default api => {
  api.addResponseTransform(response => {
    // 统一错误提示信息处理
    if (!response.ok) {
      let errorMsg = '未知错误'
      if (response.status !== null) {
        if (isPlainObject(response.data) && response.data.message) {
          errorMsg = response.data.message
        }
        switch (response.status) {
          case 401:
            errorMsg = '请重新登录'
            setTimeout(() => {
              window.location.href = '/'
            }, 1000)
            break
          case 403:
            errorMsg = '您无权浏览该页面'
            setTimeout(() => {
              window.location.href = '/'
            }, 1000)
            break
          case 429:
            errorMsg = '操作太频繁了'
            break
        }
        if (response.status >= 500) {
          errorMsg = '服务器错误，请稍后再试'
        }
      } else {
        switch (response.problem) {
          case 'TIMEOUT_ERROR':
            errorMsg = '服务器响应超时，请稍后再试'
            break
          case 'CANCEL_ERROR':
            errorMsg = '取消发送请求'
            break
        }
      }
      let originData = isPlainObject(response.data) ? response.data : {}
      response.data = Object.assign(originData, { message: errorMsg })
    }
  })
}
