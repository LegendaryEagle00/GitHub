const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/accounts/login/');

    // Insira seu nome de usuário e senha aqui
    await page.type('[name=username]', 'SEU_NOME_DE_USUARIO');
    await page.type('[name=password]', 'SUA_SENHA');

    // Clique no botão de login
    await page.click('button[type=submit]');

    // Aguarde a página carregar
    await page.waitForNavigation();

    // Insira o nome de usuário que deseja procurar aqui
    await page.type('input[placeholder=Search]', 'NOME_DE_USUARIO_QUE_DESEJA_PROCURAR');

    // Aguarde os resultados da pesquisa aparecerem
    await page.waitForSelector('.drKGC');

    // Clique no primeiro resultado da pesquisa
    await page.click('.drKGC a');

    // Aguarde a página do perfil carregar
    await page.waitForSelector('img[alt=Profile picture]');

    // Obtenha a relação de fotos do usuário
    const photos = await page.$$eval('article a', elements => elements.map(el => el.href));

    for (let i = 0; i < photos.length; i++) {
        // Crie uma pasta para a foto
        fs.mkdirSync(`photo${i}`);

        // Acesse a página da foto
        await page.goto(photos[i]);

        // Obtenha a URL da imagem da foto
        const imgUrl = await page.$eval('article img', img => img.src);

        // Baixe a imagem da foto
        const viewSource = await page.goto(imgUrl);
        fs.writeFile(`photo${i}/photo.jpg`, await viewSource.buffer(), err => {
            if (err) throw err;
            console.log(`photo${i}/photo.jpg saved`);
        });
    }

    // Feche o navegador
    await browser.close();
})();
