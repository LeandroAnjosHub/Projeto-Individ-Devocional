var anotacoesModel = require("../models/anotacoesModel");

 function cadastrarAnot(req, res){
    var descricao = req.body.descricaoServer;
    var idUsuario = req.body.idUsuarioServer;
    var titulo = req.body.tituloServer;

    anotacoesModel.cadastrarAnot(titulo, descricao, idUsuario).then((resultado) => {
    res.status(200).json(resultado);
})
 }

module.exports = {
    cadastrarAnot

}