const Produtos = require('../../models/Produtos')

const ProdutosController = {
   async criarProdutos(req, res) {

      const bodyData = req.body
      const { usuario_id } = req.params

      try {
         const data = { username: usuario_id, ...bodyData }

         const newProduct = await Produtos.create(data)
         await newProduct.populate('username')

         return res.status(200).json(newProduct)

      } catch (err) {

         return res.status(400).json(Err)
      }
   },

   async pegarProdutosUsuario(req, res) {

      const { usuarios_id } = req.params

      try {

         const produtosDoUsuarios = await Produtos.find({ username: usuarios_id })
         return res.status(200).json(produtosDoUsuarios)

      } catch (err) {

         return res.status(400).json(Err)
      }
   },

   async atualizarProdutos(req, res) {

      const bodyData = req.body
      const { produto_id, usuario_id } = req.params

      try {

         const atualizarProdutos = await Produtos.findByIdAndUpdate(produto_id, bodyData, { new: true })
         return res.status(200).json(atualizarProdutos)

      } catch (err) {

         return res.status(400).json(Err)
      }
   },
   async deletarProdutos(req, res) {

      const { produto_id, usuario_id } = req.params

      try {

         const deletarProdutos = await Produtos.findOneAndDelete(produto_id)
         return res.status(200).json(deletarProdutos)

      } catch (err) {

         return res.status(400).json(Err)
      }
   },
   async pegarProdutos(req, res) {

      try { } catch (err) {
         return res.status(400).json(Err)
      }
   },
   async pegarIdProduto(req, res) {

      try { } catch (err) {
         return res.status(400).json(Err)
      }
   },
}

module.exports = ProdutosController