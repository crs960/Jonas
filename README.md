## Como usar

### Comando para baixar o DB (precisa ter o docker):
    docker compose up -d

### Comando para baixar as bilbiotecas:
    npm i

## Rotas

- POST /createLogin recebe (email, password) retorna status 201
- POST /login recebe(email, password) retorna token