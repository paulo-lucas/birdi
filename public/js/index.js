
(async function () {
  const response = await fetch(`https://birdibirdi.herokuapp.com/birds`)

  await response.json()
    .then(data => {
      // cria itens do menu
      data.forEach(iteraMenu);

      // adiciona evento que altera as informações da tela
      data.forEach(adicionaEvento);

      //cria botão de ir para a pagina de sigestao
      criaSugestao();

      // Seleciona o primeiro da lista
      document.querySelectorAll(".botao-opcao")[0].click();
    });
})()

var check = document.querySelector("#check");

// setta efeito de transição fade in e out dos botões
check.addEventListener("change", fadeInOutBotoes);