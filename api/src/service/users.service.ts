import UsersRepository from '../repository/users.repository';

export default class UsersService {
    private usersRepository: UsersRepository

    constructor(usersRepository: UsersRepository) {
        this.usersRepository = usersRepository
    }

    async login(username: string, password: string) {
        const person = await this.usersRepository.getPersonByUsername(username)
    }

    async create(body: any) {
        await this.usersRepository.create(body)
    }

}