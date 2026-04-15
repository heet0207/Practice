// Display a form on home page to enter Username
// send data through post
// server should read the submitted name from request body
// finally,display 'Welcome'

const express = require('express');
const app = express();
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.send(`
    <form action="/form" method="post">
        <input type="text" name="username" placeholder="Enter your name">
        <button type="submit">Submit</button>
    </form>
    `);
});

app.post('/form',(req,res)=>{
    const username = req.body.username;
    res.send(`Welcome, ${username}!`);
}).listen(3002,()=>{
    console.log("Server is running on port 3002")});