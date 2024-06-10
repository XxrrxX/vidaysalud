const { Router } = require('express');
const {
        authPost } = require('../controllers/auth');
const router = Router();

router.post('/',authPost);

module.exports = router;
