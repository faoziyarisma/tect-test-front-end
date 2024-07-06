"use strict";
/** @type {import('sequelize-cli').Migration} */
require("dotenv").config();

const table = {
  schema: process.env.NODE_ENV,
  tableName: "master_gerbang",
};
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      IdCabang: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      NamaGerbang: {
        type: Sequelize.STRING,
      },
      NamaCabang: {
        type: Sequelize.STRING,
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
