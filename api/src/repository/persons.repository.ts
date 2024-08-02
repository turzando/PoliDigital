import pgp from 'pg-promise'
import pg from 'pg-promise/typescript/pg-subset';

export default class PersonsRepository {
    private db : pgp.IDatabase<any, pg.IClient>;

    constructor(db: pgp.IDatabase<any, pg.IClient>) {
        this.db = db
    }

    async getAllPersons() {
        const result = await this.db.query("SELECT * FROM persons")
        return result.rows
    }

    async getPersonByUsername(username: string) {
        const result = await this.db.query(`SELECT * FROM persons where username = '${username}'`)
        return result[0]
    }
}
