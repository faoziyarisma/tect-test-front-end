const repository = require("../repositories/gerbang.repository");
const { Gerbang } = require("../../models");

async function getAllData(req) {
  let filter = {};
  let response = {};

  filter.limit = req.query.limit ? parseInt(req.query.limit) : 20;
  filter.offset =
    req.query.page && req.query.page !== "1"
      ? (parseInt(req.query.page) - 1) * filter.limit
      : 0;

  let dataJson = await repository.acquireAllData(
    filter,
    req.query.id,
    req.query.IdCabang,
    req.query.NamaGerbang,
    req.query.NamaCabang
  );

  response = {
    count: dataJson.count,
    rows: dataJson,
  };
  return {
    total_pages: Math.ceil(dataJson.count / filter.limit),
    current_page: req.query.page ? parseInt(req.query.page) : 1,
    ...response,
  };
  //   return await repository.acquireAllData(req);
}

async function createData(dataGerbang) {
  const dataExist = await repository.acquireOneById(
    dataGerbang.id,
    dataGerbang.IdCabang
  );
  if (dataExist) {
    throw new Error("IdGerbang and IdCabang is already exist");
  }
  console.log("ini service gerbang");
  return await repository.generate(dataGerbang);
}

async function getOneById(IdGerbang, IdCabang) {
  return await repository.acquireOneById(IdGerbang, IdCabang);
}

async function updateData(IdGerbang, IdCabang, dataGerbang) {
  return await repository.modernize(IdGerbang, IdCabang, dataGerbang);
}

async function destroyData(IdGerbang, IdCabang) {
  return await repository.remove(IdGerbang, IdCabang);
}

module.exports = {
  getAllData,
  createData,
  getOneById,
  updateData,
  destroyData,
};
