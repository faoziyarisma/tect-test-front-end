const { Lalin_2 } = require("../../models");
const { Op } = require("sequelize");

// async function acquireAllData(req) {
//   return await Lalin_2.findAll();
// }
async function acquireAllData(filter = {}, tanggal = null) {
  let filterAll = {
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    where: {},
  };

  // Pagination options
  if (filter.offset !== undefined) {
    filterAll.offset = filter.offset;
  }
  if (filter.limit !== undefined) {
    filterAll.limit = filter.limit;
  }

  // Filter by Tanggal if provided
  if (tanggal) {
    // Truncate the time component of tanggal
    const truncatedTanggal = new Date(tanggal);
    truncatedTanggal.setUTCHours(0, 0, 0, 0); // Set time to 00:00:00.000

    filterAll.where.Tanggal = {
      [Op.between]: [truncatedTanggal, new Date(tanggal)],
    };
  }

  try {
    const data = await Lalin_2.findAndCountAll(filterAll);
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for higher-level error handling if necessary
  }
}

module.exports = {
  acquireAllData,
};
