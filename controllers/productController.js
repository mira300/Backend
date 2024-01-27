const express=require('express');
const router=express.Router();
const Product=require('../models/product');
const multer=require('multer');

filename='';

const mystorage= multer.diskStorage({
destination:'./uploads' ,
filename:(req,file,redirect)=>{

let date=Date.now();

let fl =date + '.'+file.mimetype.split('/')[1];
redirect(null,fl);
filename=fl;
}

})

//haja bch tekhdem mebin l'appel mta3 requiste mte3i w  lfunction  
const upload=multer({storage: mystorage});

router.post('/create', upload.any('image'),(req,res)=>{

    data=req.body;
    p=new Product(data);
    p.image=filename;
    p.save();
    filename=""

    .then(
        function (productcreated) {
        res.status(200).send(productcreated);
    }
    )
    .catch(
        (error)=>{
            res.status(401).send("product not created")
        }
    )
    
    });
    
    router.get('/get',async(req,res)=>{
    try{
        products=await Product.find();
        res.status(200).send(products);
    
    }
    catch(error){
        res.send(error);
    
    }
    });
    
    
    router.delete('/delete/:id' ,async(req,res)=>{
    
    try{
    id=req.params.id;
    products=await Product.findByIdAndDelete({_id:id});
    res.status(200).send(products);
    }
    catch(error){
    res.send(error);
    }
    });
    
    router.put('/update/:id',async(req,res)=>{
    try{
        id=req.params.id;
        newdata=req.body;
        products= await Product.findByIdAndUpdate({_id:id}, newdata)
        res.status(200).send(products);
    }
    catch(error){
    res.send(error);
    }
    })

    router.get('/get_filtre/:categorie', async (req, res) => {
        try {
            
         categorie = req.params.categorie;
         produitToSearch = await Product.find({ categorie });
      
          if (!produitToSearch) {
            return res.status(404).json({ searchResult: 'No products found for the specified category' });
          }
      
          res.status(200).send(produitToSearch);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });
      

module.exports=router;