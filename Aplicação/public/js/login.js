function entrar() {
    var email = ipnemail.value;
    var senha = ipnSenha.value;

    if (email === "" || senha === "") {
        erro.innerHTML = `Preencha todos os campos.`;
    } else {
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
                resposta.json().then(json => {
                    sessionStorage.ID_USUARIO = json.idUsuario;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.USUARIO = json.email;
                    sessionStorage.SENHA = json.senha;
                    window.location.href = "quiz.html";
                });
            } else if (resposta.status === 403) { // Status 403
                erro.innerHTML = `Usuário e/ou senha inválido(s).`;
            } else {
                erro.innerHTML = `Usuário e/ou senha inválido(s).`;
                console.error("Erro inesperado:", resposta.status);
            }
        })
        .catch(function (erro) {
            console.error("Erro de conexão com o servidor:", erro);
        });
    }
}

function mostrarEsconder(){
    if (ipnSenha.type == "password"){
        ipnSenha.type = "text"
    } else {
        ipnSenha.type = "password"
    }
}

