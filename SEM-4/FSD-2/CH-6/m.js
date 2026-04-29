const express = require('express');
const app = express();
const nm = require('nodemailer');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/response', (req, res) => {
    const email = req.body.email;

    var transporter = nm.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "heetchauhan02@gmail.com",
            pass: "ftersipdkpvreisp"
        }
    });

    var mailOptions = {
        from: "heetchauhan02@gmail.com",
        to: email,
        subject: 'Response Received',
        text: 'Hello',
        html: '<h1>Good Morning</h1>'
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            return res.send("Error sending mail");
        }
        res.send("<h2>Thank You For Your Response</h2>");
    });
});

app.listen(9864, () => {
    console.log("Server running on port 9864");
});