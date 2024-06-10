const { response } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const authPost = (req, res = response) => {
    console.log('POST /auth estatus 200')
    res.status(200).json({msg:"POST auth"});
}


module.exports = {
    authPost
}