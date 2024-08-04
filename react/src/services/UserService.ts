import axiosInstance from '../utils/axiosInstance'
import Cookies from 'js-cookie';

const userService = {
    create: async (body: any) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true

        }

        return await axiosInstance.post('/api/users', body, config).then((res) => {
            return res.data
        })
    }
}

export default userService
