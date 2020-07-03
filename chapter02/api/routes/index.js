var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`You be Full Stackin Bruh`);
});

module.exports = router;
