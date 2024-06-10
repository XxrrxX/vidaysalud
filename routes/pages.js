const { Router } = require('express');

const router = Router();



router.app.get('/home', (req, res) => {
    res.render('home');
  });
router.app.get('/login', (req, res) => {
    res.send('Bienvenido a login');
  });

 router.app.get('/registro', (req, res) => {
     res.render('registro');
 });


module.exports = router;
