var express = require('express');
var app = express();
var port = 4114

require('dotenv').config();

var request = require('request');

app.get('/random', function (req, res) {
    console.log('in /random get');
    var options = {
        url: 'https://api.giphy.com/v1/gifs/random?api_key=' + process.env.YOUR_API_KEY + '&tag=&rating=G',
        method: 'GET'
    }

    request(options, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.status(200).send(JSON.parse(body));
    });
});

app.listen(port, function (req, res) {
    console.log('port listeing on: ', port);
});