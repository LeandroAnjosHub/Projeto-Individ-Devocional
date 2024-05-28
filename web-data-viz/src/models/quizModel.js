var database = require("../database/config")

function buscarqtdAcertos(qtdAcertos, nome){


    var instrucaoSql = `SELECT '${nome}', ${qtdAcertos} FROM quiz JOIN 
      usuario ON ${idUsuario} = fkUsuario;`

    return database.executar(instrucaoSql)
}


function cadastrarqtdAcertos(qtdAcertos, idUsuario){

    var instrucaoSql = `INSERT INTO emocoes VALUES (default, ${qtdAcertos}, ${idUsuario});`

    return database.executar(instrucaoSql)
}

module.exports = {buscarqtdAcertos,
cadastrarqtdAcertos
};