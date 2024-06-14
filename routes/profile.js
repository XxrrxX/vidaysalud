const { Router } = require('express');
const { vjwt } = require('../middlewares/vjwt');

const {
    profileGet, 
    profilePost } = require('../controllers/profile');
const router = Router();

router.get('/',profileGet);

router.post('/',[ vjwt ],profilePost);

module.exports = router;
