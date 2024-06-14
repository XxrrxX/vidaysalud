const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');



const vjwt = async(req = request,res = response, next ) =>{
    const { token } =  req.body;
    console.log('validando token');
    if(!token){
        next();
    }
    try{
        jwt.verify(token,process.env.SECRETKEY);
        next();
        console.log('token valido');
    }catch(error){
        console.log('token no valido');
        res.status(203).json({msg:"token no valido"});
    }
}


module.exports ={
    vjwt
}