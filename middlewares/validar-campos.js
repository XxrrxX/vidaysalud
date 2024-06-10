const { validationResult } = require('express-validator');

const ValidarCampos = (req,res, next) =>{
const errors = validationResult(req);
if(!errors.isEmpty()){
    console.log('POST /registrar Errores en la validacion de datos estatus 203');
    console.log(errors.errors[0].msg);
  return res.status(203).json(errors.errors[0]);
}
 next();
 
}

module.exports = {
    ValidarCampos
}