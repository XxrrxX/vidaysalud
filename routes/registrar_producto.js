const { Router } = require('express');
const {
    registroPost } = require('../controllers/registrar_producto');
const { check } = require('express-validator');
const { ValidarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/',[ 
    check('nombre_del_producto','nombre de producto no valido').not().isEmpty(),
    check('cantidad','cantidad no valido requiere una numero').isInt().isLength({min:1}).not().isEmpty(),
    check('Precio_compra','Precio_compra no valido requiere una numero').isInt().isLength({min:1}).not().isEmpty(),
    check('Precio_venta','Precio_venta no valido requiere una numero').isInt().isLength({min:1}).not().isEmpty(),
    ValidarCampos
],registroPost);

module.exports = router;
