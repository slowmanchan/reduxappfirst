var express = require('express');
var router = express.Router();

/* Get Home */
router.get('/', function(req, res, next) {
  res.render('index', {message: 'This should be a list of todos'});
  console.log('todos route');
})

module.exports = router;
