import express from 'express'
import pgp from 'pg-promise'
import AuthRoutes from './routes/auth.routes'
import http from 'http'
import cors from 'cors'
import AuthService from './service/auth.service'
import PersonsRepository from './repository/persons.repository'
import cookieParser from 'cookie-parser'
import UserInfoMiddleware from './auth/userInfoMidleware'

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

const personsRepository = new PersonsRepository(db)
const authService = new AuthService(personsRepository)

const userInfoMidleware = UserInfoMiddleware()
const authRoutes = AuthRoutes(authService)
expressServer.use('/api', userInfoMidleware, authRoutes)

const httpServer = http.createServer(expressServer)
httpServer.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`)
)
