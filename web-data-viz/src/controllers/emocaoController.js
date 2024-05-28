var emocaoModel = require("../models/emocaoModel");

function buscarEmocoesporId(req, res){
    var idUsuario = req.query.idUsario;

emocaoModel.buscarEmoporId(idUsuario).then((resultado) => {
    res.status(200).json(resultado);
})
}

function cadastrarEmo(req, res){
    var nomeEmocao = req.query.emocaoServer;

    emocaoModel.cadastrarEmo(nomeEmocao).then((resultado) => {
        res.status(200).json(resultado);
})
}

module.exports = {
    buscarEmocoesporId,
    cadastrarEmo
}