const UserInfoMiddleware = () => {
    return async (req: any, res: any, next: any) => {
        if (req.url === '/login') return next()
        try {
            const token = req.cookies['token']
            if (!token) return res.status(403).send()
            return next()
        } catch (error: any) {
            res.status(403).send(error)
        }
    }
}

export default UserInfoMiddleware
