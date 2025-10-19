/************************************************************************************************************
 * Objetivo: Controller responsável pela manipulação de dados, validação e regra de negócios para o crud de livros.
 * Data: 18/10/2025
 * Versão: 1.0
*************************************************************************************************************/
// import do arquivo dao para manipular dados no banco de dados
const livroDAO = require('../../model/DAO/livro.js')

// Retorna uma lista de livros
const listarLivros = async function () {
    try {
        // Função do DAO para listar os livros
        let result = await livroDAO.getSelectAllBooks()

        if (!result) {
            return { status: false, status_code: 500, message: 'Não foi possível processar a requisição, pois houveram falhas no servidor de modelagem de dados.' } //500
        }

        // validação de array vazio
        if (result.length < 1) {
            return { status: false, status_code: 404, message: 'Não foram encontrados dados de retorno.' } //404
        }

        return { status: true, status_code: 200, amount: result.length, response: result }
    } catch (error) {
        return { status: false, status_code: 500, message: 'Não foi possível processar a requisição, pois houveram falhas no servidor da controller.' } //500
    }

}

// Retorna um livro por id
const buscarLivroId = async function (id) {

    try {
        if (id != '' && id != null && id != undefined && !isNaN(id) && id > 0) {
            // Função do DAO para listar o produto via id
            let result = await livroDAO.getSelectBookById(Number(id))

            if (!result) {
                return { status: false, status_code: 500, message: 'Não foi possível processar a requisição, pois houveram falhas no servidor de modelagem de dados.' } //500
            }

            // validação de array vazio
            if (result.length < 1) {
                return { status: false, status_code: 404, message: 'Não foram encontrados dados de retorno.' } //404
            }

            return { status: true, status_code: 200, amount: result.length, response: result }
        }

        return { status: false, status_code: 400, message: 'Não foi possível processar a requisição, pois o ID não corresponde a um atributo válido.' } //400
    } catch (error) {
        return { status: false, status_code: 500, message: 'Não foi possível processar a requisição, pois houveram falhas no servidor da controller.' } //400
    }

}

// insere o livro
const inserirLivro = async function (livro) {

}

// altera o livro
const atualizarLivro = async function (livro, id) {

}

// exclui o livro
const excluirLivro = async function (id) {

}

module.exports = {
    listarLivros,
    buscarLivroId,
    inserirLivro,
    atualizarLivro,
    excluirLivro
}