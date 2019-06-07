const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/api/login');
const studentRouter = require('./routes/api/student');
const bookRouter = require('./routes/api/book');
const categoryRouter = require('./routes/api/category');
const publisherHouseRouter = require('./routes/api/publisherHouse');
const borrowPayRouter = require('./routes/api/borrow_pay');
const accountRouter = require('./routes/api/account');

const messageResponse = require('./utils/message/index');
const app = express();

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
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
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
app.use('/publisherHouse', publisherHouseRouter);
app.use('/borrowPay', borrowPayRouter);
app.use('/account', accountRouter);

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
