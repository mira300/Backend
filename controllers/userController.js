const express=require('express');
const router=express.Router();
const User = require('../models/user');


router.post('/create',(req,res)=>{

    data=req.body;
    usr=new User(data)
    usr.save()
    .then(
        (usercreated)=>{
            res.status(200).send(usercreated)
        }
    )
    .catch(
        (error)=>{
            res.status(401).send("user not created")
        }
    )
    
    });
    
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