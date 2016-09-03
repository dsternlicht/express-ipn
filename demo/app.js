var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var ipn = require('express-ipn');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: false}));
app.post('/', ipn.validator(validationComplete));

function validationComplete(err, ipnContent) {
    if (err) {
        console.error("IPN INVALID");
    } else {
        console.log(ipnContent);
    }
}

app.post('/', function(req) {
    console.log(res.ipnValid);
    console.log(res.ipn);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});


module.exports = app;