const express = require('express');
const app = express();
const b = require('./api');
app.use('/api',b);
app.listen(5452);