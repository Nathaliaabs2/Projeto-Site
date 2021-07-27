var nome = prompt("Qual é o seu nome?")
alert(nome + " bem vinde!")
document.getElementById("botaoEnviar").addEventListener("click", Validaformulario)

function Validaformulario(){
 if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("tel").value != "") {
 alert("Prontinho! Você receberá as novidades por email.")

 }else{
 alert("Por favor, preencha os campos nome e email!")
 }
}