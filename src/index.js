const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const port = process.env.PORT || 3333;

const path = require('path');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.use('/', express.static(path.resolve(__dirname, "..", "public")));
app.use('/img', express.static(path.resolve(__dirname, "..", "images")));

app.listen(port, () => console.log("Running at port " + port));