const service = require("../../services/auth/auth2.service");
const sendResponse = require("../../resources/respondApi");
const { validationResult } = require("express-validator");

async function login(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const extractedErrors = [];
      errors.array().map((err) =>
        extractedErrors.push({
          [err.param]: err.msg,
        })
      );
      return res
        .status(422)
        .send(sendResponse.unprocessableEntity(extractedErrors));
    }
    let message = "Successfully login";
    const userData = await service.login(req.body.username, req.body.password);
    return res.status(200).send(sendResponse.successLogin(userData, message));
  } catch (error) {
    if (error.message == "False Username or Password") {
      return res
        .status(401)
        .send(sendResponse.unauthorized("False Username or Password"));
    }
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

module.exports = {
  login,
};
