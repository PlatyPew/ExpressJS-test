var express = require('express');
var app = express.Router();

/* GET home page. */
app.get('/', function(req, res) {

    var params = req.query;
    var headers = req.headers;

    if (params.name) {
        res.render('about', {
            params: params,
            headers: headers
        });
    } else {
        res.redirect(headers.referer);
    }


});

module.exports = app;
