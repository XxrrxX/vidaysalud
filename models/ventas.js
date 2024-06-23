const {Schema, model} = require('mongoose');
const { type } = require('os');
const { string } = require('yargs');
const VentaSchema = Schema({
fecha_venta:{
    type:String,
    required:[true,'fecha obligatorio']
},
productos:[{
    nombre_del_producto:{
        type:String,
        required:[true,'nombre del producto obligatorio']
    },
    cantidad_venta:{
        type:Number,
        required:[true,'cantidad venta obligatorio']
    },
    monto:{
        type:Number,
        required:[true,'monto obligatorio']
    }}],
cantidad_venta:{
    type:Number,
    required:[true,'cantidad venta obligatorio']
},
monto_total:{
    type:Number,
    required:[true,'monto total obligatorio']
},
usuario:{
    type:String,
    required:[true,'usuario obligatorio']
}
}
);

VentaSchema.methods.toJSON = function(){
        const {__v,_id, ...venta} = this.toObject();
        venta.uid = _id;
        return venta;
}

module.exports = model('Ventas',VentaSchema);