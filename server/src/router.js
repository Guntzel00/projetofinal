const express = require('express');

const router = express.Router();
const usuariosController = require('./controllers/usuariosController');
const produtosController = require('./controllers/produtosController');

router.get('/usuarios', usuariosController.getAll);
router.get('/usuarios/:id', usuariosController.retornaUsuario);
router.post('/usuarios', usuariosController.createUsuario);
router.delete('/usuarios/:id', usuariosController.deleteUsuario);
router.put('/usuarios/:id', usuariosController.updateUsuario);

// produtos
router.get('/produtos', produtosController.getAll);
router.get('/produtos/:id', produtosController.retornaProduto);
router.post('/produtos', produtosController.createProduto);
router.delete('/produtos/:id', produtosController.deleteProduto);
router.put('/produtos/:id', produtosController.updateProduto);

module.exports = router;
