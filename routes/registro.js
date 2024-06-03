const { Router } = require('express');
const {
    registroGet, 
    registroPost } = require('../controllers/registro');

const router = Router();


router.get('/',registroGet);
router.post('/',registroPost);

module.exports = router;
