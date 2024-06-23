const { Router } = require('express');
const { vjwt } = require('../middlewares/vjwt');
const { check } = require('express-validator');
const { ValidarCampos } = require('../middlewares/validar-campos');

const {
    PVGet, 
    PVPOST,
    PVPUT } = require('../controllers/punto_de_venta');
const router = Router();

router.get('/',PVGet);

router.post('/',[ vjwt ],PVPOST);

router.put('/',[
        check('fecha_venta','Fecha venta no valida').not().isEmpty(),
        check('productos','productos no valida').not().isEmpty(),
        check('cantidad_venta','cantidad_venta no valido requiere un numero').isInt().isLength({min:1}).not().isEmpty(),
        check('monto_total','Monto no valido requiere un numero').isInt().isLength({min:1}).not().isEmpty(),
        check('usuario','usuario es requerido').not().isEmpty(),
        ValidarCampos
],PVPUT);

module.exports = router;
