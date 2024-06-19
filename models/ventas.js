const {Schema, model} = require('mongoose');
const { type } = require('os');
const { string } = require('yargs');
const VentaSchema = Schema({
    Fecha_venta:{
        type:Date,
        required:[true,'La fecha de venta es obligatoria'],
    },
    productos:[{
        nombre_del_producto:{
            type:String    
        },
        cantidad_venta:{
            type:Number,
            required:[true,'La  cantidad es obligatoria']
        },
        monto:{
            type:Number,
            required:[true,'El monto es obligatorio']
        }
    }]
    
});

VentaSchema.methods.toJSON = function(){
        const {__v,_id, ...venta} = this.toObject();
        venta.uid = _id;
        return venta;
}

module.exports = model('Ventas',VentaSchema);