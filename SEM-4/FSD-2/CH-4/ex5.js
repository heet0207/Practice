// Write express Script to get data using get method & display Data on page name "Process-get"

const express = require('express');
const app = express();
app.use(express.static(__dirname));

app.get('/process-get',(req, res) => {
    res.send(req.query.fname);
});

app.listen(2320, () => {
    console.log("Server is running on port 2320");
});