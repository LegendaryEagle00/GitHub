/* 
JSON
JavaScript Object Notation

É um formato de dados, e não um objeto
E basicamente é um objeto em formato de texto e o contrario tambem é verdadeiro

ele e usado principalmente para fazer a comunicação entre sistemas de forma simples e leve, ja que ele é um formato de texto e é facil de ser lido e interpretado por qualquer linguagem de programação

para criar um objeto em JSON é simples, basta criar um objeto normalmente e depois converter ele para JSON

para trabalhar com JSON é necessario importar a biblioteca JSON

para trabalhar com JSON no JS é necessario usar o metodo JSON.stringify() para converter um objeto para JSON e o metodo JSON.parse() para converter um JSON para objeto

JSON.stringify() -> converte um objeto para JSON
JSON.parse() -> converte um JSON para objeto

*/
function buscarCep(){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open("GET", "https://viacep.com.br/ws/"+input+'/json/');
    ajax.send();
    ajax.onload = function(){
        document.getElementById('texto').innerHTML = this.responseText;
    }
}
