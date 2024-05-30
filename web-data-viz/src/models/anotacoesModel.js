var database = require("../database/config");

function cadastrarAnot(titulo, descricao, idUsuario){

    var instrucaoSql = `INSERT INTO anotacao VALUES (default, '${titulo}', '${descricao}', ${idUsuario});`

    return database.executar(instrucaoSql)
}

module.exports = {
   cadastrarAnot
}

