//cria um itens do menu
function iteraMenu(passaro) {
    var menu = document.querySelector("#menu");
    var botao = criaBotao();
    var div = criaDiv(passaro.nome);
    botao.appendChild(div);
    menu.appendChild(botao);
}

//evento de transição dos botões
function fadeInOutBotoes() {
    const check = document.querySelector("#check:checked");
    var opcoes = document.querySelectorAll(".botao-opcao");
    var i = 0;
    var id = setInterval(function () {
        if (check)
            opcoes[i].classList.add("botao-visivel");
        else
            opcoes[i].classList.remove("botao-visivel");
        i++;
        if (i == opcoes.length) {
            fadeInOutBarra();
            clearInterval(id);
        }
    }, 50);
}

function criaBotao() {
    var botao = document.createElement("button");
    botao.classList.add("botao-opcao");
    return botao;
}

function criaDiv(nomePassaro) {
    var div = document.createElement("div");
    div.classList.add("opcao");
    div.innerHTML = nomePassaro;
    return div;
}

function fadeInOutBarra() {
    const check = document.querySelector("#check:checked");
    var barra = document.querySelectorAll(".barra")

    if (check)
        barra[0].classList.add("barra-visivel");
    else
        barra[0].classList.remove("barra-visivel");
}

function criaSugestao() {
    const menu = document.querySelector("#menu");
    const botao = criaBotao();
    botao.innerHTML = `
        <div class="opcao sugerir">
            <a href="/sugestao" target="_self">
                <img src="ico/add.png" alt="Sugerir" />
                Sugerir
            </a>
        </div>
    `

    menu.appendChild(botao);
}