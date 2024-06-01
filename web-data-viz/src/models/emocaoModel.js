var database = require("../database/config")

function buscarEmoporId(idUsuario){

    var instrucaoSql = ` SELECT usuario.nome, emocoes.emocao 
    FROM usuarioEmocao 
    JOIN emocoes ON idEmocao = fkEmocao
    JOIN usuario ON idUsuario = fkUsuario
    WHERE idUsuario = ${idUsuario};`

    return database.executar(instrucaoSql)
}

function cadastrarEmo(emocao, idUsuario){

    var instrucaoSql = `INSERT INTO emocoes VALUES (default, '${emocao}');`
 
    var instrucaoSql2 = `INSERT INTO usuarioEmocao VALUES (default, ${idUsuario}, (SELECT idEmocao FROM emocoes WHERE emocoes.emocao
        LIKE '${emocao}' order by idEmocao desc limit 1));`
    
    return database.executar(instrucaoSql, instrucaoSql2)
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);   
}


module.exports = {buscarEmoporId,
    cadastrarEmo
};