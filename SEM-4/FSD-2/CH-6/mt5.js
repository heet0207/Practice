express = require('express');
app = express();
path = require('path');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
res.render('contact1');
});
app.post('/submit', (req, res) => {
    const marks1 = req.body.marks1;
    const mark2 = req.body.mark2;
    const mark3 = req.body.mark3;
    const mark4 = req.body.mark4;
    total = parseInt(marks1) + parseInt(mark2) + parseInt(mark3) + parseInt(mark4);
    res.render('result1', { total: total });

});
app.listen(6567);