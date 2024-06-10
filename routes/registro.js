const { Router } = require('express');
const {
    registroGet, 
    registroPost } = require('../controllers/registro');
const { check } = require('express-validator');
const { ValidarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/',registroGet);
router.post('/',[ 
    check('nombre','nombre no valido').not().isEmpty(),
    check('correo','correo no valido').isEmail(),
    check('password','password no valido requiere minimo 6 caracteres').isLength({min:6}),
    check('rol','rol no valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    ValidarCampos
],registroPost);

module.exports = router;
