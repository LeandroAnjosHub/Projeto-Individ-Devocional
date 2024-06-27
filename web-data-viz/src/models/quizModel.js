var database = require("../database/config")

function buscarAcertosqtd(idUsuario){

    var instrucaoSql = `SELECT nome, qtdAcertos, qtdErros FROM quiz JOIN 
      usuario ON idUsuario = fkUsuario WHERE idUsuario = ${idUsuario};`

    return database.executar(instrucaoSql)
}


function cadastrarqtd(qtdAcertos, qtdErros, idUsuario){

    var instrucaoSql = `INSERT INTO quiz VALUES (default, ${qtdAcertos}, ${qtdErros}, ${idUsuario});`

    return database.executar(instrucaoSql)
}

module.exports = {buscarAcertosqtd,
cadastrarqtd
};