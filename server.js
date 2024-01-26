const express=require('express');
const User = require('./models/user');
const Product=require('./models/product');
require('./config/connect');

const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("server work")
})
//crud user
app.post('/create',(req,res)=>{

data=req.body;
usr=new User(data)
usr.save()
.then(
    (usercreated)=>{
        res.send(usercreated)
    }
)
.catch(
    (error)=>{
        res.status(401).send("user not created")
    }
)

});

app.get('/getusers',async(req,res)=>{
try{
    users=await User.find();
    res.send(users);

}
catch(error){
    res.send(error);

}
})