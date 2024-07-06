const repository = require("../repositories/lalin.repository");

async function getAllData(req) {
  let filter = {};
  let response = {};

  filter.limit = req.query.limit ? parseInt(req.query.limit) : 20;
  filter.offset =
    req.query.page && req.query.page !== "1"
      ? (parseInt(req.query.page) - 1) * filter.limit
      : 0;

  let dataJson = await repository.acquireAllData(filter, req.query.tanggal);

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

module.exports = { getAllData };
