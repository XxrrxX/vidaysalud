const { response } = require('express');

const registroGet = (req, res = response) => {
    res.render('registro');
}
 

const registroPost =  (req, res = response) => {

     res.status(200).json({"usuario":req.query.usuario,"password":req.query.password});
}


module.exports = {
    registroPost,
    registroGet,
}
