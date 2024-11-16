function iniciarOceano() {
    audioOceano.play()
    imagemOceano.src = `Imagens/pausa.png`
    imagemOceano.onclick = pausarOceano
  }

  function iniciarAmorPuro() {
    audioAmorPuro.play()
    imagemAmorPuro.src = `Imagens/pausa.png`
    imagemAmorPuro.onclick = pausarAmorPuro
  }

  function iniciarSamurai() {
    audioSamurai.play()
    imagemSamurai.src = `Imagens/pausa.png`
    imagemSamurai.onclick = pausarSamurai
  }

  function iniciarEuTeDevoro() {
    audioEuTeDevoro.play()
    imgEuTeDevoro.src = `Imagens/pausa.png`
    imgEuTeDevoro.onclick = pausarEuTeDevoro
  }

  function iniciarFlorDeLis() {
    audioFlorDeLis.play()
    imagemFlorDeLis.src = `Imagens/pausa.png`
    imagemFlorDeLis.onclick = pausarFlorDeLis
  }

  function iniciarMeuBemQuerer() {
    audioMeuBemQuerer.play()
    imagemMeuBemQuerer.src = `Imagens/pausa.png`
    imagemMeuBemQuerer.onclick = pausarMeuBemQuerer
  }


  function pausarOceano() {

    audioOceano.pause()
    imagemOceano.src = `Imagens/botao-play-ponta-de-seta.png`
    imagemOceano.onclick = iniciarOceano
  }

  function pausarAmorPuro() {
    audioAmorPuro.pause()
    imagemAmorPuro.src = `Imagens/botao-play-ponta-de-seta.png`
    imagemAmorPuro.onclick = iniciarAmorPuro
  }

  function pausarSamurai() {
    audioSamurai.pause()
    imagemSamurai.src = `Imagens/botao-play-ponta-de-seta.png`
    imagemSamurai.onclick = iniciarSamurai
  }
  function pausarEuTeDevoro() {
    audioEuTeDevoro.pause()
    imgEuTeDevoro.src = `Imagens/botao-play-ponta-de-seta.png`
    imgEuTeDevoro.onclick = iniciarEuTeDevoro

  }
  function pausarFlorDeLis() {
    audioFlorDeLis.pause()
    imagemFlorDeLis.src = `Imagens/botao-play-ponta-de-seta.png`
    imagemFlorDeLis.onclick = iniciarFlorDeLis

  }
  function pausarMeuBemQuerer() {
    audioMeuBemQuerer.pause()
    imagemMeuBemQuerer.src = `Imagens/botao-play-ponta-de-seta.png`
    imagemMeuBemQuerer.onclick = iniciarMeuBemQuerer

  }



  let posicaoAtual = 0
const maxCliques = 16 // Define o limite de cliques

function slide(direcao) {
  const cards = document.querySelector('.card-content')
  const card = cards.children[0].offsetWidth + 32
  
  // Atualiza a posição conforme a direção
  posicaoAtual += direcao

  // Limita a posição para não ultrapassar 0 ou o máximo de cliques
  if (posicaoAtual < 0) posicaoAtual = 0
  else if (posicaoAtual >= maxCliques) posicaoAtual = maxCliques - 1

  // Aplica a transformação para mover o carrossel
  cards.style.transform = `translateX(-${posicaoAtual * card}px)`
}

