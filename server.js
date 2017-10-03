var express = require('express');
var app = express();
var port = 4114

require('dotenv').config();

var request = require('request');

app.get('/THING', function(req, res) {
    console.log('in THING get');



});

app.listen(port, function(req, res) {
    console.log('port listeing on: ', port);
});