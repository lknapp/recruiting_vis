var express = require('express');
var hires = require('../models/newHires');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    newHiresByDate: hires
  });
});

module.exports = router;
