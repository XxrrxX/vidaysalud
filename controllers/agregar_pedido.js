const { response,request } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const {vjwt} = require('../middlewares/vjwt');


const agregar_pedidoGet = async(req = request, res = response) => {
    console.log("GET /agregar_pedido  estatus 200")
    res.status(200).render('agregar_pedido');
}

const agregar_pedidoPost = async(req = request, res = response) => {
    
   const { id, token } = req.body;
   console.log(id.length);
   if(id.length < 24 || id.length > 24 ){
        console.log("POST /agregar_pedido  error length en ID estatus 203");
        res.status(203).json({msg:"Sesion expirada"});
    }else{
    try{    
    const usuario = await Usuario.findById(id);
    console.log(usuario);
    if(!usuario){
        console.log("POST /agregar_pedido error en ID nulo o no encontrado 203");
        res.status(203).json({msg:"Sesion expirada"});
    }else{
    console.log("ID confirmado");
    console.log('POST /agregar_pedido estatus 200')
    const productos = await Producto.find();
    res.status(200).json({msg:"sucess",usuario:usuario.nombre,rol:usuario.rol,productos});
    }
    }catch(error){
        return res.status(203).json({msg:"Sesion expirada"});
        console.log("POST /agregar_pedido error try catch en ID no encontrado 203");
    }
   
    }
}


module.exports = {
    agregar_pedidoPost,
    agregar_pedidoGet
}