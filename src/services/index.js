import apisauce from 'apisauce'
import transforms from './transforms'

const API = () => {
  const api = apisauce.create({
    timeout: 6000,
  })

  transforms(api)

  return {
    getDocs: path => api.get(path),
  }
}

export default API()
