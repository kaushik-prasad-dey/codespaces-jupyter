var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cons = require('consolidate');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*view engine setup*/
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
/*view engine setup*/

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
