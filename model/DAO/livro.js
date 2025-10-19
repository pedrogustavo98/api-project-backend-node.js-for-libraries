/************************************************************************************************************
 * Objetivo: Model responsável pela realização do CRUD de livros, esse arquivo fará acesso ao banco de dados MySql
 * Data: 18/10/2025
 * Versão: 1.0
*************************************************************************************************************/
// Import
const { PrismaClient } = require('../../generated/prisma')

// Cria um novo objeto pra manipular as transações com o BD
const prisma = new PrismaClient()

// Retorna uma lista de livros
const getSelectAllBooks = async function () {

    try {
        let sql = "SELECT * FROM tbl_livro"

        let result = await prisma.$queryRawUnsafe(sql)

        if (Array.isArray(result)) {
            return result
        }

        return false
    } catch (error) {
        return false
    }

}

// Retorna um livro pelo id
const getSelectBookById = async function (id) {
    try {
        let sql = "SELECT * FROM tbl_livro WHERE id = " + id

        let result = await prisma.$queryRawUnsafe(sql)

        if (Array.isArray(result)) {
            return result
        }

        return false

    } catch (error) {
        return false
    }

}

// grava um novo livro
const setInsertBook = async function (livro) {

}

// altera um livro existente
const setUpdateBook = async function (livro) {

}

// deleta um livro existente
const setDeleteBook = async function (id) {

}

module.exports = {
    getSelectAllBooks,
    getSelectBookById,
    setInsertBook,
    setUpdateBook,
    setDeleteBook
}
