const { Router } = require('express');
const {authPost } = require('../controllers/auth');
const { check } = require('express-validator');
const { ValidarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/',[
        check('correo','El correo es obligatorio').isEmail(),
        check('password','El password es obligatorio').not().isEmpty(),
        ValidarCampos
],authPost);

module.exports = router;
