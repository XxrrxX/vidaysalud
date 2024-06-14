const { response } = require('express');
const fs = require('fs');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const {vjwt} = require('../middlewares/vjwt');


const homeGet = async(req, res = response) => {
    res.status(200).render('home')
}


const homePost = (req, res = response) => {
    console.log('POST /home estatus 200')
}

module.exports = {
    homePost,
    homeGet
}