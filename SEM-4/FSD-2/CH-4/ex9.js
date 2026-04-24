express = require('express');
app = express();
cp = require('cookie-parser');
app.use(cp());
app.get('/', (req, res) => {
    res.cookie('fname', 'John');
    res.cookie('lname','Doe')
    res.cookie('id','2',{expires: new Date(Date.now() + 10000)});
    res.cookie('email','johndoe22@gmail.com',{maxAge: 10000});
    res.clearCookie('fname');
    res.send(req.cookies);

});
app.listen(3002)