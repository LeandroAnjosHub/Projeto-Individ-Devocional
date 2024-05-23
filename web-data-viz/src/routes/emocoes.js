var express = require("express");
var router = express.Router();

var emocaoController = require("../controllers/emocaoController")

router.get("/buscarEmoporId", function(req, res){
    emocaoController.buscarEmocoesporId(res, res)});

    module.exports = router;
    

