const {Schema, model} = require('mongoose');
const { type } = require('os');
const { string } = require('yargs');
const ProductoSchema = Schema({
    nombre_del_producto:{
        type:String,
        required:[true,'El nombre del producto es obligatorio'],
        unique:true
    },
    cantidad:{
        type:Number,
        required:[true,'La  cantidad es obligatoria']
    },
    Precio_compra:{
        type:Number,
        required:[true,'El precio compra es obligatorio']
    },
    Precio_venta:{
        type:Number,
        required:[true,'El precio venta es obligatorio']
    }
});

ProductoSchema.methods.toJSON = function(){
        const {__v,_id, ...producto} = this.toObject();
        producto.uid = _id;
        return producto;
}

module.exports = model('Productos',ProductoSchema);