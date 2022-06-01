const produtoController = require('../controllers/produtoController');
const express = require('express');
const router = express.Router();

router.post('/' , produtoController.salvar);
router.get('/' , produtoController.listar);
router.get('/:codigo' , produtoController.buscarPorCodigo);
router.put('/:codigo' , produtoController.atualizar);
router.delete('/:codigo' , produtoController.apagar);

module.exports = router;