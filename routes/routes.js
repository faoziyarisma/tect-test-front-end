// import utilized library
var express = require("express");
var router = express.Router();
require("express-router-group");

// define auth
const auth = require("../app/handler/auth/auth2.handler.js");

// define validation each instance
const gerbangInputValidation = require("../app/validation/gerbang/input.validation.js");
const loginInputValidation = require("../app/validation/auth/login.validation.js");

// define handler each instance
const gerbangHandler = require("../app/handler/gerbang.handler.js");
const lalinHandler = require("../app/handler/lalin.handler.js");

// api gerbang
router.group("/gerbangs", (router) => {
  router.get("/", gerbangHandler.getAll);
  router.post(
    "/",
    gerbangInputValidation.validate("create"),
    gerbangHandler.create
  );
  router.put(
    "/",
    gerbangInputValidation.validate("update"),
    gerbangHandler.update
  );
  router.delete("/", gerbangHandler.destroy);
});

// api lalin
router.group("/lalins", (router) => {
  router.get("/", lalinHandler.getAll);
});

// auth
router.group("/auth", (router) => {
  router.post("/login", loginInputValidation.validate(), auth.login);
});

// Direct to Home page
router.get("/", function (req, res, next) {
  console.log("Welcome to TCM API Jasa Marga");
  res.send("Welcome to TCM API Jasa Marga");
});

module.exports = router;
