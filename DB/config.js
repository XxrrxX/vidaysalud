const mongoose = require('mongoose');
const  dbConn = async() => {
try{
await mongoose.connect(process.env.MONGODB_CNN);
    console.log('Conexion a la DB exitosa');
}catch(error){
    console.log(error);
    throw new Error("Error e la coexion DB")
    
}


}

module.exports={
    dbConn
}