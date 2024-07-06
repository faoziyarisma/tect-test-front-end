"use strict";
/** @type {import('sequelize-cli').Migration} */
require("dotenv").config();

const table = {
  schema: process.env.NODE_ENV,
  tableName: "master_gerbang",
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(table, [
      {
        id: 1,
        IdCabang: 16,
        NamaGerbang: "Cilacap",
        NamaCabang: "Gedebage Cilacap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        IdCabang: 16,
        NamaGerbang: "Gombong",
        NamaCabang: "Gedebage Cilacap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        IdCabang: 16,
        NamaGerbang: "Kebumen",
        NamaCabang: "Gedebage Cilacap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1,
        IdCabang: 37,
        NamaGerbang: "Sleman",
        NamaCabang: "Jogja Solo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        IdCabang: 37,
        NamaGerbang: "Tempel",
        NamaCabang: "Jogja Solo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Tambahkan data lain sesuai kebutuhan
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(table, null, {});
  },
};
