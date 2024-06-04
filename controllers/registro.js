const { response } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const registroGet = (req, res = response) => {
    res.render('registro');
}
 

const registroPost = async (req, res = response) => {

              //let datosjson = [{"usuario":req.query.usuario,"password":req.query.password}];

              const body = req.body;
              const usuario = new Usuario(body);
              await usuario.save();    
              res.json({msg:'usuario post',usuario});
            
    };
        
    


module.exports = {
    registroPost,
    registroGet,
}