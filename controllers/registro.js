const { response } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const registroGet = (req, res = response) => {
    res.render('registro');
}
 

const registroPost = async (req, res = response) => {

              //let datosjson = [{"usuario":req.query.usuario,"password":req.query.password}];

              const {nombre , password , rol } = req.body;
              const usuario = new Usuario({nombre , password , rol });
              await usuario.save();    
              res.json({usuario});
            
    };
        
    


module.exports = {
    registroPost,
    registroGet,
}