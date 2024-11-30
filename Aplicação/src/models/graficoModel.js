var database = require("../database/config");

function buscarPontuacao() {

    var instrucaoSql = `
    SELECT 
        (SELECT COUNT(pontos) FROM quiz WHERE pontos < 5) AS Ruim, 
        (SELECT COUNT(pontos) FROM quiz WHERE pontos BETWEEN 5 AND 9) AS Ok, 
        (SELECT COUNT(pontos) FROM quiz WHERE pontos >= 10) AS Excelente 
    FROM quiz 
    LIMIT 1;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarJogadoresPontuacoes() {
    var instrucaoSql = `
    SELECT 
        usuario.idUsuario AS jogador_id, 
        usuario.nome AS nome_jogador, 
        quiz.pontos 
    FROM quiz 
    JOIN usuario ON quiz.fkUsuario = usuario.idUsuario
    ORDER BY quiz.pontos DESC;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMelhoresPontuadores() {
    var instrucaoSql = `
    SELECT 
        usuario.nome AS nome_jogador, 
        quiz.pontos 
    FROM quiz 
    JOIN usuario ON quiz.fkUsuario = usuario.idUsuario
    ORDER BY quiz.pontos DESC
    LIMIT 3;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql).catch(error => {
        console.error("Erro ao executar a consulta SQL:", error);
        throw error; // Rethrow para ser tratado posteriormente
    });
}

var database = require("../database/config");

function buscarPontuacaoComplete() {

    var instrucaoSql = `
    SELECT 
        (SELECT COUNT(pontos) FROM completeMusica WHERE pontos < 5) AS Ruim, 
        (SELECT COUNT(pontos) FROM completeMusica WHERE pontos BETWEEN 5 AND 9) AS Ok, 
        (SELECT COUNT(pontos) FROM completeMusica WHERE pontos >= 10) AS Excelente 
    FROM completeMusica 
    LIMIT 1;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarJogadoresPontuacoesComplete() {
    var instrucaoSql = `
    SELECT 
        usuario.idUsuario AS jogador_id, 
        usuario.nome AS nome_jogador, 
        completeMusica.pontos 
    FROM completeMusica 
    JOIN usuario ON completeMusica.fkUsuario = usuario.idUsuario
    ORDER BY completeMusica.pontos DESC;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMelhoresPontuadoresComplete() {
    var instrucaoSql = `
    SELECT 
        usuario.nome AS nome_jogador, 
        completeMusica.pontos 
    FROM completeMusica 
    JOIN usuario ON completeMusica.fkUsuario = usuario.idUsuario
    ORDER BY completeMusica.pontos DESC
    LIMIT 3;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql).catch(error => {
        console.error("Erro ao executar a consulta SQL:", error);
        throw error; // Rethrow para ser tratado posteriormente
    });
}



module.exports = {
    buscarPontuacao,
    buscarJogadoresPontuacoes,
    buscarMelhoresPontuadores,
    buscarPontuacaoComplete,
    buscarJogadoresPontuacoesComplete,
    buscarMelhoresPontuadoresComplete
}
