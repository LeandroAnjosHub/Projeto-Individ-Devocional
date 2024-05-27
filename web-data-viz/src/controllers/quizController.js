var quizModel = require("../models/quizModel");

function buscarqtdAcertos(req, res){
    var qtdAcertos = req.query.qtdAcertos;

emocaoModel.buscarqtdAcertos(qtdAcertos).then((resultado) => {
    res.status(200).json(resultado);
})
}

module.exports = {
    buscarAcertosqtd
}