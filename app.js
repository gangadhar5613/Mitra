var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require("./server/db/config")

var indexRouter = require('./server/routes/index');
var userRouter = require('./server/routes/user');
var organizationRouter = require("./server/routes/organization");

// env
require('dotenv').config();

// DB
db.connect();

var app = express();

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//routes
app.use('/api/v1', indexRouter);
app.use('/api/v1', userRouter);
app.use('/api/v1/org', organizationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.json({err})
});

module.exports = app;
