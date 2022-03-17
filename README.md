# API - Estoque - Módulo 4

Projeto de educacional do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Módulo 04.

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/) e o [SQLite](https://www.sqlite.org/index.html) como banco de dados.

## Objetivo
Esse projeto tem como objetivo criar uma API RESTful, que consumiria através de comandos CRUD a entidade do banco de dados.

## Pré-Requisitos

* Node.js  v.16.14.0
* NPM v.8.3.1

## Pacotes utilizados
* [Express](https://www.npmjs.com/package/express) v.4.17.3
* [SQLite](https://www.npmjs.com/package/sqlite/v/4.0.25) v.4.0.25
* [SQLite3](https://www.npmjs.com/package/sqlite3) v.5.0.2

## Instalação da Aplicação
Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:
Via HTTPS:
```
git clone https://github.com/sucoDeGoiaba/apiMOD4.git
```

Via SSH:
```
git@github.com:sucoDeGoiaba/apiMOD4.git
```

Entrando na pasta:
```
cd apiMOD4
```

Instalando os pacotes:
```
npm install
```

Criando tabelas no banco de dados:
```
npm run criaTabelas
```

Iniciando o servidor:
```
npm start
```

---

## Rotas implementadas:

### Estoque

 * **GET /produtos**
 
    Schema da resposta
    ```
    {
        "estoque": [
            {   
                "id" : <Integer>,
                "nomeProd" : <String>,
                "tipo: <String>,
                "quantidade" : <Integer>,
                "preco" : <Float>
            }
        ]
    }
    ```

 * **GET /id/{id}**
 
    Schema da resposta
    ```
    {
        "estoque": [
            {
                "id" : <Integer>,
                "nomeProd" : <String>,
                "tipo: <String>,
                "quantidade" : <Integer>,
                "preco" : <Float>
            }
        ]
    }
    ```

 * **POST /addProd**
 
    Schema da resposta
    ```
    {
        "estoque": [
            {"msg" : `Item adiciondo ao Estoque.`}
        ]
    }


 * **PUT /produtos/id/{id}**
 
    Schema da resposta
    ```
    {
        "estoque": [
            {"msg" : `Item atualizado no Estoque.`}
        ]
    }

 * **DELETE /îd/{id}**
 
    Schema da resposta
    ```
    {
        "estoque": [
            {"msg" : `Item de id ${id} removido do Estoque.`}
        ]
    }