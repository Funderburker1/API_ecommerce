const { Router } = require('express')

const UserController = require('../controllers/UserController')
const SessaoController = require('../controllers/Login')
const ProductsController = require('../controllers/ProductsController')
const CartController = require('../controllers/CartController')

const { authentucate } = require('../middlewares')

const rotas = Router()

rotas.get('/', (req, res) => {
   res.send('opaa')
})

rotas.post('/usuarios', UserController.criarUsuario)//criar usuarios
rotas.get('/usuarios', UserController.pegarUsuarios)//pegar usuarios
rotas.get('/usuarios/:usuario_id', UserController.pegarIdUsuario)//listar usuarios especificos

rotas.post('/sessoes', SessaoController.criarSessao)//fazer login

rotas.post('/produtos/:usuario_id', authentucate, ProductsController.criarProdutos)//criar produto
rotas.get('/produtos/:usuario_id', ProductsController.pegarProdutosUsuario)//buscar produtos de usuarios
rotas.patch('/produtos/:usuario_id/:produto_id', ProductsController.atualizarProdutos)//atualizar produtos
rotas.delete('/produtos/:usuario_id/:produto_id', ProductsController.deletarProdutos)//deletar produt

rotas.get('/produtos', ProductsController.pegarProdutos)//listar todos os produtos
rotas.get('/produtos/:produto_id', ProductsController.pegarIdProduto)//produtos especificos

rotas.post('/carrinho/:usuario_id', authentucate, CartController.createCart)//fazer compras
rotas.get('/carrinho/:usuario_id', authentucate, CartController.getUserCarts)//pegar todos os carrinhos de usuarios
rotas.get('/carrinho/usuario_id/:carrinho_id', authentucate, CartController.getCarts)//pegar um carrinho especifico

module.exports = rotas