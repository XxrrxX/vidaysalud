const express = require('express');
const cors = require('cors');
class Server {

constructor(){
    this.app = express();
    //rutas de la app
    this.routes();
    this.port = process.env.PORT;
    //middlewares
    this.middlewares();
 

}

middlewares(){
    //cors
    this.app.use(cors());
    //directprio publico
    this.app.use(express.static('public'));
    this.app.set('view engine','hbs');
    
}

routes(){
   
   this.app.get('/home', (req, res) => {
       res.render('home');
     });
   this.app.get('/login', (req, res) => {
       res.send('Bienvenido a login');
     });
   
    this.app.get('/registro', (req, res) => {
        res.render('registro');
    });
    this.app.post('/registro', (req, res) => {
        res.status(201).json(
            {
                ususario:"User1",
                password:"pass1"
            }
        );
    });
    
    }

listen(){
    
 this.app.listen(this.port, () => {
    console.log(`Example app listening on port ${this.port}`);
  });
}

}

module.exports = Server;
