/*
    Operadores: 
Arítiméticos:
    + Adição / Concatenação de strings 
    - Subtração 
    * Multiplicação 
    / Divisão 
    ** Potenciação 
    % Resto da divisão 
    ++ Incremento 
    -- Decremento 

Atribuição:
    = Atribuição
    += Atribuição de adição 
    -= Atribuição de subtração 
    *= Atribuição de multiplicação 
    /= Atribuição de divisão 
    **= Atribuição de potenciação 
    %= Atribuição de resto da divisão

Comparação:
    == Igualdade (valor)
    === Igualdade estrita (valor e tipo)
    != Desigualdade (valor)
    !== Desigualdade estrita (valor e tipo)
    > Maior que
    >= Maior ou igual que
    < Menor que
    
Lógicos:
    && AND (e) Retorna TRUE se todos os operadores forem TRUE
    || OR (ou) Retorna TRUE se um dos operadores for TRUE
    ! NOT (não) Retorna TRUE se o operador for FALSE e vice-versa 
*/

//Operadores Matematicos
var valor1, valor2, total;
valor1 = 5;
console.log('valor 1 = ' + valor1);
valor2 = 2;
console.log('valor 2 = ' + valor2);
total = valor1 + valor2;
console.log(total);

total = valor1/valor2;
console.log(total);

total = ++valor1;
console.log(total);

total = --valor1;
console.log(total);

//Operadores de Atribuição

var valor3, valor4;
valor3 = 5;
console.log('valor 3 = ' + valor3);
valor4 = 2;
console.log('valor 4 = ' + valor4);

//valor3 = valor3 + valor4;
valor3 += valor4;
console.log(valor3);

valor4 -= valor3;
console.log(valor4);

valor3 *= valor4;
console.log(valor3);

valor4 /= valor3;
console.log(valor4);

//Reseta os valores
valor3 = 5;
valor4 = 2;


valor3 **= valor4;
console.log(valor3);

valor4 %= valor3;
console.log(valor4);


//Operadores de concatenação
var nome, sobrenome, nomeCompleto;
nome = 'Otavio';
sobrenome = 'Augusto';
nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

//Operadores de comparação
var valor5, valor6, total; 
valor5 = 5;
valor6 = 2;
total = (valor5 == valor6); //true ou false
console.log(total); //false
valor5 = 2;
total = (valor5 == valor6); //true ou false
console.log(total); //true

valor5 = "2"; //string
total = (valor5 == valor6); //true ou false - compara o valor
console.log(total); //true 
total = (valor5 === valor6); //true ou false - compara o tipo de dado
console.log(total); //false - pois o valor5 é uma string e o valor6 é um number

total = (valor5 != valor6); //true ou false - compara o valor 
console.log(total); //false  - pois o valor5 é igual ao valor6
valor5 = 5; 
total = (valor5 != valor6); //true ou false - compara o valor 
console.log(total); //true  - pois o valor5 é diferente do valor6

total = (valor5 !== valor6); //true ou false - compara o tipo de dado
console.log(total); //true  - pois o valor5 é um number e o valor6 é um number

total = (valor5 > valor6); //true ou false  
console.log(total); //true  - pois o valor5 é maior que o valor6

total = (valor5 >= valor6); //true ou false 
console.log(total); //true  - pois o valor5 é maior ou igual que o valor6

total = (valor5 < valor6); //true ou false
console.log(total); //false  - pois o valor5 não é menor que o valor6

total = (valor5 <= valor6); //true ou false
console.log(total); //false  - pois o valor5 não é menor ou igual que o valor6

//Operadores ternários
var idade,maioridade; 
idade = 17; 
maioridade = (idade >= 18) ? 'Maior de idade' : 'Menor de idade'; //true ou false 
console.log(maioridade); //Menor de idade   
// if(idade >= 18){ //true ou false 
//     maioridade = 'Maior de idade';
// }else{
//     maioridade = 'Menor de idade';
// }
// console.log(maioridade); //Menor de idade

//Operadores lógicos
var resultado;

//AND (e) Retorna TRUE se todos os operadores forem TRUE 
resultado = (idade >= 60 && idade <= 70); //true ou false
console.log(resultado); //false

//OR (ou) Retorna TRUE se um dos operadores for TRUE
resultado = (idade >= 60 || idade <= 70); //true ou false
console.log(resultado); //true

//NOT (não) Retorna TRUE se o operador for FALSE e vice-versa 
resultado = !(idade==65); //true ou false
console.log(resultado); //true

//Operadores de incremento e decremento
var valor7, valor8;
valor7 = 5;
valor8 = 2;

//valor7 = valor7 + 1;
console.log(valor7++); //5
console.log(valor7); //6
//valor7 = valor7 + 1;
console.log(++valor7); //7
console.log(valor7); //7
//valor7 = valor7 - 1;
console.log(valor7--); //7
console.log(valor7); //6
//valor7 = valor7 - 1;  
console.log(--valor7); //5
console.log(valor7); //5


