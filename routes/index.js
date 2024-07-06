var express = require("express");
var router = express.Router();

// Direct to Home page
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Toll Collection Management API Jasa Marga Ver.1.0.0",
  });
});

module.exports = router;
