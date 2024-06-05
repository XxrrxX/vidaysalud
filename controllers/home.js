const { response } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const homeGet = (req, res = response) => {
    console.log('GET /home estatus 200')
    res.render('home');
}


const homePost = (req, res = response) => {
    console.log('POST /home estatus 200')
}

module.exports = {
    homePost,
    homeGet,
}