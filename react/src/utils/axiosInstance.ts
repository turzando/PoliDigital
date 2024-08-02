import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080'
})

axiosInstance.interceptors.request.use(
  function (config) {
    config.url = `${config.url}`
    return config
  },
  function (error) {
    console.log(error)
    return Promise.reject(error)
  }
)

export default axiosInstance
