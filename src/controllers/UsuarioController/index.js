const Usuario = require('../../models/Usuario')

const UsuarioController = {
   async criarUsuario(req, res) {

      const bodyData = req.body

      try {

         const newUser = await Usuario.create(bodyData)
         return res.status(200).json(newUser)

      } catch (err) {

         return res.status(400).json(err)
      }
   },

   async pegarUsuarios(req, res) {

      try {

         const usuarios = await Usuario.find()
         return res.status(200).json(usuarios)

      } catch (err) {

         return res.status(400).json(err)
      }
   },

   async pegarIdUsuario(req, res) {

      const { usuario_id } = req.params

      try {

         const usuario = await Usuario.findById(usuario_id)
         return res.status(200).json(usuario)

      } catch (err) {

         return res.status(400).json(err)
      }
   },
}

module.exports = UsuarioController