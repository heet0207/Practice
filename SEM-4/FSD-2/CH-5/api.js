
//RESTFUL API
// RESTFUL Provide Statelessness Mean New Request Will Not Have Data Of Previous Request.It 's Means Waiter Will Ask Every Tim e Your Order.
// He Will Not Remember Your Order.

// RESTFUL Helps Server Side Not To Store Request Data But Helps Browser To Store Data.



const express = require('express');
const app = express();
const router = express.Router();
const data = [
    {id:101,name:'John',branch:'CSE',city:'abad'},
    {id:102,name:'Jane',branch:'ECE',city:'vadodara'},
    {id:103,name:'Doe',branch:'ME',city:'surat'},
    {id:104,name:'Smith',branch:'CE',city:'rajkot'}
]
router.get("/",(req,res)=>{
    res.set("Content-Type","text/html");
    for (i in data){
        res.write(JSON.stringify(i))
        res.send();
    }
});

router.get("/:a", (req, res) => {
    var current = data.filter((b)=>b.id == res.parmas.id);
    if(current.length > 0 ){
        res.send(current);
    }
    else{
        res.send('Not Found');
    }
});

router.get('/branch/:branch',(req,res)=>{
    var cd = data.filter((d)=> d.branch.toLowercase() == req.params.branch.toLowerCase());
    if(cd.length > 0){
        res.send(cd);
    }
    else{
        res.send('Not Found');
    }
});

module.exports = router;
