function successGet(data) {
  let dataResult = {
    status: true,
    message: "successfully get data",
    code: 200,
    total: data.length,
    data: data,
  };
  return dataResult;
}

function successCreate(id) {
  let dataResult = {
    status: true,
    message: "successfully create data",
    code: 201,
    id: id,
  };
  return dataResult;
}

function successUpdate(data) {
  let dataResult = {
    status: true,
    message: "successfully update data",
    code: 200,
    data: data,
  };
  return dataResult;
}

function successDeleteGerbang(IdGerbang, IdCabang) {
  let data = {
    status: true,
    message: "successfully delete data",
    code: 200,
    IdGerbang: IdGerbang,
    IdCabang: IdCabang,
  };
  return data;
}

function successLogin(data, message) {
  return {
    status: true,
    message: message,
    code: 200,
    is_logged_in: 1,
    token: data,
  };
}

function unauthorized(message) {
  let dataUnauthorized = {
    status: false,
    message: message,
    code: 401,
  };
  return dataUnauthorized;
}

function forbidden(message) {
  let dataUnauthorized = {
    status: false,
    message: message,
    code: 403,
  };
  return dataUnauthorized;
}

function dataNotFoundException() {
  let dataNotFound = {
    status: false,
    message: "data not found",
    code: 404,
  };
  return dataNotFound;
}

function resourceExist(message) {
  return {
    status: false,
    message: message,
    code: 409,
  };
}

function unprocessableEntity(data) {
  let dataError = {
    status: false,
    message: "unprocessable entity",
    code: 422,
    errors: data,
  };
  return dataError;
}

function unprocessableEntityData(message) {
  let dataError = {
    status: false,
    message: message,
    code: 422,
  };
  return dataError;
}

function internalServerError() {
  let dataError = {
    status: false,
    message: "internal server error, check console logs",
    code: 500,
  };
  return dataError;
}

module.exports = {
  successGet,
  successLogin,
  successCreate,
  successUpdate,
  successDeleteGerbang,
  unauthorized,
  forbidden,
  dataNotFoundException,
  resourceExist,
  unprocessableEntity,
  unprocessableEntityData,
  internalServerError,
};
