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

//Tudo 05/07

//Função adicionadas para exibir quantidade máxima e mínima de acertos do usuário
function buscarMinMaxAcertos(idUsuario){

  //Executando comando 
  var instrucaoSql = `SELECT max(qtdAcertos), min(qtdAcertos) from quiz
    JOIN usuario on idUsuario = fkUsuario WHERE idUsuario = ${idUsuario};`

    //Retorna o comando executado
    return database.executar(instrucaoSql)
}

module.exports = {buscarAcertosqtd,
cadastrarqtd,
buscarMinMaxAcertos
};