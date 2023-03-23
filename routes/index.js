var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const randomNumber = Math.random()
  res.render('index', { title: `Your random number is ${randomNumber}` });
});

module.exports = router;
