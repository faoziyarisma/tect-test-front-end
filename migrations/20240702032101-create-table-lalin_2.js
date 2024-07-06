"use strict";
/** @type {import('sequelize-cli').Migration} */
require("dotenv").config();

const table = {
  schema: process.env.NODE_ENV,
  tableName: "lalin_2",
};
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      IdCabang: {
        type: Sequelize.INTEGER,
      },
      IdGerbang: {
        type: Sequelize.INTEGER,
      },
      Tanggal: {
        type: Sequelize.DATE,
      },
      Shift: {
        type: Sequelize.INTEGER,
      },
      IdGardu: {
        type: Sequelize.INTEGER,
      },
      Golongan: {
        type: Sequelize.INTEGER,
      },
      IdAsalGerbang: {
        type: Sequelize.INTEGER,
      },
      Tunai: {
        type: Sequelize.INTEGER,
      },
      DinasOpr: {
        type: Sequelize.INTEGER,
      },
      DinasMitra: {
        type: Sequelize.INTEGER,
      },
      DinasKary: {
        type: Sequelize.INTEGER,
      },
      eMandiri: {
        type: Sequelize.INTEGER,
      },
      eBri: {
        type: Sequelize.INTEGER,
      },
      eBni: {
        type: Sequelize.INTEGER,
      },
      eBca: {
        type: Sequelize.INTEGER,
      },
      eNobu: {
        type: Sequelize.INTEGER,
      },
      eDKI: {
        type: Sequelize.INTEGER,
      },
      eMega: {
        type: Sequelize.INTEGER,
      },
      eFlo: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(table);
  },
};
