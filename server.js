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
});


app.delete('/deleteuser/:id' ,async(req,res)=>{

try{
id=req.params.id;
users=await User.findByIdAndDelete({_id:id});
res.send(users);
}
catch(error){
res.send(error);
}
});

app.put('/updateuser/:id',async(req,res)=>{
try{
    id=req.params.id;
    newdata=req.body;
    users= await User.findByIdAndUpdate({_id:id}, newdata)
    res.send(users);
}
catch(error){
res.send(error);
}
})


//crud products
app.post('/createproduct',(req,res)=>{

    data=req.body;
    p=new Product(data)
    p.save()
    .then(
        (productcreated)=>{
            res.send(productcreated)
        }
    )
    .catch(
        (error)=>{
            res.status(401).send("product not created")
        }
    )
    
    });
    
    app.get('/getproduct',async(req,res)=>{
    try{
        products=await Product.find();
        res.send(products);
    
    }
    catch(error){
        res.send(error);
    
    }
    });
    
    
    app.delete('/deleteproduct/:id' ,async(req,res)=>{
    
    try{
    id=req.params.id;
    products=await Product.findByIdAndDelete({_id:id});
    res.send(products);
    }
    catch(error){
    res.send(error);
    }
    });
    
    app.put('/updateproduct/:id',async(req,res)=>{
    try{
        id=req.params.id;
        newdata=req.body;
        products= await Product.findByIdAndUpdate({_id:id}, newdata)
        res.send(products);
    }
    catch(error){
    res.send(error);
    }
    })