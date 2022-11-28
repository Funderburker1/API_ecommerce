const Usuario = require('../../models/Usuario')

const SessaoController = {

   async criarSessao(req, res) {

      const { username } = req.body

      try {

         const usuario = await Usuario.findById({ username })
         return res.status(200).json(usuario)

      } catch (err) {

         return res.status(400).json(err)
      }
   }
}

module.exports = SessaoController