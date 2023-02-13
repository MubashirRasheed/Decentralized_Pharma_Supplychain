var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const { default: mongoose } = require("mongoose");

var UserRouter = require("./routes/UserRouter");
var ProductRouter = require("./routes/ProductRouter");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/myDB").then(() => {
//   console.log("Successfully Connected to DB");
// });
mongoose.connect("mongodb+srv://dummyuser:Dummyuser123@cluster0.rqdvu3f.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("Successfully Connected to DB");
});

app.use("/user", UserRouter);
app.use("/product", ProductRouter);

app.get("/", (req, res, next) => {
  res.send("Conneced o server");
});
console.log("Sucessfully Started Node App");

// error handler

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// app.use(function (req, res, next) {
//   next(createError(404));
// });

app.all("/", (req, res, next) => {
  res.send("Not Found");
});
module.exports = app;
