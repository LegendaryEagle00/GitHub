const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');

// URL da página que você deseja extrair o título
const url = 'https://webpack.js.org/';

// Função para extrair o título da página
async function extractTitle(url) {
    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        const title = $('title').text();

        return title;
    } catch (error) {
        throw new Error(`Erro ao extrair título da página: ${error.message}`);
    }
}

// Função para salvar o título em um arquivo de texto
function saveTitleToFile(title) {
    fs.writeFile('titulo.txt', title, (err) => {
        if (err) {
            throw new Error(`Erro ao salvar título no arquivo: ${err.message}`);
        }
        console.log('Título salvo com sucesso em "titulo.txt".');
    });
}

// Execução do script
extractTitle(url)
    .then((title) => saveTitleToFile(title))
    .catch((error) => console.error(error));
