const jwt = require('jsonwebtoken');

const gjwt = (uid = '') =>{
    return new Promise((resolve, reject) => {
        const payload = {uid};
        jwt.sign(payload,process.env.SECRETKEY,{
            expiresIn:'12h'
        },(err,token)=>{
            if(err){
                console.log(err);
                reject('no se pudo generar jwt')
            }else{
                resolve(token);
            }
        });
    });

}

module.exports = {
    gjwt
}