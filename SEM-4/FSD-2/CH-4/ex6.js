// Write express Script to get data using get method & display Data on page name "Process-get"

const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded());

app.post('/process-post',(req, res) => {
    res.send(req.body.fname);
});

app.listen(2321, () => {
    console.log("Server is running on port 2321");
});