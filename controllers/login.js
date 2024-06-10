const { response } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const loginGet = (req, res = response) => {
    console.log('GET /login estatus 200')
    res.render('login');
}


module.exports = {
    loginGet
}