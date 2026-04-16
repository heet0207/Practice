const express = require('express');
const app = express();
const addName = (req,res,next)=>{
    req.name = "John Doe";
    console.log("Name Added");
    next();
}
const addclg = (req,res,next)=>{
    req.clg = "L J University";
    console.log("College Added");
    next();
}
const addmarks = (req,res,next)=>{
    req.marks = 24;
    console.log("Marks Added");
    next();
}

app.get('/',addName,addclg,addmarks,(req,res)=>{
    res.send(`Name: ${req.name}, College: ${req.clg}, Marks: ${req.marks}`);
}).listen(3000,()=>{
    console.log("Server is running on port 3000")});