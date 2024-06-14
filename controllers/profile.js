const { response,request } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const {vjwt} = require('../middlewares/vjwt');


const profileGet = async(req = request, res = response) => {
    res.status(200).render('profile');
}


const profilePost = async(req, res = response) => {
    const { id, token } = req.body;
    if(id.length < 24 || id.length > 24 ){
        console.log("POST /profile error length en ID estatus 203");
        res.status(203).json({msg:"Sesion expirada"});
    }else{
    try{    
    const usuario = await Usuario.findById(id);
    if(!usuario){
        console.log("POST /profile error en ID nulo o no encontrado 203");
        res.status(203).json({msg:"Sesion expirada"});
    }else{
    console.log("ID confirmado");
    console.log('POST /profile estatus 200')
    res.status(200).json({msg:"sucess",usuario:usuario.nombre,rol:usuario.rol});
    }
    }catch(error){
        return res.status(203).json({msg:"Sesion expirada"});
        console.log("POST /profile error try catch en ID no encontrado 203");
    }
    
}
}


module.exports = {
    profilePost,
    profileGet
}