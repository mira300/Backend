const express=require('express');

const app=express();
require('./config/connect');

app.listen(3000,()=>{
    console.log("server work")
})

app.post('/create',(req,res)=>{



})