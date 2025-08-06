const { response,request } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const Producto = require('../models/productos');
const bcryptjs = require('bcryptjs');
const {vjwt} = require('../middlewares/vjwt');
const { body } = require('express-validator');


const ACTprodGet = async(req = request, res = response) => {
    res.status(200).render('actualizar_productos');
}


const ACTprodPOST = async(req, res = response) => {
    const { id, token } = req.body;
    if(id.length < 24 || id.length > 24 ){
        console.log("POST /actualizar_productos  error length en ID estatus 203");
        res.status(203).json({msg:"Sesion expirada"});
    }else{
    try{    
    const usuario = await Usuario.findById(id);
    if(!usuario || usuario.rol == "USER_ROLE"){
        console.log("POST /actualizar_productos error en ID nulo o no encontrado 203");
        res.status(203).json({msg:"Sesion expirada"});
    }else{
    console.log("ID confirmado");
    console.log('POST /actualizar_productos estatus 200')
    const productos = await Producto.find();

    res.status(200).json({msg:"sucess",usuario:usuario.nombre,rol:usuario.rol,productos});
    }
    }catch(error){
        return res.status(203).json({msg:"Sesion expirada"});
        console.log("POST /actualizar_productos error try catch en ID no encontrado 203");
    }
    
}
}

const ACTprodPUT = async(req = request, res = response) => {
  const {nombre_del_producto , cantidad , Precio_compra,Precio_venta } = req.body;
  const producto = new Producto({nombre_del_producto, cantidad , Precio_compra,Precio_venta });
  //Verifivcar el correo
  const Existproducto = await Producto.findOne({nombre_del_producto});
  if(Existproducto){
    const body = req.body;
    const { ...resto} = body;
    const  id  = Existproducto._id;
    console.log("prueba");
    console.log(id);
    console.log(Existproducto.cantidad);
    console.log(cantidad);
    let ActCant = parseInt(Existproducto.cantidad) + parseInt(cantidad);

    console.log(ActCant);

    const updateData = {
    nombre_del_producto,
    cantidad: ActCant,
    Precio_compra,
    Precio_venta
    };


    const producto = await Producto.findByIdAndUpdate(id, updateData, { new: true });
     console.log('PUT /registro producto actualizado estatus 203');
     return res.status(203).json({ msg:'producto actualizado'});
  }
}


module.exports = {
    ACTprodGet,
    ACTprodPOST,
    ACTprodPUT
}