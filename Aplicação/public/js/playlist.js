function gerarPlaylist() {
  const instrumento = document.getElementById("instrumento").value;
  const letra = document.getElementById("lyrics").value;
  const ambiente = document.getElementById("ambiente").value;

  var playlist = "";

  if (instrumento === "guitarra" || letra === "romantico" || ambiente === "romantico") {
    playlist = "https://open.spotify.com/playlist/4qu8AyKhcZaQtQQwERZDf8?si=EFL2U1ekRUusRLrDEVpM9w"; // Ame como Djavan
  } else if (instrumento === "percussao" || letra === "danceable" || ambiente === "ensolarado") {
    playlist = "https://open.spotify.com/playlist/1zeWW5RAzLfyR1J29OWfOP?si=zrQ3n_bMTAaJ0BHX_8pEiQ"; // Dance como Djavan
  } else if (instrumento === "saxofone" || letra === "poetico" || ambiente === "praia") {
    playlist = "https://open.spotify.com/playlist/4E96FrM2xEwqIhI8qz4vqS?si=kClXyeJ_RnKMoexY_kn51A"; // MPB como Djavan
  } else if (instrumento === "piano" || letra === "nostalgico" || ambiente === "introspective") {
    playlist = "https://open.spotify.com/playlist/11F3pBZykFTE5VNyQFn4oY?si=jymTmFerRiWmwSDHzp87aQ"; // Reflita como Djavan
  } else {
    playlist = "https://open.spotify.com/playlist/3tlRemyudcAAqb07LcGlrG?si=M8ClnyvKSOKqrccvBsvnsg"; // Lembre como Djavan
  }

  
  resultado.innerHTML = `<p><a href="${playlist}">Clique aqui para ouvir sua playlist personalizada!</a></p>`;
  resultado.style.display = "block";
}
