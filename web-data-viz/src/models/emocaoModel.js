var database = require("../database/config")

function buscarEmoporId(idUsuario){

    var instrucaoSql = `SELECT emocoes.*, usuario.nome FROM emocoes JOIN usuarioEmocao 
    ON  fkEMocao = fkUsuario JOIN usuario ON idUsuario = fkUsuario; = ${idUsuario}`

    return database.executar(instrucaoSql)
}


// function listar(){

//         var instrucaoSql = ``
// }

module.exports = {buscarEmoporId};