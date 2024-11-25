// Selecionando todos os elementos necessários
const botao_inicio = document.querySelector(".start_btn button");
const caixa_quiz = document.querySelector(".quiz_box");
const lista_opcoes = document.querySelector(".option_list");
const linha_tempo = document.querySelector("header .time_line");
const texto_tempo = document.querySelector(".timer .time_left_txt");
const contador_tempo = document.querySelector(".timer .timer_sec");

var valor_tempo = 30;
var contagem_perguntas = 0;
var numero_pergunta = 1;
var pontos = 0;
var contador;
var contador_linha;
var largura_valor = 0;

const botao_proximo = document.querySelector("footer .next_btn");
const contador_perguntas_rodape = document.querySelector("footer .total_que");

function comecarQuiz() {
    caixa_quiz.classList.add("activeQuiz");
    mostrarPerguntas(0);
    contadorPerguntas(1);
    iniciarTemporizador(30);
    iniciarLinhaTempo(0);
}




sair_quiz.onclick = () => {
    window.location.reload();
}

function proximaPergunta() {
    if (contagem_perguntas < questions.length - 1) {
        contagem_perguntas++;
        numero_pergunta++;
        mostrarPerguntas(contagem_perguntas);
        contadorPerguntas(numero_pergunta);
        clearInterval(contador);
        clearInterval(contador_linha);
        iniciarTemporizador(valor_tempo);
        iniciarLinhaTempo(largura_valor);
        texto_tempo.textContent = "Tempo";
        botao_proximo.classList.remove("show");
    } else {
        clearInterval(contador);
        clearInterval(contador_linha);
        mostrarResultado();
    }
}

function mostrarPerguntas(indice) {
    const texto_pergunta = document.querySelector(".que_text");

    var tag_pergunta = '<span>' + questions[indice].numb + ". " + questions[indice].question + '</span>';
    var tag_opcao = '<div class="option"><span>' + questions[indice].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[indice].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[indice].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[indice].options[3] + '</span></div>';
    texto_pergunta.innerHTML = tag_pergunta;
    lista_opcoes.innerHTML = tag_opcao;

    const opcoes = lista_opcoes.querySelectorAll(".option");

    opcoes.forEach(opcao => {
        opcao.onclick = () => opcaoSelecionada(opcao);
    });
}

function opcaoSelecionada(resposta) {
    clearInterval(contador);
    clearInterval(contador_linha);
    var resposta_usuario = resposta.textContent;
    var resposta_correta = questions[contagem_perguntas].answer;
    const todas_opcoes = lista_opcoes.children.length;

    if (resposta_usuario === resposta_correta) {
        pontos++;
        resposta.classList.add("correct");
        resposta.insertAdjacentHTML("beforeend", '<div class="icon tick"><i class="fas fa-check"></i></div>');
    } else {
        resposta.classList.add("incorrect");
        resposta.insertAdjacentHTML("beforeend", '<div class="icon cross"><i class="fas fa-times"></i></div>');

        for (var i = 0; i < todas_opcoes; i++) {
            if (lista_opcoes.children[i].textContent === resposta_correta) {
                lista_opcoes.children[i].classList.add("correct");
                lista_opcoes.children[i].insertAdjacentHTML("beforeend", '<div class="icon tick"><i class="fas fa-check"></i></div>');
            }
        }
    }

    for (var i = 0; i < todas_opcoes; i++) {
        lista_opcoes.children[i].classList.add("disabled");
    }
    botao_proximo.classList.add("show");
}

function cadastrarPontos(pontos) {
    const idUsuario = sessionStorage.getItem("ID_USUARIO"); // Usando o getItem corretamente
    sessionStorage.setItem("Pontos", pontos); // Armazenando pontos no sessionStorage
    
    if (!idUsuario) {
      console.error("ID do usuário não encontrado.");
      return;
    }
    
    fetch("/quiz/cadastrarPontos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pontos: pontos, idUsuario: idUsuario }),
    })
    .then((response) => response.json()) 
    .then((data) => {
      console.log("Resposta do servidor:", data);
      if (data.error) {
        console.error("Erro ao cadastrar pontos:", data.error);
      } else {
        console.log("Pontos cadastrados com sucesso:", data);
      }
    })
    .catch((error) => {
      console.error("Erro ao cadastrar pontos:", error);
    });
  }   

function mostrarResultado() {
    window.location.href = "dashboard.html";

    fetch("/submit-score", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userScore: pontos,
            totalQuestions: questions.length
        }),
    }).then(response => response.json())
        .then(data => console.log(data.message));

        cadastrarPontos(pontos);
}

function iniciarTemporizador(tempo) {
    contador = setInterval(() => {
        contador_tempo.textContent = tempo;
        tempo--;
        if (tempo < 9) contador_tempo.textContent = "0" + contador_tempo.textContent;
        if (tempo < 0) {
            clearInterval(contador);
            texto_tempo.textContent = "Tempo Esgotado";
            mostrarRespostaCorreta();
            botao_proximo.classList.add("show");
        }
    }, 2000);
}

function iniciarLinhaTempo(tempo) {
    contador_linha = setInterval(() => {
        tempo += 1;
        linha_tempo.style.width = tempo + "px";
        if (tempo > 549) clearInterval(contador_linha);
    }, 29);
}

function contadorPerguntas(indice) {
    var tag_contador = '<span><p>' + indice + '</p> de <p>' + questions.length + '</p> Perguntas</span>';
    contador_perguntas_rodape.innerHTML = tag_contador;
}

function mostrarRespostaCorreta() {
    const todas_opcoes = lista_opcoes.children.length;
    var resposta_correta = questions[contagem_perguntas].answer;

    for (var i = 0; i < todas_opcoes; i++) {
        if (lista_opcoes.children[i].textContent === resposta_correta) {
            lista_opcoes.children[i].classList.add("correct");
            lista_opcoes.children[i].insertAdjacentHTML("beforeend", '<div class="icon tick"><i class="fas fa-check"></i></div>');
        }
    }
    for (var i = 0; i < todas_opcoes; i++) {
        lista_opcoes.children[i].classList.add("disabled");
    }
    
    
}

