const { body } = require("express-validator");

exports.validate = (method) => {
  switch (method) {
    case "create":
      return [
        body("id").not().isEmpty().withMessage("Id Gerbang wajib diisi"),
        body("NamaGerbang")
          .not()
          .isEmpty()
          .withMessage("Nama Gerbang wajib diisi"),
        body("IdCabang").not().isEmpty().withMessage("Id Cabang wajib diisi"),
        body("NamaCabang")
          .not()
          .isEmpty()
          .withMessage("Nama Cabang wajib diisi"),
      ];
    case "update":
      return [
        body("id").not().isEmpty().withMessage("Id Gerbang wajib diisi"),
        body("NamaGerbang")
          .not()
          .isEmpty()
          .withMessage("Nama Gerbang wajib diisi"),
        body("IdCabang").not().isEmpty().withMessage("Id Cabang wajib diisi"),
        body("NamaCabang")
          .not()
          .isEmpty()
          .withMessage("Nama Cabang wajib diisi"),
      ];
    default:
      return [];
  }
};
