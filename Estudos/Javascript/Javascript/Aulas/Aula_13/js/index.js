/* 
if e else

if (condicao) {
    // codigo
}   
else if (condicao) {
    // codigo
}
else { //
    // codigo
}
*/
/*
var interruptor
function verifica(interruptor){
    if (interruptor == "on") {
    console.log("Ligado");
}else if (interruptor == "off") {
    console.log("Desligado");
}else {
    console.log("Interruptor Quebrado");
}
}
interruptor = "on"
console.log(verifica(interruptor));
interruptor = "off"
console.log(verifica(interruptor));
interruptor = "quebrado"
console.log(verifica(interruptor));
*/

var hora = new Date().getHours();
alert(hora);
if (hora < 12) {
    alert("Bom dia!");
}else if (hora < 18) {
    alert("Boa tarde!");
}else {
    alert("Boa noite!");
}   

function verificar(){
    let nome = document.getElementById("nome").value;
    if (nome == "" || nome == undefined || nome == null) {
        let p = document.getElementById("teste");
        p.innerHTML = "Por favor, digite seu nome!";
        p.style.color = "red";
    }else{
        let p = document.getElementById("teste");
        p.innerHTML = "Olá, " + nome + "!";
        p.style.color = "green";
    }
    
}