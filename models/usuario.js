const {Schema, model} = require('mongoose');
const { type } = require('os');
const { string } = require('yargs');
const UsusarioSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        unique:true
    },
    correo:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'El password es obligatorio']
    },
    rol:{
        type:String,
        required:[true,'El rol es obligatorio'],
        enum:['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }
});

UsusarioSchema.methods.toJSON = function(){
        const {__v, password,_id, ...usuario} = this.toObject();
        usuario.uid = _id;
        return usuario;
}

module.exports = model('Usuarios',UsusarioSchema);