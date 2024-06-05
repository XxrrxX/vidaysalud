const { response } = require('express');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const Usuario = require('../models/usuario');

const registroGet = (req, res = response) => {
    console.log('GET /Registro estatus 200')
    res.render('registro');
}
 

const registroPost = async (req, res = response) => {
              const errors = validationResult(req.body);
              if(errors.isEmpty()){
                return res.status(203).json({
                    msg:'error2 correo'
                });
              }
              const {nombre , correo, password , rol } = req.body;
              const usuario = new Usuario({nombre ,correo , password , rol });
                //Verifivcar el correo
                const Existemail = await Usuario.findOne({correo});
                if(Existemail){
                    console.log('POST /registrar El correo ya esta registrado estatus 203');
                    return res.status(203).json({
                        msg:'error1 correo'
                    });
                }
                //Encriptar Contra
                
                const salt = bcryptjs.genSaltSync(10);
                usuario.password = bcryptjs.hashSync(password, salt );
                //Guardar en la DB


              await usuario.save();
              console.log('POST /registrar exitoso estatus 201');    
              res.status(201).json({msg:'sucess'});
            
    };
        
    


module.exports = {
    registroPost,
    registroGet,
}