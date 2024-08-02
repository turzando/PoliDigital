import pgp from 'pg-promise'
import pg from 'pg-promise/typescript/pg-subset';
import PersonsRepository from '../repository/persons.repository';

export default class PersonsService {
    private personsRepository: PersonsRepository;

    constructor(personsRepository: PersonsRepository) {
        this.personsRepository = personsRepository
    }

    async login(username: string, password: string) {

        const person = await this.personsRepository.getPersonByUsername(username)
        
    }

}