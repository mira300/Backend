const express=require('express');
require('./config/connect');
const ProductController=require("./controllers/productController");
const UserController=require("./controllers/userController");

const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("server work")
})

app.use('/product',ProductController);
app.use('/user',UserController);