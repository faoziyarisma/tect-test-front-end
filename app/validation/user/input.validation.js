const { body } = require("express-validator");
const repository = require("../../repositories/user.repository");

exports.validate = (method) => {
  switch (method) {
    case "create":
      return [
        body("name").not().isEmpty().withMessage("Nama wajib diisi"),
        body("npp").not().isEmpty().withMessage("NPP wajib diisi"),
      ];
    case "update":
      return [
        body("name").not().isEmpty().withMessage("Nama wajib diisi"),
        body("npp").not().isEmpty().withMessage("NPP wajib diisi"),
      ];
    case "delete":
      return [body("id").not().isEmpty().withMessage("Id wajib diisi")];
    default:
      return [];
  }
};
