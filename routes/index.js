var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    name: 'Platy',
    desc: 'is narcissistic'
  });
});

module.exports = router;
