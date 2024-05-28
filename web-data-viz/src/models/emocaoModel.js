var database = require("../database/config")

function buscarEmocoesporId(idUsuario, nomeEmocao, nome){

    var instrucaoSql = `SELECT ${nomeEmocao}.*, usuario.${nome} FROM emocoes JOIN usuarioEmocao 
    ON  fkEMocao = fkUsuario JOIN usuario ON idUsuario = ${idUsuario};`

    return database.executar(instrucaoSql)
}

function cadastrarEmo(nomeEmocao){

    var instrucaoSql = `INSERT INTO (nome) emocoes VALUES ('${nomeEmocao}');`

    return database.executar(instrucaoSql)

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {buscarEmocoesporId,
    cadastrarEmo
};