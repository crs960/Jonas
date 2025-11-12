CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS noticias (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    titulo VARCHAR(60),
    categoria VARCHAR(30),
    resumo TEXT NULL,
    corpo TEXT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS anuncios (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    nome VARCHAR(60),
    empresa VARCHAR(30),
    email VARCHAR(100),
    tipo VARCHAR(30),
    mensagem TEXT NULL,
    telefone VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);