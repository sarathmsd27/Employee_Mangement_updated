const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
    fullname:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    },
    aadharnum:{
        type:Number
    },
    mobnum:{
        type:Number
    }
},
{
    collection:"employee"
});
module.exports=mongoose.model("EmployeeSchema",employeeSchema)