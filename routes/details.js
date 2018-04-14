var express = require('express');
var app = express.Router();

app.post('/', function(req, res) {
    res.render('details', {
       params: req.body,
       headers: req.headers
    });
});

module.exports = app;
