# Entregável 3 — Operações matemáticas com Express

Aplicação Node.js com Express que recebe dois números por
requisições HTTP POST e retorna o resultado da operação.

## Como executar

É necessário ter Node.js e npm instalados.

1. Baixe ou clone este repositório.
2. Abra um terminal na pasta do projeto.
3. Instale as dependências: npm install
4. Inicie o servidor: node app.js

O servidor utiliza o endereço http://localhost:3001.

## Como testar no Postman

Selecione o método POST, escolha uma das rotas abaixo
e configure Body > raw > JSON.

Envie:
{"a": 10, "b": 5}

Rotas disponíveis:

- http://localhost:3001/soma — resultado: 15
- http://localhost:3001/subtracao — resultado: 5
- http://localhost:3001/multiplicacao — resultado: 50
- http://localhost:3001/divisao — resultado: 2

A aplicação rejeita valores que não sejam números
e divisão por zero.