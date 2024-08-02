import { Router } from 'express'
import PersonsService from '../service/persons.service'

export default (personsService: PersonsService) => {
    const router = Router()

    router.get('/login', async (req: any, res: any) => {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ success: false, message: 'Username and password are required' });
        }
        try {
            const result = await personsService
                .login(username, password)
                .catch((e) => console.error(e))
            
            res.send(200).json(result)

        } catch (error) {
            console.error('Error during login:', error);
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
    })

    return router
}
