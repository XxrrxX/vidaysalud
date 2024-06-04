const mongoose = require('mongoose');
const  dbConn = async() => {
try{
await mongoose.connect(process.env.MONGODB_CNN,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false

});
    console.log('Conexion a la DB exitosa');
}catch(error){
    console.log(error);
    throw  new Error('Error en la conexiondb');
}


}

module.exports={
    dbConn
}