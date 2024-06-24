const { Router } = require('express');
const { vjwt } = require('../middlewares/vjwt');

const {
    ventasGet, 
    ventasPost } = require('../controllers/ventas');
const router = Router();

router.get('/',ventasGet);

router.post('/',[ vjwt ],ventasPost);

module.exports = router;
