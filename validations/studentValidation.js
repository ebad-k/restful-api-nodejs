const { body } = require("express-validator");

exports.validate = (method) => {
  switch (method) {
    case "createStudent": {
      return [
        body("firstName", "First Name doesn't exists")
          .exists()
          .isString()
          .trim()
          .isAlpha()
          .withMessage("First Name should be alphabetic"),
        body("lastName", "Last Name doesn't exists")
          .exists()
          .isString()
          .trim()
          .isAlpha()
          .withMessage("Last Name should be alphabetic"),

        body("email", "A valid email is required").exists().isEmail().trim(),
        body("rollNo", "Roll no. is required").exists().isString().trim(),
        body("phone", "Phone number is required")
          .exists()
          .isInt()
          .withMessage("A valid phone number is required"),
        body("degree", "Degree is required").exists().isString().trim(),
      ];
    }
  }
};
