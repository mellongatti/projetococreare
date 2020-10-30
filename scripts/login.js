const emailCadastrado = "academy@cocreare.com.br";
const senhaCadastrado = 123456;
const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
let emailCampo = document.getElementById("login");
let senhaCampo = document.getElementById("senha");
let enviar = document.getElementById("enviar").addEventListener("click", event => {
    event.preventDefault();
    if(logar(emailCampo.value, senhaCampo.value)){
        window.location.href = "../buscas.html"
        alert("Logando...")
    }else{
        alert("Email ou senha inválidos")
        emailCampo.style.borderColor = "red";
        senhaCampo.style.borderColor = "red";
    }
})
function logar(email, senha){
    senha = parseInt(senha)
    if(emailCadastrado === email && senhaCadastrado === senha){
        return true;
    }else{
        return false;
    }
}