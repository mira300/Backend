const express=require('express');
const router=express.Router();
const User = require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

router.post('/register',async(req,res)=>{

    data=req.body;
    usr=new User(data);
    salt=bcrypt.genSaltSync(10);
    cryptedPass= await bcrypt.hashSync(data.password, salt);
    usr.password=cryptedPass;
    usr.save()
    .then(
        (saved)=>{
            res.status(200).send(saved)
        }
    )
    .catch(
        (error)=>{
            res.status(401).send(error)
        }
    )
})


router.post('/login', async(req,res)=>{
data=req.body;
user= await new User.findOne({email:data.email})

if (!user)
{
    res.status(404).send("Email Or password invalid")
}else{
    validPass=bcrypt.compareSync(data.password, user.password)
    if(!validPass){
        res.status(401).send("Email or Password invalid")
    }else{

    }
}

})

    
    
    
    router.get('/get',async(req,res)=>{
    try{
        users=await User.find();
        res.status(200).send(users);
    
    }
    catch(error){
        res.send(error);
    
    }
    });

   
    
    
    router.delete('/delete/:id' ,async(req,res)=>{
    
    try{
    id=req.params.id;
    users=await User.findByIdAndDelete({_id:id});
    res.status(200).send(users);
    }
    catch(error){
    res.send(error);
    }
    });
    
    router.put('/update/:id',async(req,res)=>{
    try{
        id=req.params.id;
        newdata=req.body;
        users= await User.findByIdAndUpdate({_id:id}, newdata)
        res.status(200).send(users);
    }
    catch(error){
    res.send(error);
    }
    })


    module.exports=router;