const { Router } = require('express');
const { vjwt } = require('../middlewares/vjwt');

const {
    homeGet, 
    homePost } = require('../controllers/home');
const router = Router();

router.get('/',homeGet);

router.post('/',homePost);

module.exports = router;
