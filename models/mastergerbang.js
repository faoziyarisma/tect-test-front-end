"use strict";
const { Model } = require("sequelize");
require("dotenv").config();
module.exports = (sequelize, DataTypes) => {
  class MasterGerbang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MasterGerbang.init(
    {
      IdCabang: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      NamaGerbang: {
        type: DataTypes.STRING,
      },
      NamaCabang: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "MasterGerbang",
      tableName: "master_gerbang",
      schema: process.env.NODE_ENV,
    }
  );
  return MasterGerbang;
};
