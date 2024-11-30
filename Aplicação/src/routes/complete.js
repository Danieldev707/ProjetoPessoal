var express = require("express");
var router = express.Router();

var completeController = require("../controllers/completeController");

router.get("/listarPontosComplete", function (req, res) {
  completeController.listarPontosComplete(req, res);
});

router.post("/cadastrarPontosComplete", function (req, res) {
  completeController.cadastrarPontosComplete(req, res);
});



module.exports = router;