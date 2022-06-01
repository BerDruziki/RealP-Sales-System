const mongoose = require ('mongoose');

const produtoSchema = mongoose.Schema({
   codigo: Number,
   nome: String,
   desc: String,
   preco: Number
});

module.exports = mongoose.model('Produto' , produtoSchema);