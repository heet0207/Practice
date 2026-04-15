const express = require('express');
const app = express();
const id  = (req,res,next)=>{
    req.id = 'False';
    if(req.id === 'True'){
        console.log("ID Verified");
    }
    else{
        console.log("Access Denied");
    }
    next();
}


app.get('/class',id,(req,res)=>{
    res.send(`Welcome To The Campus, ID Verified: ${req.id}`);
}).listen(3001,()=>{
    console.log("Server is running on port 3001")});