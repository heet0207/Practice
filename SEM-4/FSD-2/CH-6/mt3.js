express = require('express')
app = express();
path = require('path');

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/',(req,res)=>{
    res.render('first',{name:'Heet'});
})
app.listen(6765);