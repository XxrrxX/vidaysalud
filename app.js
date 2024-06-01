const argv = require('yargs').argv;
console.log("Iniciado");
const http = require('http');
http.createServer((req,res )=>{
    console.log(req);
    res.write('hola mundo');
    res.end();
}).listen(5555);
console.log('escuchando en el puerto',5555);
