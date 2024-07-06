"use strict";

/** @type {import('sequelize-cli').Migration} */
require("dotenv").config();
const table = {
  schema: process.env.NODE_ENV,
  tableName: "user",
};
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn(table, "password", {
        type: Sequelize.STRING,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([queryInterface.removeColumn(table, "password")]);
  },
};
