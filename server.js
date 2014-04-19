//server stuff
var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipe');


app.use(express.json());
app.use(express.urlencoded());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.static('public'));


require('./app/routes/routes.js')(app);
module.exports = app;
