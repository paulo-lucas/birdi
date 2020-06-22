const mongoose = require('../database');
const Schema = mongoose.Schema;

const SugestaoSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  sugestao: {
    type: String,
    required: true
  },
  observacao: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const Sugestao = mongoose.model('Sugestion', SugestaoSchema);

module.exports = Sugestao;