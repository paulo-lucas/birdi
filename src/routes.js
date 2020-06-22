const express = require('express');
const routes = express.Router();

const Bird = require("./models/bird");
const Sugestion = require("./models/sugestion");
const { response } = require('express');

routes.get('/birds', async (req, res) => {
    await Bird.find()
        .then(query => {
            query.forEach(bird => {
                bird.src = `https://birdibirdi.herokuapp.com/img/${bird.src}`;
            })
            return res.status(200).json(query);
        })
        .catch(err => {
            return res.status(400).send(err);
        })
});

routes.post('/birds/create', async (req, res) => {
    const {
        nome,
        nomeCientifico,
    } = req.body;

    if (!nome || !nomeCientifico) {
        return res.status(400).send({
            error: 'Missing information'
        });
    }

    const bird = new Bird(req.body);

    await bird.save()
        .then(createdBird => {
            return res.send(createdBird);
        });
});

routes.get("/sugestions", async (req, res) => {
    await Sugestion.find()
        .then(query => {
            return res.status(200).json(query);
        })
        .catch(err => {
            return res.status(400).send(err);
        })
})

routes.post('/sugestions/create', async (req, res) => {
    const {
        nome,
        email,
        sugestao
    } = req.body;

    if (!nome || !email || !sugestao) {
        return res.status(400).send({
            error: 'Missing information'
        });
    }

    const sugestion = new Sugestion(req.body);

    await sugestion.save()
        .then(createdSugestion => {
            return res.send(createdSugestion);
        });
});

module.exports = routes;