const { Router } = require('express');
const { vjwt } = require('../middlewares/vjwt');

const {
    agregar_pedidoGet, 
    agregar_pedidoPost } = require('../controllers/agregar_pedido');
    
const router = Router();

router.get('/',agregar_pedidoGet);

router.post('/',[ vjwt ],agregar_pedidoPost);

module.exports = router;
