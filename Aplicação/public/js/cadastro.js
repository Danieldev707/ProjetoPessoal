var maiuscula = /[A-Z]/
var minuscula = /[a-z]/
var simbolo = /[!@#$]/
var numerico = /[0-9]/
var senhaForte = false


function cadastrar(){
    var nome = inpNome.value 
    var email = ipnemail.value
    var confirmarSenha = inpConfirmarSenha.value
    var senha = ipnSenha.value

    var temMaiuscula = maiuscula.test(senha)
    var temMinuscula = minuscula.test(senha)
    var temSimbolo = simbolo.test(senha)
    var temNumerico = numerico.test(senha)
    var temTamanho = senha.length >= 8
    
    senhaForte = temMaiuscula &&
                 temMinuscula &&
                 temSimbolo   &&
                 temNumerico  &&
                 temTamanho

    if (nome == "" ||
        email == "" ||
        senha == "" ||
        confirmarSenha == ""){
        erro.innerHTML = `Preencha todos os campos.`
    } else if (senha != confirmarSenha) {
        erro.innerHTML = `As senhas digitadas não conferem.`
    } else if (senhaForte == false){
        erro.innerHTML = `Sua senha é fraca. Siga a recomendação para uma senha forte.`
    } else {
        fetch("http://localhost:3333/usuarios/cadastrar", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nomeServer: nome,
              emailServer: email,
              senhaServer: senha  
            }),
          })
            .then(function (resposta) {
              console.log("resposta: ", resposta)
      
              
              
              if (resposta.ok) {
                erro.innerHTML = `Cadastro efetuado com sucesso.`
                window.location.href = "login.html"
              } else {
                erro.innerHTML = `Usuário e/ou senha inválido(s).`;
                throw "Houve um erro ao tentar realizar o cadastro!"
              }
            })
            .catch(function (resposta) {
              console.log(`#ERRO: ${resposta}`)
            })
    }
}