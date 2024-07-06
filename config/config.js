require("dotenv").config();

const environments = {
  public: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: process.env.DB_PORT,
    migrationStorageTableSchema: "public",
    pool: {
      max: 1000000,
      min: 0,
      acquire: 3000000,
      idle: 100,
    },
  },
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: process.env.DB_PORT,
    migrationStorageTableSchema: "public",
    pool: {
      max: 1000000,
      min: 0,
      acquire: 3000000,
      idle: 100,
    },
  },
  // tambahkan konfigurasi lainnya jika ada
};

const environment = process.env.NODE_ENV || "development";
module.exports = environments[environment] || environments["development"];
// require("dotenv").config();

// module.exports = {
//   development: {
//     username: process.env.POSTGRES_USER,
//     password: process.env.POSTGRES_PASSWORD,
//     database: process.env.POSTGRES_DB,
//     host: process.env.POSTGRES_HOST,
//     port: process.env.POSTGRES_PORT,
//     dialect: "postgres",
//   },
//   // Other environments (e.g., test, production) can be configured similarly
// };
