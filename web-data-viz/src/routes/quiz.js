var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarqtd", function (req, res) {
    console.log(req.body);
    quizController.cadastrarqtd(req, res);
})

router.post("/autenticarQuiz", function (req, res) {
    quizController.buscarAcertosqtd(req, res);
});

module.exports = router;