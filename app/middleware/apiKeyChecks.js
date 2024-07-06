const dotenv = require("dotenv");
const service = require("../service/requester.service");
const sendResponse = require("../resources/responseApi");
dotenv.config();

const authenticateAdmin = async (req, res, next) => {
  try {
    if (req.api_key.role !== "Admin") {
      const error = new Error("Unauthorized");
      error.statusCode = 403;
      throw error;
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

const checkRequester = async (req, res, next) => {
  try {
    // get x-api-key on header request
    const apiKey = req.headers["x-api-key"];

    // if there is no x-api-key
    if (!apiKey) {
      const error = new Error("Go Find Your Credentials");
      error.statusCode = 401;
      throw error;
    }

    // validate x-api-key
    const validate = await service.getAllData(apiKey);

    // if x-api-key unauthorized
    if (!validate) {
      const error = new Error("Unauthorized");
      error.statusCode = 401;
      throw error;
    }

    req.api_key = validate;
    next();
  } catch (error) {}
};
