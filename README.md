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


## Print das operações

<img width="1101" height="931" alt="{BD3C2EF7-455F-4031-BB97-4324050FA37E}" src="https://github.com/user-attachments/assets/c5e89c4d-2cc9-4b81-bea4-a56a3aad7bcb" />

<img width="1082" height="922" alt="{EDB21C79-2EFC-471C-9D0F-353DED6A57B6}" src="https://github.com/user-attachments/assets/63647ca6-96ee-4997-8c08-ba3cc270b1b2" />

<img width="1085" height="935" alt="{11445868-67F0-466B-8123-BEA2CB481234}" src="https://github.com/user-attachments/assets/b36ce1bf-6820-4fd1-8bd7-0cf0cf3e01a3" />

<img width="1061" height="915" alt="{ADA3CCA9-0649-4F95-9E84-5DC501A28426}" src="https://github.com/user-attachments/assets/7c16ab7e-eb7a-4565-b770-d79d34ec6adb" />






