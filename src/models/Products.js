const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
   nomeProduto: {
      type: String,
      required: true
   },

   descricaoProduto: {
      type: String
   },

   precoProduto: {
      type: Number,
      required: true
   },

   quantidadeProduto: {
      type: Number,
      required: true
   },

   imagemProduto: {
      type: String
   },

   username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   }
})

module.exports = mongoose.model('Products', Schema)