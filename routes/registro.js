const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('registro');
});


router.post('/', (req, res) => {
    res.status(201).json(
        {
            ususario:"User1",
            password:"pass1"
        }
    );
});

 


module.exports = router;
