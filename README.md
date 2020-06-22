# Birdi

Birdi é um projeto que tenta ir além de um simples catálogo de pássaros e busca a **interação** com o usuário/observador de aves.

## Acesso

Temporariamente, a aplicação web se encontra [aqui](https://birdibirdi.herokuapp.com/).

## Páginas

A aplicação versão usuário se encontra na [rota inicial ("/") do projeto](https://birdibirdi.herokuapp.com/) , enquanto a página de um possível administrador se encontra na [rota ("/admin")](https://birdibirdi.herokuapp.com/admin).

É claro que ainda não existe nenhum tipo de autorização, seja para o usuário ou para o administrador.

## Tecnologias

A interface web foi construida com **Vanilla.js** e a api com **Node.js** e **Express.js**.

O banco utilizado foi MongoDB, através da plataforma [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

O deploy foi feito pelo [Heroku](https://heroku.com).

## API

A API construida foi bem simples, conta com 4 rotas básicas.

- Listar pássaros:

````HTTP
GET /birds HTTP/1.1
Host: birdibirdi.herokuapp.com
````

- Incluir novo pássaro:

````HTTP
POST /birds/create HTTP/1.1
Content-Type: application/json
Host: birdibirdi.herokuapp.com
Content-Length: 699

    {
        "nome":  "Nome Popular",
        "nomeCientifico": "Nome Científico",
        "descobrimento": "Referência do descobrimento",
        "familia": "Família",
        "descricao": "Descrição curta",
        "habitat": "Habitat",
        "alimentacao": "Alimentação",
        "src": "Nome do arquivo de imagem"
    }
````

**Obs:** por enquanto existem apenas algumas [imagens pré definidas](https://github.com/paulo-lucas/birdi/tree/master/images), ainda não foi implementado o upload de imagens, deixar o campo *src* em branco irá definir a imagem do pássaro como o template padrão.

- Listar sugestões:

````HTTP
GET /sugestions HTTP/1.1
Host: birdibirdi.herokuapp.com
````

- Incluir nova sugestão:

````HTTP
POST /sugestions/create HTTP/1.1
Content-Type: application/json
Host: birdibirdi.herokuapp.com
Content-Length: 257

{
	"nome": "Nome do demandante",
	"email": "email do demandante",
	"sugestao": "Nome popular ou científico da ave",
	"observacao": "Observação (opcional)"
}
````

## Contribuindo
Todos os pull requests são bem vindos.