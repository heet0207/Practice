express = require('express');
app = express();
cp = require('cookie-parser');
app.use(express.static(__dirname))
app.use(cp());
app.get('/form', (req, res) => {
    res.cookie('feedback',req.query,{maxAge: 10000});
    res.set('Content-Type', 'text/html');
    res.send(`<h1>Thank You </h1> <a href="/feedback">Show Feedback</a>`);
});

app.get('/feedback', (req, res) => {
    res.send('Thank You For FeedBack  ' + JSON.stringify(req.cookies.feedback));});
app.listen(5323)