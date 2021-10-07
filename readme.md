Tecnologias utilizadas:
========================    

- Backend
    - Node.js versão 14.16.1
    - Npm versão 6.14.12
    - Typescript
    - Docker
    - Docker compose
- Frontend
    - React.js
    - axios


Backend instruções para rodar projeto em ambiente de desenvolvimento:
=======================================================================

- Clonar o projeto
- Acesse o diretório **backend**
- Acessar o projeto e depois executar o comando: **npm install**
- Criar um arquivo **.env** baseado no arquivo **.env.example**
- Na raiz do projeto no diretório **backend** executar o comando: **docker-compose up -d** para criar o banco de dados do mongodb.
- Na raiz do projeto no diretório **backend** executar o comando: **npm run start:dev** para levandar o servidor da aplicação.


Backend instruções para rodar testes:
========================================

- Clonar o projeto
- Acesse o diretório **backend**
- Acessar o projeto e depois executar o comando: **npm install**
- Criar um arquivo **.env.testing** baseado no arquivo **.env.example**
- Na raiz do projeto no diretório **backend** executar o comando: **npm run test** para levandar o servidor da aplicação.


Frontend instruções do projeto para rodar em ambiente de desenvolvimento:
===========================================================================
- Clonar o projeto
- Acesse o diretório **frontend**
- Acessar o projeto e depois executar o comando: **npm install**
- Criar um arquivo **.env** baseado no arquivo **.env.example**
- Na raiz do projeto no diretório **frontend** executar o comando: **npm run start** para levandar o servidor da aplicação para server aplicação react.js.

OBSERVAÇÕES:
============

- No diretório **backend** existe um arquivo chama **CHALLENGE MISSION .postman_collection.json** importe esse arquivo no **postman** para conseguir fazer teste da rotas da api da aplicação