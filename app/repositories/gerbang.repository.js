const { MasterGerbang } = require("../../models");
const { Op } = require("sequelize");
async function acquireAllData(
  filter = {},
  id = null,
  IdCabang = null,
  NamaGerbang = null,
  NamaCabang = null
) {
  let filterAll = {
    attributes: ["id", "IdCabang", "NamaGerbang", "NamaCabang"],
  };
  if (filter.offset !== undefined) {
    filterAll.offset = filter.offset;
  }
  if (filter.limit !== undefined) {
    filterAll.limit = filter.limit;
  }
  filterAll.where = {};
  // filter data gerbang according to id (id gerbang) and id cabang
  if (id && IdCabang) {
    filterAll.where.id = id;
    filterAll.where.IdCabang = IdCabang;
  }

  // filter data gerbang according to nama gerbang
  if (NamaGerbang) {
    filterAll.where.NamaGerbang = {
      [Op.iLike]: `%${NamaGerbang}%`,
    };
  }

  // filter data gerbang according to nama cabang
  if (NamaCabang) {
    filterAll.where.NamaCabang = {
      [Op.iLike]: `%${NamaCabang}%`,
    };
  }
  try {
    const data = await MasterGerbang.findAndCountAll(filterAll);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function generate(dataGerbang) {
  try {
    return await MasterGerbang.create(dataGerbang);
  } catch (error) {
    console.error(error);
  }
}

async function acquireOneById(IdGerbang, IdCabang) {
  try {
    const data = await MasterGerbang.findOne({
      where: {
        id: IdGerbang,
        IdCabang: IdCabang,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function modernize(IdGerbang, IdCabang, dataGerbang) {
  try {
    return await MasterGerbang.update(dataGerbang, {
      where: {
        id: IdGerbang,
        IdCabang: IdCabang,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

async function remove(IdGerbang, IdCabang) {
  try {
    return await MasterGerbang.destroy({
      where: {
        id: IdGerbang,
        IdCabang: IdCabang,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  acquireAllData,
  generate,
  acquireOneById,
  modernize,
  remove,
};
