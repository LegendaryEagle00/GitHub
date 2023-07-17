/*
    Funcoes; 
- Funcoes sao blocos de codigo que podem ser executados e reutilizados. 
- Funcoes podem receber parametros e retornar valores. 
- Funcoes sao objetos.
E como uma fabrica, onde voce passa os ingredientes e ela te retorna um produto final.

Pode ser encarado como um mini programa dentro do programa principal.
*/

/*
Funcoes podem ser declaradas de 4 formas diferentes: 
- Function Declaration
- Function Expression
- Arrow Function
- Constructor Function
*/

// Function Declaration
// Funcao soma  
function somar(valor1, valor2) {
    return valor1 + valor2;
}

    document.getElementById("texto").innerHTML = somar(10, 20);

var total = somar(10, 30);
console.log(total); // 40

//funcao cotação do dolar
function real_Para_Dolar(valor,cotacao_do_dolar){
    return valor / cotacao_do_dolar;
}
console.log(real_Para_Dolar(10,5.08));

// Passando valores por variaveis
var valorReal = 7.98;
var valorDolar = 5.09;
console.log(real_Para_Dolar(valorReal,valorDolar));
console.log("O valor de " + valorReal + " reais em dolar é " + real_Para_Dolar(valorReal,valorDolar) + " dolares, cotacao do dolar " + valorDolar);

// funcao para alerta
function AlertaHello(){
    alert("Hello World");
}

// função para converter fahrenheit para celsius
function paraCelsius(valorfahrenheit){
    return (valorfahrenheit - 32) * 5 / 9;
}

var x = paraCelsius(79);
alert('a temperatura em celsius é ' + x);

function minhaFuncao() {
    var x = 20;
}