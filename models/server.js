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
   
    this.app.use('/home',require('../routes/home'));
    this.app.use('/registro',require('../routes/registro'));
 
    }

listen(){
    
 this.app.listen(this.port, () => {
    console.log(`Example app listening on port ${this.port}`);
  });
}

}

module.exports = Server;
