const middlewares = {
   authentucate(req, res, next) {

      const { authentication } = req.headers
      const { usuario_id } = req.params

      if (!authentication) return res.status(400).json({ message: 'Sem token' })
      if (authentication !== usuario_id) return res.status(400).json({ message: 'não permitido' })

      next()
   }
}

module.exports = middlewares