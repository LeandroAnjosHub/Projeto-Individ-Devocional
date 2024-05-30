var express = require("express");
var router = express.Router();

var emocaoController = require("../controllers/emocaoController")

router.get("/buscarEmoporId", function(req, res){
    emocaoController.buscarEmoporId(req, res)});


    router.post("/cadastrarEmo", function (req, res) {
        emocaoController.cadastrarEmo(req, res);
    });


    module.exports = router;
    

