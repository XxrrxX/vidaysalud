const { response,request } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const Producto = require('../models/productos');
const Venta = require('../models/ventas');
const bcryptjs = require('bcryptjs');
const {vjwt} = require('../middlewares/vjwt');
const { body } = require('express-validator');


const PVGet = async(req = request, res = response) => {
    res.status(200).render('punto_de_venta');
}


const PVPOST = async(req, res = response) => {
    const { id, token } = req.body;
    if(id.length < 24 || id.length > 24 ){
        console.log("POST /punto_de_venta  error length en ID estatus 203");
        res.status(203).json({msg:"Sesion expirada"});
    }else{
    try{    
    const usuario = await Usuario.findById(id);
    if(!usuario || usuario.rol == "USER_ROLE"){
        console.log("POST /punto_de_venta error en ID nulo o no encontrado 203");
        res.status(203).json({msg:"Sesion expirada"});
    }else{
    console.log("ID confirmado");
    console.log('POST /punto_de_venta estatus 200')
    const productos = await Producto.find();

    res.status(200).json({msg:"sucess",usuario:usuario.nombre,rol:usuario.rol,productos});
    }
    }catch(error){
        return res.status(203).json({msg:"Sesion expirada"});
        console.log("POST /punto_de_venta error try catch en ID no encontrado 203");
    }
    
}
}

const PVPUT = async(req = request, res = response) => {
    const {fecha_venta, productos, cantidad_venta, monto_total, usuario } = req.body;
  //Verifivcar el correo
  productos.forEach(async function(producto_venta) {
  const {nombre_del_producto, cantidad} = producto_venta;
  const producto = new Producto({nombre_del_producto, cantidad});
  const Existproducto = await Producto.findOne({nombre_del_producto});
  if(Existproducto){
    let dif = parseInt(Existproducto.cantidad) - parseInt(producto_venta.cantidad_venta);
    producto_venta['cantidad'] = dif;
    console.log(producto_venta);
    const { ...resto} = producto_venta;
    const  id  = Existproducto._id;
    console.log(id);
    const producto = await Producto.findByIdAndUpdate(id, resto);
  }    
});
    const venta = new Venta({fecha_venta ,productos , cantidad_venta , monto_total, usuario });
    await venta.save();
    console.log('PUT /Punto de venta productos_venta registrado estatus 203');        
    return res.status(203).json({ msg:'Venta realizada'});// }

}
 
  


module.exports = {
    PVGet,
    PVPOST,
    PVPUT
}