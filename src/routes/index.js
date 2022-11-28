const { Router } = require('express')

const UsuarioController = require('../controllers/UsuarioController')
const SessaoController = require('../controllers/Login')
const ProdutosController = require('../controllers/ProdutosController')

const rotas = Router()

rotas.get('/', (req, res) => {
   res.send('opaa')
})

rotas.post('/usuarios', UsuarioController.criarUsuario)//criar usuarios
rotas.get('/usuarios', UsuarioController.pegarUsuarios)//pegar usuarios
rotas.get('/usuarios/:usuario_id', UsuarioController.pegarIdUsuario)//listar usuarios especificos

rotas.post('/sessoes', SessaoController.criarSessao)//fazer login

rotas.post('/produtos/:usuario_id', ProdutosController.criarProdutos)//criar produto
rotas.get('/produtos/:usuario_id', ProdutosController.pegarProdutosUsuario)//buscar produtos de usuarios
rotas.patch('/produtos/:usuario_id/:produto_id', ProdutosController.atualizarProdutos)//atualizar produtos
rotas.delete('/produtos/:usuario_id/:produto_id', ProdutosController.deletarProdutos)//deletar produt

rotas.get('/produtos', ProdutosController.pegarProdutos)//listar todos os produtos
rotas.get('/produtos/:produto_id', ProdutosController.pegarIdProduto)//produtos especificos

rotas.post('/carrinho/:usuario_id')//fazer compras
rotas.get('/carrinho/:usuario_id')//pegar todos os carrinhos de usuarios

rotas.get('/carrinho/usuario_id/:carrinho_id')//pegar um carrinho especifico

module.exports = rotas