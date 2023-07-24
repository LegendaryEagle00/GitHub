// Função para preencher o formulário com valores de exemplo
/*function preencherFormularioExemplo() {
    document.getElementById("masculino").checked = true;
    document.getElementById("idade").value = 23;
    document.getElementById("altura").value = 175;
    document.getElementById("peso").value = 92;
    document.getElementById("bf").value = 16;
    document.getElementById("diasTreino").value = 5;
    document.getElementById("treino").value = 120;
    document.getElementById("intensidadeTreino").value = "treinoModerado";
    document.getElementById("aerobicoSemana").value = 3;
    document.getElementById("duracaoAerobico").value = 10;
    document.getElementById("intensidadeAerobico").value = "treinoAerobicoModerado";
    document.getElementById("objetivo").value = "cuttingModerado";
    document.getElementById("proteinas").value = 1.2;
    document.getElementById("Gorduras").value = 0.5;
    document.getElementById("carboidratos").value = 0;
}

// Preencher o formulário de exemplo quando a página for carregada
window.onload = function () {
    preencherFormularioExemplo();
};


*/

// Autor: Otavio Augusto
function calcularAgua(peso) {
    var agua = peso * 0.45;
    return agua;
}

function taxaMetabolicaBasal(peso, altura, idade, sexo) {
    var tmb;
    if (sexo === "masculino") {
        tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
    } else if (sexo === "feminino") {
        tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
    } else {
        alert("Selecione o sexo");
        return 0;
    }
    return tmb;
}

function calculoGastoAerobico(aerobicoSemana, duracaoAerobico, intensidadeAerobico) {
    var gastoAerobico = 0;
    if (intensidadeAerobico === "treinoAerobicoLeve") {
        gastoAerobico = 5 * duracaoAerobico * aerobicoSemana;
    } else if (intensidadeAerobico === "treinoAerobicoModerado") {
        gastoAerobico = 7 * duracaoAerobico * aerobicoSemana;
    } else if (intensidadeAerobico === "treinoAerobicoIntenso") {
        gastoAerobico = 9 * duracaoAerobico * aerobicoSemana;
    } else {
        alert("Selecione a intensidade do treino aeróbico");
    }
    return gastoAerobico;
}

function calculoGastoTreino(treino, intensidadeTreino, diasTreino) {
    var gastoTreino = 0;
    if (intensidadeTreino === "treinoLeve") {
        gastoTreino = 1.2 * treino * diasTreino;
    } else if (intensidadeTreino === "treinoModerado") {
        gastoTreino = 2.3 * treino * diasTreino;
    } else if (intensidadeTreino === "treinoIntenso") {
        gastoTreino = 4.7 * treino * diasTreino;
    } else {
        alert("Selecione a intensidade do treino");
    }
    return gastoTreino;
}

function calculoGastoTotal(tmb, gastoAerobico, gastoTreino) {
    var gastoTotal = tmb + gastoAerobico + gastoTreino;
    return gastoTotal;
}

function caloriasParaTrabalhar(objetivo, gastoTotal) {
    var caloriasParaTrabalhar = 0;
    switch (objetivo) {
        case "cuttingLeve":
            caloriasParaTrabalhar = gastoTotal - (gastoTotal * 0.10);
            break;
        case "cuttingModerado":
            caloriasParaTrabalhar = gastoTotal - (gastoTotal * 0.15);
            break;
        case "cuttingAgressivo":
            caloriasParaTrabalhar = gastoTotal - (gastoTotal * 0.20);
            break;
        case "manutencao":
            caloriasParaTrabalhar = gastoTotal;
            break;
        case "bulkingLeve":
            caloriasParaTrabalhar = gastoTotal + (gastoTotal * 0.05);
            break;
        case "bulkingModerado":
            caloriasParaTrabalhar = gastoTotal + (gastoTotal * 0.10);
            break;
        case "bulkingAgressivo":
            caloriasParaTrabalhar = gastoTotal + (gastoTotal * 0.15);
            break;
        default:
            alert("Selecione o objetivo");
    }
    return caloriasParaTrabalhar;
}

function calculoMacronutrientes(caloriasParaTrabalhar, proteinas, gorduras, carboidratos, peso) {
    var macronutrientes = {
        proteinas: 0,
        gorduras: 0,
        carboidratos: 0
    };
    var caloriasParaTrabalhar2 = caloriasParaTrabalhar;
    macronutrientes.proteinas = (proteinas * peso);
    macronutrientes.gorduras = (gorduras * peso);
    macronutrientes.carboidratos = ((caloriasParaTrabalhar2 - ((macronutrientes.proteinas * 4) + (macronutrientes.gorduras * 9))) / 4);
    return macronutrientes;
}

function calcular() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var idade = parseInt(document.getElementById("idade").value);
    var sexo = document.querySelector('input[name="genero"]:checked').value;
    var treino = parseInt(document.getElementById("treino").value);
    var intensidadeTreino = document.getElementById("intensidadeTreino").value;
    var aerobicoSemana = parseInt(document.getElementById("aerobicoSemana").value);
    var duracaoAerobico = parseInt(document.getElementById("duracaoAerobico").value);
    var intensidadeAerobico = document.getElementById("intensidadeAerobico").value;
    var objetivo = document.getElementById("objetivo").value;
    var proteinas = parseFloat(document.getElementById("proteinas").value);
    var gorduras = parseFloat(document.getElementById("Gorduras").value);
    var carboidratos = parseFloat(document.getElementById("carboidratos").value);
    var diasTreino = parseInt(document.getElementById("diasTreino").value);

    var agua = (calcularAgua(peso) / 10);
    var tmb = taxaMetabolicaBasal(peso, altura, idade, sexo);
    var gastoAerobico = calculoGastoAerobico(aerobicoSemana, duracaoAerobico, intensidadeAerobico);
    var gastoTreino = calculoGastoTreino(treino, intensidadeTreino, diasTreino);
    var gastoTotal = calculoGastoTotal(tmb, gastoAerobico, gastoTreino);
    var caloriasParaTrabalharResultado = caloriasParaTrabalhar(objetivo, gastoTotal);
    var macronutrientes = calculoMacronutrientes(caloriasParaTrabalharResultado, proteinas, gorduras, carboidratos, peso);
    document.getElementById("agua").innerHTML = agua.toFixed(2) + ' Litros de água por dia';
    document.getElementById("tmb").innerHTML = tmb.toFixed(2) + ' Taxa Metabólica Basal';
    document.getElementById("gastoAerobico").innerHTML = gastoAerobico.toFixed(2) + ' Kcal gasto do Aeróbico por dia';
    document.getElementById("gastoTreino").innerHTML = gastoTreino.toFixed(2) + ' Kcal gasto do Treino por dia';
    document.getElementById("gastoTotal").innerHTML = gastoTotal.toFixed(2) + ' Kcal gasto por dia';
    document.getElementById("caloriasParaTrabalhar").innerHTML = caloriasParaTrabalharResultado.toFixed(2) + ' Kcal por dia';
    document.getElementById("proteinasResultado").innerHTML = macronutrientes.proteinas.toFixed(2)+ ' Gramas de Proteina' ;
    document.getElementById("gordurasResultado").innerHTML = macronutrientes.gorduras.toFixed(2)+ ' Gramas de Gordura';
    document.getElementById("carboidratosResultado").innerHTML = macronutrientes.carboidratos.toFixed(2) + ' Gramas de Carboidrato';
}