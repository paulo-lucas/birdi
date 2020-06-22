const mongoose = require('../database');
const Schema = mongoose.Schema;

const BirdSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  nomeCientifico: {
    type: String,
    unique: true,
    required: true,
  },
  descobrimento: {
    type: String
  },
  familia: {
    type: String
  },
  descricao: {
    type: String
  },
  habitat: {
    type: String
  },
  alimentacao: {
    type: String
  },
  src: {
    type: String,
    default: "template.png"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const Bird = mongoose.model('Bird', BirdSchema);

module.exports = Bird;