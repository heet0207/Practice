express = require('express');
app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/in.html');
});

app.post('/calc',(req,res)=>{
    let name = req.body.name;
    let m1 = parseInt(req.body.m1);
    let m2 = parseInt(req.body.m2);

    let dd = req.body.dropdown;

    switch(dd){
        case "add":
            res.send(`The sum of ${m1} and ${m2} is :  ${(m1) + (m2)}`);
            break;
        case "sub":
            res.send(`The difference of ${m1} and ${m2} is : ${(m1) - (m2)}`);
            break;
        case "mul":
            res.send(`The product of ${m1} and ${m2} is : ${(m1) * (m2)}`);
            break;
        case "div":
            res.send(`The division of ${m1} and ${m2} is : ${(m1) / (m2)}`);
            break;
            default:
            res.send("please select a valid operation");
    }
})
app.listen(4567, () => {
    console.log("Server is running on port 4567");
});