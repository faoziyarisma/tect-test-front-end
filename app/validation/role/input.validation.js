const { body } = require("express-validator");
const repository = require("../../repositories/role.repository");

exports.validate = (method) => {
  switch (method) {
    case "create":
      return [
        body("name").not().isEmpty().withMessage("Nama role wajib diisi"),
        body("description")
          .not()
          .isEmpty()
          .withMessage("Deskripsi wajib diisi"),
      ];
    case "update":
      return [
        body("name").not().isEmpty().withMessage("Nama role wajib diisi"),
        body("description")
          .not()
          .isEmpty()
          .withMessage("Deskripsi wajib diisi"),
      ];
    case "delete":
      return [body("id").not().isEmpty().withMessage("Id is required")];
    default:
      return [];
  }
};
