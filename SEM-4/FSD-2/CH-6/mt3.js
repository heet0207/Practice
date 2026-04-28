express = require('express')
app = express();

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('First',{name:'Heet'});
})
app.listen(6765);