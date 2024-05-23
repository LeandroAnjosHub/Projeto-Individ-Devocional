var database = require("../database/config")

function buscarEmoporId(idUsuario){

    var instrucaoSql = `SELECT * FROM emocoes FROM usuario WHERE idUsuario = ${idUsuario}`

    return database.executar(instrucaoSql)
}


// function listar(){

//         var instrucaoSql = ``
// }

module.exports = {buscarEmoporId};