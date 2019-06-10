import apisauce from 'apisauce'
import transforms from './transforms'

const API = () => {
  const api = apisauce.create({
    timeout: 6000,
  })

  transforms(api)

  return {
    $instance: api,
  }
}

export default API()
