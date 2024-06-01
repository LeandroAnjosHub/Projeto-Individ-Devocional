var database = require("../database/config")

function buscarAcertosqtd(idUsuario){

    var instrucaoSql = `SELECT nome, qtdAcertos FROM quiz JOIN 
      usuario ON idUsuario = ${idUsuario};`

    return database.executar(instrucaoSql)
}


function cadastrarqtd(qtdAcertos, idUsuario){

    var instrucaoSql = `INSERT INTO quiz VALUES (default, ${qtdAcertos}, ${idUsuario});`

    return database.executar(instrucaoSql)
}

module.exports = {buscarAcertosqtd,
cadastrarqtd
};