/************************************************************************************************************
 * Objetivo: Arquivo responsável pela API de livros. (GET, POST, PUT & DELETE)
 * Data: 18/10/2025
 * Versão: 1.0
*************************************************************************************************************/
// import das bibliotecas
const express = require('express')
const cors = require('cors')

const app = express()

// Define a porta a ser utilizada as requisições da API (Servidor ou uma porta local 8080)
const PORT = process.PORT || 8080


// configurações do cors
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', "*")
    response.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS")

    app.use(cors())
    next()
})

// Import dos arquivos de controle da aplicação
const controllerLivro = require('./controller/livro/controller_livro.js')

// EndPoints
app.get('/v1/livraria/livro', cors(), async function (request, response) {
    let livro = await controllerLivro.listarLivros()

    response.status(livro.status_code)
    response.json(livro)
})

app.get('/v1/livraria/livro/:id', cors(), async function (request, response) {
    let id = request.params.id
    let livro = await controllerLivro.buscarLivroId(id)

    response.status(livro.status_code)
    response.json(livro)
})

app.listen(PORT, function () {
    console.log('api aguardando requisições...');
})