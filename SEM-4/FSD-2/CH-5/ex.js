

express = require('express');
app = express();
app.use(express.static(__dirname));
session = require('express-session');
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookies: { Maxage : 1000*60*60}
}))

app.get('/save', (req, res) => {
    req.session.fname = req.query.fname;
    req.session.password = req.query.Password;
    res.redirect('/fetch');
});

app.get('/fetch', (req, res) => {
    if (req.session.fname == 'admin' && req.session.password == 'admin@123') {
        res.send('Welcome admin <a href="/destroy">Logout</a>');
    } else {
        res.send('Invalid credentials <a href="/">Login</a>');
    }
});

app.get('/destroy', (req, res) => {
    req.session.destroy();
    res.send('Session destroyed <a href="/">Login again</a>');
});

app.listen(4356, () => {
    console.log('Server is running on port 4356');
});