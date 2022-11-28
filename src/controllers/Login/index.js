const User = require('../../models/User')

const SessaoController = {

   async criarSessao(req, res) {

      const { username } = req.body

      try {

         const usuario = await User.findById({ username })
         return res.status(200).json(usuario)

      } catch (err) {

         return res.status(400).json(err)
      }
   }
}

module.exports = SessaoController