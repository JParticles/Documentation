import apisauce from 'apisauce'

const API = () => {
  const api = apisauce.create({
    timeout: 6000,
  })

  return {
    getDocs: path => api.get(path),
  }
}

export default API()
