function calcularPorcentagemGorduraMasculino(pescoco, abdomen, altura) {
    var abdomenPescoco = (abdomen - pescoco);
    const resultado = 86.010 * Math.log10(abdomenPescoco) - 70.041 * Math.log10(altura) + 36.76;
    return Math.max(resultado, 0); // Garante que o resultado não seja negativo
}

function calcularPorcentagemGorduraFeminino(cintura, quadril, pescoco, altura) {
    const resultado = 163.205 * Math.log10(cintura + quadril - pescoco) - 97.684 * Math.log10(altura) - 78.387;
    return Math.max(resultado, 0); // Garante que o resultado não seja negativo
}

function calcularBF() {
    // Capturar o valor do gênero selecionado
    const generoSelecionado = document.querySelector('input[name="genero"]:checked').value;

    // Capturar os valores dos campos
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const pescoco = parseFloat(document.getElementById('pescoco').value);
    const cintura = parseFloat(document.getElementById('cintura').value);
    const quadril = parseFloat(document.getElementById('quadril').value);
    const abdomen = parseFloat(document.getElementById('abdomen').value);

    // Verificar se todos os campos foram preenchidos com valores válidos maiores que zero
    if (!generoSelecionado || isNaN(peso) || isNaN(altura) || isNaN(pescoco) || isNaN(cintura) || isNaN(quadril) || isNaN(abdomen) || peso <= 0 || altura <= 0 || pescoco <= 0 || cintura <= 0 || quadril <= 0 || abdomen <= 0) {
        alert('Preencha todos os campos com valores válidos maiores que zero antes de calcular o BF.');
        return;
    }

    // Realizar o cálculo do BF de acordo com o gênero selecionado
    let bf;
    if (generoSelecionado === 'masculino') {
        bf = calcularPorcentagemGorduraMasculino(pescoco, abdomen, altura);
    } else if (generoSelecionado === 'feminino') {
        bf = calcularPorcentagemGorduraFeminino(cintura, quadril, pescoco, altura);
    } else {
        alert('Selecione o gênero antes de calcular.');
        return;
    }

    // Calcular a massa magra e a gordura
    const massaMagra = peso - (peso * (bf/100));
    const gordura = peso * (bf/100);

    // Exibir os resultados
    document.getElementById('massa_magra').innerText = `Massa Magra: ${massaMagra.toFixed(2)} kg`;
    document.getElementById('gordura').innerText = `Gordura: ${gordura.toFixed(2)} kg`;
    document.getElementById('bf').innerText = `BF: ${(bf ).toFixed(2)}%`;
}
