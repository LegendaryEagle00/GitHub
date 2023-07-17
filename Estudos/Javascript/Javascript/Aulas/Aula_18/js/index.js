/*
Manipulando Datas em JS
*/
// Comando Basico para pegar a data atual
let data = new Date();
console.log(data);

// Comando Basico para pegar o ano atual
let ano = data.getFullYear();
console.log(ano);

// Comando Basico para pegar o mes atual de 0 a 11 sendo 0 janeiro e 11 dezembro
let mes = data.getMonth();
console.log(mes);

// Comando Basico para pegar o dia atual
let dia = data.getDate();
console.log(dia);

// Comando Basico para pegar a hora atual
let hora = data.getHours();
console.log(hora);

// Comando Basico para pegar o minuto atual
let minuto = data.getMinutes();
console.log(minuto);

// Comando Basico para pegar o segundo atual
let segundo = data.getSeconds();
console.log(segundo);

// Comando Basico para pegar o milisegundo atual
let milisegundo = data.getMilliseconds();
console.log(milisegundo);

// Comando Basico para pegar o dia da semana atual
let diaSemana = data.getDay();
console.log(diaSemana);

const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto","Setembro","Outubro","Novembro","Dezembro"];
console.log(mesesDoAno[mes]);
console.log("Hoje é dia "+dia+" de "+mesesDoAno[mes]+" de "+ano+ ", agora são "+hora+":"+minuto+":"+segundo+"");
