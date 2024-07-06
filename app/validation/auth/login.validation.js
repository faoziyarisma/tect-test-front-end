const { body } = require("express-validator");

exports.validate = () => {
  return [
    // username
    body("username").not().isEmpty().withMessage("Username wajib diisi"),

    // password
    body("password").not().isEmpty().withMessage("Password wajib diisi"),
  ];
};
