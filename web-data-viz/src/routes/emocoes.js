var express = require("express");
var router = express.Router();

var emocaoController = require("../controllers/emocaoController")

router.get("/buscarEmoporId", function(req, res){
    emocaoController.buscarEmocoesporId(req, res)});

    module.exports = router;
    

