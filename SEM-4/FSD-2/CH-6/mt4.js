express = require('express');
app = express();
path = require('path');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));
app.get('/contact', (req, res) => {
res.render('contact');
});
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const mark = req.body.mark;
    res.render('result', { mark: mark });

});
app.listen(6563);