var database = require("../database/config")

function buscarAcertosqtd(qtdAcertos, nome){


    var instrucaoSql = `SELECT ${nome}, ${qtdAcertos} FROM quiz JOIN 
      usuario ON ${idUsuario} = fkUsuario;`

    return database.executar(instrucaoSql)
}


function cadastrarqtd(qtdAcertos, idUsuario){

    var instrucaoSql = `INSERT INTO quiz VALUES (default, ${qtdAcertos}, ${idUsuario});`

    return database.executar(instrucaoSql)
}

module.exports = {buscarAcertosqtd,
cadastrarqtd
};