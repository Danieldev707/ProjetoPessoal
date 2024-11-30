const botao_inicio = document.querySelector(".start_btn button");
const caixa_quiz = document.querySelector(".quiz_box");
const lista_opcoes = document.querySelector(".option_list");


var contagem_perguntas = 0;
var numero_pergunta = 1;
var pontos = 0;
var largura_valor = 0;

const botao_proximo = document.querySelector("footer .next_btn");
const contador_perguntas_rodape = document.querySelector("footer .total_que");

function comecarQuiz() {
    caixa_quiz.classList.add("activeQuiz");
    mostrarPerguntas(0);
    contadorPerguntas(1);
    iniciarTemporizador(30);
}

function proximaPergunta() {
    if (contagem_perguntas < completeMusica.length - 1) {
        contagem_perguntas++;
        numero_pergunta++;
        mostrarPerguntas(contagem_perguntas);
        contadorPerguntas(numero_pergunta);

        // Verifica se é a penúltima pergunta
        if (contagem_perguntas === completeMusica.length - 1) {
            botao_proximo.textContent = "Finalizar"; // Altera o texto do botão
        }

        botao_proximo.classList.remove("show");
    } else {
        // Redireciona para a página ao finalizar
        window.location.href = "dashboard.html";
    }
}

function mostrarPerguntas(indice) {
    const texto_pergunta = document.querySelector(".que_text");
    const lista_opcoes = document.querySelector(".option_list");
  
   
    const tag_pergunta =
      "<span>" +
      completeMusica[indice].numb +
      ". " +
      completeMusica[indice].question +
      "</span>";
  
   
    const tag_musica = `
      <div class="musica">
        <img 
          onclick="iniciarMusica('${completeMusica[indice].musica.idAudio}', '${completeMusica[indice].musica.idImagem}')" 
          src="Imagens/botao-play-ponta-de-seta.png" 
          id="${completeMusica[indice].musica.idImagem}" />
        <audio 
          id="${completeMusica[indice].musica.idAudio}" 
          src="${completeMusica[indice].musica.src}"></audio>
      </div>`;
  
    
    let tag_opcao = "";
    completeMusica[indice].options.forEach((opcao) => {
      tag_opcao += `<div class="option"><span>${opcao}</span></div>`;
    });
  
    
    texto_pergunta.innerHTML = tag_pergunta;
    lista_opcoes.innerHTML = tag_musica + tag_opcao;
  
   
    const opcoes = lista_opcoes.querySelectorAll(".option");
    opcoes.forEach((opcao) => {
      opcao.onclick = () => opcaoSelecionada(opcao);
    });
  }
  

function opcaoSelecionada(resposta) {
    var resposta_usuario = resposta.textContent;
    var resposta_correta = completeMusica[contagem_perguntas].answer;
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


function contadorPerguntas(indice) {
    var tag_contador = '<span><p>' + indice + '</p> de <p>' + completeMusica.length + '</p> Perguntas</span>';
    contador_perguntas_rodape.innerHTML = tag_contador;
}

function mostrarRespostaCorreta() {
    const todas_opcoes = lista_opcoes.children.length;
    var resposta_correta = completeMusica[contagem_perguntas].answer;

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