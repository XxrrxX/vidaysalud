const { response,request } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const Producto = require('../models/productos');
const bcryptjs = require('bcryptjs');
const {vjwt} = require('../middlewares/vjwt');


const InventarioGet = async(req = request, res = response) => {
    console.log("GET /Inventario  estatus 200");
    res.status(200).render('Inventario');
}


const InventarioPost = async(req, res = response) => {
    const { id, token } = req.body;
    if(id.length < 24 || id.length > 24 ){
        console.log("POST /Inventario  error length en ID estatus 203");
        res.status(203).json({msg:"Sesion expirada"});
    }else{
    try{    
    const usuario = await Usuario.findById(id);
    if(!usuario || usuario.rol == "USER_ROLE"){
        console.log("POST /Inventario error en ID nulo o no encontrado 203");
        res.status(203).json({msg:"Sesion expirada"});
    }else{
    console.log("ID confirmado");
    console.log('POST /Inventario estatus 200')
    const productos = await Producto.find();
    res.status(200).json({msg:"sucess",usuario:usuario.nombre,rol:usuario.rol,productos});
    }
    }catch(error){
        return res.status(203).json({msg:"Sesion expirada"});
        console.log("POST /Inventario error try catch en ID no encontrado 203");
    }
    
}
}


module.exports = {
    InventarioPost,
    InventarioGet
}