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
function cadastrarqtd(req, res){

    var qtdAcertos = req.body.qtdAcertosServer;
    var idUsario = req.body.idUsuarioServer;

    quizModel.cadastrarqtd(qtdAcertos, idUsario).then((resultado) => {
        res.status(200).json(resultado);
    })

}




module.exports = {
    buscarAcertosqtd,
    cadastrarqtd
}