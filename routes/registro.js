const { Router } = require('express');
const {
    registroGet, 
    registroPost } = require('../controllers/registro');
const { check } = require('express-validator');

const router = Router();


router.get('/',registroGet);
router.post('/',[ check('correo','El correo no es valido').isEmail(),],registroPost);

module.exports = router;
