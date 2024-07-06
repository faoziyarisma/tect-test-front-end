"use strict";
const { Model } = require("sequelize");
require("dotenv").config();
module.exports = (sequelize, DataTypes) => {
  class Lalin_2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lalin_2.init(
    {
      IdCabang: {
        type: DataTypes.INTEGER,
      },
      IdGerbang: {
        type: DataTypes.INTEGER,
      },
      Tanggal: {
        type: DataTypes.DATE,
      },
      Shift: {
        type: DataTypes.INTEGER,
      },
      IdGardu: {
        type: DataTypes.INTEGER,
      },
      Golongan: {
        type: DataTypes.INTEGER,
      },
      IdAsalGerbang: {
        type: DataTypes.INTEGER,
      },
      Tunai: {
        type: DataTypes.INTEGER,
      },
      DinasOpr: {
        type: DataTypes.INTEGER,
      },
      DinasMitra: {
        type: DataTypes.INTEGER,
      },
      DinasKary: {
        type: DataTypes.INTEGER,
      },
      eMandiri: {
        type: DataTypes.INTEGER,
      },
      eBri: {
        type: DataTypes.INTEGER,
      },
      eBni: {
        type: DataTypes.INTEGER,
      },
      eBca: {
        type: DataTypes.INTEGER,
      },
      eNobu: {
        type: DataTypes.INTEGER,
      },
      eDKI: {
        type: DataTypes.INTEGER,
      },
      eMega: {
        type: DataTypes.INTEGER,
      },
      eFlo: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Lalin_2",
      tableName: "lalin_2",
      schema: process.env.NODE_ENV,
    }
  );
  return Lalin_2;
};
