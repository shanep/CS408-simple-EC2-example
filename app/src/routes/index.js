var express = require('express');
var router = express.Router();

/* GET home (landing) page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Full Stack Starter Code' });
});

router.get('/lab1', function(req, res, next) {
  res.render('lab1', { title: 'Lab 1 Page' });
});

module.exports = router;
