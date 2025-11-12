## Como usar

### Comando para baixar o DB (precisa ter o docker):
    docker compose up -d

### Comando para baixar as bilbiotecas:
    npm i

## Rotas

- POST /createLogin recebe (email, password) retorna status 201
- POST /login recebe(email, password) retorna token
- POST /noticias recebe(user_id, titulo, categoria, resumo, corpo) retorna status 201
- GET /noticias recebe(user_id) retorna as noticias do usuário