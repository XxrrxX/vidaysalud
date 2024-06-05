const { Router } = require('express');
const {
    registroGet, 
    registroPost } = require('../controllers/registro');
const { check } = require('express-validator');

const router = Router();


router.get('/',registroGet);
router.post('/',[ 
    check('nombre','nombre no valido').not().isEmpty(),
    check('correo','correo no valido').isEmail(),
    check('password','password no valido').not().isEmpty(),
    check('rol','rol no valido').not().isEmpty(),
],registroPost);

module.exports = router;
