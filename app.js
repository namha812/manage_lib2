var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/api/login');
var studentRouter = require('./routes/api/student');
var bookRouter = require('./routes/api/book');
var categoryRouter = require('./routes/api/category');

var messageResponse = require('./utils/message/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/student', studentRouter);
app.use('/book', bookRouter);
app.use('/category', categoryRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log("")
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  if(err.status === 404) {
    res.send(messageResponse.NotFoundError(req, res));
  }else {
    console.log(err)
    res.send(messageResponse.UnexpectedService(req,res));
  }
  
});

module.exports = app;
