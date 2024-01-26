const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Tayaradb')

.then(
    ()=>{
        console.log("connected");
    }
)
.catch(
    ()=>{
        console.log('erreur');
    }
)
module.exports=mongoose;