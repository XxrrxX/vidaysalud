const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Producto = require('../models/productos');
 
const registroPost = async (req, res = response) => {
            
  const {nombre_del_producto , cantidad , Precio_compra,Precio_venta } = req.body;
  const producto = new Producto({nombre_del_producto, cantidad , Precio_compra,Precio_venta });
  //Verifivcar el correo
  const Existproducto = await Producto.findOne({nombre_del_producto});
  if(Existproducto){
    const stok = parseInt(Existproducto.cantidad) + parseInt(cantidad);
    const body = req.body;
    body.cantidad = stok;
    const { Precio_compra ,Precio_venta, ...resto} = body;
    const  id  = Existproducto._id;
    console.log(id);
    const producto = await Producto.findByIdAndUpdate(id, resto);
     console.log('POST /registro El producto ya esta registrado estatus 203');
     return res.status(203).json({ msg:'producto actualizado'});
  }else{
  //Guardar en la DB
  await producto.save();
  console.log('POST /registro Nuevo producto exitoso estatus 201');    
  res.status(201).json({msg:'sucess'});
} 
};
        
    


module.exports = {
    registroPost,
}