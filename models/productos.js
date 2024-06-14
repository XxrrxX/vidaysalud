const {Schema, model} = require('mongoose');
const { type } = require('os');
const { string } = require('yargs');
const ProductoSchema = Schema({
    nombre_del_producto:{
        type:String,
        required:[true,'El nombre del producto es obligatorio'],
        unique:true
    },
    Descripcion:{
        type:String,
        required:[true,'La descripcion es obligatoria'],
        unique:true
    },
    cantidad:{
        type:Int,
        required:[true,'La  cantidad es obligatoria']
    },
    Precio_compra:{
        type:Int,
        required:[true,'El precio compra es obligatorio']
    },
    Precio_venta:{
        type:Int,
        required:[true,'El precio venta es obligatorio']
    }
});

ProductoSchema.methods.toJSON = function(){
        const {__v,_id, ...producto} = this.toObject();
        producto.uid = _id;
        return producto;
}

module.exports = model('Producto',ProductoSchema);