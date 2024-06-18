const { Router } = require('express');
const { vjwt } = require('../middlewares/vjwt');
const { check } = require('express-validator');
const { ValidarCampos } = require('../middlewares/validar-campos');

const {
    ACTprodGet, 
    ACTprodPOST,
    ACTprodPUT } = require('../controllers/actualizar_productos');
const router = Router();

router.get('/',ACTprodGet);

router.post('/',[ vjwt ],ACTprodPOST);

router.put('/',[
        check('nombre_del_producto','nombre de producto no valido').not().isEmpty(),
        check('cantidad','cantidad no valido requiere una numero').isInt().isLength({min:1}).not().isEmpty(),
        check('Precio_compra','Precio_compra no valido requiere una numero').isInt().isLength({min:1}).not().isEmpty(),
        check('Precio_venta','Precio_venta no valido requiere una numero').isInt().isLength({min:1}).not().isEmpty(),
        ValidarCampos
],ACTprodPUT);

module.exports = router;
