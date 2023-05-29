

const express=require('express');
const mongoose=require('mongoose');
const Product=require('./models/productModel')
const url=require('./url');


const app=express();




//middleware

app.use(express.json());

//routes
app.get('/',(req,res)=>{
    res.send('home page');
})

//read

app.get('/product/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const products=await Product.findById(id);
        await res.status(200).json(products);
    } catch (error) {
        console.error(error.message);
        res.status(5000).json({message:error.message});
        
    }
})
//create
app.post('/product',async (req,res)=>{
    try {
        
        const product= await Product.create(req.body);
        res.status(200).json(product);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message : error.message});
        
    }
})
//update
app.put('/product/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
        if(!product)
        return res.status(404).json({message:`can find any product related to this data ${id}`})

        const updateProduct= await Product.findById(id);
    
        res.status(200).json(updateProduct);

        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message: error.message});
        
    }
})
//delete a product
app.delete('/product/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id);
        if(!product){
        return res.status(404).json({message:`can find any product related to this data ${id}`})
        }
        res.status(200).json(product);
        


    } catch (error) {
        console.error(error.message);
        res.status(500).json({message: error.message});
        
        
    }
})


mongoose.
connect(url)
.then(()=>{
    console.log('connected');
    app.listen(3000,()=>{
        console.log(`node api run at http://localhost:${3000}`);
    })
}).catch((error)=>{
    console.log(error);
})


