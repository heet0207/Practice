

express = require('express');
app = express();
app.use(express.static(__dirname));

app.get('/save', (req, res) => {
    req.session.fname = req.query.fname;
    req.session.password = req.query.Password;
    res.redirect('/fetch');
});

app.get('/fetch', (req, res) => {
    if (req.session.username == 'admin' && req.session.password == 'admin@123') {
        res.send('Welcome admin <a href="/destroy">Logout</a>');
    } else {
        res.send('Invalid credentials <a href="/">Login</a>');
    }
});

app.get('/destroy', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(4356, () => {
    console.log('Server is running on port 4356');
});