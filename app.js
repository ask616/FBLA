var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require("morgan");
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

require('./routes/index.js')(app);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


module.exports = app;
