var database = require("../database/config");

function listarPontos() {
    console.log("ACESSEI O QUIZ  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  var instrucao = `
    select avg(pontos) from quiz;
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrarPontos(pontos, idUsuario) {
  var instrucao = `
    INSERT INTO quiz (pontos, fkUsuario) VALUES (${pontos}, ${idUsuario});
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarPontosComplete() {
  console.log("ACESSEI O QUIZ  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
var instrucao = `
  select avg(pontos) from completeMusica;
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function cadastrarPontosComplete(pontos, idUsuario) {
var instrucao = `
  INSERT INTO completeMusica (pontos, fkUsuario) VALUES (${pontos}, ${idUsuario});
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

module.exports = {
  cadastrarPontos,
  listarPontos,
  cadastrarPontosComplete,
  listarPontosComplete
};