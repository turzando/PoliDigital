import { Router } from 'express'
import AuthService from '../service/auth.service'

const AuthRoutes = (authService: AuthService) => {
    const router = Router()

    router.post('/login', async (req: any, res: any) => {
        const { username, password } = req.body;
    
        try {
            const user = await authService.validateUser(username, password);
            res.cookie('token', password, { maxAge: 1 * 60 * 1000 });

            res.status(200).json({ success: true, message: 'Login successful', data: user });
        } catch (error: any) {
            res.status(400).json({ success: false, message: error.message });
        }
    });

    return router
}

export default AuthRoutes