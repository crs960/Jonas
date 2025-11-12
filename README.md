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
- POST /admin/noticias recebe(user_id, titulo, categoria, resumo, corpo) retorna status 201
- GET /admin/noticias recebe(user_id) retorna uma lista das noticias do usuário
- GET /noticias retorna uma lista com todas as noticias no banco de dados
- GET /noticias/:categoria recebe o nome da categoria, retorna uma lista com todas as noticias dessa categoria
- POST /anuncios recebe(user_id, nome, empresa, email, tipo, mensagem, telefone) retorna status 201
- GET /anuncios recebe(user_id) retorna uma lista dos anúcios do usuário