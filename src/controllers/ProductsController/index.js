const Products = require('../../models/Products')

const ProductsController = {
   async criarProdutos(req, res) {

      const bodyData = req.body
      const { usuario_id } = req.params

      try {
         const data = { username: usuario_id, ...bodyData }

         const newProduct = await Products.create(data)
         await newProduct.populate('username')

         return res.status(200).json(newProduct)

      } catch (err) {

         return res.status(400).json(err)
      }
   },

   async pegarProdutosUsuario(req, res) {

      const { usuarios_id } = req.params

      try {

         const produtosDoUsuarios = await Products.find({ username: usuarios_id })
         return res.status(200).json(produtosDoUsuarios)

      } catch (err) {

         return res.status(400).json(err)
      }
   },

   async atualizarProdutos(req, res) {

      const bodyData = req.body
      const { produto_id, usuario_id } = req.params

      try {

         const atualizarProdutos = await Produtos.findByIdAndUpdate(produto_id, bodyData, { new: true })
         return res.status(200).json(atualizarProdutos)

      } catch (err) {

         return res.status(400).json(err)
      }
   },
   async deletarProdutos(req, res) {

      const { produto_id, usuario_id } = req.params

      try {

         const deletarProdutos = await Products.findOneAndDelete(produto_id)
         return res.status(200).json(deletarProdutos)

      } catch (err) {

         return res.status(400).json(err)
      }
   },

   async pegarProdutos(req, res) {

      try {

         const produtos = await Products.find
         return res.status(200).json(produtos)

      } catch (err) {

         return res.status(400).json(err)
      }
   },

   async pegarIdProduto(req, res) {

      const { produto_id } = req.params

      try {

         const produto = await Products.findById(produto_id)
         return res.status(200).json(produto)

      } catch (err) {

         return res.status(400).json(err)
      }
   },
}

module.exports = ProductsController