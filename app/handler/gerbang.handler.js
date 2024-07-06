const service = require("../services/gerbang.service");
const sendResponse = require("../resources/respondApi");

const { validationResult } = require("express-validator");

// getAll function
async function getAll(req, res, next) {
  try {
    const dataGerbang = await service.getAllData(req);
    return res.status(200).send(sendResponse.successGet(dataGerbang));
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const extractedErrors = [];
      errors
        .array()
        .map((err) => extractedErrors.push({ [err.param]: err.msg }));
      return res
        .status(422)
        .send(sendResponse.unprocessableEntity(extractedErrors));
    }
    console.log("ini di handler gerbang");
    const dataGerbang = await service.createData(req.body);
    return res.status(201).send(sendResponse.successCreate(dataGerbang));
  } catch (error) {
    if (error.message == "IdGerbang and IdCabang is already exist") {
      return res
        .status(401)
        .send(sendResponse.unprocessableEntityData(error.message));
    }
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

async function update(req, res, next) {
  try {
    let data = await service.getOneById(req.body.id, req.body.IdCabang);
    if (!data) {
      return res.status(404).send(sendResponse.dataNotFoundException());
    } else {
      // update data gerbang
      let dataUpdate = await service.updateData(
        req.body.id,
        req.body.IdCabang,
        req.body
      );
      return res.status(200).send(sendResponse.successUpdate(dataUpdate));
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

async function destroy(req, res, next) {
  try {
    let data = await service.getOneById(req.body.id, req.body.IdCabang);
    if (!data) {
      return res.status(404).send(sendResponse.dataNotFoundException());
    } else {
      await service.destroyData(req.body.id, req.body.IdCabang);
      return res
        .status(200)
        .send(
          sendResponse.successDeleteGerbang(req.body.id, req.body.IdCabang)
        );
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

module.exports = { getAll, create, update, destroy };
