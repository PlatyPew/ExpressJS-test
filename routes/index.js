var express = require('express');
var app = express.Router();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', {
    name: 'Platy',
    desc: 'is narcissistic'
  });
});

module.exports = app;
