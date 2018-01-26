var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var todosApi = require('./routes/todosApi');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/todos/', todosApi);

app.use(function(req, res, next) {
  var err = new Error('not found meng');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
