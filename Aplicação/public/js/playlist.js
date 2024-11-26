function generatePlaylist() {
    const mood = document.getElementById("mood").value;
    const era = document.getElementById("era").value;
    const playlist = [];
    const resultContainer = document.getElementById("result");
    const playlistContainer = document.getElementById("playlist");
  
    // Limpa o conteúdo anterior
    playlistContainer.innerHTML = "";
  
    // Lógica para criar a playlist
    if (mood === "calm") {
      if (era === "classic") {
        playlist.push("Flor de Lis", "Meu Bem Querer", "Lilas");
      } else {
        playlist.push("Se", "Esquinas", "Acelerou");
      }
    } else if (mood === "romantic") {
      if (era === "classic") {
        playlist.push("Samurai", "Oceano", "Seduzir");
      } else {
        playlist.push("Eu Te Devoro", "Azul", "Um Amor Puro");
      }
    } else if (mood === "energetic") {
      if (era === "classic") {
        playlist.push("Serrado", "Açaí", "Alagoas");
      } else {
        playlist.push("Farinha", "Sabe Você", "Carnaval no Rio");
      }
    }
  
    // Exibe a playlist gerada
    playlist.forEach((song) => {
      const li = document.createElement("li");
      li.textContent = song;
      playlistContainer.appendChild(li);
    });
  
    resultContainer.style.display = "block";
  }
  