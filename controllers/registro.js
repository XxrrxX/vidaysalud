const { response } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const registroGet = (req, res = response) => {
    res.render('registro');
}
 

const registroPost = async (req, res = response) => {

              //let datosjson = [{"usuario":req.query.usuario,"password":req.query.password}];

              const {nombre , correo, password , rol } = req.body;
              const usuario = new Usuario({nombre ,correo , password , rol });
                //Verifivcar el correo
                //Encriptar Contra
                const salt = bcryptjs.genSaltSync(10);
                usuario.password = bcryptjs.hashSync(password, salt);
                //Guardar en la DB


              await usuario.save();    
              res.json({usuario});
            
    };
        
    


module.exports = {
    registroPost,
    registroGet,
}