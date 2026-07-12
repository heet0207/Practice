const express = require('express');
const mg = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mg.connect('mongodb://127.0.0.1:27017/kgr')

const mySchema = new mg.Schema({username:String})
const User = new mg.model("PQR",mySchema)
app.post("/signup",async(req,res)=>{
    try{
        const StudentData = new User({username:req.body.uname})
        await StudentData.save()
        res.send()
    }
    catch(err){
        res.status(400).send(err)
    }
})
app.listen(5001)