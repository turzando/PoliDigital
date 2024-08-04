import axiosInstance from '../utils/axiosInstance'
import Cookies from 'js-cookie';

const authService = {
  login: async (username: string, password: string) => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
        
      }
    const body = {
        username: username,
        password: password
    }
    return await axiosInstance.post('/api/login', body, config).then((res) => {
      return res.data
    })
  },

  isAuthenticated: () => {
    const token = Cookies.get('token')
    console.log('resultado do token ', token)
    return !!token
  },
  
  logout: () => {
    Cookies.remove('token')
  }
}

export default authService
