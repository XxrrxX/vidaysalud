const { Router } = require('express');
const {
    loginGet, 
     } = require('../controllers/login');
const router = Router();

router.get('/',loginGet);

module.exports = router;
