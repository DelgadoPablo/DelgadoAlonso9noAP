const mongoose = require("mongoose");
const {Schema} =  mongoose;

const TransaccionSchema = new Schema(
    {
        ID:{
            type:Number
        },
        NONBRE:{
            type:String
        },
        IDENTIFICACION:{
            type:Number
        }
    }

);
module.exports = mongoose.model('Transaccion', TransaccionSchema);