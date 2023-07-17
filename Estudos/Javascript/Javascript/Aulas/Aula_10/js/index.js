/*
Eventos 

- Eventos são ações que o usuário faz na página
- Eventos são detectados pelo navegador
- Eventos são utilizados para criar interatividade

Existem muitos eventos. Veja os mais utilizados:
    onclick - quando o usuário clica em um elemento
    ondblclick - quando o usuário dá dois cliques em um elemento
    onmouseover - quando o usuário passa o mouse sobre um elemento
    onmouseout - quando o usuário tira o mouse de um elemento
    onmousemove - quando o usuário move o mouse sobre um elemento
    onmouseup - quando o usuário solta o botão do mouse sobre um elemento
    onmousedown - quando o usuário clica sobre um elemento
    onfocus - quando o usuário entra em um elemento
    onchange - quando o usuário altera o valor de um elemento
    onblur - quando o usuário sai de um elemento
    onkeydown - quando o usuário pressiona uma tecla
    onkeypress - quando o usuário pressiona e solta uma tecla
    onkeyup - quando o usuário solta uma tecla sobre um elemento
    onload - quando a página termina de carregar (é colocado no body) 
    onunload - quando o usuário sai da página
    onsubmit - quando o usuário envia um formulário
    onreset - quando o usuário clica no botão reset de um formulário
    onselect - quando o usuário seleciona um texto em um input ou textarea
    onscroll - quando o usuário rola a página
    onresize - quando o usuário redimensiona a janela do navegador
    onerror - quando ocorre um erro no carregamento da página
    onabort - quando o usuário aborta o carregamento da página
    oncontextmenu - quando o usuário clica com o botão direito do mouse
    ondrag - quando o usuário arrasta um elemento
    ondragend - quando o usuário termina de arrastar um elemento
    ondragenter - quando o usuário entra com um elemento em uma área de drop
    ondragleave - quando o usuário sai de uma área de drop
    ondragover - quando o usuário move um elemento sobre uma área de drop
    ondragstart - quando o usuário começa a arrastar um elemento
    ondrop - quando o usuário solta um elemento em uma área de drop
    onbeforeunload - quando o usuário sai da página (IE e Firefox)
    onhashchange - quando o usuário altera a âncora da página (IE e Firefox)
    onmessage - quando a página recebe uma mensagem (IE e Firefox)
    oninput - quando o usuário insere um valor em um elemento (IE9+)
    oninvalid - quando um elemento é inválido (IE9+)
    oncanplay - quando o navegador pode começar a reproduzir um vídeo (IE9+)
    oncanplaythrough - quando o navegador pode reproduzir um vídeo até o final (IE9+)
    ondurationchange - quando a duração de um vídeo é alterada (IE9+)
    onemptied - quando um vídeo é esvaziado (IE9+)
    onended - quando um vídeo chega ao fim (IE9+)
    onerror - quando ocorre um erro no carregamento de um vídeo (IE9+)
    onloadeddata - quando os dados de um vídeo são carregados (IE9+)
    onloadedmetadata - quando os metadados de um vídeo são carregados (IE9+)
    onloadstart - quando o navegador começa a carregar um vídeo (IE9+)
    onpause - quando um vídeo é pausado (IE9+)
    onplay - quando um vídeo é iniciado (IE9+)
    onplaying - quando um vídeo é iniciado (IE9+)
    */

function eventoClick(){
    alert("Clicou!");
    document.body.style.backgroundColor = "purple";
}
function eventoDblClick(){
    alert("Duplo Clique!");
    document.body.style.backgroundColor = "green";
}
function viraVermelho(){
    let area = document.getElementById("area"); 
    area.style.backgroundColor = "red";
}
function viraAzul(){
    let area = document.getElementById("area"); 
    area.style.backgroundColor = "blue";
}
function adicionaTexto(){
    let area = document.getElementById("area"); 
    area.append('O mouse moveu');
}
function limpaTexto(){
    document.getElementById("campoTexto").value = "";
}
function mudou(){
    console.log('Mudou!');
}
function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}
