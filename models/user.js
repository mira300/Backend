const mongoose=require('mongoose');

const User=mongoose.model('user', {
name: {type : String},
Username: {type : String},
email:{type : String},
password: {type : String},
num: {type : Number}


})



module.exports=User;