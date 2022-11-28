const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
   produtos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Produtos'
   }],
   username: {
      type: mongoose.Schema.Types.ObjectId,
      required: 'Usuario'
   },
   endereco: {
      cidade: {
         type: String,
         required: true
      },
      rua: {
         type: String,
         required: true
      },
      numero: {
         type: String,
         required: true
      },
      formaDePagamento: {
         cartao: {
            numero: {
               type: String
            },
            cvc: {
               type: String
            }
         }
      }
   }
})

module.exports = mongoose.model('Carrinho', Schema)