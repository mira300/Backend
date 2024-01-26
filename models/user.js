const mongoose=require('mongoose');

const User=mongoose.model('user', {
name: {type : String},
lastname: {type : String},
password: {type : Number}

})



module.exports=User;