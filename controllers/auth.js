const { response } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const authPost = async(req, res = response) => {
    const {correo, password} = req.body;
    try{
        //Verificar si existe email
        const usuario = await Usuario.findOne({correo});
        if(!usuario){
            return res.status(203).json({msg:'El correo no esta registrado \n Verifique el correo o registrelo'});
        }
        //Verificar si el usuario esta activo
        if(!usuario.estado){
            return res.status(203).json({msg:'El usuario no esta registrado \n Verifique el usuario o registrelo'});
        }
        //verificar password
        const validpass = bcryptjs.compareSync(password,usuario.password);
        if(!validpass){
            return res.status(203).json({msg:'Password incorrecta \n Verifique el password'});
        }
        //Generar JWT

        console.log('POST /auth estatus 200');
        res.status(200).json({ msg:'sucess'});      
    }catch(error){
        console.log('POST /auth estatus 500');
        console.log(error);
        return res.status(500).json({msg:'A ocurrido un error inesperado hable con el administrador'});
    }
}
module.exports = {
    authPost
}