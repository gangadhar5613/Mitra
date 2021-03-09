var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session");
const MongoStore = require("connect-mongo").default;
var db = require("./server/db/config");
var auth = require("./server/middleware/auth");

var indexRouter = require('./server/routes/index');
var userRouter = require('./server/routes/user');
var organizationRouter = require("./server/routes/organization");
var locationRouter = require("./server/routes/location");
var bloodRequestRouter = require("./server/routes/bloodRequest");

// env
require("dotenv").config();

// DB
db.connect();

var app = express();

// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
	session({
		secret: process.env.SECRET_KEY,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 604800, // 7 days
		},
		store: MongoStore.create({
			mongoUrl: process.env.DB_URL,
		}),
	})
);

//routes
app.use("/api/v1", indexRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/org", organizationRouter);
app.use("/api/v1/location", locationRouter);
app.use("/api/v1/blood", auth.verifyUserLoggedIn, bloodRequestRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	console.log(err);
  res.json({ err });
});

module.exports = app;
