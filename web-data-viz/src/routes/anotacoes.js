var express = require("express");
var router = express.Router();

var anotacoesController = require("../controllers/anotacoesController");

router.post("/cadastrarAnot", function (req, res) {
    console.log(req.body);
    anotacoesController.cadastrarAnot(req, res);
});


module.exports = router;

