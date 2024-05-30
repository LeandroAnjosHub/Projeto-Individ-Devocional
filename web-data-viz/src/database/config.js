var mysql = require("mysql2");

// CONEXÃO DO BANCO MYSQL SERVER
var mySqlConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};

function executar(instrucao, instrucao2) {
    if (process.env.AMBIENTE_PROCESSO !== "producao" && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM .env OU dev.env OU app.js\n");
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
    }

    return new Promise(function (resolve, reject) {
        var conexao = mysql.createConnection(mySqlConfig);
        conexao.connect();

        // Executa a primeira instrução
        conexao.query(instrucao, function (erro, resultados) {
            if (erro) {
                conexao.end();
                reject(erro);
                return;
            }
            console.log(resultados);

            // Se instrucao2 for fornecida, executa a segunda instrução
            if (instrucao2) {
                conexao.query(instrucao2, function (erro2, resultados2) {
                    conexao.end();
                    if (erro2) {
                        reject(erro2);
                        return;
                    }
                    console.log(resultados2);
                    resolve(resultados2);
                });
            } else {
                conexao.end();
                resolve(resultados);
            }
        });

        conexao.on('error', function (erro) {
            return ("ERRO NO MySQL SERVER: ", erro.sqlMessage);
        });
    });
}

module.exports = {
    executar
};