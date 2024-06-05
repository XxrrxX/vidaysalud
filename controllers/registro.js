const { response } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const registroGet = (req, res = response) => {
    console.log('GET /Registro estatus 200')
    res.render('registro');
}
 

const registroPost = async (req, res = response) => {

              //let datosjson = [{"usuario":req.query.usuario,"password":req.query.password}];

              const {nombre , correo, password , rol } = req.body;
              const usuario = new Usuario({nombre ,correo , password , rol });
                //Verifivcar el correo
                const Existemail = await Usuario.findOne({correo});
                if(Existemail){
                    console.log('POST /registrar El correo ya esta registrado estatus 400');
                    return res.status(400).json({
                        msg:'Este correo ya esta registrado'
                    })
                }
                //Encriptar Contra
                const salt = bcryptjs.genSaltSync(10);
                usuario.password = bcryptjs.hashSync(password, salt );
                //Guardar en la DB


              await usuario.save();
              console.log('POST /registrar exitoso estatus 201');    
              res.status(201).json({usuario});
            
    };
        
    


module.exports = {
    registroPost,
    registroGet,
}