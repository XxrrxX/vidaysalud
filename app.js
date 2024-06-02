const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;
//handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
//servir contenido estatico
app.use(express.static('public'));

app.get('/home', function (req, res) {
  res.render('home');
})


app.get('/login', function (req, res) {
    res.send('Bienvenido a login');
  })

app.get('/registro', function (req, res) {
    res.render('registro');
})

app.get('*', function (req, res) {
  res.send('404 | Page not found');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })