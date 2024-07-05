var quizModel = require("../models/quizModel");

function buscarAcertosqtd(req, res){
    // var qtdAcertos = req.body.qtdAcertosServer;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando últimos acertos para o usuário com ID: ${idUsuario}`);

quizModel.buscarAcertosqtd(idUsuario).then((resultado) => {
   if(resultado.length > 0){
    res.status(200).json(resultado);
   } else{
    res.status(204).send("Nenhum resultado encontrado!")
   }
    
})
}

function buscarMinMaxAcertos(req, res){
    // var qtdAcertos = req.body.qtdAcertosServer;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando mínimo e máxima qtdAcertos para o usuário com ID: ${idUsuario}`);

quizModel.buscarMinMaxAcertos(idUsuario).then((resultado) => {
   if(resultado.length > 0){
    res.status(200).json(resultado);
   } else{
    res.status(204).send("Nenhum resultado encontrado!")
   }
    
})
}

function cadastrarqtd(req, res){

    var qtdAcertos = req.body.qtdAcertosServer;
    var qtdErros = req.body.qtdErrosServer;
    var idUsario = req.body.idUsuarioServer;

    quizModel.cadastrarqtd(qtdAcertos, qtdErros, idUsario).then((resultado) => {
        res.status(200).json(resultado);
    })

}

module.exports = {
    buscarAcertosqtd,
    cadastrarqtd,
    buscarMinMaxAcertos
}