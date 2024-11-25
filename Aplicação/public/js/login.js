function entrar() {
    var email = ipnemail.value;
    var senha = ipnSenha.value;

    if (email === "" || senha === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Os campos necessitam ser preenchidos!",
            color: "#50080b" 
          });
    } else {

        Swal.fire({
            title: "Logado com sucesso!",
            text: "Aproveite Djafã!!",
            icon: "success"
            });


        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email,
                senhaServer: senha
            })
        })
        .then(function (resposta) {
            if (resposta.ok) {

                window.location = "dashboard.html";

                resposta.json().then(json => {
                    sessionStorage.ID_USUARIO = json.idUsuario;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.USUARIO = json.email;
                    sessionStorage.SENHA = json.senha;
                });
            } else if (resposta.status === 403) { // Status 403
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Usuário e/ou senha inválido(s)!",
                    color: "#50080b"
                  });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Usuário e/ou senha inválido(s)!", 
                    color: "#50080b"
                  });
                console.error("Erro inesperado:", resposta.status);
            }
        })
        .catch(function (erro) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Usuário e/ou senha inválido(s)!", 
                color: "#50080b"
              });
            console.error("Erro de conexão com o servidor:", erro);
        });
    }
}

