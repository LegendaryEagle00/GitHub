function verificaCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();
    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "verde":
            document.body.style.backgroundColor = "green";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        default:
            document.body.style.backgroundColor = "white";
            document.getElementById("teste").innerHTML = "Nenhuma cor disponível! Escolha entre azul, verde ou vermelho.";
            break;
    }
// o switch é uma estrutura de decisão que permite a seleção de um bloco de código a ser executado a partir de uma condição, ele compara de forma estrita (===) o valor da variável com os valores de cada case, e executa o bloco de código correspondente ao valor que for igual ao valor da variável.
}
function diaDaSemana(){
    var dia = new Date().getDay();
    console.log(dia);
    switch (dia) {
        case 0:
            document.getElementById("teste").innerHTML = "Domingo";
            break;
        case 1:
            document.getElementById("teste").innerHTML = "Segunda-feira";
            break;
        case 2:
            document.getElementById("teste").innerHTML = "Terça-feira";
            break;
        case 3:
            document.getElementById("teste").innerHTML = "Quarta-feira";
            break;
        case 4:
            document.getElementById("teste").innerHTML = "Quinta-feira";
            break;
        case 5:
            document.getElementById("teste").innerHTML = "Sexta-feira";
            break;
        case 6:
            document.getElementById("teste").innerHTML = "Sábado";
            break;
        default:
            document.getElementById("teste").innerHTML = "Dia inválido";
            break;
    }
}