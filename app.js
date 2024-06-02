const express = require('express')
const app = express()
const port = 3131;
//require('hbs');
app.set('view engine','hbs');
//servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home');
})


app.get('/login', function (req, res) {
    res.send('Bienvenido a login');
  })

app.get('/registro', function (req, res) {
  res.sendFile(__dirname+'/public/registro.html');
})

app.get('*', function (req, res) {
  res.send('404 | Page not found');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })