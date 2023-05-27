const { log } = require('console');
const express=require('express');

const app=express();

//routes
app.get('/',(req,res)=>{
    res.send('home page');
})

app.listen(3000,()=>{
    console.log(`node api run at http://localhost:${3000}`);
})