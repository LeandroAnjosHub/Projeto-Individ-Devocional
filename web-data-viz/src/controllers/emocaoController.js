var emocaoModel = require("../models/emocaoModel");

function buscarEmoporId(req, res){
    var idUsuario = req.params.idUsuario;

    const limite_dias = 7;
    console.log(`recuperando ultimas ${limite_dias} emoções`)

emocaoModel.buscarEmoporId(idUsuario, limite_dias).then((resultado) => {
    if(resultado.length > 0){
        res.status(200).json(resultado);
    } else{
        res.status(204).send("Nenhum resultado encontrado!")
    }
    
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