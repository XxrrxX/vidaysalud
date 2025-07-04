const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const registroGet = (req, res = response) => {
    console.log('GET /Registro estatus 200')
    res.render('registro');
}
 

const registroPost = async (req, res = response) => {
            
  const {nombre , correo, password , rol } = req.body;
  const usuario = new Usuario({nombre ,correo , password , rol });
  //Verifivcar el correo
  const Existemail = await Usuario.findOne({correo});
  if(Existemail){
     console.log('POST /registrar El correo ya esta registrado estatus 203');
     return res.status(203).json({ msg:'correo duplicado'});
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