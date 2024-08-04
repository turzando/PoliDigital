CREATE TABLE IF NOT EXISTS users (
    person_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    cpf VARCHAR(255) UNIQUE NOT NULL,
    rg VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(255) NOT NULL CHECK (role IN ('TEACHER', 'STUDENT'))
);

INSERT INTO users (name, username, password, cpf, rg, email, role) 
VALUES ('Artur Silva', 'turzando', '123', '123.456.789-01', '1.222.456-7', 'turzando@gmail.com', 'STUDENT');