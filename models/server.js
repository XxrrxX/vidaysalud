const express = require('express');
const cors = require('cors');
const { dbConn } = require('../DB/config');
class Server {

constructor(){
    this.app = express();
    
    this.port = process.env.PORT;
    //conectar a la DB
    this.condb();
    //middlewares
    this.middlewares();
    //rutas de la app
    this.routes();

}

async condb(){
    await  dbConn();
}

middlewares(){
    //cors
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:true}));
    //directprio publico
    this.app.use(express.static('public'));
    this.app.set('view engine','hbs');
   
    
}

routes(){

    this.app.use('/',require('../routes/home'));
    this.app.use('/home',require('../routes/home'));
    this.app.use('/registro',require('../routes/registro'));
    this.app.use('/registrar',require('../routes/registro'));
    this.app.use('/login',require('../routes/login'));
    
}

listen(){
    
 this.app.listen(this.port, () => {
    console.log(`Servidor levantado PORT: ${this.port}`);
  });
}

}

module.exports = Server;
