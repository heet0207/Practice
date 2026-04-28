express = require('express');
app = express();
const multer = require('multer');
app.use(express.static(__dirname));
var store  =multer.diskStorage({
    destination:'LJU',
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});

var upload = multer({storage:store});
// var upload = multer({storage:store,limit:{fileSize:1024}});
// app.post('/upload',upload.single('mypic'),(req,res)=>{
app.post('/upload',upload.array('mypic',5),(req,res)=>{
    const file = req.files;
    for (let i of file) {
        res.write(JSON.stringify(i) + '\n');
    }
    res.send();
});
app.listen(4321);
