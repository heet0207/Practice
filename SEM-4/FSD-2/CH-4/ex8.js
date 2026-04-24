const express = require('express');
const app = express();
app.use(express.static(__dirname));

app.get('/form',(req, res) => {
    const name = req.query.fname;
    const email = req.query.email;
    const subscribe = req.query.subscribe;

    if(subscribe === "on"){
        res.send(`Welcome ${name} <br> email :${email}. <br> Thank you <br> <a href="/in3.html">Go to Home Page</a>`);
    } else {
        res.send(`Welcome ${name} <br> email :  ${email}. <br>  Subscribe Now <br> <a href="/in3.html">Subscribe Now</a>`);
    }
});
app.listen(4234, () => {
    console.log("Server is running on port 4234");
});