/*
Arrays 

Os Arrays JavaScript sao usado para armazenar varios valores em uma unica variavel. Diferente dos objetos que funcionam como propriedades, os arrays funcionam como indices. O item dele e encontrado pela posicao dele no array. O primeiro item esta na posicao 0, o segundo na posicao 1 e assim por diante.
Imagine um array como uma lista de compras. Voce tem uma lista de itens e cada item tem uma posicao na lista. Voce pode adicionar ou remover itens da lista, voce pode ate mesmo mudar um item da lista, mas a posicao dele na lista nao muda. 
 Ex: 
    var lista = ["Ovo", "Farinha", "Corante", "Massa"];

    A lista[0] e o primeiro item da lista, "Ovo".
    A lista[1] e o segundo item da lista, "Farinha".
    A lista[2] e o terceiro item da lista, "Corante".
    A lista[3] e o quarto item da lista, "Massa".
    A lista[4] e o quinto item da lista, como nao existe um quinto item, o valor e undefined.
    A lista[lista.length] e o ultimo item da lista, "Massa".

*/



var item1 = "Ovo";
var item2 = "Farinha";
var item3 = "Corante";
var item4 = "Massa";


const lista =["Ovo", "Farinha", "Corante", "Massa"];
let x = lista[3];
alert(x);
alert(lista[0]);

lista[0] = "Cafe";
alert(lista[0]);

console.log(lista);

const pessoa = ["Otavio", "Augusto", 23, "Estudante"]; // Array
//  const pessoa = {nome;"Otavio", sobrenome:"Augusto", idade:23}; // Objeto
//  pessoa.nome = "Otavio";   
//  pessoa[0] = "Otavio";
alert(pessoa.length);

alert(pessoa[0]);

alert(pessoa[pessoa.length-1]);

pessoa.push("otavio.augusto00@hotmail.com");
console.log(pessoa);

pessoa[pessoa.length] = "Solteiro";
console.log(pessoa);
//
pessoa[9] = "Brasil";
alert(pessoa[7]);
//
alert(Array.isArray(pessoa)); // true  
const x1 = "Otavio";
alert(Array.isArray(x1)); // false