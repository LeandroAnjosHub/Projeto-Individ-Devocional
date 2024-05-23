var emocaoModel = require("../models/emocaoModel");

function buscarEmocoesporId(req, res){
    var idUsuario = req.query.idUsario;

emocaoModel.buscarEmoporId(idUsuario).then((resultado) => {
    res.status(200).json(resultado);
})
}

module.exports = {
    buscarEmocoesporId
}

