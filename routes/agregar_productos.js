const { Router } = require('express');
const { vjwt } = require('../middlewares/vjwt');

const {
    AgpGet, 
    AgpPost } = require('../controllers/agregar_productos');
const router = Router();

router.get('/',AgpGet);

router.post('/',[ vjwt ],AgpPost);

module.exports = router;
