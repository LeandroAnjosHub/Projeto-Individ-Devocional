var emocaoModel = require("../models/emocaoModel");

function buscarEmocoesporId(req, res){
    var idUsuario = req.query.idUsario;
    var nomeEmocao = req.query.emocao;

emocaoModel.buscarEmoporId(idUsuario).then((resultado) => {
    res.status(200).json(resultado);
})
}