import express from 'express'
import pgp from 'pg-promise'
import AuthRoutes from './routes/auth.routes'
import http from 'http'
import cors from 'cors'
import AuthService from './service/auth.service'
import UsersRepository from './repository/users.repository'
import UsersRoutes from './routes/users.routes'
import cookieParser from 'cookie-parser'
import UserInfoMiddleware from './auth/userInfoMidleware'
import UsersService from './service/users.service'

const expressServer = express()

expressServer.use(express.json())
expressServer.use(cookieParser());
expressServer.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
const PORT = 8080
const db = pgp({})({
    host: 'localhost',
    port: 5432,
    database: 'mydb',
    user: 'postgres',
    password: 'postgres'
})

const usersRepository = new UsersRepository(db)

const authService = new AuthService(usersRepository)
const usersService = new UsersService(usersRepository)

const userInfoMidleware = UserInfoMiddleware()

const authRoutes = AuthRoutes(authService)
expressServer.use('/api', userInfoMidleware, authRoutes)

const usersRoutes = UsersRoutes(usersService)
expressServer.use('/api/users', usersRoutes)

const httpServer = http.createServer(expressServer)
httpServer.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`)
)
