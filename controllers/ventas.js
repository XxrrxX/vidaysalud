const { response,request } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const Producto = require('../models/productos');
const Venta = require('../models/ventas');
const bcryptjs = require('bcryptjs');
const {vjwt} = require('../middlewares/vjwt');


const ventasGet = async(req = request, res = response) => {
    console.log("GET /ventas  estatus 200");
    res.status(200).render('ventas');
}


const ventasPost = async(req, res = response) => {
    const { id, token } = req.body;
    if(id.length < 24 || id.length > 24 ){
        console.log("POST /ventas  error length en ID estatus 203");
        res.status(203).json({msg:"Sesion expirada"});
    }else{
    try{    
    const usuario = await Usuario.findById(id);
    if(!usuario || usuario.rol == "USER_ROLE"){
        console.log("POST /Inventario error en ID nulo o no encontrado 203");
        res.status(203).json({msg:"Sesion expirada"});
    }else{
    console.log("ID confirmado");
    console.log('POST /ventas estatus 200')
    const ventas = await Venta.find();
    res.status(200).json({msg:"sucess",usuario:usuario.nombre,rol:usuario.rol,ventas});
    }
    }catch(error){
        return res.status(203).json({msg:"Sesion expirada"});
        console.log("POST /ventas error try catch en ID no encontrado 203");
    }
    
}
}


module.exports = {
    ventasPost,
    ventasGet
}