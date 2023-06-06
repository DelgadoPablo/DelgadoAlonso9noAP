const mongoose  =  require('mongoose');
const { MONGO_URL }=require('../config')

const dbConnection = async ()=>{
    try{
        await mongoose.connect( process.env.MONGO_URL);
        console.log('Base de datos escuchando')
    }
    catch(error){
        console.log(error);
        throw new Error('Error al conectarse con la base de datos')
    }
}
module.exports = dbConnection;
