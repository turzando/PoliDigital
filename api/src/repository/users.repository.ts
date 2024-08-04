import pgp from 'pg-promise'
import pg from 'pg-promise/typescript/pg-subset';

export default class UsersRepository {
    private db : pgp.IDatabase<any, pg.IClient>;

    constructor(db: pgp.IDatabase<any, pg.IClient>) {
        this.db = db
    }

    async create(body: any) {
        try {
            await this.db.query(`INSERT INTO users (name, username, password, cpf, rg, email, role) 
                VALUES ('${body.name}','${body.username}', '${body.password}', '${body.cpf}', 
                '${body.rg}', '${body.email}', '${body.role}');`)
        } catch (error) {
            console.log("Erro ao criar usuário")
            throw error
        }
    }

    async getAllPersons() {
        const result = await this.db.query("SELECT * FROM users")
        return result.rows
    }

    async getPersonByUsername(username: string) {
        const result = await this.db.query(`SELECT * FROM users where username = '${username}'`)
        return result[0]
    }
}
