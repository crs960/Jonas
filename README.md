## Como usar

### Comando para baixar o DB (precisa ter o docker):
    docker compose up -d

### Comando para baixar as bilbiotecas:
    npm i

### Comando para iniciar a API:
    npm start

## Rotas

- POST /createLogin recebe (email, password) retorna status 201
- POST /login recebe(email, password) retorna token
- POST /noticias recebe(user_id, titulo, categoria, resumo, corpo) retorna status 201
- GET /noticias recebe(user_id) retorna uma lista das noticias do usuário
- POST /anuncios recebe(user_id, nome, empresa, email, tipo, mensagem, telefone) retorna status 201
- GET /anuncios recebe(user_id) retorna uma lista dos anúcios do usuário