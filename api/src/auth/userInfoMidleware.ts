const UserInfoMiddleware = () => {
    return async (req: any, res: any, next: any) => {
        if (req.url === '/login') return next()
        try {
            const token = req.cookies['token']

            //todo REDIRECIONAR PARA TELA DE LOGIN
            if (!token) return res.status(403).send()
                console.log("atualizando token")
            res.cookie('token', token, { maxAge: 1 * 60 * 1000 });
            return next()
        } catch (error: any) {
            res.status(403).send(error)
        }
    }
}

export default UserInfoMiddleware
