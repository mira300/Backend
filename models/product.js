const mongoose=require('mongoose');

const Product=mongoose.model('product',{
name:{
    type:String
},
categorie:{
    type:String
},
price:{
    type:Number
},
date:{
    type:Date
},
image:{
    type:String
}

})

module.exports=Product;