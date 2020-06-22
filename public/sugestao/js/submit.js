const form = document.querySelector("form");

form.onsubmit = async (e) => {
  e.preventDefault();

  const body = {
    "nome": form.nome.value,
    "email": form.email.value,
    "sugestao": form.sugestao.value,
    "observacao": form.observacao.value
  }

  fetch("https://birdibirdi.herokuapp.com/sugestions/create", {
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "body": JSON.stringify(body)
  })
    .then(response => {
      alert("Sugestão cadastrada com sucesso, aguarde que será avaliada nos próximos dias!")
      window.location.href = window.location.origin;
    })
    .catch(err => {
      alert("Something went wong, try again")
      form.reset();
    });
}