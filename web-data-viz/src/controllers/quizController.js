var quizModel = require("../models/quizModel");

function buscarAcertosqtd(req, res){
    var qtdAcertos = req.body.qtdAcertosServer;

quizModel.buscarqtdAcertos(qtdAcertos).then((resultado) => {
    res.status(200).json(resultado);
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