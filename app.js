// Module dependencies.

var express = require('express');
var connect = require('connect');

var routes = require('./routes');
var geocodes = require('./routes/geocodes');

var http = require('http');
var path = require('path');
var connectTimeout = require('connect-timeout');

var app = express();

app.set('port', process.env.PORT || 3003);
app.use(connectTimeout({ time: 3000 }));
app.use(app.router);

//app.use(express['static'](path.join(__dirname, '/public')));
app.use(express.static(__dirname + '/public'));
console.log('dirname: ', __dirname)
app.set('views', __dirname + '/views');
console.log('dirname: ', __dirname + '/views');
app.set('view engine', 'jade'); //extension of views



app.get('/', routes.index);
app.get('/location/:ip', geocodes.findByIP);
app.get('/location/:ip/:stat', geocodes.findStat);


app.listen(app.get('port'), function () {
  'use strict';
  console.log('Express server listening on port ' + app.get('port'));
});
