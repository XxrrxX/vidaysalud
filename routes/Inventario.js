const { Router } = require('express');
const { vjwt } = require('../middlewares/vjwt');

const {
    InventarioGet, 
    InventarioPost } = require('../controllers/Inventario');
const router = Router();

router.get('/',InventarioGet);

router.post('/',[ vjwt ],InventarioPost);

module.exports = router;
