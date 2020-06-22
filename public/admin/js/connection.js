fetch("https://birdibirdi.herokuapp.com/sugestions", {
  "method": "GET"
})
  .then(response => {
    response.json()
      .then(data => {
        data.forEach(createCard)
      });
  })
  .catch(err => {
    console.error(err);
  });

function createCard(item) {
  const container = document.querySelector(".container");
  const div = document.createElement("div");

  div.classList.add("card");

  div.innerHTML = `
    <h2 class="sugestao">${item.sugestao}</h2>
    <p class="dados">${item.nome} | ${item.email}</p>
    <p class="obs-title">Observação:</p>
    <p class="obs">${item.observacao}</p>
  `

  container.appendChild(div);
}