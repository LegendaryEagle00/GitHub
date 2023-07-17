/*
    Objetos
Objetos são estruturas que permitem armazenar diversos valores em uma mesma variável, permitindo acessá-los por meio de um nome. 
Objetos são representados por chaves {}.
Os valores dentro do objeto são chamados de propriedades.
    Uma propriedade é uma associação entre um nome (ou chave) e um valor.
    Uma propriedade pode ser uma função, neste caso, ela é chamada de método.
        Ex: 
            const pessoa = { nome: 'João', idade: 20, altura: 1.80, temCNH: true, apelidos: ['Jão', 'J', 'JJ'] }
*/

/* 
Exemplo de objeto na vida real:
    const Carro = {
        marca: 'Fiat',
        modelo: 'Uno',
        cor: 'Vermelho',
        peso: '800kg',
        carro.ligar()
        carro.desligar()
    }
*/

const carro = {
    marca:"Fiat",
    modelo:"Uno", 
    cor:"Vermelho", 
    peso:"800kg", 
    placa:"ABC-1234",
    ano: 2021,
    buzina : function(){alert('Bibi')},
    completo: function(){
        return "A marca é" + this.marca + "e o modelo é" + this.modelo + "e a cor é" + this.cor + "e o peso é" + this.peso + "e a placa é" + this.placa + "e o ano é" + this.ano
    }
}; 
console.log(carro); //acessando o objeto carro inteiro
console.log(carro.marca); //acessando o valor da propriedade marca
console.log(carro["peso"]); //outra forma de acessar o valor de uma propriedade
carro.buzina(); //chamando a função buzina
console.log(carro.completo()); //chamando a função completo