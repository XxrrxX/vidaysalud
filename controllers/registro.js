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
        console.log('Nuevo usuario agregado: Estatus 201');
        
        if(data.length == 0){
            console.log("Sin datos");
          let datosjson = [{"usuario":req.query.usuario,"password":req.query.password}];
            fs.appendFile('./DBjson/Usuarios.json', JSON.stringify(datosjson), function (err) {
                if (err) {
                    console.error('Falló la escritura:', err);
                } else {
                    console.log('Datos escritos correctamente en DBJson '+ JSON.stringify(datosjson));
                }
            });
        }else{
            let datosjson = JSON.parse(data);
            datosjson.push({"usuario":req.query.usuario,"password":req.query.password});
            fs.writeFileSync('./DBjson/Usuarios.json', JSON.stringify(datosjson));
            console.log(datosjson);
        }
        
    });
        res.status(201).render('registro');
    
 // res.status(200).json({"usuario":req.query.usuario,"password":req.query.password});
}


module.exports = {
    registroPost,
    registroGet,
}
