const Cart = require('../../models/Cart')

const CartController = {
   async createCart(req, res) {
      const bodyData = req.body
      const { usuario_id } = req.params

      try {
         const createdCart = await await (await Cart.create({ ...bodyData, username: usuario_id })).populate('products')
         await createdCart.populate('products')
         return res.status(200).json(createdCart)

      } catch (err) {
         return res.status(400).json(err)
      }
   },

   async getUserCarts(req, res) {
      const { usuario_id } = req.params

      try {
         const userCarts = await Cart.find({ username: user_id })
         return res.status(200).json(userCarts)

      } catch (err) {

         return res.status(400).json(err)
      }
   },

   async getCarts(req, res) {
      const { user_id, carts_id } = req.params

      try {
         const cart = await Cart.findById(carrinho_id).populate('products')
         return res.status(200).json(cart)

      } catch (err) {

         return res.status(400).json(err)
      }
   }
}

module.exports = CartController