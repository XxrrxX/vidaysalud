const { Router } = require('express');
const { vjwt } = require('../middlewares/vjwt');

const {
    profileadmGet, 
    profileadmPost } = require('../controllers/profile_adm');
    
const router = Router();

router.get('/',profileadmGet);

router.post('/',[ vjwt ],profileadmPost);

module.exports = router;
