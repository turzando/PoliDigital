import { Router } from 'express'
import UsersService from '../service/users.service'

export default (usersService: UsersService) => {
    const router = Router()

    router.post('/', async (req: any, res: any) => {
        // const { username, password } = req.body;

        // if (!username || !password) {
        //     return res.status(400).json({ success: false, message: 'Username and password are required' });
        // }
        try {
            const result = await usersService
                .create(req.body)
                .catch((e) => console.error(e))
            
            res.send(200).json(result)

        } catch (error) {
            console.error('Error during create user:', error);
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
    })

    return router
}
