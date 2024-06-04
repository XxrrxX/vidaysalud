const { response } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const registroGet = (req, res = response) => {
    res.render('registro');
}
 

const registroPost = async (req, res = response) => {

              //let datosjson = [{"usuario":req.query.usuario,"password":req.query.password}];

              const {nombre , correo, password , rol } = req.body;
              const usuario = new Usuario({nombre ,correo , password , rol });
                //Verifivcar el correo
                //Encriptar Contra
                //Guardar en la DB


              await usuario.save();    
              res.json({usuario});
            
    };
        
    


module.exports = {
    registroPost,
    registroGet,
}