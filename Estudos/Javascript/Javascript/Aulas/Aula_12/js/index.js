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
const pessoa = ["Otavio", "Augusto", 23, "Estudante"]; // Array
//  const pessoa = {nome;"Otavio", sobrenome:"Augusto", idade:23}; // Objeto
//  pessoa.nome = "Otavio";   
//  pessoa[0] = "Otavio";
pessoa.push("otavio.augusto00@hotmail.com");
pessoa[pessoa.length] = "Solteiro";
console.log(pessoa);
//
// Metodos de Array
//

//document.getElementById("teste").innerHTML = pessoa
document.getElementById("teste").innerHTML = pessoa.join(" - ")

pessoa.pop(); // Remove o ultimo elemento do array
document.getElementById("teste").innerHTML = pessoa.join(" - ")

pessoa.push("Brasileiro")
document.getElementById("teste").innerHTML = pessoa.join(" - ")

pessoa.shift(); // Remove o primeiro elemento do array
document.getElementById("teste").innerHTML = pessoa.join(" - ")

pessoa.unshift("Otavio"); // Adiciona um elemento no inicio do array
document.getElementById("teste").innerHTML = pessoa.join(" - ")

//delete pessoa[1]; // Deleta o elemento do array
//document.getElementById("teste").innerHTML = pessoa.join(" - ") // undefined

pessoa.splice(1, 0, "Item Adicionado 1", "Item Adicionado 2"); // Adiciona um elemento no array
document.getElementById("teste").innerHTML = pessoa.join(" - ") 
pessoa.splice(1, 2); // Remove um elemento no array
document.getElementById("teste").innerHTML = pessoa.join(" - ")
console.log(pessoa.length);

const lista1 = ["Ovo", "Farinha", "Corante", "Massa"];  // Array    
const lista2 = ["suco", "agua", "refrigerante","carne"];  // Array
const superlista = lista1.concat(lista2); // Concatena os arrays
const lista3 = ["Salgadinho"];  // Array
console.log(superlista);
const superlista2 = lista1.concat(lista2, lista3); // Concatena os arrays
console.log(superlista2);
console.log(lista1);

const jogadores = ["Biro Biro", "Ribamar", "Pele", "Maradona",];
console.log(jogadores);
const craques = jogadores.slice(2); // Corta o array
console.log(craques);

jogadores.push("Messi");
jogadores.push("Cristiano Ronaldo");
jogadores.push("Neymar");
jogadores.push("Vampeta");
jogadores.push("Dimitri");

console.log(jogadores);

const craques2 = jogadores.slice(2, 5); // Corta o array
console.log(craques2);

const jogOrdem = jogadores.sort(); // Ordena o array
console.log(jogOrdem);
const jogOrdem2 = jogadores.reverse(); // Inverte o array
console.log(jogOrdem2);

const num = [1, 40, 2, 9, 5, 100, 7, 0, 9];
console.log(num);
const numOrdem = num.sort(); // Ordena o array
console.log(numOrdem); // O sort ordena os numeros como se fossem strings
const numOrdem2 = num.reverse(); // Inverte o array
console.log(numOrdem2);// O reverse inverte os numeros como se fossem strings

//Para ordenar numeros, e necessario passar uma funcao como parametro
const numOrdem3 = num.sort(function(a, b){return a - b}); // Ordena o array de forma crescente 
console.log(numOrdem3); //
const numOrdem4 = num.sort(function(a, b){return b - a}); // Ordena o array de forma decrescente
console.log(numOrdem4); //

// funcao para encontrar o maior e o menor numero de um array
function MaiorNumero(array){
    return Math.max.apply(null, array);
}
console.log(MaiorNumero(num));

function MenorNumero(array){
    return Math.min.apply(null, array);
}
console.log(MenorNumero(num));

// funcao para filtrar numeros maiores que 20
const maior20 = num.filter(filtragem);
function filtragem(value, index, array){
    return value > 20;
}
console.log(maior20);