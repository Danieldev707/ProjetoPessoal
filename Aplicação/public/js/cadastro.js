var maiuscula = /[A-Z]/
var minuscula = /[a-z]/
var simbolo = /[!@#$]/
var numerico = /[0-9]/
var senhaForte = false

function validarSenha() {
    var senha = inpSenha.value
    var temMaiuscula = maiuscula.test(senha)
    var temMinuscula = minuscula.test(senha)
    var temSimbolo = simbolo.test(senha)
    var temNumerico = numerico.test(senha)
    var temTamanho = senha.length >= 8

    validacaoMaiuscula.style.color = 
    temMaiuscula ? "green" : "red"
    validacaoMinuscula.style.color = 
    temMinuscula ? "green" : "red"
    validacaoSimbolo.style.color = 
    temSimbolo ? "green" : "red"
    validacaoNumerico.style.color = 
    temNumerico ? "green" : "red"
    validacaoTamanho.style.color = 
    temTamanho ? "green" : "red"

    senhaForte = temMaiuscula &&
                 temMinuscula &&
                 temSimbolo   &&
                 temNumerico  &&
                 temTamanho;
    validacaoForte.style.color = 
    senhaForte ? "green" : "red"
}

function cadastrar(){
    var nome = inpNome.value
    var email = inpemail.value
    var confirmarSenha = inpConfirmarSenha.value
    var senha = inpSenha.value

    if (nome == "" ||
        email == "" ||
        senha == "" ||
        confirmarSenha == ""){
        document.getElementById('caixa-erro').style.display = 'flex'
        icone.src = "images/icones/Alert.png"
        erro.innerHTML = `Preencha todos os campos.`
        aviso.play()
    } else if (senha != confirmarSenha) {
        document.getElementById('caixa-erro').style.display = 'flex'
        icone.src = "images/icones/Alert.png"
        erro.innerHTML = `As senhas digitadas não conferem.`
        aviso.play()
    } else if (senhaForte == false){
        document.getElementById('caixa-erro').style.display = 'flex'
        icone.src = "images/icones/Alert.png"
        erro.innerHTML = `Sua senha é fraca. Siga a recomendação para uma senha forte.`
        aviso.play()
    } else {
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nomeServer: nome,
              usuarioServer: usuario,
              senhaServer: senha
            }),
          })
            .then(function (resposta) {
              console.log("resposta: ", resposta);
      
              
              
              if (resposta.ok) {
                document.getElementById('caixa-erro').style.display = 'flex'
                icone.src = "images/icones/System Information.png"
                erro.innerHTML = `Cadastro efetuado com sucesso.`
                informativo.play()
                btnOk.onclick = paraLogin
              } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
              }
            })
            .catch(function (resposta) {
              console.log(`#ERRO: ${resposta}`);
            });
    }
}

function fecharAviso(){
    document.getElementById('caixa-erro').style.display = 'none'
    erro.innerHTML = ``
}