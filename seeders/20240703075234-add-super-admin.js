"use strict";
/** @type {import('sequelize-cli').Migration} */
require("dotenv").config();

const table = {
  schema: process.env.NODE_ENV,
  tableName: "user",
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(table, [
      {
        username: "Super Admin",
        password: "password12345", // Gantilah ini jika Anda ingin menggunakan hash
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Tambahkan data lain sesuai kebutuhan
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(table, { username: "Super Admin" }, {});
  },
};
