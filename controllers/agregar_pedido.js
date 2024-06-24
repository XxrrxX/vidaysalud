const { response,request } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const Producto = require('../models/productos');
const Pedido = require('../models/pedidos');
const bcryptjs = require('bcryptjs');
const {vjwt} = require('../middlewares/vjwt');


const agregar_pedidoGet = async(req = request, res = response) => {
    console.log("GET /agregar_pedido  estatus 200")
    res.status(200).render('agregar_pedido');
}

const agregar_pedidoPost = async(req = request, res = response) => {
   const { id, token } = req.body;

   if(id.length < 24 || id.length > 24 ){
        console.log("POST /agregar_pedido  error length en ID estatus 203");
        res.status(203).json({msg:"Sesion expirada"});
    }else{
    try{    
    const usuario = await Usuario.findById(id);
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

const agregar_pedidoPut = async(req = request, res = response) => {
    const {fecha_pedido, productos, cantidad_pedido, monto_total, usuario } = req.body;
  //Verifivcar el correo
    const pedido = new Pedido({fecha_pedido ,productos , cantidad_pedido , monto_total, usuario });
    await pedido.save();
    console.log('PUT /Punto de venta productos_venta registrado estatus 203');        
    return res.status(203).json({ msg:'Pedido realizado'});// }

}


module.exports = {
    agregar_pedidoPost,
    agregar_pedidoGet,
    agregar_pedidoPut
}