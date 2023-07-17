/*
classes em JS
basicamente , as classes sao como "fabricas" para criar objetos
pode se dizer que sao "funcoes especiais" que criam objetos

constructor - metodo especial para criar e inicializar um objeto criado a partir de uma classe

*/
class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    buzina(){
        return this.modelo+" buzinou: Biii";
    }
}

const fiesta = new Carro('Ford', 'Fiesta', 2010);
const gol = new Carro('Volkswagen', 'Gol', 2012);
console.log(gol.buzina());
console.log(fiesta.buzina());
gol.ano = 2014
console.log(gol);