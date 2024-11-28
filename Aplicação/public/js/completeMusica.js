const completeMusica = [
  {
    numb: 1,
    question: "O sol e o dom Quiçá, um dia, a fúria desse front Virá lapidar o sonho Até gerar o som",
    options: ["Como querer Caetanear O que há de bom", "Tocarei seu nome pra poder falar de amor", "Coração, desejo e sina", "Tudo mais, pura rotina, jazz"],
    answer: "Como querer Caetanear O que há de bom",
    musica: {
      src: "musicas/completeMusica/Djavan _Complete_Sina.mp3",
      idImagem: "imagemSina",
      idAudio: "audioSina",
    },
  },
  {
    numb: 2,
    question: "Te devoraria a qualquer preço Porque te ignoro ou te conheço",
    options: ["Sem pensar em nada, fez a minha vida", "Quando chove ou quando faz frio", "Teu olhar não me diz exato quem tu és", "Mesmo assim eu te devoro"],
    answer: "Quando chove ou quando faz frio",
    musica: {
      src: "musicas/completeMusica/Djavan_Complete_EuTeDevoro.mp3",
      idImagem: "imgEuTeDevoro",
      idAudio: "audioEuTeDevoro",
    },
  },
  {
    numb: 3,
    question: "E o meu jardim da vida Ressecou, morreu Do pé que brotou Maria",
    options: ["Nem orquídia nasceu", "Nem magnólia nasceu", "Nem margarida nasceu", "Nem jasmin nasceu"],
    answer: "Nem margarida nasceu",
    musica: {
      src: "musicas/completeMusica/Djavan_Complete_FlorDeLis.mp3",
      idImagem: "imagemFlorDeLis",
      idAudio: "audioFlorDeLis",
    },
  },
  {
    numb: 4,
    question: "Eu não sei se vem de Deus Do céu ficar azul Ou virá dos olhos teus",
    options: ["Esse amor que resplandecia", "Viaja e insurdina", "Transparecer nos meus", "Essa cor que azuleja o dia?"],
    answer: "Essa cor que azuleja o dia?",
    musica: {
      src: "musicas/completeMusica/Djavan_Complete_Azul.mp3",
      idImagem: "imagemAzul",
      idAudio: "audioAzul",
    },
  },
  {
    numb: 5,
    question: "'Pra Iluminar as trevas fundas da paixão, Eu quis lutar contra o poder do amor...'",
    options: ["Vivenciei a sua dor", "Seu sorriso encantador", "Cai nos pés de um vencedor", "Viver feliz e com amor"],
    answer: "Cai nos pés de um vencedor",
    musica: {
      src: "musicas/completeMusica/Djavan _Complete_Samurai.mp3",
      idImagem: "imagemSamurai",
      idAudio: "audioSamurai",
    },
  },
  {
    numb: 6,
    question: "Não vá fugir mais uma vez Vença a falta de ar que a flor do medo traz Tente pensar, pode até ser mau e tal",
    options: ["Mas pode até ser que seja demais", "Pense nos tempos atrás", "Viva o nosso incapaz", "Tudo vai mudar, posso pressentir"],
    answer: "Mas pode até ser que seja demais",
    musica: {
      src: "musicas/completeMusica/Djavan_Complete_FlorDoMedo.mp3",
      idImagem: "imagemFlorDoMedo",
      idAudio: "audioFlorDoMedo",
    },
  },
  {
    numb: 7,
    question: "Raio se libertou Clareou muito mais Se encantou pela cor lilás Prata na luz do amor Céu azul",
    options: ["Lindo como ele só", "No seu mar de raio", "E gente pra ver e viajar", "Eu quero ver o pôr do sol"],
    answer: "Eu quero ver o pôr do sol",
    musica: {
      src: "musicas/completeMusica/Djavan_Complete_Lilás.mp3",
      idImagem: "imagemLilas",
      idAudio: "audioLilas",
    },
  },
  {
    numb: 8,
    question: "Vem me fazer feliz porque eu te amo Você deságua em mim, e eu, oceano",
    options: ["Não há nada em lugar nenhum", "E esqueço que amar é quase uma dor", "Longe de ti tudo parou", "Não sabe voltar, me dá teu calor"],
    answer: "E esqueço que amar é quase uma dor",
    musica: {
      src: "musicas/completeMusica/Djavan_Complete_Oceano.mp3",
      idImagem: "imagemOceano",
      idAudio: "audioOceano",
    },
  },
  {
    numb: 9,
    question: "Para mim que estou Jurado pra morrer",
    options: ["de amor", "de dor", "de fervor", "de ardor"],
    answer: "de amor",
    musica: {
      src: "musicas/completeMusica/Djavan_Complete_MeuBemQuerer.mp3",
      idImagem: "imagemMeuBemQuerer",
      idAudio: "audioMeuBemQuerer",
    },
  },
  {
    numb: 10,
    question: "Um amor puro Não sabe a força que tem",
    options: ["Meu amor, eu juro Ser teu amor refém", "Meu amor, eu juro Ser teu e de mais ninguém", "Meu amor, eu juro Ser teu amante além", "Meu amor, eu juro Você é o maior bem"],
    answer: "Meu amor, eu juro Ser teu e de mais ninguém",
    musica: {
      src: "musicas/completeMusica/Djavan_Complete_UmAmorPuro.mp3",
      idImagem: "imagemAmorPuro",
      idAudio: "audioAmorPuro",
    },
  },
];


function iniciarMusica(idAudio, idImagem) {
  const audio = document.getElementById(idAudio);
  const imagem = document.getElementById(idImagem);
  audio.play();
  imagem.src = "Imagens/pausa.png";
  imagem.onclick = () => pausarMusica(idAudio, idImagem);
}

function pausarMusica(idAudio, idImagem) {
  const audio = document.getElementById(idAudio);
  const imagem = document.getElementById(idImagem);
  audio.pause();
  imagem.src = "Imagens/botao-play-ponta-de-seta.png";
  imagem.onclick = () => iniciarMusica(idAudio, idImagem);
}




