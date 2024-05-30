var emocaoModel = require("../models/emocaoModel");

function buscarEmoporId(req, res){
    var idUsuario = req.body.idUsarioServer;
    var emocao = req.body.emocaoServer;

emocaoModel.buscarEmoporId(emocao, idUsuario).then((resultado) => {
    res.status(200).json(resultado);
})
}

function cadastrarEmo(req, res){
    var emocao = req.body.emocaoServer;
    var idUsuario = req.body.idUsuarioServer;

    emocaoModel.cadastrarEmo(emocao, idUsuario).then((resultado) => {
        res.status(200).json(resultado);
})
}

module.exports = {
    buscarEmoporId,
    cadastrarEmo
}