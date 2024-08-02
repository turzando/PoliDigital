

import PersonsRepository from '../repository/persons.repository';

export default class AuthService {
    private personsRepository: PersonsRepository;

    constructor(personsRepository: PersonsRepository) {
        this.personsRepository = personsRepository
    }

    async validateUser(username: string, password: string) {

        if (!username || !password) {
            throw new Error('Username and password are required');
        }
    
        const user = await this.personsRepository.getPersonByUsername(username);
    
        if (!user) {
            throw new Error('Invalid username or password');
        }
    
        const isPasswordValid = password == user.password;
    
        if (!isPasswordValid) {
            throw new Error('Invalid username or password');
        }
    
        return user;
        
    }

}