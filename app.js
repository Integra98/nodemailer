var express = require('express');
var app = express();
const port = 3000;


var bodyparser = require('body-parser');
var path = require('path');
const route = require('./routes/route');

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});



//bodyparser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api',route);




