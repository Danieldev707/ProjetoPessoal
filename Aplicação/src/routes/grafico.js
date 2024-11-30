var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

// Rota para buscar pontuação
router.get("/buscarPontuacao", function (req, res) {
    graficoController.buscarPontuacao(req, res);
});

// Rota para buscar pontuações dos jogadores
router.get("/buscarJogadoresPontuacoes", function (req, res) {
    graficoController.buscarJogadoresPontuacoes(req, res);
});

// Rota para buscar os melhores pontuadores
router.get("/buscarMelhoresPontuadores", function (req, res) {
    graficoController.buscarMelhoresPontuadores(req, res); // Corrigido aqui
});

// Rota para buscar pontuação
router.get("/buscarPontuacaoComplete", function (req, res) {
    graficoController.buscarPontuacaoComplete(req, res);
});

// Rota para buscar pontuações dos jogadores
router.get("/buscarJogadoresPontuacoesComplete", function (req, res) {
    graficoController.buscarJogadoresPontuacoesComplete(req, res);
});

// Rota para buscar os melhores pontuadores
router.get("/buscarMelhoresPontuadoresComplete", function (req, res) {
    graficoController.buscarMelhoresPontuadoresComplete(req, res); // Corrigido aqui
});

module.exports = router;
