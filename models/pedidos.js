const {Schema, model} = require('mongoose');
const { type } = require('os');
const { string } = require('yargs');
const PedidoSchema = Schema({
fecha_pedido:{
    type:String,
    required:[true,'fecha obligatorio']
},
productos:[{
    nombre_del_producto:{
        type:String,
        required:[true,'nombre del producto obligatorio']
    },
    cantidad_pedido:{
        type:Number,
        required:[true,'cantidad pedido obligatorio']
    },
    monto:{
        type:Number,
        required:[true,'monto obligatorio']
    }}],
cantidad_pedido:{
    type:Number,
    required:[true,'cantidad pedido obligatorio']
},
monto_total:{
    type:Number,
    required:[true,'monto total obligatorio']
},
usuario:{
    type:String,
    required:[true,'usuario obligatorio']
},
etstus:{
    type:Boolean,
    default:false
}
}
);

PedidoSchema.methods.toJSON = function(){
        const {__v,_id, ...pedido} = this.toObject();
        pedido.uid = _id;
        return pedido;
}

module.exports = model('Pedidos',PedidoSchema);