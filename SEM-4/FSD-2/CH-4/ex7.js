// Write express Script to get data using get method & display Data on page name "Process-get"

const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded());

app.post('/form',(req, res) => {
    const name = parseInt(req.body.n1);
    const name1 = parseInt(req.body.n2);
    dd = req.body.dropdown;

    switch(dd){
        case "add":
            res.send(`The sum of ${name} and ${name1} is :  ${(name) + (name1)}`);
            break;
        case "sub":
            res.send(`The difference of ${name} and ${name1} is : ${(name) - (name1)}`);
            break;
        case "mul":
            res.send(`The product of ${name} and ${name1} is : ${(name) * (name1)}`);
            break;
        case "div":
            res.send(`The division of ${name} and ${name1} is : ${(name) / (name1)}`);
            break;
            default:
            res.send("please select a valid operation");
    }
});
app.listen(4532, () => {
    console.log("Server is running on port 4532");
});