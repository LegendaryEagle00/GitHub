// laços de repetição - for,

var ano = new Date().getFullYear();
for(let i = ano; i >= 1900; i--){
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>" +i+ "</option>";
}

const carros = ["Gol", "Palio", "Uno", "Sandero", "Fiesta", "Celta"];

// document.getElementById('teste').innerHTML = carros; 

var tamanho = carros.length;

for (let i = 0; i < tamanho; i++){
    document.getElementById('teste').innerHTML += carros[i] + "<br>";
}