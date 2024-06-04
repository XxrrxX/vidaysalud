const { response } = require('express');
const fs = require('fs');
const registroGet = (req, res = response) => {
    res.render('registro');
}
 

const registroPost =  (req, res = response) => {
    
    fs.readFile('./DBjson/Usuarios.json', 'utf8', (err, data) => {
        
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }
        
        if(data.length == 0){
            console.log("Sin datos");
            let datosjson = [{"usuario":req.query.usuario,"password":req.query.password}];
            fs.appendFile('./DBjson/Usuarios.json', JSON.stringify(datosjson), function (err) {
                if (err) {
                    console.error('Falló la escritura:', err);
                } else {
                    console.log('Datos base creada correctamente en DBJson '+ JSON.stringify(datosjson)) + 'Estatus 201';
                    res.status(201).send({ success: true });
                }
            });
        }else{
            const datosjson = JSON.parse(data);
           
            function exUsuario(Usuario) {
                return Usuario.usuario === req.query.usuario;
            }            
            const UsuarioEncontrado = datosjson.find(exUsuario);
            if (UsuarioEncontrado) {
                console.log('Usuario existente estatus 409');
                console.log(datosjson);
                res.status(409).send({ success: false });
            }else{
            datosjson.push({"usuario":req.query.usuario,"password":req.query.password});
            fs.writeFileSync('./DBjson/Usuarios.json', JSON.stringify(datosjson));
            console.log('Nuevo usuario agregado estatus 201');
            console.log(datosjson);
            res.status(201).send({ success: true });
            }
        }
        
    });
        
    
 // res.status(200).json({"usuario":req.query.usuario,"password":req.query.password});
}


module.exports = {
    registroPost,
    registroGet,
}