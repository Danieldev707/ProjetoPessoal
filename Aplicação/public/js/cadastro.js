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
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Preencha todos campos para prosseguir!", 
            color: "#50080b"
          });
    } else if (senha != confirmarSenha) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Senhas digitadas não conferem!",
        color: "#50080b"
      });
      
    } else if (senhaForte == false){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Senha fraca, necessita de 8 caracteres, 1 maiúscula, 1 minuscula, um número e um caracter especial!",
        color: "#50080b"
      });
    } else {
        Swal.fire({
        title: "Sucesso!",
        text: "Usuário cadastrado!!",
        icon: "success"
        });

        window.location = "login.html";
         
        fetch("/usuarios/cadastrar", {
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

    }
}