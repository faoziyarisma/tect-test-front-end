const service = require("../services/lalin.service");
const sendResponse = require("../resources/respondApi");
const { validationResult } = require("express-validator");

async function getAll(req, res, next) {
  try {
    const dataLalin = await service.getAllData(req);
    return res.status(200).send(sendResponse.successGet(dataLalin));
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

module.exports = { getAll };
