var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport( {
    service: 'gmail',
    secure: false,
    port: 465,
    auth: {
        user: 'helena.dyu251198@gmail.com',
        pass: '2803inna0703kate2511lena'
    },
    tls: {
        rejectUnautorized: false
    }
});


// var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

let mailOptions = {
    from: 'Helena Dyu helena.dyu251198@gmail.com',
    to: 'helena.dyu251198@gmail.com',
    subject: 'Подтверждение входа на портал Totoro',
    text: 'Ваш код подтверждения: 6452',
};

router.post('/sendmail', function (req, res) {


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.response);
    });
})

router.get('/message', function (req, res) {
    res.send('Express RESTful API');
    console.log('Get work!');
})

module.exports = router;