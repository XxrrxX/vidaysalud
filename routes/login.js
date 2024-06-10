const { Router } = require('express');
const {
    loginGet, 
    loginPost } = require('../controllers/login');
const router = Router();

router.get('/',loginGet);
router.post('/',loginPost);

module.exports = router;
