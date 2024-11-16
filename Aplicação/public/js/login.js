function fecharAviso(){
    document.getElementById('caixa-erro').style.display = 'none'
    erro.innerHTML = ``
}

function entrar() {
    var email = inpemail.value;
    var senha = inpSenha.value;

    if (email === "" || senha === "") {
        document.getElementById('caixa-erro').style.display = 'flex';
        icone.src = "images/icones/Alert.png";
        erro.innerHTML = `Preencha todos os campos.`;
        aviso.play();
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
                    window.location.href = "desktop.html";
                });
            } else if (resposta.status === 403) { // Status 403
                document.getElementById('caixa-erro').style.display = 'flex';
                icone.src = "images/icones/Alert.png";
                erro.innerHTML = `Usuário e/ou senha inválido(s).`;
                aviso.play();
            } else {
                console.error("Erro inesperado:", resposta.status);
            }
        })
        .catch(function (erro) {
            console.error("Erro de conexão com o servidor:", erro);
        });
    }
}

function mostrarEsconder(){
    if (inpSenha.type == "password"){
        inpSenha.type = "text"
    } else {
        inpSenha.type = "password"
    }
}

