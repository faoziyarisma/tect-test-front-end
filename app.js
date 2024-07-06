// Define utilized module
const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const timeout = require("connect-timeout");
const logger = require("morgan");

// Define utilized path
const indexRouter = require("./routes/index");
const routes = require("./routes/routes");
const sendResponse = require("./app/resources/respondApi");

// Initialize application
const app = express();
app.use(cors());
// set timeout
app.use(timeout("5000s"));
//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "deafult-src 'self';");
  res.setHeader("X-Frame-Options", "SAMEORIGIN always;");
  next();
});

app.use(
  express.json({
    limit: "50mb",
  })
);

// set log
app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// define routes
app.use("/", indexRouter);
app.use("/api", routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;

  if (error.message == "Not Found") {
    return next(createError(404));
  }

  if (status == 422) {
    return res
      .status(status)
      .send(sendResponse.unprocessableEntityFile(error.message));
  }

  if (status == 403) {
    return res.status(status).send(sendResponse.forbidden(error.message));
  }

  if (status == 404) {
    return res
      .status(status)
      .send(sendResponse.dataNotFoundException(error.message));
  }

  if (status == 409) {
    return res.status(status).send(sendResponse.resourceExist(error.message));
  }

  if (status == 401) {
    return res.status(status).send(sendResponse.unauthorized(error.message));
  }

  return res.status(status).send(sendResponse.internalServerError());
});

// initialize server
const server = require("http").Server(app);

module.exports = {
  app,
  server,
};
